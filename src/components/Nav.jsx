import React from 'react';
import styled from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom';

import homeIcon from '../assets/home.svg';
import letterIcon from '../assets/letter.svg';
import questionIcon from '../assets/question.svg';
import shopIcon from '../assets/shop.svg';
import myIcon from '../assets/my.svg';

const NavContainer = styled.nav`
  position: absolute;
  bottom: 0;
  left: 0; 
  right: 0;
  width: 100%;
  height: 80px;
  background-color: rgba(255, 255, 255, 0.95); 
  border-top: 1px solid #f0f0f0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 20px;
  box-sizing: border-box;
  z-index: 10;
`;

const NavItem = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.7;
  }
`;

const NavIcon = styled.img`
  width: 24px;
  height: 24px;
  opacity: ${props => props.$isActive ? 1 : 0.5};
`;

const NavLabel = styled.span`
  font-size: 12px;
  font-weight: ${props => props.$isActive ? 600 : 400};
  color: ${props => props.$isActive ? '#FF8968' : '#A2A2A2'};
`;

const Nav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { path: '/main-after', icon: homeIcon, label: '홈' },
    { path: '/writeLetter', icon: letterIcon, label: '편지' },
    { path: '/list', icon: questionIcon, label: '질문' },
    { path: '/shop', icon: shopIcon, label: '상점' },
    { path: '/my', icon: myIcon, label: 'my' },
  ];

  return (
    <NavContainer>
      {navItems.map((item) => {
        const isActive = location.pathname === item.path;
        return (
          <NavItem key={item.path} onClick={() => navigate(item.path)}>
            <NavIcon src={item.icon} alt={item.label} $isActive={isActive} />
            <NavLabel $isActive={isActive}>{item.label}</NavLabel>
          </NavItem>
        );
      })}
    </NavContainer>
  );
};

export default Nav;