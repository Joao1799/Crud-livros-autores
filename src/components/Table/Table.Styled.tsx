import styled, {keyframes} from "styled-components";
import { FaRegTrashAlt } from "react-icons/fa";

export const Container = styled.section`
  width: 100%;
  height: 100%;
  overflow-y:auto ;
  overflow-x: auto; 
`;

export const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const LoadingOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

export const Spinner = styled.div`
  border: 8px solid #f3f3f3;
  border-top: 8px solid #f39c12;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: ${spin} 2s linear infinite;
`;

export const Table = styled.table`
  width: 100%;
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
  height: 80px;
  border: 1px solid #b9bec4;
  border-width: 0 0 1px 0;
`;

export const Tbody = styled.tbody`

`

export const Td = styled.td`
  text-align: left;
  padding: 0.15rem 1rem;
  height: 80px;
`;

export const TdEdit = styled.td`
  text-align: left;
  padding: 0.15rem 1rem;
  height: 80px;
  transition: .2s;

  &:hover {
  transform: scale(1.05);
  color: #f39c12;
  }
`;

export const DeleteIcon = styled(FaRegTrashAlt)`
  cursor: pointer;
  &:hover {
  background: #444;
  transform: scale(1.2);
  color: red;
  }
`;
