import { Author, createAuthor, getAuthorById, getAuthors } from "../../services/ServiceAuthor";
import { Book, getBooks } from "../../services/ServiceBook";
import * as S from "./Modal.Styled";
import React, { useState, useEffect } from "react";

interface AuthorModal {
  isOpen: boolean;
  closeModal: () => void;
  modalType: "add" | "search" | null;
}

export const AuthorModal = ({ isOpen, closeModal, modalType }: AuthorModal) => {

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [authors, setAuthors] = useState<Author[]>([]);
  const [books, setBooks] = useState<Book[]>([]);
  const [selectedBooks, setSelectedBooks] = useState<Book[]>([]);
  const [selectedAuthor, setSelectedAuthor] = useState<Author | null>(null);

  useEffect(() => {
    getAuthors().then(setAuthors).catch(console.error);
    getBooks().then(setBooks).catch(console.error);
  }, []);

  const handleAuthorSelect = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    const authorId = e.target.value;
    if (authorId) {
      const author = await getAuthorById(authorId);
      setSelectedAuthor(author);

      const filteredBooks = books.filter((book) => book.author_id === Number(authorId));
      setSelectedBooks(filteredBooks);
    } else {
      setSelectedAuthor(null);
      setSelectedBooks([]);
    }
  };

  const Submit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const newAuthor = await createAuthor(name, email);
      alert(`Autor "${newAuthor.name}" criado com sucesso!`);
      closeModal();
    } catch (error) {
      alert("Erro ao criar livro. Tente novamente.");
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <>
      <S.Overlay>
        <S.Container>
          <S.CloseButton onClick={closeModal}>×</S.CloseButton>
          <S.ModalTitle>
            {modalType === "add" ? "Adicionar Autor" : "Pesquisar Autor"}
          </S.ModalTitle>
          <S.ModalContent>
            {modalType === "add" ? (
              <form onSubmit={Submit}>
                <S.Article>
                  <label>Nome do Autor:</label>
                  <S.Input type="text" value={name}
                    onChange={(e) => setName(e.target.value)}
                    required />
                </S.Article>

                <S.Article>
                  <label>Email:</label>
                  <S.Input type="email" value={email} 
                    onChange={(e) => setEmail(e.target.value)} required />
                </S.Article>
                <S.footer>
                  <S.ActionButton type="submit">Adicionar Autor</S.ActionButton>
                </S.footer>
              </form>
            ) : (
              <>
                <S.Article>
                  <label>Autor:</label>
                  <S.Select onChange={handleAuthorSelect} required>
                  <option value="" disabled selected>Selecione um Autor</option>
                    {authors.map((author) => (
                      <option key={author.id} value={author.id}>
                        {author.name}
                      </option>
                    ))}
                  </S.Select>
                </S.Article>
                  <S.Article>
                  <h3>Livros do Autor:</h3>
                    {selectedBooks.map((book) => (
                      <div key={book.id}>
                        <S.Article>
                          <label>Nome do Livro:</label>
                          <p>{book.name}</p>
                          <label>Páginas:</label>
                          <p>{book.pages}</p>
                        </S.Article>
                      </div>
                    ))}
                  </S.Article>
                {selectedAuthor && (
                  <S.Article>
                    <h3>Informações do Autor</h3>
                    <S.Article>
                      <label>Nome:</label>
                      <p>{selectedAuthor.name}</p>
                      <label>Email:</label>
                      <p>{selectedAuthor.email}</p>
                    </S.Article>
                  </S.Article>
                )}
              </>
            )}
          </S.ModalContent>
        </S.Container>
      </S.Overlay>
    </>
  );
};
