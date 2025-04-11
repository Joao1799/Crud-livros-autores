import { useEffect, useState } from "react";
import * as S from "./Modal.Styled";
import { getAuthorById, updateAuthor } from "../../services/ServiceAuthor";

type Props = {
  AuthorId: string;
  onClose: () => void;
  onSave: () => void;
};

export const EditAuthorModal = ({ AuthorId, onClose, onSave }: Props) => {
  const [Author, setAuthor] = useState<any | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    getAuthorById(AuthorId).then((data) => {
      setAuthor(data);
      setName(data.name);
      setEmail(data.email);
    });
  }, [AuthorId]);

  const handleSave = async () => {
    if (!Author) return;
    try {
      await updateAuthor(AuthorId, { ...Author, name, email });
      alert("Autor atualizado com sucesso!");
      onSave();
      onClose();
    } catch (error) {
      alert("Erro ao atualizar autor.");
    }
  };

  if (!Author) return null;

  return (
    <>
      <S.Overlay>
        <S.Container>
          <S.Header>
            <S.ArticleTitle>
              <S.ModalTitle>Editar Autor</S.ModalTitle>
            </S.ArticleTitle>
            <S.CloseButton onClick={onClose}>×</S.CloseButton>
          </S.Header>

          <S.ModalContent>
            <form onSubmit={(e) => { e.preventDefault(); handleSave(); }}>
              <S.Article>
                <label>ID:</label>
                <S.Input type="text" value={Author.id} readOnly />
              </S.Article>

              <S.Article>
                <label>Nome:</label>
                <S.Input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </S.Article>

              <S.Article>
                <label>Email:</label>
                <S.Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
