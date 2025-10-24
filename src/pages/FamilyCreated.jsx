import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header'; 

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const fadeOut = keyframes`
  from { opacity: 1; transform: translateY(0); }
  to { opacity: 0; transform: translateY(20px); }
`;

const MobileContainer = styled.div`
  width: 100%;
  max-width: 390px;
  height: 100vh;
  max-height: 844px;
  background-color: #ffffff;
  position: relative;
  display: flex;
  flex-direction: column;
  font-family: 'IM혜민체', sans-serif;
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
  color: #000000;
  margin: 0 0 12px 0;
`;

const Subtitle = styled.p`
  font-size: 15px;
  color: #767676;
  text-align: center;
  line-height: 1.5;
  margin: 0;
`;

const CodeCard = styled.div`
  width: 100%;
  max-width: 400px;
  background-color: #ffffff;
  border: 1px solid #EAEAEA;
  border-radius: 20px;
  padding: 30px 24px;
  box-sizing: border-box;
`;

const CardTitle = styled.h2`
  font-size: 18px;
  font-weight: 700;
  color: #222222;
  margin: 0;
  text-align: center;
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #F0F0F0;
  margin: 20px 0;
`;

const CodeSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const CodeLabel = styled.label`
  font-size: 14px;
  color: #F5F5F5;
  font-weight: 600;
`;

const CodeDisplayWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const CodeDisplay = styled.div`
  width: 100%;
  padding: 16px;
  padding-right: 50px;
  background-color: #FFFFFF;
  border: 1px solid #DCDCDC;
  border-radius: 12px;
  font-size: 18px;
  font-weight: 600;
  color: #222222;
  box-sizing: border-box;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const CopyButton = styled.button`
  position: absolute;
  right: 10px;
  top: 40%;
  width: 20px;
  height: 20px;
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  color: #F5F5F5;

  &:hover {
    color: #222222;
  }
`;

const StartButton = styled.button`
  width: 100%;
  margin-top: 24px;
  padding: 12px 0;
  background-color: #FFDE7D;
  border-radius: 10px;
  border: none;
  font-size: 16px;
  font-weight: 600;
  color: #ffffff;
  cursor: pointer;

  &:hover {
    background-color: #FFD54F;
  }
`;

const ToastMessage = styled.div`
  position: fixed;
  bottom: 80px;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  padding: 12px 24px;
  border-radius: 20px;
  font-size: 14px;
  z-index: 100;
  animation-fill-mode: forwards;
  visibility: ${props => (props.$show ? 'visible' : 'hidden')};
`;

const HomeIndicator = styled.div`
  width: 134px;
  height: 5px;
  background-color: #000;
  border-radius: 100px;
  margin: 0 auto 8px auto;
`;

const CopyIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
  </svg>
);


const CreatedFamily = () => {
  const [familyCode] = useState('Xliywzpo4');
  const [showToast, setShowToast] = useState(false);
  const navigate = useNavigate();

  const handleCopyCode = () => {
    const textArea = document.createElement('textarea');
    textArea.value = familyCode;
    textArea.style.position = 'fixed';
    textArea.style.opacity = '0';
    document.body.appendChild(textArea);
    textArea.select();
    
    try {
      document.execCommand('copy');
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2000);
    } catch (err) {
      console.error('클립보드 복사 실패:', err);
    }
    
    document.body.removeChild(textArea);
  };

  const handleStart = () => {
    navigate('/main'); 
  };

  return (
    <MobileContainer>
      <Header />

      <MainContent>
        <TextWrapper>
          <Title>가족 하나가 생겼어요</Title>
          <Subtitle>코드를 공유하고 가족 수를 채워주세요</Subtitle>
        </TextWrapper>

        <CodeCard>
          <CardTitle>우리 가족 공유 코드</CardTitle>
          <Divider />
          <CodeSection>
            <CodeLabel htmlFor="family-code">내가 만든 코드</CodeLabel>
            <CodeDisplayWrapper>
              <CodeDisplay id="family-code">{familyCode}</CodeDisplay>
              <CopyButton onClick={handleCopyCode} title="코드 복사하기">
                <CopyIcon />
              </CopyButton>
            </CodeDisplayWrapper>
          </CodeSection>
          <StartButton onClick={handleStart}>
            시작하기
          </StartButton>
        </CodeCard>
      </MainContent>

      <HomeIndicator />

      <ToastMessage $show={showToast}>
        코드가 클립보드에 복사되었습니다.
      </ToastMessage>
    </MobileContainer>
  );
};

export default CreatedFamily;