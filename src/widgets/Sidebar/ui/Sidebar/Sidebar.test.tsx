import { screen, render, fireEvent } from "shared/lib/testUtils";
import { Sidebar } from "./Sidebar";

describe("Sidebar", () => {
  test("render", () => {
    render(<Sidebar />);
    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
  });

  test("toggle button", () => {
    render(<Sidebar />);
    const toggleButton = screen.getByTestId("sidebar-toggle");
    fireEvent.click(toggleButton);
    expect(screen.getByTestId("sidebar")).toHaveClass("collapsed");
  });
});
