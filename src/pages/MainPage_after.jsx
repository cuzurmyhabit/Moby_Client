import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.svg';
import mainImg from '../assets/main_after.png';
import Header from '../components/Header';
import BottomNav from '../components/Nav';

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

  @media (max-width: 390px) {
    max-width: 100%;
    max-height: 100vh;
    box-shadow: none;
  }
`;

const TopSpacer = styled.div`
  height: 66px;
  width: 100%;
`;

const BackgroundImageContainer = styled.div`
  flex: 1;
  width: 100%;
  background-image: url(${mainImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const ContentOverlay = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

// 모달 스타일
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContainer = styled.div`
  background-color: #ffffff;
  border-radius: 20px;
  padding: 40px 30px;
  width: 85%;
  max-width: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`;

const ModalTitle = styled.h2`
  font-size: 22px;
  font-weight: 700;
  color: #222222;
  margin: 0;
  text-align: center;
`;

const ModalDescription = styled.p`
  font-size: 15px;
  color: #666666;
  text-align: center;
  line-height: 1.5;
  margin: 0;
`;

const ModalButtonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const AnswerButton = styled.button`
  width: 100%;
  padding: 16px 0;
  background-color: #FFDE7D;
  border-radius: 12px;
  border: none;
  font-size: 17px;
  font-weight: 600;
  color: #5A4E3A;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #FFD54F;
  }
`;

const LaterButton = styled.button`
  width: 100%;
  padding: 16px 0;
  background-color: transparent;
  border: none;
  font-size: 15px;
  font-weight: 500;
  color: #999999;
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: #666666;
  }
`;

const MainPage = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleAnswerClick = () => {
    setShowModal(false);
    navigate('/question');
  };

  const handleLaterClick = () => {
    setShowModal(false);
  };

  return (
    <MobileContainer>
      <TopSpacer />
      
      <BackgroundImageContainer>
        <ContentOverlay>
        </ContentOverlay>
      </BackgroundImageContainer>

      <BottomNav />
    </MobileContainer>
  );
};

export default MainPage;