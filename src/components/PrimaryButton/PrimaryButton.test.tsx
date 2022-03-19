import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import PrimaryButton from "./PrimaryButton";
import TestRenderer from "react-test-renderer";

describe("Given a PrimaryButton copmponent", () => {
  describe("When it receives 'Push' as its text", () => {
    test("Then it should render button with text 'Push'", () => {
      const text = "Push";
      const className = "";

      render(<PrimaryButton text={text} className={className} />);

      const button = screen.getByRole("button", { name: text });

      expect(button).toBeInTheDocument();
    });
  });

  describe("When it receives 'button-cless' as its className", () => {
    test("Then it should render button with class 'button-cless'", () => {
      const text = "";
      const className = "button-cless";

      render(<PrimaryButton text={text} className={className} />);

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
        <PrimaryButton
          text={text}
          className={className}
          actionOnClick={actionOnClick}
        />
      );

      userEvent.click(screen.getByRole("button"));

      expect(actionOnClick).toHaveBeenCalled();
    });
  });

  describe("When it's rendered'", () => {
    test("Then it should always match this snapshot", () => {
      const text = "";
      const className = "";
      const renderedButton = TestRenderer.create(
        <PrimaryButton text={text} className={className} />
      );
      expect(renderedButton).toMatchSnapshot();
    });
  });
});
