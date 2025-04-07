import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #293244;
`;


export const H1 = styled.h1`
    color: #f39c12;
    text-shadow: 2px 2px 4px #00000032;
`

export const boxLogin = styled.div`
    height: 60%;
    width: 40%;
    background-color: #444;
    border-radius: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: white;
    box-shadow: 1px 2px 10px 2px #00000032;
    gap:2rem;
`;

export const Header = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 1.8rem;
    height: 20%;
    
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 8px;
`

export const Label = styled.label`
    width: 50%;
`

export const Input = styled.input`
    border: none;
    border-radius: 4px;
    padding: 0.645rem 0.445rem;
    width: 50%;
    box-shadow: 1px 2px 10px 2px #00000032;
`

export const Buttom = styled.button`
    border: none;
    border-radius: 4px;
    padding: 0.645rem 0.445rem;
    font-weight: bold;
    transition: 0.2s;
    box-shadow: 1px 2px 10px 2px #00000032;

    cursor: pointer;
        &:hover {
        background: #fcfbfb;
        transform: scale(1.05);
        color: #f39c12;
    }
    
`

export const Footer = styled.footer`
    display: flex;
    justify-content: end;
    width: 50%;
`
