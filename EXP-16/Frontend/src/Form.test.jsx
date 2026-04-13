import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import Form from "./components/Form";

describe("Login Form Test", () => {

  beforeEach(() => {
    vi.spyOn(window, "alert").mockImplementation(() => {});
  });

  // 🔹 Test 1
  it("renders form fields", () => {
    render(<Form />);
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /login/i })).toBeInTheDocument();
  });

  // 🔹 Test 2
  it("shows validation errors", () => {
    render(<Form />);
    fireEvent.click(screen.getByRole("button", { name: /login/i }));

    expect(screen.getByText(/email is required/i)).toBeInTheDocument();
    expect(screen.getByText(/password is required/i)).toBeInTheDocument();
  });

  // 🔹 Test 3
  it("submits successfully", () => {
    render(<Form />);

    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: "test@test.com" }
    });

    fireEvent.change(screen.getByLabelText(/password/i), {
      target: { value: "123456" }
    });

    fireEvent.click(screen.getByRole("button", { name: /login/i }));

    expect(window.alert).toHaveBeenCalledWith("Form submitted successfully");
  });

});