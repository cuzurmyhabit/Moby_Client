import React, { useEffect } from 'react';
import styled from 'styled-components';
import logo from '../assets/logo.svg';
import mainImg from '../assets/main_before.png';
import Header from '../components/Header';
import BottomNav from '../components/nav';

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

const MainPage = () => {
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