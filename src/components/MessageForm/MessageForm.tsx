import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { createMessageThunk } from "../../redux/thunks/messagesThunks/messagesThunks";

const Form = styled.form`
  display: flex;
  justify-content: center;

  .form_button {
    color: gray;
    border: none;
    cursor: pointer;
    font-size: 20px;
    border-radius: 0 20px 20px 0;
    background: white;
  }

  .form_button:hover {
    font-size: 30px;
  }
`;

const Border = styled.div`
  border: 2px solid grey;
  border-radius: 100px;
  height: 50px;
  display: flex;
  background-color: white;
  align-items: center;
`;

const Input = styled.input`
  width: 250px;
  height: 35px;
  border-radius: 20px 0 0 20px;
  border: none;
`;

const MessageForm = (): JSX.Element => {
  const dispatch = useDispatch();
  const initialData = {
    text: "",
    id: "",
  };
  const form = useRef(null);
  const [formData, setFormData] = useState(initialData);

  const handleChange = (event: any) => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };

  const onSubmit = (event: any) => {
    event.preventDefault();
    dispatch(createMessageThunk(formData));
    resetForm();
  };

  const resetForm = () => {
    setFormData(initialData);
  };

  return (
    <Form onSubmit={onSubmit} autoComplete="off" noValidate ref={form}>
      <Border>
        <Input
          name="text"
          type="text"
          id="text"
          placeholder="Message..."
          value={formData.text}
          onChange={handleChange}
        />
        <button className="form_button" type="submit">
          <FontAwesomeIcon className="send_icon" icon={faPaperPlane} />
        </button>
      </Border>
    </Form>
  );
};

export default MessageForm;
