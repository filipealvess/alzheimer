import React from 'react';

import Card from '../Card';
import './style.css';

export default function Cards({ numbers }) {
  return (
    <div className="cards">
      {
        numbers.map((number, index) => <Card key={index} number={number} />)
      }
    </div>
  );
}