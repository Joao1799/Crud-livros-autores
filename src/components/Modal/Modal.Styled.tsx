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
  opacity: 0;
  animation: fadeIn 0.5s forwards;
  @keyframes fadeIn {
      to {
          opacity: 1;
      }
  }
`;

export const Container = styled.div`
  background: white;
  width: 400px;
  padding: 20px;
  max-width: 500px;
  overflow-y: auto;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  position: relative;
  opacity: 0;
  transform: scale(0.5);
  animation: fadeInScale 0.5s forwards;
  @keyframes fadeInScale {
      to {
          opacity: 1;
          transform: scale(1);
      }
  }

  @media (max-width: 768px) {
    width: 80%;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
  width: 100%;
`

export const ArticleTitle = styled.article`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
`

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #333;
  transition: .2s;
  &:hover {
    color: red;
    transform: scale(1.2);
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

export const Div = styled.div`
  width: 100%;
`

export const ArticleAux = styled.article`
  background-color: #c0bebef0;
  display: flex;
  width: 100%;
  border-radius: 4px;
  flex-direction: column;
  align-items: start;
  width: 100%;
  gap: 4px;
  margin-bottom: 4px;
  text-align: start;
  padding: 6px;  
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
`
export const Label = styled.label`
  font-weight: 700;
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
  transition: .3s;
  display: flex;
  align-items: center;
  gap: 4px;

  &:hover {
    background: #f39c12;
  }
`;
