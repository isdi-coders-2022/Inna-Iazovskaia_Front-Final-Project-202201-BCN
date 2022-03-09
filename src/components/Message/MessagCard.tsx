import Message from "../../types/Message";

interface MessageCardProps {
  message: Message;
}

const MessageCard = ({ message: { text } }: MessageCardProps): JSX.Element => {
  return <li>{text}</li>;
};

export default MessageCard;
