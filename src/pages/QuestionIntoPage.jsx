import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom'; // 👈 useNavigate import 추가
import question_into from '../assets/question_into.svg';

const MobileContainer = styled.div`
  width: 100%;
  max-width: 390px;
  height: 100vh;
  max-height: 844px;
  background-color: #ffffff;
  background-image: url(${question_into
    
  });
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

const NavContainer = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 92px; /* 요청하신 높이 */
    padding: 10px 20px 0 20px;
    background-color: transparent; /* 배경은 컨테이너에 넣지 않고 버튼 자체에 넣음 */
    display: flex;
    justify-content: center;
    align-items: flex-start;
`;

const ConversationButton = styled.button`
    position: absolute;
    bottom: 150px;
    width: 90%;
    height: 50px;
    background-color: #fce8a6; /* 노란색 계열 배경 */
    border: none;
    font-family: inherit;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    cursor: pointer;
    font-size: 15px;
    font-weight: 600;
    color: #444; /* 텍스트 색상 */
    &:hover {
        background-color: #f7e099;
    }
`;


const QuestionIntoPage = () => {
  const navigate = useNavigate(); // 👈 useNavigate 훅 사용

  const handleBack = () => {
    navigate('/list'); // 👈 /list 경로로 이동
  };

  return (
    <MobileContainer>     
      <NavContainer>
                <ConversationButton>
                    가족이랑 대화하러 가기 
                </ConversationButton>
            </NavContainer> 
    </MobileContainer>
  );
};

export default QuestionIntoPage;