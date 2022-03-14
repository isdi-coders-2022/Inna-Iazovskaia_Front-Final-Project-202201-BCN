import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import MessageCard from "../../components/Message/MessageCard";
import MessageForm from "../../components/MessageForm/MessageForm";
import Navigation from "../../components/Navigation/Navigation";
import { RootState } from "../../rudux/store";
import {
  deleteMessageThunk,
  loadMessagesThunk,
} from "../../rudux/thunks/messagesThunks";

const Header = styled.header`
  width: 100vw;
  height: 18vh;
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    color: white;
    margin-left: 15px;
    font-size: 25px;
  }
`;

const HeaderImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
`;

const MessagesContainer = styled.section`
  display: flex;
  flex-direction: column;
`;

const MessagesPage = (): JSX.Element => {
  const messages = useSelector((state: RootState) => state.messages);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadMessagesThunk);
  }, [dispatch]);

  const deleteMessage = (id: string) => {
    dispatch(deleteMessageThunk(id));
  };

  return (
    <>
      <Header>
        <HeaderImage src="images/pexels-photo-2613260.jpeg" alt="girl photo" />
        <p>Selia</p>
      </Header>
      <MessagesContainer>
        <ul>
          {messages.map((message) => (
            <MessageCard
              message={message}
              key={message.id}
              actionOnClick={() => {
                deleteMessage(message.id);
              }}
            />
          ))}
        </ul>
      </MessagesContainer>
      <MessageForm />
      <Navigation />
    </>
  );
};

export default MessagesPage;
