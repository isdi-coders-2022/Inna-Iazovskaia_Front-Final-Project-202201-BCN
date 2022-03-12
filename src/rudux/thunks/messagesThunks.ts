import { ThunkDispatch } from "redux-thunk";
import {
  deleteMessageAction,
  loadMessagesAction,
} from "../actions/actionsCreators";
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

export const deleteMessageThunk =
  (id: string) => async (dispatch: ThunkDispatch<void, unknown, AnyAction>) => {
    const response = await fetch(
      `${process.env.REACT_APP_API_FINDME}messages/delete/${id}`,
      {
        method: "DELETE",
      }
    );
    if (response.ok) {
      dispatch(deleteMessageAction(id));
    }
  };
