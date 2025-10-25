import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.svg';
import mainImg from '../assets/main_after.png';
import Header from '../components/Header';
import BottomNav from '../components/Nav';
import bottle from '../assets/main_after_bottle.png';

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
  height: 30px;
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

/* ✅ bottle 이미지 클릭 가능하게 변경 */
const BottleImage = styled.img`
  position: absolute;
  left: 50px;
  top: 200px;
  width: 150px;
  height: auto;
  z-index: 10;
  cursor: pointer; /* ✅ 클릭 가능한 커서로 변경 */
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.05); /* ✅ 살짝 확대 효과 */
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
    navigate('/writeLetter');
  };

  /* ✅ 병 클릭 시 letterInto로 이동 */
  const handleBottleClick = () => {
    navigate('/letterInto');
  };

  return (
    <MobileContainer>
      <TopSpacer />
      <BackgroundImageContainer>
        <ContentOverlay></ContentOverlay>
      </BackgroundImageContainer>

      {/* ✅ 클릭 이벤트 추가 */}
      <BottleImage src={bottle} alt="병 이미지" onClick={handleBottleClick} />

      <BottomNav />
    </MobileContainer>
  );
};

export default MainPage;
