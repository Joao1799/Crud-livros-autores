import { BiBookAdd } from "react-icons/bi";
import { Author, getAuthorById, getAuthors } from "../../services/ServiceAuthor";
import { Book, createBook, getBookById, getBooks } from "../../services/ServiceBook";
import * as S from "./Modal.Styled";
import { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";

interface BookModal {
  isOpen: boolean;
  closeModal: () => void;
  modalType: "add" | "search" | null;
  refreshBooks: any;
}
export const BookModal = ({ isOpen, closeModal, modalType, refreshBooks  }: BookModal) => {
  
  const { control, handleSubmit, setValue, reset } = useForm();

  const [authors, setAuthors] = useState<Author[]>([]);
  const [books, setBooks] = useState<Book[]>([]);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [selectedAuthor, setSelectedAuthor] = useState<Author | null>(null);

  useEffect(() => {
    getAuthors().then(setAuthors).catch(console.error);
    getBooks().then(setBooks).catch(console.error);
  }, []);

  useEffect(() => {
    if (!isOpen) {
      reset();
      setSelectedAuthor(null);
      setSelectedBook(null);
    }
  }, [isOpen, reset]);

  const handleBookSelect = async (bookId: string) => {
    if (bookId) {
      const book = await getBookById(bookId);
      setSelectedBook(book);
      const author = await getAuthorById(book.author_id);
      setSelectedAuthor(author);
    }
  };

  const Submit = async (data: any) => {
    try {
      const newBook = await createBook(data.name, data.authorId, Number(data.pages));
      alert(`Livro "${newBook.name}" criado com sucesso!`);
      closeModal();
      refreshBooks();
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
          <S.Header>
            <S.ArticleTitle>
              <S.ModalTitle>
                {modalType === "add" ? "Adicionar Livro" : "Pesquisar Livro"}
              </S.ModalTitle>
            </S.ArticleTitle>
            <S.CloseButton onClick={closeModal}>×</S.CloseButton>
          </S.Header>
          <S.ModalContent>
            {modalType === "add" ? (
              <form onSubmit={handleSubmit(Submit)}>
                <S.Article>
                  <label>Nome do Livro:</label>
                  <Controller
                    name="name"
                    control={control}
                    render={({ field }) => (
                      <S.Input {...field} type="text" required />
                    )}
                  />
                </S.Article>
                <S.Article>
                  <label>Autor(a):</label>
                  <Controller
                    name="authorId"
                    control={control}
                    render={({ field }) => (
                      <S.Select {...field} onChange={(e) => setValue("authorId", e.target.value)} required>
                        <option value="" disabled selected>
                          Selecione um Autor
                        </option>
                        {authors.map((author) => (
                          <option key={author.id} value={author.id}>
                            {author.name}
                          </option>
                        ))}
                      </S.Select>
                    )}
                  />
                </S.Article>
                <S.Article>
                  <label>N° de Páginas:</label>
                  <Controller
                    name="pages"
                    control={control}
                    render={({ field }) => (
                      <S.Input {...field} type="number" />
                    )}
                  />
                </S.Article>
                <S.footer>
                  <S.ActionButton type="submit">
                    <BiBookAdd />
                    Adicionar Livro
                    </S.ActionButton>
                </S.footer>
              </form>
            ) : (
              <>
                <S.Article>
                  <label>Nome do Livro:</label>
                  <Controller
                    name="bookId"
                    control={control}
                    render={({ field }) => (
                      <S.Select {...field} onChange={(e) => handleBookSelect(e.target.value)} required>
                        <option value="" disabled selected> 
                          Selecione um Livro
                        </option>
                        {books.map((book) => (
                          <option key={book.id} value={book.id}>
                            {book.name}
                          </option>
                        ))}
                      </S.Select>
                    )}
                  />
                </S.Article>
                {selectedBook && (
                  <S.Article>
                    <h3>Informações do Livro</h3>
                    <S.ArticleAux>
                      <S.Label>Nome:</S.Label>
                      <p>{selectedBook.name}</p>
                      <S.Label>N° de Páginas:</S.Label>
                      <p>{selectedBook.pages}</p>
                    </S.ArticleAux>
                    {selectedAuthor && (
                      <S.Article>
                        <h3>Autor(a) do Livro</h3>
                        <S.ArticleAux>
                          <S.Label>Nome:</S.Label>
                          <p>{selectedAuthor.name}</p>
                          <S.Label>Email:</S.Label>
                          <p>{selectedAuthor.email}</p>
                        </S.ArticleAux>
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
