import React from 'react';
import style from './Badge.module.css';

export default ({ children, type = 'tip', vertical }) => (
  <span
    className={`${style.badge} ${style[type]} ${
      vertical ? style[vertical] : ''
    }`}>
    {children}
  </span>
);
