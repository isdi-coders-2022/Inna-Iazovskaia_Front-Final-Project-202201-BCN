import { AnyAction } from "redux";
import Message from "../../types/Message";
import actionsTypes from "../actions/actionsTypes";

const messagesReducer = (
  currentMessages: Message[] = [],
  action: AnyAction
): Message[] => {
  let newMessages: Message[];

  switch (action.type) {
    case actionsTypes.loadMessages:
      newMessages = [...action.messages];
      break;

    case actionsTypes.deleteMessage:
      newMessages = currentMessages.filter(
        (message) => message.id !== action.id
      );
      break;

    default:
      newMessages = [...currentMessages];
      break;
  }

  return newMessages;
};

export default messagesReducer;
