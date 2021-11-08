import React from 'react';
import Styles from './app.module.css';

//components
import { GhostButton as Button } from 'Components/Buttons';

const StarterApp = () => {
  return (
    <div className="main">
      <div className="container">
        <h1> StarterApp </h1>
        <Button>hello world</Button>
      </div>
    </div>
  );
};

export default StarterApp;
