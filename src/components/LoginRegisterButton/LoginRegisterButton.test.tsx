import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LoginRegisterButton from "./LoginRegisterButton";

describe("Given a LoginRegisterButton copmponent", () => {
  describe("When it receives 'Push' as its text", () => {
    test("Then it should render button with text 'Push'", () => {
      const text = "Push";
      const className = "";

      render(<LoginRegisterButton text={text} className={className} />);

      const button = screen.getByRole("button", { name: text });

      expect(button).toBeInTheDocument();
    });
  });

  describe("When it receives 'button-class' as its className", () => {
    test("Then it should render button with class 'button-cless'", () => {
      const text = "";
      const className = "button-cless";

      render(<LoginRegisterButton text={text} className={className} />);

      const button = screen.getByRole("button");

      expect(button).toHaveClass(className);
    });
  });

  describe("When it receives an action and a click", () => {
    test("Then it should execute the action", () => {
      const actionOnClick = jest.fn();
      const text = "";
      const className = "";

      render(
        <LoginRegisterButton
          text={text}
          className={className}
          actionOnClick={actionOnClick}
        />
      );

      userEvent.click(screen.getByRole("button"));

      expect(actionOnClick).toHaveBeenCalled();
    });
  });
});
