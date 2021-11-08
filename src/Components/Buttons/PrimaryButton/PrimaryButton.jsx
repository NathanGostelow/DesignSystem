import React from 'react';
import { BaseButton } from '../BaseButton/BaseButton';
import styled from 'styled-components';
import { colours } from 'Styles/Colours';

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

// export const PrimaryButton = ({ children, onClick }) => {
//   const classes = useStyles();
//   return (
//     <BaseButton className={classes.primaryButton} onClick={onClick}>
//       {children}
//     </BaseButton>
//   );
// };

// const useStyles = createUseStyles({
//   primaryButton: {
//     backgroundColor: colours.primary,
//     color: 'white',
//     padding: '10px 15px',
//     border: 'none',
//     borderRadius: '25px',
//     '&:hover': {
//       backgroundColor: colours.primary100
//     }
//   }
// });
