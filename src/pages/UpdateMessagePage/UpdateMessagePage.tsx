import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { RootState } from "../../redux/store";
import { updateMessageThunk } from "../../redux/thunks/messagesThunks";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 200px;

  p {
    color: white;
    font-size: 30px;
    margin-bottom: 30px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Text = styled.textarea`
  background-color: rgba(237, 1, 127, 1);
  border: none;
  color: white;
  padding: 10px;
  font-size: 20px;
  border-radius: 20px;
  height: 150px;
  margin-bottom: 30px;
`;

const Button = styled.button`
  width: 80px;
  background: rgba(94, 100, 255, 1);
  border-radius: 15.5px;
  border: none;
  color: white;
  width: 100px;
  height: 50px;
  font-size: 20px;
`;

const UpdateMessagePage = (): JSX.Element => {
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const messages = useSelector((state: RootState) => state.messages);

  const messageToUpdate = messages.find((message) => message.id === params.id);

  const initialData = {
    text: messageToUpdate?.text as string,
    date: messageToUpdate?.date as string,
    sender: messageToUpdate?.sender as string,
    recipient: messageToUpdate?.recipient as string,
    id: messageToUpdate?.id as string,
  };

  const [formData, setFormData] = useState(initialData);

  const handleChange = (event: any) => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };

  const onSubmit = (event: any) => {
    event.preventDefault();
    dispatch(updateMessageThunk(formData, navigate));
  };

  return (
    <PageContainer>
      <p>Edit the message</p>
      <Form onSubmit={onSubmit} autoComplete="off" noValidate>
        <Text
          name="text"
          id="text"
          value={formData.text}
          onChange={handleChange}
        />
        <Button className="form_button" type="submit">
          Update
        </Button>
      </Form>
    </PageContainer>
  );
};

export default UpdateMessagePage;
