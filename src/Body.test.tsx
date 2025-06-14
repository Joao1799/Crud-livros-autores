import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Body } from "./components/Body/Body";

describe("Body component", () => {
  test('exibe botões de "Adicionar Livro" e "Pesquisar Livro" quando selectedScreen é "Livros" e abre modal ao clicar', () => {
    render(<Body selectedScreen="Livros" />);

    const botaoAdicionar = screen.getByText(/Adicionar Livro/i);
    const botaoPesquisar = screen.getByText(/Pesquisar Livro/i);

    expect(botaoAdicionar).toBeInTheDocument();
    expect(botaoPesquisar).toBeInTheDocument();

    userEvent.click(botaoAdicionar);
    userEvent.click(botaoPesquisar);

    expect(screen.getByText(/Tabela de Livros/i)).toBeInTheDocument();
  });
});
