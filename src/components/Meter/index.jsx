import React from 'react';

import './style.css';

export default function Meter(props) {
  return (
    <div className="meter">
      <p className="label">{ props.label }</p>
      <p className="value">{ props.value }</p>
    </div>
  );
}