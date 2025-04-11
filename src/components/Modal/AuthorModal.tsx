import { AiOutlineUserAdd } from "react-icons/ai";
import { Author, createAuthor, getAuthorById, getAuthors } from "../../services/ServiceAuthor";
import { Book, getBooks } from "../../services/ServiceBook";
import * as S from "./Modal.Styled";
import { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";

interface AuthorModal {
  isOpen: boolean;
  closeModal: () => void;
  modalType: "add" | "search" | null;
  refreshAuthors: any;
}

export const AuthorModal = ({ isOpen, closeModal, modalType, refreshAuthors }: AuthorModal) => {

  const {control, handleSubmit, setValue, reset } = useForm();
  const [authors, setAuthors] = useState<Author[]>([]);
  const [books, setBooks] = useState<Book[]>([]);
  const [selectedBooks, setSelectedBooks] = useState<Book[]>([]);
  const [selectedAuthor, setSelectedAuthor] = useState<Author | null>(null);

  useEffect(() => {
    getAuthors().then(setAuthors).catch(console.error);
    getBooks().then(setBooks).catch(console.error);
  }, []);

  useEffect(() => {
    if (!isOpen) {
      reset();
      setSelectedAuthor(null);
      setSelectedBooks([]);
    }
  }, [isOpen, reset]);

  const handleAuthorSelect = async (authorId: string) => {
    if (authorId) {
      const author = await getAuthorById(authorId);
      setSelectedAuthor(author);

      const filteredBooks = books.filter((book) => book.author_id === authorId);
      setSelectedBooks(filteredBooks);
    } else {
      setSelectedAuthor(null);
      setSelectedBooks([]);
    }
  };


  const Submit = async (data: any) => {
    try {
      const newAuthor = await createAuthor(data.name, data.email);
      alert(`Autor "${newAuthor.name}" criado com sucesso!`);
      closeModal();
      refreshAuthors();
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
            {modalType === "add" ? "Adicionar Autor(a)" : "Pesquisar Autores"}
              </S.ModalTitle>
            </S.ArticleTitle>
            <S.CloseButton onClick={closeModal}>×</S.CloseButton>
          </S.Header>
          <S.ModalContent>
            {modalType === "add" ? (
              <form onSubmit={handleSubmit(Submit)}>
                <S.Article>
                  <label>Nome:</label>
                  <Controller
                    name="name"
                    control={control}
                    render={({ field }) => (
                      <S.Input {...field} type="text" required />
                    )}
                  />
                </S.Article>

                <S.Article>
                  <label>Email:</label>
                  <Controller
                    name="email"
                    control={control}
                    render={({ field }) => (
                      <S.Input {...field} type="email" required />
                    )}
                  />
                </S.Article>
                <S.footer>
                  <S.ActionButton type="submit">
                    <AiOutlineUserAdd />
                    Adicionar Autor(a)
                    </S.ActionButton>
                </S.footer>
              </form>
            ) : (
              <>
                <S.Article>
                  <label>Autor(a):</label>
                  <Controller
                    name="authorId"
                    control={control}
                    render={({ field }) => (
                      <S.Select
                        {...field}
                        onChange={(e) => {setValue("authorId", e.target.value);
                        handleAuthorSelect(e.target.value);}} required>
                        <option value="" disabled selected>
                          Selecione um Autor(a)
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
                {selectedBooks.length > 0 && (
                  <S.Article>
                    <h3>Livros do Autor(a):</h3>
                    {selectedBooks.map((book) => (
                      <S.Div key={book.id}>
                        <S.ArticleAux>
                          <S.Label>Nome do Livro:</S.Label>
                          <p>{book.name}</p>
                          <S.Label>Páginas:</S.Label>
                          <p>{book.pages}</p>
                        </S.ArticleAux>
                      </S.Div>
                    ))}
                  </S.Article>
                )}
                {selectedAuthor && (
                  <S.Article>
                    <h3>Informações do Autor</h3>
                    <S.ArticleAux>
                      <S.Label>Nome:</S.Label>
                      <p>{selectedAuthor.name}</p>
                      <S.Label>Email:</S.Label>
                      <p>{selectedAuthor.email}</p>
                      </S.ArticleAux>
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
