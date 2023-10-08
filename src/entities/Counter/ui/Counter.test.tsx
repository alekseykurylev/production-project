import { screen, render, fireEvent } from "shared/lib/testUtils";
import { Counter } from "./Counter";

describe("Counter", () => {
  test("render", () => {
    render(<Counter />, { initialState: { counter: { value: 10 } } });
    expect(screen.getByTestId("value-title")).toHaveTextContent("10");
  });

  test("increment", () => {
    render(<Counter />, { initialState: { counter: { value: 10 } } });
    fireEvent.click(screen.getByTestId("increment-button"));
    expect(screen.getByTestId("value-title")).toHaveTextContent("11");
  });

  test("decrement", () => {
    render(<Counter />, {
      initialState: { counter: { value: 10 } },
    });
    fireEvent.click(screen.getByTestId("decrement-button"));
    expect(screen.getByTestId("value-title")).toHaveTextContent("9");
  });
});
