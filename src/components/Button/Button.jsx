import React from 'react';
import './_button.scss'

export const Button = ({className, children, onClick}) => {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};
