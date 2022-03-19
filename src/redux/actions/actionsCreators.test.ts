import {
  clearMessageDetailsAction,
  createMessageAction,
  deleteMessageAction,
  loadCurrentMessageAction,
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
    describe("When it receives new message 'I am fine.'", () => {
      test("Then it should return update-message action with the message", async () => {
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

describe("Civen a loadCurrentMessageAction", () => {
  describe("When it receives message 'I am fine'", () => {
    test("Then it should retern load current message actin with the message 'I am fine'", () => {
      const message = {
        date: "",
        text: "I am fine.",
        sender: "",
        recipient: "",
        id: "1",
      };
      const expectedAction = {
        type: actionsTypes.loadCurrentMessage,
        message,
      };

      const action = loadCurrentMessageAction(message);

      expect(action).toEqual(expectedAction);
    });
  });
});

describe("Given a clearMessageDetails action", () => {
  describe("When it's invoked", () => {
    test("Then it should return the action", () => {
      const expectedAction = {
        type: actionsTypes.clearMessageDetails,
      };

      const action = clearMessageDetailsAction();

      expect(action).toEqual(expectedAction);
    });
  });
});
