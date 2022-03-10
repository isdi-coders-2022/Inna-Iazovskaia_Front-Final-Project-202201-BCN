import Message from "../../types/Message";
import messagesReducer from "./messagesReducer";

describe("Given a messagesReducer function", () => {
  describe("When it receives empty current messages and load-messages action with messages 'Hello!' and 'How are you?'", () => {
    test("Then it should return messages 'Hello!', 'How are you?' and 'see you'", () => {
      const currentMessages: Message[] = [];
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
      const action = {
        type: "load-messages",
        messages: messages,
      };

      const expectedMessages = messagesReducer(currentMessages, action);

      expect(messages).toEqual(expectedMessages);
    });
  });

  describe("When it doesn't receives messages and action", () => {
    test("Then it should return []", () => {
      const currentMessages = undefined;
      const action = {
        type: "",
      };
      const messages = messagesReducer(currentMessages, action);

      expect(messages).toHaveLength(0);
    });
  });
});
