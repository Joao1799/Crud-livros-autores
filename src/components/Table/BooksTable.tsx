import { useEffect, useState } from "react";
import { getBooks, Book, deleteBook } from "../../services/ServiceBook";
import * as S from "./Table.Styled"
import { EditBookModal } from "../Modal/EditModal";

export const BooksTable = ({ reloadTable }: {reloadTable: boolean}) => {
  const [books, setBooks] = useState<Book[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [selectedBookId, setSelectedBookId] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    getBooks().then(setBooks).catch(console.error)
    .finally(() => setIsLoading(false));
  }, [reloadTable]);

  const Delete = async (id: string) => {
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
              <S.TdEdit
                style={{ textAlign: "right", width: "10%", border: "1px solid #e2e8f0", borderWidth: "0 1px 0 0", cursor: "pointer" }}
                onClick={() => {
                  setSelectedBookId(books.id);
                  setIsModalOpen(true);
                }}
              >
                {books.id}
              </S.TdEdit>
              <S.Td style={{border: "1px solid #e2e8f0",borderWidth: "0 1px 0 0",}}>
                {books.name}
              </S.Td>
              <S.Td style={{border: "1px solid #e2e8f0",borderWidth: "0 1px 0 0",}}>{books.pages}</S.Td>
              <S.Td onClick={() => Delete(books.id)}><S.DeleteIcon /></S.Td>
            </S.Tr>
          </S.Tbody>
        ))}
      </S.Table>
      {isModalOpen && selectedBookId !== null && (
      <EditBookModal
        bookId={selectedBookId}
        onClose={() => setIsModalOpen(false)}
        onSave={() => {
          setIsLoading(true);
          getBooks().then(setBooks).finally(() => setIsLoading(false));
        }}
      />
    )}
    </S.Container>
  );
};
