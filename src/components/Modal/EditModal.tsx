import { useEffect, useState } from "react";
import { Book, updateBook, getBookById } from "../../services/ServiceBook";
import * as S from "./Modal.Styled";

type Props = {
  bookId: string;
  onClose: () => void;
  onSave: () => void;
};

export const EditBookModal = ({ bookId, onClose, onSave }: Props) => {
  const [book, setBook] = useState<Book | null>(null);
  const [name, setName] = useState("");
  const [pages, setPages] = useState<number>(0);

  useEffect(() => {
    getBookById(bookId).then((data) => {
      setBook(data);
      setName(data.name);
      setPages(data?.pages);
    });
  }, [bookId]);

  const handleSave = async () => {
    if (!book) return;
    try {
      await updateBook(bookId, { ...book, name, pages });
      alert("Livro atualizado com sucesso!");
      onSave();
      onClose();
    } catch (error) {
      alert("Erro ao atualizar livro.");
    }
  };

  if (!book) return null;

  return (
    <>
      <S.Overlay>
        <S.Container>
          <S.Header>
            <S.ArticleTitle>
              <S.ModalTitle>Editar Livro</S.ModalTitle>
            </S.ArticleTitle>
            <S.CloseButton onClick={onClose}>×</S.CloseButton>
          </S.Header>

          <S.ModalContent>
            <form onSubmit={(e) => { e.preventDefault(); handleSave(); }}>
              <S.Article>
                <label>ID:</label>
                <S.Input type="text" value={book.id} readOnly />
              </S.Article>

              <S.Article>
                <label>Nome do Livro:</label>
                <S.Input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </S.Article>

              <S.Article>
                <label>Páginas:</label>
                <S.Input
                  type="number"
                  value={pages}
                  onChange={(e) => setPages(Number(e.target.value))}
                  required
                />
              </S.Article>

              <S.footer>
                <S.ActionButton type="submit">
                  Salvar Alterações
                </S.ActionButton>
              </S.footer>
            </form>
          </S.ModalContent>
        </S.Container>
      </S.Overlay>
    </>
  );
};
