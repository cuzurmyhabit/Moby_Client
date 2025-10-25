import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Nav from '../components/Nav';

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
  font-family: 'IM혜민체', sans-serif;

  @media (max-width: 390px) {
    max-width: 100%;
    max-height: 100vh;
    box-shadow: none;
  }
`;

// --- Chat Content Area ---
const ChatContent = styled.main`
  flex: 1;
  width: 100%;
  padding: 0 24px 160px 24px;
  box-sizing: border-box;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

// --- Question Area ---
const QuestionArea = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const QuestionTitle = styled.h2`
  font-size: 16px;
  font-weight: 700;
  color: #333;
  margin: 0;
`;

const QuestionText = styled.p`
  font-size: 18px;
  font-weight: 700;
  color: #222;
  margin: 8px 0;
  text-align: center;
`;

const DateText = styled.time`
  font-size: 14px;
  color: #888;
`;

// --- Chat Bubbles ---
const ChatBubbleWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: ${props => (props.$isUser ? 'flex-end' : 'flex-start')};
`;

const AuthorName = styled.span`
  font-size: 14px;
  font-weight: 700;
  color: #333;
  margin-bottom: 6px;
  padding-left: 4px;
`;

const Bubble = styled.div`
  background-color: ${props => (props.$isUser ? '#F9EFCF' : props.$isFirst ? '#FFEEBC' : '#F5F5F5')};
  border-radius: 10px;
  padding: 6px 6px;
  font-size: ${props => props.$isFirst ? '10px' : '15px'};
  color: #333;
  line-height: 1.5;
  max-width: 80%;
  word-break: break-word;
  
  ${props => !props.$isUser && `
    display: flex;
    align-items: center;
    gap: 8px;
  `}
`;

// --- Chat Input Bar ---
const InputBarContainer = styled.form`
  width: 100%;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 24px;
  box-sizing: border-box;
  background-color: #ffffff;
  position: absolute;
  bottom: 80px;
  left: 0;
  right: 0;
`;

const PlusButton = styled.button`
  background-color: #F5F5F5;
  border: none;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: #888;
  cursor: pointer;
  flex-shrink: 0;
`;

const TextInput = styled.input`
  flex: 1;
  height: 44px;
  border: none;
  background-color: #F5F5F5;
  border-radius: 22px;
  padding: 0 20px;
  font-family: 'IM혜민체', sans-serif;
  font-size: 15px;
  color: #333;
  
  &::placeholder {
    color: #AAAAAA;
  }
`;

const SendButton = styled.button`
  background: none;
  border: none;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  flex-shrink: 0;
  padding: 0;

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;

// --- Page Component ---

// 임시 데이터
const initialMessages = [
  { 
    id: 1, 
    author: 'AI 솔루션', 
    message: '아버지가 좋아하시는 배구 팀이 어디인지 질문해볼까요??', 
    isUser: false 
  },
];

const ChatPage = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [inputValue, setInputValue] = useState('');
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() === '') return;

    const newMessage = {
      id: messages.length + 1,
      author: '나',
      message: inputValue,
      isUser: true,
    };
    
    setMessages(prevMessages => [...prevMessages, newMessage]);
    setInputValue('');
  };

  return (
    <MobileContainer>
      <Header />
      
      <ChatContent>
        <QuestionArea>
          <QuestionTitle>채팅 질문</QuestionTitle>
          <QuestionText>" 함께 나누고 싶은 취미가 있나요? "</QuestionText>
          <DateText>2025.10.25</DateText>
        </QuestionArea>

        {messages.map((item, index) => (
          <ChatBubbleWrapper key={item.id} $isUser={item.isUser}>
            {!item.isUser && <AuthorName>{item.author}</AuthorName>}
            <Bubble $isUser={item.isUser} $isFirst={item.id === 1}>
              {!item.isUser && <ChatIcon />}
              {item.message}
            </Bubble>
          </ChatBubbleWrapper>
        ))}
        <div ref={chatEndRef} />
      </ChatContent>

      <InputBarContainer onSubmit={handleSubmit}>
        <PlusButton type="button">+</PlusButton>
        <TextInput
          type="text"
          placeholder="문자를 입력하세요"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <SendButton type="submit" disabled={inputValue.trim() === ''}>
          <SendIcon $active={inputValue.trim() !== ''} />
        </SendButton>
      </InputBarContainer>
      
      <Nav />
    </MobileContainer>
  );
};

export default ChatPage;


// --- SVG Icon Components ---
const SendIcon = ({ $active }) => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
    <circle cx="18" cy="18" r="18" fill={$active ? "#F9EFCF" : "#F5F5F5"} />
    <svg x="8" y="8" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={$active ? "#5A4E3A" : "#AAAAAA"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="22" y1="2" x2="11" y2="13"></line>
      <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
    </svg>
  </svg>
);

const ChatIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#5A4E3A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
  </svg>
);