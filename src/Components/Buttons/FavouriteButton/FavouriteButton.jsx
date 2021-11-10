import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { BaseButton } from '../BaseButton/BaseButton';
import { HeartIcon } from '../../../Assets/svgs';

const StyledFavouriteButton = styled(BaseButton)`
  background-color: transparent;
  color: white;
  width: '50px';
  height: '50px';
  border: none;
  border-radius: '25px';
`;

export const FavouriteButton = ({ favourited = false }) => {
  const [isActive, setIsActive] = useState(favourited);

  useEffect(() => {
    setIsActive(favourited);
  }, [favourited]);

  return (
    <StyledFavouriteButton
      onClick={() => {
        setIsActive(!isActive);
      }}
    >
      <HeartIcon
        fill={isActive ? 'red' : 'none'}
        stroke={isActive ? 'red' : 'black'}
      />
    </StyledFavouriteButton>
  );
};
