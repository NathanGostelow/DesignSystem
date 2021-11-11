import React from 'react';
import ReactDOM from 'react-dom';

import { createGlobalStyle } from "styled-components"
import App from './App';


const theme = {
    mainColor: "#c42847",
    secondColor: "#fbfaf8"
}

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0px;
    background-color: ${theme.mainColor};
    }
    html {
        font-family: 'Roboto', sans-serif;
      }
`


const AppWithGlobalStyles = () => (
        <>
            <App />
            <GlobalStyle />
        </>
    )

ReactDOM.render(<AppWithGlobalStyles />, document.getElementById('container'));
