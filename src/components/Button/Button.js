import React from 'react';

import styles from './Button.module.scss';

export default ({ children, selected, onClick }) => (
  <button
    className={`${styles.btn} ${selected ? styles.selected : ''}`}
    onClick={onClick}>
    {children}
  </button>
);
