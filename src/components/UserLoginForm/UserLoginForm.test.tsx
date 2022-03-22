import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../redux/store";
import UserLoginForm from "./UserLoginForm";

let mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

describe("Given a UserLoginForm component", () => {
  describe("When it's rendered", () => {
    test("Then it should display 2 inputs with placeholders 'username' and 'password'", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <UserLoginForm />
          </Provider>
        </BrowserRouter>
      );

      const inputUsername = screen.getByPlaceholderText(/username/i);
      const inputPassword = screen.getByPlaceholderText(/password/i);

      expect(inputUsername).toBeInTheDocument();
      expect(inputPassword).toBeInTheDocument();
    });
  });

  describe("When the user enter username 'tom' and password 'superton' and submit the form", () => {
    test("Then it should invoke despatch", () => {
      const username = "tom";
      const password = "supertom";

      render(
        <BrowserRouter>
          <Provider store={store}>
            <UserLoginForm />
          </Provider>
        </BrowserRouter>
      );

      const usernameInput = screen.getByPlaceholderText(/username/i);
      userEvent.type(usernameInput, username);

      const passwordInput = screen.getByPlaceholderText(/password/i);
      userEvent.type(passwordInput, password);

      userEvent.click(screen.getByRole("button"));

      expect(mockDispatch).toHaveBeenCalled();
    });
  });
});
