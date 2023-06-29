import React from 'react';
import styles from './Card.module.css';

const Card = ({ title, children }) => {
  return (
    <div className={`${styles.card} ${styles['card--highlight']}`}>
      <h2>{title}</h2>
      {children}
    </div>
  );
};

export default Card;
