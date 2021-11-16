import React from 'react';

import './style.css';

export default function Popup(props) {
  return (
    <div className="popup-container">
      <div className="popup-content">
        <h2>{ props.title }</h2>
        <p>{ props.description }</p>

        <div className="game-metrics">
          { props.metrics }
        </div>

        <div className="action-buttons">
          { props.buttons }
        </div>
      </div>
    </div>
  );
}