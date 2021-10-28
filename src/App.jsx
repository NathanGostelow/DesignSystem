import React from 'react';
import Styles from './app.module.css';

//components
import { FavouriteButton } from 'Components/Buttons';

const StarterApp = () => {
  return (
    <div className="main">
      <div className="container">
        <h1> StarterApp </h1>
        <FavouriteButton>hello world</FavouriteButton>
      </div>
    </div>
  );
};

export default StarterApp;
