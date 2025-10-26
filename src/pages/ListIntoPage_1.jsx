import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom'; // 👈 useNavigate import 추가
import list_into_1 from '../assets/list_into_1.svg';
import list_statusBar from '../assets/list_statusBar.svg';
import Nav from '../components/Nav';

const MobileContainer = styled.div`
  width: 100%;
  max-width: 390px;
  height: 100vh;
  max-height: 844px;
  background-color: #ffffff;
  background-image: url(${list_into_1});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
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

const StatusBar = styled.img`
  width: 100%;
  height: auto;
`;

// 👈 뒤로가기 버튼 스타일 추가
const BackButton = styled.button`
  position: absolute;
  top: 60px; /* Status Bar 아래 적절한 위치 */
  left: 15px;
  width: 30px;
  height: 50px;
  background: none;
  border: none;
  color: #000;
  font-size: 24px;
  font-weight: 400;
  cursor: pointer;
  z-index: 10; /* 다른 요소 위에 표시 */
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: 0.7;
  }
`;

const HomeIndicator = styled.div`
  width: 134px;
  height: 5px;
  position: absolute;
  left: 33%;
  top: 818px;
  background-color: #000;
  border-radius: 100px;
  margin: 0 auto 8px auto;
`;

const ListIntoPage_1 = () => {
  const navigate = useNavigate(); // 👈 useNavigate 훅 사용

  const handleBack = () => {
    navigate('/list'); // 👈 /list 경로로 이동
  };

  return (
    <MobileContainer>      
      {/* 👈 BackButton 컴포넌트 추가 및 핸들러 연결 */}
      <BackButton onClick={handleBack}>
        &lt; 
      </BackButton>
      <Nav/>
    </MobileContainer>
  );
};

export default ListIntoPage_1;