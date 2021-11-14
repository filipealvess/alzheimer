import React, { useState, useEffect } from 'react';

import './App.css';
import Logo from './components/Logo';
import Cards from './components/Cards';
import Meter from './components/Meter';

export default function App() {
  let [formatedTime, setFormatedTime] = useState('0:00');
  let [moves, setMoves] = useState(0);
  let timeInSeconds = 0;

  useEffect(() => {
    const timer = setInterval(() => {
      const minutes = Math.floor(++timeInSeconds / 60);
      const seconds = timeInSeconds % 60 < 10
        ? `0${timeInSeconds % 60}`
        : timeInSeconds % 60;

      setFormatedTime(`${minutes}:${seconds}`);
    }, 1000);
  }, [timeInSeconds]);

  return (
    <>
      <header>
        <Logo />
      </header>

      <main>
        <Cards />
      </main>

      <footer className="metrics">
        <Meter label="Tempo" value={formatedTime} />
        <Meter label="Movimentos" value={moves} />
      </footer>
    </>
  );
}