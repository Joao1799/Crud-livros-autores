import { useState } from "react";
import * as S from "./SideBar.Styled";
import { LuUserRoundPen } from "react-icons/lu";
import { FaBook } from "react-icons/fa";

export const SideBar = ({setSelectedScreen}: {setSelectedScreen: 
  (screen: string) => void;}) => {

  const [sidebar, setSidebar] = useState<boolean>(false);
  const toggleSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <S.Container sidebar={sidebar}>
        <S.ContainerIcon
          onClick={toggleSidebar}
          sidebar={sidebar}
        ></S.ContainerIcon>
        <S.Nav sidebar={sidebar}>
          <S.Ul>
            <S.Li onClick={() => setSelectedScreen("Autor")}>
              Autor <LuUserRoundPen />
            </S.Li>
            <S.Li onClick={() => setSelectedScreen("Livros")}>
              Livros
              <FaBook />
            </S.Li>
          </S.Ul>
        </S.Nav>
      </S.Container>
    </>
  );
};
