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
`;

export const ContainerIcon = styled(FaBars)<Sidebar>`
  display: block !important;
  font-size: 28px;
  color: white;
  cursor: pointer;
  &:hover {
    transform: scale(1.2);
    color: #f39c12;
  }
`;

export const Nav = styled.nav<Sidebar>`
  display: ${({ sidebar }) => (sidebar ? "flex" : "none")};
  flex-direction: column;
  gap: 16px;
  margin-top: 32px;
`;

export const Ul = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Li = styled.li`
  color: white;
  padding: 15px;
  font-size: 18px;
  cursor: pointer;
  border-radius: 8px;
  display: flex;
  align-items: baseline;
  gap: 6px;

  &:hover {
    background: #444;
    transform: scale(1.2);
    color: #f39c12;
  }
`;
