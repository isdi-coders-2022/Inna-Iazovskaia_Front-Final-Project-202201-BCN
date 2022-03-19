import { AnyAction } from "redux";
import { Message } from "../../../types/Interfaces";
import actionsTypes from "../../actions/actionsTypes";
import defaultMessage from "./defaultMessage";

const currentMessageReducer = (
  currentMessage: Message = defaultMessage,
  action: AnyAction
): Message => {
  let newCurrentMessage: Message;

  if (action.type === actionsTypes.loadCurrentMessage) {
    newCurrentMessage = { ...action.message };
  } else {
    newCurrentMessage = { ...currentMessage };
  }

  return newCurrentMessage;
};

export default currentMessageReducer;
