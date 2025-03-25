import styled from "styled-components";
import { FaRegTrashAlt } from "react-icons/fa";

export const Container = styled.section`
  width: 100%;
  height: 100%;
  overflow: hidden;
  overflow-x: auto;
`;

export const Table = styled.table`
  width: 100%;
  height: 100%;
  background: #444;
  color: white;
  border-spacing: 0px;
  border-radius: 8px;
  border-collapse: collapse;
  text-wrap:nowrap;
`;

export const Thead = styled.thead`
  width: 100%;
  border-radius: 8px;
`;

export const Tr = styled.tr`
  border-radius: 8px;
`;

export const Th = styled.th`
  text-align: left;
  padding: 0.75rem 1rem;
  border: 1px solid #b9bec4;
  border-width: 0 0 1px 0;
`;

export const Tbody = styled.tbody``;

export const Td = styled.td`
  text-align: left;
  padding: 0.15rem 1rem;
`;

export const DeleteIcon = styled(FaRegTrashAlt)`
  cursor: pointer;
  &:hover {
  background: #444;
  transform: scale(1.2);
  color: red;
  }
`;
