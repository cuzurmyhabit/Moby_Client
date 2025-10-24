import React, { useEffect } from 'react';
import styled from 'styled-components';
import logo from '../assets/logo.svg';
import kakaoIcon from '../assets/kakao.svg';

// ✅ 환경 변수에서 가져오기
const JAVASCRIPT_KEY = import.meta.env.VITE_KAKAO_JAVASCRIPT_KEY;
const REDIRECT_URI = import.meta.env.VITE_KAKAO_REDIRECT_URI;

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

  @media (max-width: 390px) {
    max-width: 100%;
    max-height: 100vh;
    box-shadow: none;
  }
`;

const MainContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const LogoImage = styled.img`
  width: 196px;
  height: auto;
`;

const BottomButtons = styled.div`
  padding: 0 20px 40px 20px;
`;

const KakaoLoginButton = styled.button`
  width: 100%;
  height: 56px;
  background-color: #fae100;
  border: none;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  cursor: pointer;
  margin-bottom: 12px;
  transition: background-color 0.2s;

  &:hover {
    background-color: #f5dc00;
  }

  &:active {
    background-color: #e5cc00;
  }
`;

const KakaoIconImage = styled.img`
  width: 24px;
  height: 24px;
`;

const ButtonText = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.85);
`;

const HomeIndicator = styled.div`
  width: 134px;
  height: 5px;
  background-color: #000;
  border-radius: 100px;
  margin: 0 auto 8px auto;
`;

const LoginPage = () => {
  useEffect(() => {
    const loadKakaoSDK = () => {
      return new Promise((resolve, reject) => {
        if (window.Kakao) return resolve(window.Kakao);

        const script = document.createElement('script');
        script.src = 'https://t1.kakaocdn.net/kakao_js_sdk/2.7.7/kakao.min.js';
        script.integrity = 'sha384-tJkjbtDbvoxO+diRuDtwRO9JXR7pjWnfjfRn5ePUpl7e7RJCxKCwwnfqUAdXh53p';
        script.crossOrigin = 'anonymous';
        script.onload = () => resolve(window.Kakao);
        script.onerror = () => reject('Kakao SDK 로드 실패');
        document.head.appendChild(script);
      });
    };

    loadKakaoSDK()
      .then((Kakao) => {
        if (!Kakao.isInitialized()) {
          Kakao.init(JAVASCRIPT_KEY);
          console.log('Kakao SDK 초기화 완료');
        }
      })
      .catch((err) => console.error(err));
  }, []);

  const handleKakaoLogin = () => {
    const kakaoAuthUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${JAVASCRIPT_KEY}&redirect_uri=${encodeURIComponent(REDIRECT_URI)}&response_type=code`;
    window.location.href = kakaoAuthUrl;
  };

  return (
    <MobileContainer>
      <MainContent>
        <LogoImage src={logo} alt="Moby 로고" />
      </MainContent>

      <BottomButtons>
        <KakaoLoginButton onClick={handleKakaoLogin}>
          <KakaoIconImage src={kakaoIcon} alt="카카오" />
          <ButtonText>카카오톡으로 로그인</ButtonText>
        </KakaoLoginButton>
      </BottomButtons>

      <HomeIndicator />
    </MobileContainer>
  );
};

export default LoginPage;