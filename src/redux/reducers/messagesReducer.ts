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

    case actionsTypes.createMessage:
      newMessages = [...currentMessages, action.message];
      break;

    case actionsTypes.updateMessage:
      newMessages = currentMessages.map((message) =>
        message.id === action.message.id
          ? { ...action.message }
          : { ...message }
      );
      break;

    default:
      newMessages = [...currentMessages];
  }

  return newMessages;
};

export default messagesReducer;
