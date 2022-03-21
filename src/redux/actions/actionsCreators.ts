import { Message, UserLoginInterface } from "../../types/Interfaces";
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

export const updateMessageAction = (message: Message) => ({
  type: actionsTypes.updateMessage,
  message,
});

export const loadCurrentMessageAction = (message: Message) => ({
  type: actionsTypes.loadCurrentMessage,
  message,
});

export const clearMessageDetailsAction = () => ({
  type: actionsTypes.clearMessageDetails,
});

export const userLoginAction = (user: UserLoginInterface) => ({
  type: actionsTypes.userLogin,
  user,
});
