import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../redux/store";
import MessageDetailsPage from "./MessageDetailsPage";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("Given a MessageDetailsPage component", () => {
  describe("When it's rendered", () => {
    test("Then it should display heading 'Message details'", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <MessageDetailsPage />
          </Provider>
        </BrowserRouter>
      );

      const heading = screen.getByRole("heading", {
        name: /message details/i,
        level: 3,
      });

      expect(heading).toBeInTheDocument();
    });

    test("Then it should render button with text 'Go back'", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <MessageDetailsPage />
          </Provider>
        </BrowserRouter>
      );

      const button = screen.getByRole("button", { name: /go back/i });

      expect(button).toBeInTheDocument();
    });
  });

  describe("When user clicks button 'Go back'", () => {
    test("Then it should navigate to MessagesPage", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <MessageDetailsPage />
          </Provider>
        </BrowserRouter>
      );
      const expectedPath = "/conversations";

      const button = screen.getByRole("button");
      userEvent.click(button);

      expect(mockNavigate).toHaveBeenCalledWith(expectedPath);
    });
  });

  describe("When it's rendered with message 'Hello'", () => {
    test("Then it should dasplay the message", async () => {
      const initialState = {
        message: {
          date: "2022-03-20T19:29:49.690Z",
          text: "Hello!",
          sender: "",
          recipient: "",
          id: "153",
        },
      };
      const mockStore = configureMockStore([thunk]);
      const mockedStore = mockStore(initialState);

      render(
        <BrowserRouter>
          <Provider store={mockedStore}>
            <MessageDetailsPage />
          </Provider>
        </BrowserRouter>
      );

      const text = await screen.findByText("Hello!");

      expect(text).toBeInTheDocument();
    });
  });
});
