import {
  createMessageThunk,
  deleteMessageThunk,
  loadMessagesThunk,
} from "./messagesThunks";

describe("Civen a loadMessagesThunk function", () => {
  describe("When it's called", () => {
    test("Then it should dispatch a function", async () => {
      const dispatch = jest.fn();

      await loadMessagesThunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});

describe("Given a deleteMessageThunk function", () => {
  describe("When it's called with id of deleting message", () => {
    test("Then it should call dispatch and pass deleteMessageAction", async () => {
      const id = "1";
      const dispatch = jest.fn();
      const expectedAction = {
        type: "delete-message",
        id: id,
      };

      const deleteThunk = deleteMessageThunk(id);
      await deleteThunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
      expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });
  });
});

describe("Given a createMessageThunk function", () => {
  describe("When it's called with message", () => {
    test("Then it should call dispatch and pass createMessageAction", async () => {
      const message = {
        date: "",
        text: "I am fine.",
        sender: "",
        recipient: "",
        id: "3",
      };
      const dispatch = jest.fn();
      const expectedAction = {
        type: "create-message",
        message: message,
      };

      const createThunk = createMessageThunk(message);
      await createThunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
      expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });
  });
});
