import { useState } from "react";
import * as S from "./Body.Styled";
import { BookModal } from "../Modal/BookModal";
import { AuthorModal } from "../Modal/AuthorModal";
import { AuthorTable } from "../Table/AuthorTable";
import { FaSearch } from "react-icons/fa";
import { AiOutlineUserAdd } from "react-icons/ai";
import { BiBookAdd } from "react-icons/bi";
import { BooksTable } from "../Table/BooksTable";

export const Body = ({ selectedScreen }: { selectedScreen: string }) => {
  const [modalType, setModalType] = useState<"add" | "search" | null>(null);
  const [openModalBook, setOpenModalBook] = useState<boolean>(false);
  const [openModalAuthor, setOpenModalAuthor] = useState<boolean>(false);
  
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

  return (
    <S.Section>
      <S.Main>
        {selectedScreen === "Livros" && (
          <>
            <S.Title>Tabela de Livros</S.Title>
            <S.Header>
              <S.Button onClick={() => modalAuthor("add")}>
                Adicionar Livro
                <BiBookAdd />
              </S.Button>

              <S.Button onClick={() => modalAuthor("search")}>
                Pesquisar Livro
                <FaSearch />
              </S.Button>
            </S.Header>

            <S.Body>
              <BookModal
                isOpen={openModalBook}
                closeModal={closeModal}
                modalType={modalType}
              />
              <BooksTable></BooksTable>
            </S.Body>
          </>
        )}

        {selectedScreen === "Autor" && (
          <>
            <S.Title>Tabela de Autor</S.Title>
            <S.Header>
              <S.Button onClick={() => modalAuthor("add")}>
                Adicionar Autor <AiOutlineUserAdd />
              </S.Button>

              <S.Button onClick={() => modalAuthor("search")}>
                Pesquisar Autor
                <FaSearch />
              </S.Button>
            </S.Header>

            <S.Body>
              <AuthorModal
                isOpen={openModalAuthor}
                closeModal={closeModal}
                modalType={modalType}
              />
              <AuthorTable />
            </S.Body>
          </>
        )}
      </S.Main>
    </S.Section>
  );
};
