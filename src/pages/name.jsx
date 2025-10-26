import React, { useState } from 'react';
import styled from 'styled-components';
import logo from '../assets/logo.svg';
import { useNavigate } from 'react-router-dom';


const MAIN_COLOR = '#ffcc00'; 
const BACKGROUND_COLOR = '#fff9f9'; // 연분홍색 배경
const TEXT_COLOR = '#000';

const NameContainer = styled.div`
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
    font-weight: bold;
    color: ${TEXT_COLOR};
    margin-top: 50px; 
    margin-bottom: 8px;
`;

const Subtitle = styled.p`
    font-size: 14px;
    color: #888;
    margin-bottom: 120px;
    text-align: center;
`;

const NameInput = styled.input`
    width: 100%;
    border: none;
    outline: none;
    background: transparent;
    text-align: center;
    font-size: 30px;
    color: #333;
    font-weight: 300;
    padding: 10px 0;
    margin: 0;
    
    /* 포커스 시 커서 색상을 MAIN_COLOR로 변경 (선택적) */
    caret-color: ${MAIN_COLOR};

    &::placeholder {
        color: #ddd;
        opacity: 1; 
    }
`;

const NextButton = styled.button`
    width: 361px;
    height: 44px;
    margin: 0 auto 20px;
    margin-bottom:74px;
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

const Name = () => {
    const [name, setName] = useState('홍길동');

    const handleChange = (e) => {
        setName(e.target.value);
    };
    const navigate = useNavigate();

    const handleNext = () => {
        if (name.trim()) {
            navigate('/choice'); 
        }
    };
    const handleBefore =() => {
        navigate("/"); 
    };

    const isButtonEnabled = name.trim().length > 0;

    return (
        <NameContainer>
            {/* iOS 상태 표시줄 (데모용) */}

            <Header>
                <BackArrow onClick={handleBefore}>←</BackArrow>
                <LogoImage src={logo} alt="Moby 로고" />
            </Header>
            
            <MainContent>
                <Title>이름</Title>
                <Subtitle>자신의 이름을 입력해주세요. 실명이 아니어도 됩니다.</Subtitle>

                <NameInput 
                    type="text"
                    placeholder="홍길동"
                    value={name}
                    onChange={handleChange}
                    autoFocus
                />
            </MainContent>

            <NextButton 
                onClick={handleNext}
                disabled={!isButtonEnabled}
            >
                다음
            </NextButton>
            
            {/* 하단 홈 인디케이터 */}
        </NameContainer>
    );
};

export default Name;