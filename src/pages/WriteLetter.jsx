import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // 👈 axios import 추가
import bottleImage from '../assets/writeLetter_bottle.svg'; 
import Nav from '../components/Nav';

// ===== Styled Components (이전과 동일) =====

const MobileContainer = styled.div`
  width: 100%;
  max-width: 390px;
  height: 100vh;
  max-height: 844px;
  background-color: #FFEEBC; 
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

const ContentArea = styled.div`
  height: calc(100vh - 92px);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 30px 20px 30px;
  overflow-y: auto;
`;

const IntroSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 20px;
  margin-top: 20px;
`;

const BottleImage = styled.img.attrs(props => ({
    src: props.src || 'https://via.placeholder.com/60x60?text=Bottle', 
    alt: '유리병 이미지'
}))`
    width: 60px;
    height: 60px;
    margin-bottom: 10px;
`;

const IntroText = styled.p`
  font-size: 18px;
  color: #333;
  line-height: 1.5;
  margin: 0;
  white-space: pre-wrap;
`;

// Dropdown 관련 스타일 (이전과 동일)
const DropdownContainer = styled.div`
  position: relative;
  width: 100%;
  height: 50px;
  background-color: #ffffff;
  border-radius: 12px;
  margin-bottom: 15px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  cursor: pointer;
  z-index: 2;
`;

const DropdownDisplay = styled.div`
  padding: 0 15px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  color: ${props => (props.$isPlaceholder ? '#999' : '#000')};
`;

const DropdownArrow = styled.span`
  font-size: 20px;
  transform: rotate(90deg); 
  color: #999;
`;

const DropdownList = styled.ul`
  position: absolute;
  top: 55px; 
  left: 0;
  width: 100%;
  background-color: #ffffff;
  border-radius: 12px;
  list-style: none;
  padding: 0;
  margin: 0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const DropdownItem = styled.li`
  padding: 15px;
  font-size: 16px;
  color: #000;
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
  }
`;

// Textarea: onChange 핸들러를 위해 수정
const MessageTextarea = styled.textarea`
  width: 100%;
  flex-grow: 1;
  min-height: 200px;
  padding: 15px;
  background-color: #ffffff;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  line-height: 1.5;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  resize: none;
  font-family: inherit;
  color: #000;

  &::placeholder {
    color: #999;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(255, 193, 7, 0.5);
  }
`;

const SendButton = styled.button`
  width: 100%;
  height: 56px;
  font-family: inherit;
  background-color: #ffffff;
  color: #000000;
  font-size: 16px;
  font-weight: 700;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  margin-top: 20px;
  transition: background-color 0.2s, opacity 0.2s;
  &:hover {
    background-color: #f0f0f0;
  }

  &:active {
    opacity: 0.9;
  }
`;
``
// ===== WriteLetterPage 컴포넌트 =====
const WriteLetterPage = () => {
  const navigate = useNavigate();
  
  // 👈 상태 관리 추가
  const [content, setContent] = useState('');
  const [selectedRecipient, setSelectedRecipient] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [setError] = useState(null);
  const recipientOptions = ['아빠'];

  // 👈 기존 handleSubmit 로직 통합 및 수정
  const handleSubmit = async (e) => {
  // 성공 후 "/" 경로로 이동
      navigate('/main-after'); 
    }

  const handleRecipientSelect = (recipient) => {
    setSelectedRecipient(recipient);
    setIsDropdownOpen(false);
  };

  return (
    <MobileContainer>
      <ContentArea>
        
        {/* Intro Section */}
        <IntroSection>
            <BottleImage src={bottleImage} /> 
            <IntroText>
                전하지 못했던
                {"\n"}
                <span style={{ fontWeight: '700' }}>진심을 편지</span>로 보내보세요
            </IntroText>
        </IntroSection>

        {/* Dropdown Container */}
        <DropdownContainer onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
            <DropdownDisplay $isPlaceholder={!selectedRecipient}>
                {selectedRecipient || '보낼 사람'}
                <DropdownArrow>
                    <span style={{ transform: isDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)', display: 'inline-block', transition: 'transform 0.2s' }}>
                        &#9660;
                    </span>
                </DropdownArrow>
            </DropdownDisplay>

            {isDropdownOpen && (
                <DropdownList>
                    {recipientOptions.map((recipient) => (
                        <DropdownItem 
                            key={recipient} 
                            onClick={(e) => { 
                                e.stopPropagation();
                                handleRecipientSelect(recipient); 
                            }}
                        >
                            {recipient}
                        </DropdownItem>
                    ))}
                </DropdownList>
            )}
        </DropdownContainer>

        {/* Textarea */}
        <MessageTextarea 
            placeholder="입력하기.." 
            value={content}
            onChange={(e) => setContent(e.target.value)} // 👈 내용 변경 핸들러 추가
        />

        {/* Send Button */}
        {/* 폼 제출 대신 버튼 클릭 시 handleSubmit 호출 */}
        <SendButton onClick={handleSubmit}> 
            진심을 전할래요!
        </SendButton>
      </ContentArea>

      {/* 92px 높이의 네비게이션 바가 들어올 공간 */}
      <div style={{ height: '92px', width: '100%' }} /> 
 <Nav />
    </MobileContainer>
  );
};

export default WriteLetterPage;