import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Login } from "./components/Login/Login";
import '@testing-library/jest-dom';

describe("Login component", () => {
  test("mostra o modo login inicialmente e troca para registro ao clicar no botão", () => {
    render(<Login onLogin={jest.fn()} />);

    expect(screen.getByText(/Seja Bem-Vindo!/i)).toBeInTheDocument();

    const toggleBtn = screen.getByText(/Não tem conta\? Registre-se/i);
    userEvent.click(toggleBtn);

    expect(screen.getByText(/Crie sua conta!/i)).toBeInTheDocument();
  });
});
