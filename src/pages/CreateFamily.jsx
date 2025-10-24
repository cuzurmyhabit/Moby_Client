import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
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
  margin-bottom: 60px;
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
`;

const CounterWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;

const CounterButton = styled.button`
  width: 33px;
  height: 33px;
  border-radius: 5px;
  background-color: #FFEEBC;
  border: none;
  font-size: 21px;
  font-weight: 700;
  color: #5A4E3A;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: #FFDE7D;
  }

  &:disabled {
    background-color: #E0E0E0;
    color: #A0A0A0;
    cursor: not-allowed;
  }
`;

const CountDisplay = styled.span`
  font-size: 36px;
  font-weight: 700;
  color: #000000;
  min-width: 60px;
  text-align: center;
`;

const BottomSection = styled.div`
  padding: 0 24px 40px 24px;
  width: 100%;
`;

const NextButton = styled.button`
  width: 100%;
  padding: 16px 0;
  background-color: #FFDE7D;
  border-radius: 12px;
  border: none;
  font-size: 18px;
  font-weight: 600;
  color: #ffffff;
  cursor: pointer;
  transition: background-color 0.2s;
  margin-bottom: 12px;

  &:hover {
    background-color: #FFD54F;
  }

  &:disabled {
    background-color: #E0E0E0;
    color: #A0A0A0;
    cursor: not-allowed;
  }
`;

const CreateFamily = () => {
  const [memberCount, setMemberCount] = useState(2);
  const navigate = useNavigate();

  const handleDecrease = () => {
    setMemberCount(prevCount => Math.max(1, prevCount - 1));
  };

  const handleIncrease = () => {
    setMemberCount(prevCount => prevCount + 1);
  };

  const handleNext = () => {
    console.log(`선택된 가족 인원: ${memberCount}명`);
    navigate('/family-created', { state: { memberCount } }); 
  };

  return (
    <MobileContainer>
      <Header showBackButton />

      <MainContent>
        <TextWrapper>
          <Title>함께할 가족의 인원 수</Title>
          <Subtitle>우리 가족의 인원 수를 입력해주세요</Subtitle>
        </TextWrapper>

        <CounterWrapper>
          <CounterButton onClick={handleDecrease} disabled={memberCount <= 1}>
            −
          </CounterButton>
          <CountDisplay>{memberCount}</CountDisplay>
          <CounterButton onClick={handleIncrease}>
            +
          </CounterButton>
        </CounterWrapper>
      </MainContent>

      <BottomSection>
        <NextButton onClick={handleNext}>
          다음
        </NextButton>
      </BottomSection>
    </MobileContainer>
  );
};

export default CreateFamily;