import { FaBars } from "react-icons/fa";
import styled from "styled-components";

interface Sidebar {
  sidebar: boolean;
}

export const Container = styled.div<Sidebar>`
  width: ${({ sidebar }) => (sidebar ? "150px" : "80px")};
  height: 100%;
  background: #222;
  padding: ${({ sidebar }) => (sidebar ? "20px" : "20px")};
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  display: flex;
  flex-direction: ${({ sidebar }) => (sidebar ? "column" : "row")};
  justify-content: ${({ sidebar }) => (sidebar ? "flex-start" : "flex-start")};
  transition: width 0.3s linear;

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: row;
    align-items: center;
    gap: 24px;
  }

`;

export const ContainerIcon = styled(FaBars)<Sidebar>`
  display: block ;
  font-size: 28px;
  color: white;
  cursor: pointer;
  transition: .3s;
  &:hover {
    transform: scale(1.2);
    color: #f39c12;
  }

  @media (max-width: 768px) {
    pointer-events: none; 
    display: none;
  }
`;

export const Nav = styled.nav<Sidebar>`
  display: ${({ sidebar }) => (sidebar ? "flex" : "none")};
  gap: 16px;
  margin-top: 32px;

  @media (max-width: 768px) {
    display: flex;
    margin-top: 0;
  }
`;

export const Ul = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (max-width: 768px) {
    flex-direction: row;
  }
`;

export const Li = styled.li`
  color: white;
  padding: 15px;
  font-size: 20px;
  cursor: pointer;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 6px;
  transition: .3s;
  &:hover {
    background: #444;
    transform: scale(1.2);
    color: #f39c12;
  }

  @media (max-width: 768px) {
    padding: 12px;
  }
`;
