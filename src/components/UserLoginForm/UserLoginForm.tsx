import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { userLoginThunk } from "../../redux/thunks/usersThunks/usersThunks";
import LoginRegisterButton from "../LoginRegisterButton/LoginRegisterButton";

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 80%;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;

  .button-login {
    margin-top: 70px;
    margin-bottom: 10px;
  }
`;

const InputUserData = styled.input`
  border-radius: 10px;
  height: 45px;
  border-style: solid;
  border-width: 1px;
  border-color: rgba(156, 166, 255, 1);
  padding: 8px;
  margin-bottom: 10px;
  background-color: black;
  color: white;
  font-size: 15px;
  margin-bottom: 30px;
`;

const UserLoginForm = (): JSX.Element => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const initialData = {
    username: "",
    password: "",
    loggedIn: false,
  };
  const form = useRef(null);
  const [formData, setFormData] = useState(initialData);

  const handleChange = (event: any) => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };

  const onSubmit = (event: any) => {
    event.preventDefault();
    dispatch(userLoginThunk(formData, navigate));
    resetForm();
  };

  const resetForm = () => {
    setFormData(initialData);
  };

  const isFilled = formData.username !== "" && formData.password !== "";

  return (
    <FormContainer>
      <Form onSubmit={onSubmit} autoComplete="off" noValidate ref={form}>
        <InputUserData
          name="username"
          type="username"
          id="username"
          placeholder="username"
          value={formData.username}
          onChange={handleChange}
        />
        <InputUserData
          name="password"
          type="password"
          id="password"
          placeholder="password"
          value={formData.password}
          onChange={handleChange}
        />
        <LoginRegisterButton
          type="submit"
          text="Log in"
          className={isFilled ? "button-login" : "button-login inactive"}
          disabled={!isFilled}
        />
      </Form>
    </FormContainer>
  );
};

export default UserLoginForm;
