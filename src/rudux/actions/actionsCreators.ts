import Message from "../../types/Message";
import actionsTypes from "./actionsTypes";

export const loadMessagesAction = (messages: Message[]) => ({
  type: actionsTypes.loadMessages,
  messages,
});
