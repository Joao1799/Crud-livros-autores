import { useEffect, useState } from "react";
import { getBooks, Book, deleteBook } from "../../services/ServiceBook";
import * as S from "./Table.Styled"

export const BooksTable = ({ reloadTable }: {reloadTable: boolean}) => {
  const [books, setBooks] = useState<Book[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    getBooks().then(setBooks).catch(console.error)
    .finally(() => setIsLoading(false));
  }, [reloadTable]);

  const Delete = async (id: number) => {
    try {
      await deleteBook(id);
      alert(`Livro deletado com sucesso!`);
      setBooks(books.filter(book => book.id !== id));
    } catch (error) {
      alert("Erro ao deletar livro. Tente novamente.");
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
      {books.length > 0 && (  
        <S.Thead>
          <S.Tr>
            <S.Th>ID Livro:</S.Th>
            <S.Th>Nome do Livro:</S.Th>
            <S.Th>Páginas:</S.Th>
            <S.Th></S.Th>
          </S.Tr>
        </S.Thead>
      )}  
        {books.map((books) => (
          <S.Tbody key={books.id}>
            <S.Tr>
              <S.Td style={{ textAlign: "right", width: `10%`,border: "1px solid #e2e8f0",borderWidth: "0 1px 0 0", }}>
                {books.id}
              </S.Td>
              <S.Td style={{border: "1px solid #e2e8f0",borderWidth: "0 1px 0 0",}}>
                {books.name}
              </S.Td>
              <S.Td style={{border: "1px solid #e2e8f0",borderWidth: "0 1px 0 0",}}>{books.pages}</S.Td>
              <S.Td onClick={() => Delete(books.id)}><S.DeleteIcon /></S.Td>
            </S.Tr>
          </S.Tbody>
        ))}
      </S.Table>
    </S.Container>
  );
};
