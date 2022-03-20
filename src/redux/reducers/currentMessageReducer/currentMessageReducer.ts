import { AnyAction } from "redux";
import { Message } from "../../../types/Interfaces";
import actionsTypes from "../../actions/actionsTypes";
import defaultMessage from "./defaultMessage";

const currentMessageReducer = (
  currentMessage: Message = defaultMessage,
  action: AnyAction
): Message => {
  let newCurrentMessage: Message;

  switch (action.type) {
    case actionsTypes.loadCurrentMessage:
      newCurrentMessage = { ...action.message };
      break;

    case actionsTypes.clearMessageDetails:
      newCurrentMessage = { ...defaultMessage };
      break;

    default:
      newCurrentMessage = { ...currentMessage };
  }

  return newCurrentMessage;
};

export default currentMessageReducer;
