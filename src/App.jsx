import React from 'react';
import Styles from './app.module.css';

//components
import { GhostButton as Button } from 'Components/Buttons';
import { Login } from './Pages/Login';

const StarterApp = () => {
  return (
    <div className="main">
      <div className="container">
        <Login></Login>
      </div>
    </div>
  );
};

export default StarterApp;
