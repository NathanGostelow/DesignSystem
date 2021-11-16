import React from 'react';
import styled from 'styled-components';

import { BaseButton } from '../BaseButton/BaseButton';

import { colours } from '../../../Styles/Colours';

export const GhostButton = styled(BaseButton)`
  color: ${colours.secondary};
  background-color: transparent;
  padding: 10px 15px;
  border: 1px solid ${colours.secondary};
  border-radius: 25px;
  &:hover {
    background-color: ${colours.secondary100};
    color: white;
  }
`;
