import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Nav from '../components/Nav';

// 아이콘 및 이미지 import
import QuestionPng from '../assets/question.png';

// --- Styled Components ---

// --- Page Layout ---
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
  margin: 0 auto;

  @media (max-width: 390px) {
    max-width: 100%;
    max-height: 100vh;
    box-shadow: none;
  }
`;

const MainContent = styled.main`
  flex: 1;
  width: 100%;
  padding: 20px 24px 100px 24px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// --- Question Section (as PNG) ---
const QuestionImage = styled.img`
  width: 100%;
  max-width: 250px;
  height: auto;
  margin-bottom: 24px;
`;

// --- Answer Form ---
const AnswerForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const AnswerTextarea = styled.textarea`
  width: 100%;
  height: 180px; 
  border-radius: 12px;
  padding: 16px;
  font-family: 'IM혜민체', sans-serif;
  font-size: 16px;
  line-height: 1.6;
  color: #333;
  resize: none;
  box-sizing: border-box;

  &::placeholder {
    color: #AAAAAA;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 18px 0;
  background-color: #FFDE7D;
  border-radius: 10px;
  border: none;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }

  &:disabled {
    background-color: #E0E0E0;
    color: #A0A0A0;
    cursor: not-allowed;
    opacity: 0.7;
  }
`;

// --- SVG Icon Components ---
const IconImage = styled.img`
  width: 24px;
  height: 24px;
  filter: ${props => props.$active ? 'none' : 'grayscale(100%) opacity(0.5)'};
`;

// 아이콘 컴포넌트들을 img 태그로 변경
const HomeIcon = ({ $active }) => (
  <IconImage src={HomeIconSvg} alt="홈" $active={$active} />
);

const MailIcon = ({ $active }) => (
  <IconImage src={MailIconSvg} alt="편지" $active={$active} />
);

const BookIcon = ({ $active }) => (
  <IconImage src={BookIconSvg} alt="질문" $active={$active} />
);

const StoreIcon = ({ $active }) => (
  <IconImage src={StoreIconSvg} alt="상점" $active={$active} />
);

const MyIcon = ({ $active }) => (
  <IconImage src={MyIconSvg} alt="my" $active={$active} />
);

const NavContainer = styled.nav`
  width: 100%;
  height: 80px;
  background-color: #ffffff;
  border-top: 1px solid #F0F0F0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 10px;
  padding-bottom: 20px; 
  box-sizing: border-box;
`;

const NavBar = () => {
  const location = useLocation();
  const activePath = location.pathname;

  return (
    <NavContainer>
      <NavItem to="/main" $active={activePath === '/main'}>
        <HomeIcon $active={activePath === '/main'} />
        홈
      </NavItem>
      <NavItem to="/letters" $active={activePath === '/letters'}>
        <MailIcon $active={activePath === '/letters'} />
        편지
      </NavItem>
      <NavItem to="/question" $active={activePath === '/question'}>
        <BookIcon $active={activePath === '/question'} />
        질문
      </NavItem>
      <NavItem to="/store" $active={activePath === '/store'}>
        <StoreIcon $active={activePath === '/store'} />
        상점
      </NavItem>
      <NavItem to="/my" $active={activePath === '/my'}>
        <MyIcon $active={activePath === '/my'} />
        my
      </NavItem>
    </NavContainer>
  );
};


const QuestionPage = () => {
  const [answer, setAnswer] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (answer.trim() === "") return;
    console.log("제출된 답변:", answer);
  };

  return (
    <MobileContainer>
      <Header showBackButton />
      <MainContent>
        <QuestionImage 
          src={QuestionPng} 
          alt="오늘의 질문" 
        />

        <AnswerForm onSubmit={handleSubmit}>
          <AnswerTextarea
            placeholder="질문 답변 입력하기"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
          />
          <SubmitButton type="submit" disabled={answer.trim() === ''}>
            완료
          </SubmitButton>
        </AnswerForm>
      </MainContent>
      <Nav />
    </MobileContainer>
  );
};

export default QuestionPage;