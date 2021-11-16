import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { HeartIcon } from 'Assets/svgs';
import { BaseButton } from '../BaseButton/BaseButton';

const StyledFavouriteButton = styled(BaseButton)`
  background-color: transparent;
  color: white;
  width: '50px';
  height: '50px';
  border: none;
  border-radius: '25px';
`;

interface FavouriteButtonProps {
  favourited: boolean;
}

export const FavouriteButton: React.FC<FavouriteButtonProps> = ({ favourited = false }: FavouriteButtonProps) => {
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
