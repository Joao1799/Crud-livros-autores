import { useState } from "react";
import * as S from "./Body.Styled";
import { BookModal } from "../Modal/BookModal";
import { AuthorModal } from "../Modal/AuthorModal";
import { AuthorTable } from "../Table/AuthorTable";
import { FaSearch } from "react-icons/fa";
import { AiOutlineUserAdd } from "react-icons/ai";
import { BooksTable } from "../Table/BooksTable";
import { FaBook } from 'react-icons/fa';

export const Body = ({ selectedScreen }: { selectedScreen: string }) => {
  const [modalType, setModalType] = useState<"add" | "search" | null>(null);
  const [openModalBook, setOpenModalBook] = useState<boolean>(false);
  const [openModalAuthor, setOpenModalAuthor] = useState<boolean>(false);
  const [reloadTable, setReloadTable] = useState<boolean>(false);
  
  const modalAuthor = (type: "add" | "search") => {
    setModalType(type);
    setOpenModalAuthor(true);
    setOpenModalBook(true);
  };

  const closeModal = () => {
    setOpenModalAuthor(false);
    setOpenModalBook(false);
    setModalType(null);
  };

  const refresTable = () => {
    setReloadTable((aux) => !aux);
  };

  return (
    <S.Section>
      <S.Main>
        {selectedScreen === "Livros" && (
          <>
            <S.Title>Tabela de Livros</S.Title>
            <S.Header>
              <S.Button onClick={() => modalAuthor("add")}>
                <FaBook size={24} color="black" />
                Adicionar Livro
              </S.Button>

              <S.Button onClick={() => modalAuthor("search")}>
                <FaSearch size={24} color="black"/>
                Pesquisar Livro
              </S.Button>
            </S.Header>

            <S.Body>
              <BookModal
                isOpen={openModalBook}
                closeModal={closeModal}
                modalType={modalType}
                refreshBooks={refresTable}
              />
              <BooksTable reloadTable={reloadTable}></BooksTable>
            </S.Body>
          </>
        )}

        {selectedScreen === "Autor" && (
          <>
            <S.Title>Tabela de Autores</S.Title>
            <S.Header>
              <S.Button onClick={() => modalAuthor("add")}>
                <AiOutlineUserAdd size={24} color="black"/>
                Adicionar Autor(a)
              </S.Button>

              <S.Button onClick={() => modalAuthor("search")}>
                <FaSearch size={24} color="black"/>
                Pesquisar Autores
              </S.Button>
            </S.Header>

            <S.Body>
              <AuthorModal
                isOpen={openModalAuthor}
                closeModal={closeModal}
                modalType={modalType}
                refreshAuthors={refresTable}
              />
              <AuthorTable reloadTable={reloadTable}/>
            </S.Body>
          </>
        )}
      </S.Main>
    </S.Section>
  );
};
