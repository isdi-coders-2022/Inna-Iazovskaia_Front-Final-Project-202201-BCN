import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Loader from "../../components/Loader/Loader";
import MessageCard from "../../components/MessageCard/MessageCard";
import MessageForm from "../../components/MessageForm/MessageForm";
import { RootState } from "../../redux/store";
import {
  deleteMessageThunk,
  loadMessagesThunk,
} from "../../redux/thunks/messagesThunks/messagesThunks";
import { Toaster } from "react-hot-toast";
import Navigation from "../../components/Navigation/Navigation";

const PageContainer = styled.div`
  @media (min-width: 600px) {
    padding-top: 95px;
  }
`;

const ChatContainer = styled.div`
  padding-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 0;
  }
  height: calc(100vh - 260px);

  @media (min-width: 600px) {
    height: calc(100vh - 290px);
  }
`;

const ChatHeader = styled.div`
  padding: 10px;
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
  object-fit: cover;
`;

const ChatBody = styled.section`
  height: 100%;

  ul {
    padding: 0;
  }
`;

const MessagesPage = (): JSX.Element => {
  const messages = useSelector((state: RootState) => state.messages);
  const dispatch = useDispatch();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef?.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  useEffect(scrollToBottom, [messages]);

  useEffect(() => {
    dispatch(loadMessagesThunk);
  }, [dispatch]);

  const deleteMessage = (id: string) => {
    dispatch(deleteMessageThunk(id));
  };

  return (
    <>
      <Navigation />
      <PageContainer>
        <ChatHeader>
          <HeaderImage
            src="/images/pexels-photo-2613260.jpeg"
            alt="girl photo"
          />
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
            <Toaster />
            <div ref={messagesEndRef} />
          </ChatBody>
        </ChatContainer>
        <MessageForm />
      </PageContainer>
    </>
  );
};

export default MessagesPage;
