import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import MessageForm from "./MessageForm";

let mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

describe("Given a MessageForm component", () => {
  describe("When it's rendered", () => {
    test("Then it should display input", () => {
      render(
        <Provider store={store}>
          <MessageForm />
        </Provider>
      );

      const input = screen.getByPlaceholderText(/message/i);

      expect(input).toBeInTheDocument();
    });
  });

  describe("When the user enter message 'I am fine.' and submit the form", () => {
    test("Then it should invoke despatch", () => {
      const messageText = "I am fine.";

      render(
        <Provider store={store}>
          <MessageForm />
        </Provider>
      );

      const messageInput = screen.getByPlaceholderText(/message/i);
      userEvent.type(messageInput, messageText);

      userEvent.click(screen.getByRole("button"));

      expect(mockDispatch).toHaveBeenCalled();
    });
  });
});
