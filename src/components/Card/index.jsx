import React from 'react';

import './style.css';

export default function Card({ card, handleCardClick }) {
  const { number, id, visible, finded } = card;

  function getCardClasses() {
    const classes = [];
  
    visible && classes.push('visible');
    finded && classes.push('finded');

    return classes.join(' ');
  }

  return (
    <div className={`card ${getCardClasses()}`} onClick={() => handleCardClick(id)}>
      { number }
    </div>
  );
}