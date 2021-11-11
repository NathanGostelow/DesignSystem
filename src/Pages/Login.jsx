import React from 'react';
import styled from 'styled-components';
import {
  GhostButton,
  SecondaryButton,
  FavouriteButton
} from '../Components/Buttons';

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  margin: 10px;
  justify-content: space-around;
  width: 100%;
`;

export const Login = () => {
  return (
    <LoginContainer>
      <h1>Lightning Talk</h1>
      <h3>Login</h3>
      <ButtonContainer>
        <SecondaryButton>Sign Up</SecondaryButton>
        <FavouriteButton></FavouriteButton>
        <GhostButton>Log In</GhostButton>
      </ButtonContainer>
    </LoginContainer>
  );
};
