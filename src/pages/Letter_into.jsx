import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import letter from '../assets/letter_into.svg';
import Nav from '../components/Nav';
// import Nav from '../components/Nav'; // Nav 컴포넌트는 제거하고 하단 버튼을 직접 구현합니다.

// --- Styled Components ---

const MobileContainer = styled.div`
  width: 100%;
  max-width: 390px;
  min-height: 100vh;
  background-color: #ffffff;
  background-image: url(${letter});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.1);
  overflow-y: auto; 
  -webkit-overflow-scrolling: touch; 

  @media (max-width: 390px) {
    max-width: 100%;
    box-shadow: none;
  }
`;

const ContentWrapper = styled.div`
  flex: 1; /* 남은 공간을 차지하여 버튼을 하단으로 밀어냄 */
  width: 100%;
`;

const ButtonContainer = styled.div`
  width: 90%;
  padding: 0 20px 150px 59px; 
  display: flex;
  justify-content: space-between; /* ← 세미콜론 추가 */
  gap: 16px; /* ← 버튼 사이 간격 약간 늘림 (기존 12px → 16px) */
  box-sizing: border-box;
  z-index: 10;
`;



const ActionButton = styled.button`
  flex: 1; 
  z-index: 1000;
  height: 40px;
  border: none;
  border-radius: 12px;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  transition: opacity 0.2s;

  /* '나가기' 버튼 (Frame 60) */
  ${props => props.$variant === 'exit' && `
    background-color: #F8F8F8;
    color: #333333;
    border: 1px solid #E0E0E0;
    &:hover {
      opacity: 0.9;
      background-color: #EFEFEF;
    }
  `}

  /* '편지쓰기' 버튼 (Frame 61) */
  ${props => props.$variant === 'write' && `
    background-color: #FCE8A6; /* 이미지의 노란색 계열 */
    color: #333333;
    &:hover {
      opacity: 0.9;
      background-color: #F7E099;
    }
  `}
`;

const HomeIndicator = styled.div`
  width: 134px;
  height: 5px;
  /* 버튼 컨테이너가 하단 패딩을 가지므로, HomeIndicator 위치를 상대적으로 조정하거나 제거합니다. */
  /* 여기서는 Home Indicator를 제거하고, 하단 패딩으로 공간만 확보하겠습니다. */
  /* 만약 Home Indicator를 유지해야 한다면 아래 코드를 사용하고 ButtonContainer의 하단 패딩을 줄이세요. */
  /* position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 8px;
  background-color: #000;
  border-radius: 100px; 
  */
`;

const Letter_into = () => {
  const navigate = useNavigate();

  const handleWriteLetter = () => {
    navigate('/writeLetter'); // 👈 /writeLetter 경로로 이동
  };

  const handleExit = () => {
    // 나가기 버튼의 동작을 정의합니다 (예: 이전 페이지로 돌아가기 또는 홈으로 이동)
    navigate(-1); 
  };

  return (
    <MobileContainer>
      {/* ContentWrapper가 flex: 1로 남은 공간을 채워 버튼을 하단으로 밀어냅니다. */}
      <ContentWrapper /> 
      
      <ButtonContainer>
        <ActionButton $variant="exit" onClick={handleExit}>
          나가기
        </ActionButton>
        <ActionButton $variant="write" onClick={handleWriteLetter}>
          편지쓰기
        </ActionButton>
      </ButtonContainer>
      
      <Nav/>
    </MobileContainer>
  );
};

export default Letter_into;