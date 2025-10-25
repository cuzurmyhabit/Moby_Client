import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Nav from '../components/Nav';

// 아이콘 및 이미지 import
import QuestionPng from '../assets/question.png';

// --- Styled Components ---

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

const QuestionImage = styled.img`
  width: 100%;
  max-width: 250px;
  height: auto;
  margin-bottom: 24px;
`;

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

const QuestionPage = () => {
  const [answer, setAnswer] = useState('');
  const navigate = useNavigate(); // ✅ 페이지 이동용 훅

  const handleSubmit = (e) => {
    e.preventDefault();
    if (answer.trim() === '') return;

    console.log('제출된 답변:', answer);
    navigate('/question-into'); // ✅ 완료 후 이동
  };

  return (
    <MobileContainer>
      <Header showBackButton />
      <MainContent>
        <QuestionImage src={QuestionPng} alt="오늘의 질문" />

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
