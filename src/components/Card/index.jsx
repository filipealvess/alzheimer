import React from 'react';

import './style.css';

export default function Card({ number }) {
  return (
    <div className="card">
      { number }
    </div>
  );
}