import React from 'react';

import './style.css';

export default function Card({ card, handleCardClick }) {
  const { number, id, visible, found } = card;

  function getCardClasses() {
    const classes = [];
  
    visible && classes.push('visible');
    found && classes.push('found');

    return classes.join(' ');
  }

  return (
    <div className={`card ${getCardClasses()}`} onClick={() => handleCardClick(id)}>
      { number }
    </div>
  );
}