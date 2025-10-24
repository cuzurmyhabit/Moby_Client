// ListPage.jsx
import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import list_logo from '../assets/list_logo.svg'; 
import list_statusBar from '../assets/list_statusBar.svg';

// ===== Styled Components =====
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


const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 0px;
  padding-left: 16px;
  margin-top: 100px;
  padding-bottom: 30px;
`;

const Logo = styled.img`
  width: auto;
  height: auto;
`;

const ContentArea = styled.div`
  flex: 1;
  padding: 0 20px;
  overflow-y: auto;
`;

const ChatRecordItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  margin-bottom: 12px;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.03);
`;

const RecordTextGroup = styled.div`
  display: flex;
  flex-direction: column;
  max-width: calc(100% - 100px);
`;

const QuestionText = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: #000000;
  margin: 0 0 4px 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const DateText = styled.span`
  font-size: 12px;
  color: #888888;
`;

const ViewRecordButton = styled.button`
  background-color: #BFEFFF;
  color: #000000ff;
  font-size: 12px;
  font-weight: 600;
  padding: 8px 12px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s;
  width: 70px;
  height: 34px;

  &:hover {
    background-color: #b2ebf2;
  }
`;

const HomeIndicator = styled.div`
  width: 134px;
  height: 5px;
  background-color: #000;
  border-radius: 100px;
  margin: 0 auto 8px auto;
`;

// ===== RecordItem 컴포넌트 =====
const RecordItem = ({ question, date }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/list_1'); // 이동할 경로
  };

  return (
    <ChatRecordItem>
      <RecordTextGroup>
        <QuestionText>{`"${question}"`}</QuestionText>
        <DateText>{date}</DateText>
      </RecordTextGroup>
      <ViewRecordButton onClick={handleClick}>기록 열람</ViewRecordButton>
    </ChatRecordItem>
  );
};

// ===== ListPage 컴포넌트 =====
const ListPage = () => {
  const chatRecords = [
    { id: 1, question: '함께 나누고 싶은 취미가 있나요?', date: '2025.10.25' },
    { id: 2, question: '가족과 함께 먹고 싶은 음식이 있나요?', date: '2025.10.25' },
  ];

  return (
    <MobileContainer>
      <Header>
        <Logo src={list_logo} alt="List Logo" />
      </Header>

      <ContentArea>
        {chatRecords.map(record => (
          <RecordItem key={record.id} question={record.question} date={record.date} />
        ))}
      </ContentArea>

    </MobileContainer>
  );
};

export default ListPage;
