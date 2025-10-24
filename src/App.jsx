import React from 'react';
import styled from 'styled-components';
import LoginPage from '../src/pages/LoginPage';
import AgePage from './pages/AgePage';

const App = () => {
  return (
    <AppContainer>
      {/* <LoginPage /> */}
      <AgePage />
    </AppContainer>


  );
};

const AppContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #53504C;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default App;