import { ThunkDispatch } from "redux-thunk";
import { loadMessagesAction } from "../actions/actionsCreators";
import { AnyAction } from "redux";

export const loadMessagesThunk = async (
  dispatch: ThunkDispatch<void, unknown, AnyAction>
) => {
  const response = await fetch(
    `${process.env.REACT_APP_API_FINDME}messages/all`
  );
  const messagesList = await response.json();
  const messages = messagesList.messages;
  dispatch(loadMessagesAction(messages));
};
