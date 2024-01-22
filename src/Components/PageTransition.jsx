// PageTransition.js

import React from 'react';
import { CSSTransition } from 'react-transition-group';
import './PageTransition.css'; 

const PageTransition = ({ children, in: inProp }) => {
  return (
    <CSSTransition
      in={inProp}
      timeout={200} // Adjust the timeout as needed
      classNames="page"
      unmountOnExit
      
    >
      <div>{children}</div>
    </CSSTransition>
  );
};

export default PageTransition;
