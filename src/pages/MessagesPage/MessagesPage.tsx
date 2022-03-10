import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import MessageCard from "../../components/Message/MessageCard";
import Navigation from "../../components/Navigation/Navigation";
import { RootState } from "../../rudux/store";
import { loadMessagesThunk } from "../../rudux/thunks/messagesThunks";

const Header = styled.header`
  height: 120px;
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

  return (
    <>
      <Header />
      <MessagesContainer>
        <ul>
          {messages.map((message) => (
            <MessageCard message={message} key={message.id} />
          ))}
        </ul>
      </MessagesContainer>
      <Navigation />
    </>
  );
};

export default MessagesPage;
