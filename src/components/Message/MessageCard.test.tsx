import { render, screen } from "@testing-library/react";
import MessageCard from "./MessagCard";

describe("Given a Message component", () => {
  describe("When it's receives message with 'Hello' as text", () => {
    test("Then it should display list item with text 'Hello'", () => {
      const receivedMessage = {
        date: "",
        text: "Hello",
        sender: "",
        recipient: "",
      };

      render(<MessageCard message={receivedMessage} />);

      const expectedText = screen.getByText(receivedMessage.text);
      const listItem = screen.getByRole("listitem");

      expect(expectedText).toBeInTheDocument();
      expect(listItem).toBeInTheDocument();
    });
  });
});
