import { BaseButton } from '..';
import { createUseStyles } from 'react-jss';
import { colours } from 'Styles/Colours';

export const PrimaryButton = ({ children, onClick }) => {
  const classes = useStyles();
  return (
    <BaseButton className={classes.primaryButton} onClick={onClick}>
      {children}
    </BaseButton>
  );
};

const useStyles = createUseStyles({
  primaryButton: {
    backgroundColor: colours.primary,
    color: 'white',
    padding: '10px 15px',
    border: 'none',
    borderRadius: '25px',
    '&:hover': {
      backgroundColor: colours.primary100
    }
  }
});
