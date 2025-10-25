import React, { useState, useRef } from 'react';
import styled, { css } from 'styled-components';
import logo from '../assets/logo.svg';
import { useNavigate } from 'react-router-dom';


// ----------------------------------------------------
// 1. Style-Components 정의
// ----------------------------------------------------

// 메인 색상
const MAIN_COLOR = '#ffcc00'; // Moby 로고 및 버튼 색상
const BACKGROUND_COLOR = '#ffffff'; // 이미지에 맞게 흰색 배경으로 변경

const AgeContainer = styled.div`
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
    color: #000;
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
    color: #000;
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
    color: #000;
    margin-top: 50px; 
    margin-bottom: 8px;
`;

const Subtitle = styled.p`
    font-size: 14px;
    color: #888;
    margin-bottom: 100px;
`;

const DateInputGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
  gap: 10px; /* 👉 입력창 사이 거리 */
  font-size: 40px;
  color: #999;
  font-weight: 300;
`;

const Separator = styled.span`
    color: #aaa;
    font-size: 30px;
    /* DateInput과 겹치지 않도록 z-index를 줄 수 있습니다. */
`;

// Input 필드 스타일 (포커스 상태를 위한 props 사용)
const DateInput = styled.input`
    border: none;
    outline: none;
    background: transparent;
    text-align: center;
    font-size: inherit;
    color: #999; /* 기본 색상 */
    padding: 0;
    margin: 0;
    font-weight: inherit;
    transition: color 0.2s;

    /* 포커스 시 텍스트 색상 진하게 */
    &:focus {
        color: #000;
    }

    /* props를 사용하여 너비 지정 */
    ${props => props.$unit === 'year' && css`
        width: 120px;
    `}
    ${props => (props.$unit === 'month' || props.$unit === 'day') && css`
        width: 80px;
    `}
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



const AgePage = () => {
    const [date, setDate] = useState({
        year: 'YYYY',
        month: 'MM',
        day: 'DD'
    });
    const navigate = useNavigate();

    const monthRef = useRef(null);
    const dayRef = useRef(null);

    const handleChange = (e, unit) => {
        let value = e.target.value;
        value = value.replace(/[^0-9]/g, '').slice(0, unit === 'year' ? 4 : 2);
        setDate(prev => ({ ...prev, [unit]: value }));

        if (unit === 'year' && value.length === 4 && monthRef.current) {
            monthRef.current.focus();
        } else if (unit === 'month' && value.length === 2 && dayRef.current) {
            dayRef.current.focus();
        } else if (unit === 'day' && value.length === 2) {
            e.target.blur();
        }
    };

    const handleNext = () => {
        const { year, month, day } = date;
        if (year.length === 4 && month.length === 2 && day.length === 2) {
            navigate('/name'); 
        }
    };
    

    const isButtonEnabled = date.year.length === 4 && date.month.length === 2 && date.day.length === 2;

    return (
        <AgeContainer>
            {/* iOS 상태 표시줄 (데모용) */}

            <Header>
                <LogoImage src={logo} alt="Moby 로고" />
            </Header>
            
            <MainContent>
                <Title>나이</Title>
                <Subtitle>자신의 나이를 입력해주세요.</Subtitle>

                <DateInputGroup>
                    {/* 년도 입력 */}
                    <DateInput 
                        type="tel"
                        placeholder="YYYY"
                        maxLength="4"
                        value={date.year}
                        onChange={(e) => handleChange(e, 'year')}
                        $unit="year" // styled-component props
                    />
                    <Separator>/</Separator>

                    {/* 월 입력 */}
                    <DateInput 
                        type="tel"
                        placeholder="MM"
                        maxLength="2"
                        value={date.month}
                        onChange={(e) => handleChange(e, 'month')}
                        ref={monthRef}
                        $unit="month" // styled-component props
                    />
                    <Separator>/</Separator>

                    {/* 일 입력 */}
                    <DateInput 
                        type="tel"
                        placeholder="DD"
                        maxLength="2"
                        value={date.day}
                        onChange={(e) => handleChange(e, 'day')}
                        ref={dayRef}
                        $unit="day" // styled-component props
                    />
                </DateInputGroup>
            </MainContent>

            <NextButton 
                onClick={handleNext}
                disabled={!isButtonEnabled}
            >
                다음
            </NextButton>
            
            {/* 하단 홈 인디케이터 */}
        </AgeContainer>
    );
};

export default AgePage;