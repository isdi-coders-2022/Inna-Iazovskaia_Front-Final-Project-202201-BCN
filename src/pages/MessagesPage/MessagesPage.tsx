import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Loader from "../../components/Loader/Loader";
import MessageCard from "../../components/Message/MessageCard";
import MessageForm from "../../components/MessageForm/MessageForm";
import { RootState } from "../../redux/store";
import {
  deleteMessageThunk,
  loadMessagesThunk,
} from "../../redux/thunks/messagesThunks";

const PageContainer = styled.div`
  @media (min-width: 600px) {
    padding-top: 95px;
  }
`;

const ChatContainer = styled.div`
  padding-top: 20vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 0;
  }
  height: 440px;
`;

const ChatHeader = styled.div`
  padding: 10px;
  position: fixed;
  margin-top: 0;
  background-color: black;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;

  p {
    color: white;
    margin-left: 15px;
    font-size: 25px;
  }

  @media (min-width: 600px) {
    justify-content: center;
  }
`;

const HeaderImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
`;

const ChatBody = styled.section`
  display: flex;
  flex-direction: column;

  ul {
    padding: 0;
  }
`;

const ChatFooter = styled.section``;

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
    <PageContainer>
      <ChatHeader>
        <HeaderImage src="images/pexels-photo-2613260.jpeg" alt="girl photo" />
        <p>Selia</p>
      </ChatHeader>
      <ChatContainer>
        {!messages.length && <Loader />}
        <ChatBody>
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
        </ChatBody>
      </ChatContainer>
      <ChatFooter>
        <MessageForm />
      </ChatFooter>
    </PageContainer>
  );
};

export default MessagesPage;
