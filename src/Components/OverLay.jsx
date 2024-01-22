// Overlay.js

import React from 'react';
import { CSSTransition } from 'react-transition-group';
import './Overlay.css';

const OverLay = ({ isHovered, direction }) => {
  return (
    <CSSTransition in={isHovered} timeout={300} classNames={`overlay-${direction}`} unmountOnExit>
      <div className="overlay">Click To See My Project</div>
    </CSSTransition>
  );
};

export default OverLay;
