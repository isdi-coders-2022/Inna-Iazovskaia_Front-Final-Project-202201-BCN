import MessageInterface from "../../types/MessageInterface";

const Message = ({ text }: MessageInterface): JSX.Element => {
  return <li>{text}</li>;
};

export default Message;
