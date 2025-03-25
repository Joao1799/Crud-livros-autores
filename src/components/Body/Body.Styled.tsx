import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Main = styled.div`
  width: 70%;
  height: 80vh;
  padding: 2rem;
  background-color: #222;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  overflow: hidden;

  @media (max-width: 768px) {
    width: 90%;
    height: 80vh;
  }
`;

export const Header = styled.div`
  display: flex;
  width: 100%;
  gap: 1rem;
  align-items: center;
  @media (max-width: 330px) {
    flex-wrap: wrap;
  }
`;

export const Body = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  overflow: hidden;
`;

export const Button = styled.button`
  padding: 0.445rem;
  border: none;
  border-radius: 6px;
  transition: 0.3s;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  cursor: pointer;
  color: black;

  &:hover {
    background: #f39c12;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    width: 100%;
  }

  @media (max-width: 485px) {
    text-align: start;
  }
`;

export const Title = styled.h1`
  width: 100%;
  display: flex;
  justify-content: start;
  text-align: center;
  font-size: 2rem;
  color: white;
`;

export const inputText = styled.input`
  width: 100%;
  height: 100%;
`;
