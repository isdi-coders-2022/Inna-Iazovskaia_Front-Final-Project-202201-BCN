import {
  createMessageAction,
  deleteMessageAction,
  loadMessagesAction,
  updateMessageAction,
} from "./actionsCreators";
import actionsTypes from "./actionsTypes";

describe("Given a loadMessagesAction", () => {
  describe("When it receives messages 'Helo!' and 'How are you?'", () => {
    test("Then it should return load-messages action with the messages", () => {
      const messages = [
        {
          date: "",
          text: "Hello!",
          sender: "",
          recipient: "",
          id: "",
        },
        {
          date: "",
          text: "How are you?",
          sender: "",
          recipient: "",
          id: "",
        },
      ];
      const expectedAction = {
        type: actionsTypes.loadMessages,
        messages: messages,
      };

      const action = loadMessagesAction(messages);

      expect(action).toEqual(expectedAction);
    });
  });
});

describe("Given a deleteMessageAction", () => {
  describe("When it receives message id", () => {
    test("Then it should return delete-message action with the id", () => {
      const id = "sdlkjfkasjd";
      const expectedAction = {
        type: actionsTypes.deleteMessage,
        id: id,
      };

      const action = deleteMessageAction(id);

      expect(action).toEqual(expectedAction);
    });
  });
});

describe("Given a createMessageAction", () => {
  describe("When it receives message", () => {
    test("Then it should return create-message action with the message", () => {
      const message = {
        date: "",
        text: "Hello!",
        sender: "",
        recipient: "",
        id: "",
      };
      const expectedAction = {
        type: actionsTypes.createMessage,
        message: message,
      };

      const action = createMessageAction(message);

      expect(action).toEqual(expectedAction);
    });
  });

  describe("Given a updateMessageAction", () => {
    describe("When it receives id 1", () => {
      test("Then it should return update-message action with the message id", async () => {
        const message = {
          date: "",
          text: "I am fine.",
          sender: "",
          recipient: "",
          id: "1",
        };
        const expectedAction = {
          type: actionsTypes.updateMessage,
          message,
        };

        const action = updateMessageAction(message);

        expect(action).toEqual(expectedAction);
      });
    });
  });
});
