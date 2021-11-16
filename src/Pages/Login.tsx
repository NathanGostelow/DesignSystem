import React from 'react';
import styled from 'styled-components';
import { PrimaryButton, FavouriteButton, SecondaryButton, GhostButton } from '../Components/Buttons';

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

export const Login: React.FC = () => (
  <LoginContainer>
    <h1>Lightning Talk</h1>
    <h3>Login</h3>
    <ButtonContainer>
      <PrimaryButton>Sign Up</PrimaryButton>
      <FavouriteButton favourited={false}/>
      <SecondaryButton> Secondary Butotn </SecondaryButton>
      <GhostButton> Ghost Button </GhostButton>
    </ButtonContainer>
  </LoginContainer>
);
