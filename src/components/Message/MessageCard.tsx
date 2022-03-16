import Message from "../../types/Message";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
interface MessageCardProps {
  message: Message;
  actionOnClick: React.MouseEventHandler<SVGSVGElement>;
}

const MessageContainer = styled.li`
  display: flex;
  align-items: center;

  .page_icon {
    color: white;
    margin-left: 15px;
    font-size: 19px;
    cursor: pointer;
  }

  .page_icon:hover {
    font-size: 25px;
  }
`;

const MessageText = styled.p`
  color: white;
  width: 210px;
  background-color: rgba(237, 1, 127, 1);
  border-radius: 20px;
  padding: 10px;
  margin-bottom: 10px;
  font-size: 16px;
`;

const MessageCard = ({
  message: { text, id },
  actionOnClick,
}: MessageCardProps): JSX.Element => {
  return (
    <MessageContainer>
      <MessageText>{text}</MessageText>
      <FontAwesomeIcon
        className="page_icon"
        icon={faTrashCan}
        onClick={actionOnClick}
        data-testid="deleteIcon"
      />
    </MessageContainer>
  );
};

export default MessageCard;
