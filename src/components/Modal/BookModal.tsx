import { Author, getAuthorById, getAuthors } from "../../services/ServiceAuthor";
import { Book, createBook, getBookById, getBooks } from "../../services/ServiceBook";
import * as S from "./Modal.Styled";
import React, { useState, useEffect } from "react";

interface BookModal {
  isOpen: boolean;
  closeModal: () => void;
  modalType: "add" | "search" | null;
}
export const BookModal = ({ isOpen, closeModal, modalType }: BookModal) => {
  
  const [name, setName] = useState<string>("");
  const [authorId, setAuthorId] = useState<number | string>("");
  const [pages, setPages] = useState<number | string>("");
  const [authors, setAuthors] = useState<Author[]>([]);
  const [books, setBooks] = useState<Book[]>([]);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [selectedAuthor, setSelectedAuthor] = useState<Author | null>(null);

  useEffect(() => {
    getAuthors().then(setAuthors).catch(console.error);
    getBooks().then(setBooks).catch(console.error);
  }, []);

  const handleBookSelect = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    const bookId = e.target.value;
    if (bookId) {
      const book = await getBookById(bookId);
      setSelectedBook(book);
      const author = await getAuthorById(book.author_id);
      setSelectedAuthor(author);
    }
  };

  const Submit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const newBook = await createBook(name, Number(authorId), Number(pages));
      alert(`Livro "${newBook.name}" criado com sucesso!`);
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
            {modalType === "add" ? "Adicionar Livro" : "Pesquisar Livro"}
          </S.ModalTitle>
          <S.ModalContent>
            {modalType === "add" ? (
                  <form onSubmit={Submit}>
                    <S.Article>
                      <label>Nome do Livro:</label>
                      <S.Input type="text" value={name}
                        onChange={(e) => setName(e.target.value)}
                        required />
                    </S.Article>
                    <S.Article>
                      <label>Autor:</label>
                      <S.Select value={authorId}
                        onChange={(e) => setAuthorId(e.target.value)}
                        required >
                        <option value="" disabled selected>Selecione um Autor</option>
                        {authors.map((author) => (
                          <option key={author.id} value={author.id}>
                            {author.name}
                          </option>
                        ))}
                      </S.Select>
                    </S.Article>
                    <S.Article>
                      <label>N° de Páginas:</label>
                      <S.Input type="number" value={pages}
                        onChange={(e) => setPages(e.target.value)} />
                    </S.Article>
                    <S.footer>
                    <S.ActionButton type="submit">Adicionar Livro</S.ActionButton>
                    </S.footer>
                  </form>
            ) : (
              <>
                <S.Article>
                      <label>Nome do Livro:</label>
                      <S.Select 
                        onChange={handleBookSelect}
                        required >
                        <option value="" disabled selected>Selecione um Livro</option>
                        {books.map((books) => (
                          <option key={books.id} value={books.id}>
                            {books.name}
                          </option>
                        ))}
                      </S.Select>
                    </S.Article>
                    {selectedBook && (
                      <S.Article>
                        <h3>Informações do Livro</h3>
                        <S.Article> 
                        <label>Nome:</label>
                        <p>{selectedBook.name}</p>
                        <label>Páginas:</label>
                        <p>{selectedBook.pages}</p>
                        </S.Article>
                        {selectedAuthor && (
                          <S.Article>
                            <h3>Autor do Livro</h3>
                            <S.Article>
                            <label>Nome:</label>
                            <p>{selectedAuthor.name}</p>
                            <label>Email:</label>
                            <p>{selectedAuthor.email}</p>
                            </S.Article>
                          </S.Article>
                        )}
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
