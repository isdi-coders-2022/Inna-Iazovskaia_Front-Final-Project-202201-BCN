import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../redux/store";
import LoginPage from "./LoginPage";

const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("Given a LoginPage component", () => {
  describe("When it's rendered", () => {
    test("Then it should render heading with text 'Find me' and logo image", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <LoginPage />
          </Provider>
        </BrowserRouter>
      );

      const heading = screen.getByRole("heading", {
        name: /find me/i,
        level: 1,
      });
      const logoImage = screen.getByAltText(/fimd-me logo/i);

      expect(heading).toBeInTheDocument();
      expect(logoImage).toBeInTheDocument();
    });

    test("Then it should render button with text 'Don’t have an accaunt yet? Sign in'", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <LoginPage />
          </Provider>
        </BrowserRouter>
      );
      const buttonText = "Don’t have an account yet? Sign in";

      const button = screen.getByRole("button", { name: buttonText });

      expect(button).toBeInTheDocument();
    });
  });

  describe("When user clicks button 'Don’t have an accaunt yet? Sign in'", () => {
    test("Then it should navigate to RegisterPage", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <LoginPage />
          </Provider>
        </BrowserRouter>
      );
      const expectedPath = "/register-page";
      const buttonText = "Don’t have an account yet? Sign in";

      const button = screen.getByRole("button", { name: buttonText });
      userEvent.click(button);

      expect(mockNavigate).toHaveBeenCalledWith(expectedPath);
    });
  });
});
