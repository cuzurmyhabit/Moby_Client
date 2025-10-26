import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LoginPage from './pages/LoginPage';
import ChoicePage from './pages/ChoicePage'; 
import CreateFamily from './pages/CreateFamily';
import FamilyCreatedPage from './pages/FamilyCreated'; 
import Mainpage from "./pages/MainPage_before";
import MainAfterpage from "./pages/MainPage_after";
import QuestionPage from "./pages/QuestionPage";
import ListPage from './pages/ListPage';
import ListIntoPage_1 from './pages/ListIntoPage_1';
import WriteLetterPage from './pages/WriteLetter';
import QuestionIntoPage from './pages/QuestionIntoPage';
import MyPage from './pages/MyPage';
import ShopPage from './pages/ShopPage';
import Letter_into from './pages/Letter_into';
import AgePage from './pages/AgePage';
import NamePage from './pages/name';
import ChatPage from './pages/ChatPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/choice" element={<ChoicePage />} />
        <Route path="/create-family" element={<CreateFamily />} />
        <Route path="/family-created" element={<FamilyCreatedPage />} /> 
        <Route path="/list" element={<ListPage />} /> 
        <Route path="/list_1" element={<ListIntoPage_1 />} /> 
        <Route path="/list_2" element={<ListPage />} /> 
        <Route path="/writeLetter" element={<WriteLetterPage />} /> 
        <Route path="/question-into" element={<QuestionIntoPage/>} /> 
        <Route path="/join-family" element={<div>가족 참여하기 페이지</div>} />
        <Route path="/main" element={<Mainpage />} />
        <Route path="/main-after" element={<MainAfterpage />} />
        <Route path="/question" element={<QuestionPage />} />
        <Route path="/my" element={<MyPage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/letterInto" element={<Letter_into />} />
         <Route path="/age" element={<AgePage />} />
         <Route path="/name" element={<NamePage />} />
         <Route path="/chat" element={<ChatPage />} />

      </Routes>
    </BrowserRouter>
  );
};

export default App;