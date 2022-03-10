import Message from "../../types/Message";
import styled from "styled-components";

interface MessageCardProps {
  message: Message;
}

const MessageContainer = styled.li`
  color: white;
  width: 210px;
  background-color: rgba(237, 1, 127, 1);
  border-radius: 20px;
  padding: 15px;
  margin-bottom: 10px;
  font-size: 18px;
`;

const MessageCard = ({ message: { text } }: MessageCardProps): JSX.Element => {
  return <MessageContainer>{text}</MessageContainer>;
};

export default MessageCard;
