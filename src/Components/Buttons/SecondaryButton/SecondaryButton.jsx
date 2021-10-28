import { BaseButton } from '..';
import { createUseStyles } from 'react-jss';

import { colours } from '../../../Styles/Colours';

export const SecondaryButton = ({ children, onClick }) => {
  const classes = useStyles();
  return (
    <BaseButton className={classes.secondaryButton} onClick={onClick}>
      {children}
    </BaseButton>
  );
};

const useStyles = createUseStyles({
  secondaryButton: {
    backgroundColor: colours.secondary,
    color: 'white',
    padding: '10px 15px',
    border: 'none',
    borderRadius: '25px',
    '&:hover': {
      backgroundColor: colours.secondary100
    }
  }
});
