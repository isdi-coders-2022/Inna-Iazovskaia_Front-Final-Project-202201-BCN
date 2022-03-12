import Message from "../../types/Message";
import actionsTypes from "./actionsTypes";

export const loadMessagesAction = (messages: Message[]) => ({
  type: actionsTypes.loadMessages,
  messages,
});

export const deleteMessageAction = (id: string) => ({
  type: actionsTypes.deleteMessage,
  id,
});
