import React from 'react';
import * as S from './Loading.Styled';

export const Loading: React.FC = () => {
  return (
    <S.LoadingOverlay>
      <S.Img src='src/assets/book.gif'></S.Img>
      <S.H1>Gestão Literária</S.H1>
    </S.LoadingOverlay>
  );
};
