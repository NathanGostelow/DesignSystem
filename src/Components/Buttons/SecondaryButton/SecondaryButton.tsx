import React from 'react';
import styled from 'styled-components';

import { BaseButton } from '../BaseButton/BaseButton';

import { colours } from '../../../Styles/Colours';

export const SecondaryButton = styled(BaseButton)`
  color: white;
  background-color: ${colours.secondary};
  padding: 10px 15px;
  border: none;
  border-radius: 25px;
  &:hover {
    background-color: ${colours.secondary100};
  }
`;
