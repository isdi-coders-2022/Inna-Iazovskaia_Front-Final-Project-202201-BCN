import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../redux/store";
import MessagesPage from "./MessagesPage";

window.matchMedia = jest.fn().mockImplementation((query) => {
  return {
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
  };
});

describe("Given a MessagePage component", () => {
  describe("When it receives 2 messages 'Hello!' and 'How are you?'", () => {
    test("Then it should display the messages and 2 icons", async () => {
      Element.prototype.scrollIntoView = jest.fn();
      render(
        <BrowserRouter>
          <Provider store={store}>
            <MessagesPage />
          </Provider>
        </BrowserRouter>
      );

      const messageOne = await screen.findByText(/hello!/i);
      const messageTwo = await screen.findByText(/how are you?/i);

      expect(messageOne).toBeInTheDocument();
      expect(messageTwo).toBeInTheDocument();
    });

    test("Then it should display 2 delete icons", async () => {
      Element.prototype.scrollIntoView = jest.fn();
      render(
        <BrowserRouter>
          <Provider store={store}>
            <MessagesPage />
          </Provider>
        </BrowserRouter>
      );

      const icons = (await screen.findAllByTestId(
        "deleteIcon"
      )) as HTMLElement[];

      expect(icons).toHaveLength(2);
    });
  });

  describe("When the user clicks on delete icon from message 'Hello!'", () => {
    test("Then it should not display the message", async () => {
      Element.prototype.scrollIntoView = jest.fn();
      render(
        <BrowserRouter>
          <Provider store={store}>
            <MessagesPage />
          </Provider>
        </BrowserRouter>
      );

      const deleteIcons = (await screen.findAllByTestId(
        "deleteIcon"
      )) as HTMLElement[];
      const messageDeleteIcon = deleteIcons[0];

      const message = screen.getByText(/hello!/i);

      userEvent.click(messageDeleteIcon);

      await waitForElementToBeRemoved(() => screen.queryByText(/hello!/i));

      expect(message).not.toBeInTheDocument();
    });
  });
});
