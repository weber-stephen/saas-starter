/**
 * @jest-environment jsdom
 */
import { screen, render } from "@testing-library/react";
import Dashboard from "@/app/(dashboard)/dashboard/page";
import { ResizeObserver } from "@/mocks/resizeObserver";

describe("Dashboard", () => {
  window.ResizeObserver = ResizeObserver;
  it("renders a heading", () => {
    render(<Dashboard />);

    const heading = screen.getByTestId("welcome-text");

    expect(heading).toBeInTheDocument();
  });
});
