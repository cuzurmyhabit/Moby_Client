import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import shop from '../assets/shopBack.svg';
import Nav from '../components/Nav';

const MobileContainer = styled.div`
  width: 100%;
  max-width: 390px;
  min-height: 100vh; /* ✅ height → min-height로 변경 */
  background-color: #ffffff;
  background-image: url(${shop});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.1);
  overflow-y: auto; /* ✅ 스크롤 가능하게 설정 */
  -webkit-overflow-scrolling: touch; /* ✅ 모바일 부드러운 스크롤 */

  @media (max-width: 390px) {
    max-width: 100%;
    box-shadow: none;
  }
`;

const StatusBar = styled.img`
  width: 100%;
  height: auto;
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

const ShopPage = () => {
  const navigate = useNavigate();

  return (
    <MobileContainer>
      <Nav />
    </MobileContainer>
  );
};

export default ShopPage;
