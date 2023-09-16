import { screen, render } from "@testing-library/react";
import { Button } from "shared/ui/Button/Button";

describe("Button", () => {
  test("render", () => {
    render(<Button>Button</Button>);
    expect(screen.getByText("Button")).toBeInTheDocument();
  });

  test("variant", () => {
    render(<Button variant='clear'>Button</Button>);
    expect(screen.getByText("Button")).toHaveClass("clear");
  });

  test("size", () => {
    render(<Button size='l'>Button</Button>);
    expect(screen.getByText("Button")).toHaveClass("l");
  });
});
