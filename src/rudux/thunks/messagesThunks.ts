import { ThunkDispatch } from "redux-thunk";
import {
  createMessageAction,
  deleteMessageAction,
  loadMessagesAction,
} from "../actions/actionsCreators";
import { AnyAction } from "redux";
import Message from "../../types/Message";

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

export const createMessageThunk =
  (message: Message) =>
  async (dispatch: ThunkDispatch<void, unknown, AnyAction>) => {
    const response = await fetch(
      `${process.env.REACT_APP_API_FINDME}messages/create`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(message),
      }
    );
    if (response.ok) {
      const newMessage = await response.json();
      dispatch(createMessageAction(newMessage));
    }
  };
