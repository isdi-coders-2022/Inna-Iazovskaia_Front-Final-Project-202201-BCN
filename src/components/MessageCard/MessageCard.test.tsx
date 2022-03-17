import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import MessageCard from "./MessageCard";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";

const actionOnClick = jest.fn();

const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

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
      render(
        <BrowserRouter>
          <Provider store={store}>
            <MessageCard
              message={receivedMessage}
              actionOnClick={actionOnClick}
            />
          </Provider>
        </BrowserRouter>
      );
      const expectedText = screen.getByText(receivedMessage.text);

      const listItem = screen.getByRole("listitem");
      const deleteIcon = screen.queryByTestId("deleteIcon");

      expect(expectedText).toBeInTheDocument();
      expect(listItem).toBeInTheDocument();
      expect(deleteIcon).toBeInTheDocument();
    });
  });

  describe("When the delete icon is clicked on message", () => {
    test("Then it should execute the action", () => {
      const receivedMessage = {
        date: "",
        text: "Hello!",
        sender: "",
        recipient: "",
        id: "1",
      };
      render(
        <BrowserRouter>
          <Provider store={store}>
            <MessageCard
              message={receivedMessage}
              actionOnClick={actionOnClick}
            />
          </Provider>
        </BrowserRouter>
      );

      const deleteIcon = screen.queryByTestId("deleteIcon") as HTMLElement;
      userEvent.click(deleteIcon);

      expect(actionOnClick).toHaveBeenCalled();
    });
  });

  describe("When the update icon is clicked on message with id 1", () => {
    test("Then it should navigate to UpdateMessagePage of the message", () => {
      const receivedMessage = {
        date: "",
        text: "Hello!",
        sender: "",
        recipient: "",
        id: "1",
      };
      render(
        <BrowserRouter>
          <Provider store={store}>
            <MessageCard
              message={receivedMessage}
              actionOnClick={actionOnClick}
            />
          </Provider>
        </BrowserRouter>
      );
      const expectedPath = `/update-message/${receivedMessage.id}`;

      const updateIcon = screen.queryByTestId("updateIcon") as HTMLElement;
      userEvent.click(updateIcon);

      expect(mockNavigate).toHaveBeenCalledWith(expectedPath);
    });
  });
});
