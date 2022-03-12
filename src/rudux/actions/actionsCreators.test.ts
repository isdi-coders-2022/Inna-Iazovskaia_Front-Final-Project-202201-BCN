import { deleteMessageAction, loadMessagesAction } from "./actionsCreators";

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
        type: "load-messages",
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
        type: "delete-message",
        id: id,
      };

      const action = deleteMessageAction(id);

      expect(action).toEqual(expectedAction);
    });
  });
});
