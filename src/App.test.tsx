import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { store } from "./redux/store";

describe("Given a App component", () => {
  describe("When it's rendered", () => {
    test("Then it should render main", () => {
      Element.prototype.scrollIntoView = jest.fn();
      render(
        <BrowserRouter>
          <Provider store={store}>
            <App />
          </Provider>
        </BrowserRouter>
      );

      const main = screen.getByRole("main");

      expect(main).toBeInTheDocument();
    });
  });
});
