import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./Navigation";

describe("Given a Navigation Component", () => {
  describe("When it's rendered", () => {
    test("Then it should display links with 'Profile', 'Home' and 'Conversations' as text", () => {
      render(
        <BrowserRouter>
          <Navigation />
        </BrowserRouter>
      );

      const textProfile = screen.getByRole("link", { name: /profile/i });
      const textHome = screen.getByRole("link", { name: /home/i });
      const textConversations = screen.getByRole("link", {
        name: /conversations/i,
      });

      expect(textProfile).toBeInTheDocument();
      expect(textHome).toBeInTheDocument();
      expect(textConversations).toBeInTheDocument();
    });
  });
});
