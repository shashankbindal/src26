import React from 'react';
import { useLenis } from '../libs/useLenis';

const SmoothScroller = ({ children }) => {
  useLenis();
  
  return (
    <>
      {children}
    </>
  );
};

export default SmoothScroller;
