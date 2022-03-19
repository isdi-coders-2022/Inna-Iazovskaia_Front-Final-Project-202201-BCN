import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { RootState } from "../../redux/store";
import {
  loadCurrentMessageThunk,
  updateMessageThunk,
} from "../../redux/thunks/messagesThunks/messagesThunks";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 35px;

  @media (min-width: 600px) {
    padding-top: 95px;
  }

  h3 {
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
  width: 80vw;
  height: 300px;
  margin-bottom: 30px;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 0;
  }

  @media (min-width: 600px) {
    width: 300px;
  }
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
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const messageToUpdate = useSelector((state: RootState) => state.message);

  useEffect(() => {
    dispatch(loadCurrentMessageThunk(id as string));
  }, [dispatch, id]);

  const initialData = {
    text: messageToUpdate.text,
    date: messageToUpdate.date,
    sender: messageToUpdate.sender,
    recipient: messageToUpdate.recipient,
    id: messageToUpdate.id,
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
      <h3>Edit the message</h3>
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
