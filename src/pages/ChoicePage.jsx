import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'; 
import Header from '../components/Header';

const MobileContainer = styled.div`
  width: 100%;
  max-width: 390px;
  height: 100vh;
  max-height: 844px;
  background-color: #ffffff;
  position: relative;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.1);
  font-family: 'IM혜민체', sans-serif;

  @media (max-width: 390px) {
    max-width: 100%;
    max-height: 100vh;
    box-shadow: none;
  }
`;

const MainContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding: 150px 16px 0 16px;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
`;

const Title = styled.h1`
  font-size: 26px;
  font-weight: 700;
  color: #222222;
  margin: 0 0 12px 0;
`;

const Subtitle = styled.p`
  font-size: 15px;
  color: #767676;
  text-align: center;
  line-height: 1.5;
  margin: 0;
  white-space: pre-line;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const StyledLinkButton = styled(Link)`
  display: block;
  width: 100%;
  padding: 15px 0;
  background-color: #FFEEBC;
  border-radius: 10px;
  
  text-align: center;
  font-size: 20px;
  font-weight: 200;
  color: #000000;
  text-decoration: none;
  
  &:hover {
    background-color: #FFDE7D;
  }
`;
const ChoicePage = () => {
  return (
    <MobileContainer>
      <Header />

      <MainContent>
        <TextWrapper>
          <Title>가족과 함께 진심 나누기</Title>
          <Subtitle>
            새로운 가족을 만들거나 가족에 참여해서{'\n'}함께 진심을 나눠보세요.
          </Subtitle>
        </TextWrapper>

        <ButtonWrapper>
          <StyledLinkButton to="/create-family">
            새로운 가족 만들기
          </StyledLinkButton>
          <StyledLinkButton to="/join-family">
            우리 가족 참여하기
          </StyledLinkButton>
        </ButtonWrapper>
      </MainContent>

    </MobileContainer>
  );
};

export default ChoicePage;