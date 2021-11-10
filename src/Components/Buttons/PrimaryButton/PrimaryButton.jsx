import React from 'react';
import styled from 'styled-components';

import { colours } from 'Styles/Colours';

import { BaseButton } from '../BaseButton/BaseButton';

export const PrimaryButton = styled(BaseButton)`
  color: white;
  background-color: ${colours.primary};
  padding: 10px 15px;
  border: none;
  border-radius: 25px;
  &:hover {
    background-color: ${colours.primary100};
  }
`;
