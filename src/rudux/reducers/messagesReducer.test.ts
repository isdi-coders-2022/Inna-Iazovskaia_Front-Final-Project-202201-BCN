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

  describe("When it receives current messages 'Hello!' and 'How are you?' and delete-messages action with id of message 'Hello'", () => {
    test("Then it should return message 'How are you?'", () => {
      const currentMessages = [
        {
          date: "",
          text: "Hello!",
          sender: "",
          recipient: "",
          id: "1",
        },
        {
          date: "",
          text: "How are you?",
          sender: "",
          recipient: "",
          id: "2",
        },
      ];
      const action = {
        type: "delete-message",
        id: currentMessages[0].id,
      };

      const expectedMessages = [
        {
          date: "",
          text: "How are you?",
          sender: "",
          recipient: "",
          id: "2",
        },
      ];

      const messages = messagesReducer(currentMessages, action);

      expect(messages).toEqual(expectedMessages);
    });
  });

  describe("When it receives current messages 'Hello!' and 'How are you?' and create-messages action with message 'I am fine.'", () => {
    describe("Then it should return messages: 'Hello!', 'How are you?' and 'I am fine.'", () => {
      const currentMessages = [
        {
          date: "",
          text: "Hello!",
          sender: "",
          recipient: "",
          id: "1",
        },
        {
          date: "",
          text: "How are you?",
          sender: "",
          recipient: "",
          id: "2",
        },
      ];
      const newMessage = {
        date: "",
        text: "I am fine.",
        sender: "",
        recipient: "",
        id: "3",
      };
      const action = {
        type: "create-message",
        message: newMessage,
      };
      const expectedMessages = [
        {
          date: "",
          text: "Hello!",
          sender: "",
          recipient: "",
          id: "1",
        },
        {
          date: "",
          text: "How are you?",
          sender: "",
          recipient: "",
          id: "2",
        },
        {
          date: "",
          text: "I am fine.",
          sender: "",
          recipient: "",
          id: "3",
        },
      ];

      const messages = messagesReducer(currentMessages, action);

      expect(messages).toEqual(expectedMessages);
    });
  });
});
