import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { createMessageThunk } from "../../rudux/thunks/messagesThunks";

const Form = styled.form`
  display: flex;
  justify-content: center;
`;

const Input = styled.input`
  width: 315px;
  height: 35px;
  border-radius: 20px;
`;

const MessageForm = (): JSX.Element => {
  const dispatch = useDispatch();
  const initialData = {
    date: "",
    text: "",
    sender: "",
    recipient: "",
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
      <Input
        name="text"
        type="text"
        id="text"
        placeholder="Message"
        value={formData.text}
        onChange={handleChange}
      />
    </Form>
  );
};

export default MessageForm;
