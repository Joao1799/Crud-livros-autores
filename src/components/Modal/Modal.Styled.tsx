import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const Container = styled.div`
  background: white;
  width: 400px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  position: relative;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
  color: #333;
  padding: 0.745rem;

  &:hover {
    color: red;
  }
`;

export const ModalContent = styled.div`
  margin-bottom: 20px;
  font-size: 16px;
  color: #555;
`;

export const ModalTitle = styled.h2`
  margin-bottom: 15px;
  font-size: 20px;
  color: #333;
`;

export const Article = styled.article`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 100%;
  gap: 4px;
  margin-bottom: 4px;
`

export const Input = styled.input`
    color: #334155;
    background: #ffffff;
    padding: 0.3rem 0.75rem;
    border: 1px solid #94a3b8;
    appearance: none;
    border-radius: 4px;
    width: 100%;
    &:focus {
    outline: 1px solid var(--p-focus-ring-color);
    outline-offset: -1px;
    box-shadow: none;
    border-color: #707a88;
  }
`


export const Select = styled.select`
    color: #334155;
    background: #ffffff;
    padding: 0.3rem 0.75rem;
    border: 1px solid #94a3b8;
    appearance: none;
    border-radius: 4px;
    width: 100%;
    cursor: pointer;

    &:focus {
    outline: 1px solid ;
    outline-offset: -1px;
    box-shadow: none;
    border-color: #707a88;
  }
`

export const footer = styled.div`
  display: flex;
  justify-content: end;
  margin-top: 12px;
`

export const ActionButton = styled.button`
  background: #454546;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background: #f39c12;
  }
`;
