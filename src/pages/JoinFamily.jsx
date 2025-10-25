import React, { useState } from 'react';
import styled from 'styled-components';
import logo from '../assets/logo.svg';

// ----------------------------------------------------
// 1. Style-Components 정의 (이전 페이지들과 공통 스타일 유지)
// ----------------------------------------------------

const MAIN_COLOR = '#ffcc00'; 
const BACKGROUND_COLOR = '#ffffff'; 
const TEXT_COLOR = '#000';

const CodePageContainer = styled.div`
    width: 100%;
    max-width: 390px;
    height: 100vh;
    max-height: 844px;
    background-color: #ffffff;
    position: relative;
    display: flex;
    flex-direction: column;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.1);

    @media (max-width: 390px) {
        max-width: 100%;
        max-height: 100vh;
        box-shadow: none;
  }
`;

const IosStatusBar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px 0;
    font-size: 15px;
    font-weight: 600;
    color: ${TEXT_COLOR};
`;

const Header = styled.header`
    display: flex;
    align-items: center;
    padding: 10px 15px;
    position: relative;
    justify-content: center;
`;

const BackArrow = styled.div`
    position: absolute;
    left: 15px;
    font-size: 24px;
    color: ${TEXT_COLOR};
    cursor: pointer;
`;

const LogoImage = styled.img`
  width: 70px;
  height: 37px;
`;

const MainContent = styled.main`
    flex-grow: 1;
    padding: 0 30px;
    text-align: center;
    margin-top: 50px;
`;

const Title = styled.h1`
    font-size: 28px;
    color: ${TEXT_COLOR};
    margin-top: 50px; 
    margin-bottom: 8px;
`;

const Subtitle = styled.p`
    font-size: 14px;
    color: #888;
    margin-bottom: 50px;
    text-align: center;
`;

const InputSection = styled.div`
    width: 100%;
    text-align: left;
`;

const InputLabel = styled.label`
    display: block;
    font-size: 16px;
    font-weight: 500;
    color: ${TEXT_COLOR};
    margin-bottom: 10px;
`;

const CodeInput = styled.input`
    width: 100%;
    padding: 15px 20px;
    border: none;
    border-radius: 12px;
    background-color: #f5f5f5; 
    font-size: 16px;
    color: ${TEXT_COLOR};
    outline: none;
    box-sizing: border-box;
    
    &::placeholder {
        color: #999;
    }
    
    &:focus {
        box-shadow: 0 0 0 2px ${MAIN_COLOR}; 
    }
`;

const CompleteButton = styled.button`
    width: 100%;
    height: 56px;
    margin: 0 auto 20px;
    margin-bottom:74px;
    margin-top:18px;
    padding: 15px 0;
    background-color: #FFDE7D;
    color: #fff;
    border: none;
    border-radius: 12px;
    font-size: 18px;
    font-weight: 600;
    cursor: pointer;
    transition: opacity 0.2s;

    &:disabled {
        /* 이미지처럼 활성화 색상을 유지하되, 불투명도를 낮춥니다. */
        opacity: 0.6;
        cursor: not-allowed;
    }

    &:not(:disabled):hover {
        opacity: 0.8;
    }
`;

const HomeIndicator = styled.div`
    position: absolute;
    bottom: 8px;
    left: 50%;
    transform: translateX(-50%);
    width: 134px;
    height: 5px;
    background-color: #000;
    border-radius: 100px;
`;

// ----------------------------------------------------
// 2. React 컴포넌트 로직
// ----------------------------------------------------

const CodePage = () => {
    const [code, setCode] = useState('');

    const handleChange = (e) => {
        // 입력되는 코드를 대문자로 변환하여 저장
        setCode(e.target.value.toUpperCase()); 
    };

    const handleComplete = () => {
        if (code.trim()) {
            alert(`입력된 가족 코드: ${code.trim()}`);
            // 여기에 코드 확인 및 다음 페이지 이동 로직을 구현합니다.
        } else {
            alert('참여 코드를 입력해주세요.');
        }
    };
    const isButtonEnabled = code.trim().length > 0;

    return (
        <CodePageContainer>
            <Header>
                <BackArrow>←</BackArrow>
                <LogoImage src={logo} alt="Moby 로고" />
            </Header>
            
            <MainContent>
                <Title>우리 가족 코드</Title>
                <Subtitle>생성된 우리 가족의 참여 코드를 입력해주세요</Subtitle>

                <InputSection>
                    <InputLabel htmlFor="familyCodeInput">우리 가족 코드</InputLabel>
                    <CodeInput 
                        id="familyCodeInput"
                        type="text"
                        placeholder="참여 코드 입력하기"
                        value={code}
                        onChange={handleChange}
                        maxLength={10} 
                        autoFocus
                    />
                </InputSection>
                
                <CompleteButton 
                    onClick={handleComplete}
                    disabled={!isButtonEnabled}
                >
                    완료
                </CompleteButton>
            </MainContent>

            {/* 하단 홈 인디케이터 */}
        </CodePageContainer>
    );
};

export default CodePage;