import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../redux/store";
import UpdateMessagePage from "./UpdateMessagePage";

let mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

describe("Givea a UpdateMessagePage component", () => {
  describe("When the user enters message 'sorry' and submits the form", () => {
    test("Then it should invoke dispatch", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <UpdateMessagePage />
          </Provider>
        </BrowserRouter>
      );
      const newMessageText = "sorry";

      const messageInput: HTMLTextAreaElement = screen.getByRole("textbox");

      userEvent.type(messageInput, newMessageText);

      const button = screen.getByRole("button", { name: /update/i });
      userEvent.click(button);

      expect(mockDispatch).toHaveBeenCalled();
    });
  });
});
