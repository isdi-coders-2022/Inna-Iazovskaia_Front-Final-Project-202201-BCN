import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../redux/store";
import NotFoundPage from "./NotFoundPage";

describe("Given a NotFoundPage component", () => {
  describe("When it's rendered", () => {
    test("Then it should display heading 'Page not found'", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <NotFoundPage />
          </Provider>
        </BrowserRouter>
      );

      const heading = screen.getByRole("heading", {
        name: /page not found/i,
        level: 2,
      });

      expect(heading).toBeInTheDocument();
    });

    test("Then it should display text 'Sorry, this page does not exist'", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <NotFoundPage />
          </Provider>
        </BrowserRouter>
      );

      const text = screen.getByText(/sorry, this page does not exist/i);

      expect(text).toBeInTheDocument();
    });
  });
});
