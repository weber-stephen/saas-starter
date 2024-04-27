/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import AuthenticationPage from "./page";
import { useSearchParams } from "next/navigation";

// Mock useSearchParams
jest.mock('next/navigation', () => ({
  useSearchParams: jest.fn(),
}));

const mockGet = jest.fn();
mockGet.mockReturnValue('5000');

(useSearchParams as jest.Mock).mockReturnValue({
  get: mockGet,
});

describe("Authentication Page", () => {
  it("has title", () => {
    render(<AuthenticationPage />);
  
    const heading = screen.getByTestId("signup-title");

    expect(heading).toBeInTheDocument()
  });

  it("has authentication form", () => {
    render(<AuthenticationPage />);
  
    const loginForm = screen.getByTestId("login-form");

    expect(loginForm).toBeInTheDocument()
  });
});