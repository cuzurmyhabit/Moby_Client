import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import LogoSrc from '../assets/logo.svg';

const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 60px 24px 20px 24px;
  position: relative;
`;

const BackButton = styled.button`
  background: none;
  border: none;
  font-size: 28px;
  color: #222222;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  position: absolute;
  left: 24px;
`;

const HeaderLogo = styled.img`
  width: 90px;
  height: auto;
`;

const Header = ({ showBackButton = false }) => {
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      {showBackButton && (
        <BackButton onClick={() => navigate(-1)}>
          ←
        </BackButton>
      )}
      <HeaderLogo src={LogoSrc} alt="Moby 로고" />
    </HeaderContainer>
  );
};

export default Header;