import actionsTypes from "../../actions/actionsTypes";
import {
  createMessageThunk,
  deleteMessageThunk,
  loadCurrentMessageThunk,
  loadMessagesThunk,
  updateMessageThunk,
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
  describe("When it's called with id 1 of deleting message", () => {
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

  describe("When it's called with id 2", () => {
    test("Then it shouldn't call dispatch", async () => {
      const id = "2";
      const dispatch = jest.fn();

      const deleteThunk = deleteMessageThunk(id);
      await deleteThunk(dispatch);

      expect(dispatch).not.toBeCalled();
    });
  });
});

describe("Given a createMessageThunk function", () => {
  describe("When it's called with message 'I am fine.'", () => {
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
        type: actionsTypes.createMessage,
        message: message,
      };

      const createThunk = createMessageThunk(message);
      await createThunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
      expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });
  });

  describe("When it's called with not valid data", () => {
    test("Then it shouldn't call dispatch", async () => {
      const message = {
        text: "I am not fine.",
      };
      const dispatch = jest.fn();

      const createThunk = createMessageThunk(message);
      await createThunk(dispatch);

      expect(dispatch).not.toBeCalled();
    });
  });
});

describe("Given a updateMessageThunk function", () => {
  describe("When it's called with message 'I am fine.'", () => {
    test("Then it should call dispatch and pass updateMessageAction", async () => {
      const message = {
        date: "",
        text: "sorry",
        sender: "",
        recipient: "",
        id: "125",
      };
      const dispatch = jest.fn();
      const navigate = jest.fn();
      const expectedAction = {
        type: actionsTypes.updateMessage,
        message: message,
      };

      const updateThunk = updateMessageThunk(message, navigate);
      await updateThunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
      expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });
  });

  describe("When it's called with not valid data", () => {
    test("Then it shouldn't call dispatch", async () => {
      const message = {
        date: "",
        text: "I am fine.",
        sender: "",
        recipient: "",
        id: "3",
      };
      const dispatch = jest.fn();
      const navigate = jest.fn();

      const updateThunk = updateMessageThunk(message, navigate);
      await updateThunk(dispatch);

      expect(dispatch).not.toBeCalled();
    });
  });
});

describe("Civen a loadCurrentMessageThunk function", () => {
  describe("When it's called", () => {
    test("Then it should dispatch a function", async () => {
      const message = {
        date: "",
        text: "Hello!",
        sender: "",
        recipient: "",
        id: "153",
      };
      const dispatch = jest.fn();

      const loadThunk = loadCurrentMessageThunk(message.id);
      await loadThunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});
