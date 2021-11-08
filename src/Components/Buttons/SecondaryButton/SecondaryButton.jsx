import React from 'react';
import { BaseButton } from '../BaseButton/BaseButton';
// import { createUseStyles } from 'react-jss';
import styled from 'styled-components';

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

// export const SecondaryButton = ({ children, onClick }) => {
//   const classes = useStyles();
//   return (
//     <BaseButton className={classes.secondaryButton} onClick={onClick}>
//       {children}
//     </BaseButton>
//   );
// };

// const useStyles = createUseStyles({
//   secondaryButton: {
//     backgroundColor: colours.secondary,
//     color: 'white',
//     padding: '10px 15px',
//     border: 'none',
//     borderRadius: '25px',
//     '&:hover': {
//       backgroundColor: colours.secondary100
//     }
//   }
// });
