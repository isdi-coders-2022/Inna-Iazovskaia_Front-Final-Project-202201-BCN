import actionsTypes from "../../actions/actionsTypes";
import currentMessageReducer from "./currentMessageReducer";
import defaultMessage from "./defaultMessage";

describe("Given a currentMessageReducer", () => {
  describe("When it receives default message and action with new message 'Hello'", () => {
    test("Then it should return message 'Hello'", () => {
      const message = {
        date: "",
        text: "Hello",
        sender: "",
        recipient: "",
        id: "5",
      };

      const action = {
        type: actionsTypes.loadCurrentMessage,
        message: message,
      };

      const newMessage = currentMessageReducer(defaultMessage, action);

      expect(newMessage).toEqual(message);
    });
  });

  describe("When it receives default message and action without new message", () => {
    test("Then it should return default message", () => {
      const action = {
        type: "",
      };
      const expectedMessage = {
        date: "",
        text: "",
        sender: "",
        recipient: "",
        id: "",
      };

      const newMessage = currentMessageReducer(defaultMessage, action);

      expect(newMessage).toEqual(expectedMessage);
    });
  });

  describe("When it receives clearMessageDetails", () => {
    test("Then it should return default message", () => {
      const action = {
        type: actionsTypes.clearMessageDetails,
      };
      const expectedMessage = {
        date: "",
        text: "",
        sender: "",
        recipient: "",
        id: "",
      };

      const newMessage = currentMessageReducer(defaultMessage, action);

      expect(newMessage).toEqual(expectedMessage);
    });
  });
});
