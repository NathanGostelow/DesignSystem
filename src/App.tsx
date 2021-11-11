import React from 'react';
import styled from 'styled-components';

// components
import { Login } from './Pages/Login';

const MainContainer = styled.div`
  height: 100vh;
  color: var(--secondary-color);
  font-size: 18px;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`

const StarterApp = () => (
    <MainContainer>
        <Login />
    </ MainContainer>
  );

export default StarterApp;
