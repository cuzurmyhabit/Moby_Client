import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LoginPage from './pages/LoginPage';
import ChoicePage from './pages/ChoicePage'; 
import CreateFamily from './pages/CreateFamily';
import FamilyCreatedPage from './pages/FamilyCreated'; 
import Mainpage from "../src/pages/MainPage";
import QuestionPage from "../src/pages/QuestionPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/choice" element={<ChoicePage />} />
        <Route path="/create-family" element={<CreateFamily />} />
        <Route path="/family-created" element={<FamilyCreatedPage />} /> 
        <Route path="/join-family" element={<div>가족 참여하기 페이지</div>} />
        <Route path="/main" element={<Mainpage />} />
        <Route path="/question" element={<QuestionPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;