import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../rudux/store";
import MessageCard from "./MessageCard";
import userEvent from "@testing-library/user-event";

describe("Given a Message component", () => {
  describe("When it's receives message with 'Hello' as text", () => {
    test("Then it should display list item with text 'Hello' and delete icon", () => {
      const receivedMessage = {
        date: "",
        text: "Hello",
        sender: "",
        recipient: "",
        id: "",
      };
      const actionOnClick = jest.fn();

      render(
        <Provider store={store}>
          <MessageCard
            message={receivedMessage}
            actionOnClick={actionOnClick}
          />
        </Provider>
      );
      const expectedText = screen.getByText(receivedMessage.text);
      const listItem = screen.getByRole("listitem");
      const deleteIcon = screen.queryByTestId("deleteIcon");

      expect(expectedText).toBeInTheDocument();
      expect(listItem).toBeInTheDocument();
      expect(deleteIcon).toBeInTheDocument();
    });
  });

  describe("When the delete icon is clicked", () => {
    test("Then it should execute the action", () => {
      const receivedMessage = {
        date: "",
        text: "Hello!",
        sender: "",
        recipient: "",
        id: "1",
      };
      const actionOnClick = jest.fn();

      render(
        <Provider store={store}>
          <MessageCard
            message={receivedMessage}
            actionOnClick={actionOnClick}
          />
        </Provider>
      );

      const deleteIcon = screen.queryByTestId("deleteIcon") as HTMLElement;
      userEvent.click(deleteIcon);

      expect(actionOnClick).toHaveBeenCalled();
    });
  });
});
