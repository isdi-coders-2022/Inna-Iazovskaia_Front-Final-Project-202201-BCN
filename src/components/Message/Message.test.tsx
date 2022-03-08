import { render, screen } from "@testing-library/react";
import MessageInterface from "../../types/MessageInterface";
import Message from "./Message";

describe("Given a Message component", () => {
  describe("When it's receives message with 'Hello' as text", () => {
    test("Then it should display list item with text 'Hello'", () => {
      const receivedMessage: MessageInterface = {
        text: "Hello",
      };

      render(<Message text={receivedMessage.text} />);

      const expectedText = screen.getByText(receivedMessage.text);
      const listItem = screen.getByRole("listitem");

      expect(expectedText).toBeInTheDocument();
      expect(listItem).toBeInTheDocument();
    });
  });
});
