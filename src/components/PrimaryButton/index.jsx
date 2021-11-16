import React from 'react';

import './style.css';

export default function PrimaryButton(props) {
  return (
    <button className="primary-button" onClick={ props.onClick }>
      { props.text }
    </button>
  );
}