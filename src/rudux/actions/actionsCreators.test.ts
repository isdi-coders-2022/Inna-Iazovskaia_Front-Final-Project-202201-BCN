import { loadMessagesAction } from "./actionsCreators";

describe("Given a loadMessagesAction", () => {
  describe("When it receives messages 'Helo!' and 'How are you?'", () => {
    test("Then it should return load-messages action with the messages", () => {
      const messages = [
        {
          date: "",
          text: "Hello!",
          sender: "",
          recipient: "",
        },
        {
          date: "",
          text: "How are you?",
          sender: "",
          recipient: "",
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
