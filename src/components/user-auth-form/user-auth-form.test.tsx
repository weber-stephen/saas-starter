/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import AuthForm from "./user-auth-form";
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

describe("AuthForm", () => {
  it("Has email input field", () => {
    render(<AuthForm />);
  
    const emailInput = screen.getByTestId("email-input");

    expect(emailInput).toBeInTheDocument()
  });

  it("Has password input field", () => {
    render(<AuthForm />);
  
    const passwordInput = screen.getByTestId("password-input");

    expect(passwordInput).toBeInTheDocument()
  });

  it("Has login button", () => {
    render(<AuthForm />);
  
    const loginButton = screen.getByTestId("login-button");

    expect(loginButton).toBeInTheDocument()
  });
});
