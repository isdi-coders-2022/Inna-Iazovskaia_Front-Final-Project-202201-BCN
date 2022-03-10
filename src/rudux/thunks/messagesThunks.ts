import Message from "../../types/Message";
import { ThunkDispatch } from "redux-thunk";
import { loadMessagesAction } from "../actions/actionsCreators";
import { AnyAction } from "redux";

export const loadMessagesThunk =
  (messages: Message[]) =>
  async (dispatch: ThunkDispatch<void, unknown, AnyAction>) => {
    const response = await fetch(
      `${process.env.REACT_APP_API_FINDME}messages/all`
    );
    const messagesList = await response.json();
    messages = messagesList.messages;
    dispatch(loadMessagesAction(messages));
  };
