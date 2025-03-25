import React from 'react';
import * as S from './Loading.Styled';
import loadingGif from '../../assets/book.gif';

export const Loading: React.FC = () => {
  return (
    <S.LoadingOverlay>
      <S.Img src={loadingGif}></S.Img>
      <S.H1>Gestão Literária</S.H1>
    </S.LoadingOverlay>
  );
};
