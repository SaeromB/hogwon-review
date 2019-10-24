import React from 'react';
import * as S from './CardStyle';
import hwlogo from '../Image/Hwlogo/hwlogo.png';

const MainCard = () => {
  return(
    <S.CardContainer>
      <S.Wrapper>
        <S.Row>
          <S.Column>
            <S.LogoImage>
            <img src={hwlogo} alt={'hwlogo'}/>
            </S.LogoImage>
          </S.Column>
          <S.DoubleColumn>
            <S.Row>
            <S.HogwonName>강남여기학원</S.HogwonName>
            </S.Row>
            <S.Wrapper>
            <S.HogwonHashtag>#수학</S.HogwonHashtag>
            <S.HogwonHashtag>#스파르타</S.HogwonHashtag>
            </S.Wrapper>
          </S.DoubleColumn>
        </S.Row>
      </S.Wrapper>
    </S.CardContainer>
  );
};

export default MainCard;

