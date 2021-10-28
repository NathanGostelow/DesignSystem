import React, { useEffect, useState } from 'react';
import { createUseStyles } from 'react-jss';

import { BaseButton } from '..';
import { HeartIcon } from '../../../Assets/svgs';

export const FavouriteButton = ({ favourited = false }) => {
  const [isActive, setIsActive] = useState(favourited);

  useEffect(() => {
    setIsActive(favourited);
  }, [favourited]);

  const classes = useStyles();
  return (
    <BaseButton
      onClick={() => {
        setIsActive(!isActive);
      }}
      className={classes.favouritebutton}
    >
      <HeartIcon
        fill={isActive ? 'red' : 'none'}
        stroke={isActive ? 'red' : 'black'}
      />
    </BaseButton>
  );
};

const useStyles = createUseStyles({
  favouritebutton: {
    backgroundColor: 'transparent',
    color: 'white',
    width: '50px',
    height: '50px',
    border: 'none',
    borderRadius: '25px'
  }
});
