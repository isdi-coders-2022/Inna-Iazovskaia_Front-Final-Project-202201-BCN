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

export const createMessageAction = (message: Message) => ({
  type: actionsTypes.createMessage,
  message,
});

export const updateMessageAction = (id: string) => ({
  type: actionsTypes.updateMessage,
  id,
});
