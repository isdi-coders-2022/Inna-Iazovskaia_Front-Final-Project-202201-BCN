import { ThunkDispatch } from "redux-thunk";
import {
  createMessageAction,
  deleteMessageAction,
  loadCurrentMessageAction,
  loadMessagesAction,
  updateMessageAction,
} from "../../actions/actionsCreators";
import { AnyAction, Dispatch } from "redux";
import { Message } from "../../../types/Interfaces";
import { NavigateFunction } from "react-router-dom";

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
  (message: {}) => async (dispatch: Dispatch) => {
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

export const updateMessageThunk =
  (message: Message, navigate: NavigateFunction) =>
  async (dispatch: Dispatch) => {
    const response = await fetch(
      `${process.env.REACT_APP_API_FINDME}messages/update/${message.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(message),
      }
    );
    if (response.ok) {
      const updatedMessage = await response.json();
      dispatch(updateMessageAction(updatedMessage));
      navigate("/conversations");
    }
  };

export const loadCurrentMessageThunk =
  (id: string) => async (dispatch: Dispatch) => {
    const response = await fetch(
      `${process.env.REACT_APP_API_FINDME}messages/${id}`
    );
    const currentMessage = await response.json();

    dispatch(loadCurrentMessageAction(currentMessage));
  };
