import { useEffect, useState } from "react";
import { getAuthors, Author, deleteAuthor } from "../../services/ServiceAuthor";
import * as S from "./Table.Styled";

export const AuthorTable = ({reloadTable}:{reloadTable: boolean}) => {
  const [author, setAuthor] = useState<Author[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setIsLoading(true);
    getAuthors().then(setAuthor).catch(console.error)
    .finally(() => setIsLoading(false));
  },[reloadTable]);

  const Delete = async (id: number) => {
    try {
      await deleteAuthor(id);
      setAuthor(author.filter(author =>author.id !== id));
      alert(`Autor deletado com sucesso!`);
    } catch (error) {
      alert("Erro ao deletar Autor. Tente novamente.");
    }
  };

  return (
    <S.Container>
      {isLoading && (
        <S.LoadingOverlay>
          <S.Spinner />
        </S.LoadingOverlay>
      )}      
      <S.Table>
      {author.length > 0 && (
        <S.Thead>
          <S.Tr>
            <S.Th>ID Autor:</S.Th>
            <S.Th>Nome Autor:</S.Th>
            <S.Th>Email:</S.Th>
            <S.Th></S.Th>
          </S.Tr>
        </S.Thead>
      )}  
        {author.map((author) => (
          <S.Tbody key={author.id}>
            <S.Tr>
              <S.Td style={{ textAlign: "right", width: `10%`,border: "1px solid #e2e8f0",borderWidth: "0 1px 0 0", }}>
                {author.id}
              </S.Td>
              <S.Td style={{border: "1px solid #e2e8f0",borderWidth: "0 1px 0 0",}}>
                {author.name}
              </S.Td>
              <S.Td style={{border: "1px solid #e2e8f0",borderWidth: "0 1px 0 0",}}>{author.email}</S.Td>
              <S.Td onClick={() => Delete(author.id)}><S.DeleteIcon /></S.Td>
            </S.Tr>
          </S.Tbody>
        ))}
      </S.Table>
    </S.Container>
  );
};
