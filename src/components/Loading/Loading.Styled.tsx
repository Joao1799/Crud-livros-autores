import styled from 'styled-components';

export const LoadingOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #293244;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 31231;
`;

export const Img = styled.img`
  width: 8%;
`;

export const H1 = styled.h1`
    color: #f39c12;
    padding: 15px;
    cursor: pointer;
    transition: .3s;
`;
