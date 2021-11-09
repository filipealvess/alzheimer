import React from 'react';

import './App.css';
import Logo from './components/Logo';
import Cards from './components/Cards';
import Meter from './components/Meter';

export default function App() {
  const numbers = [14, 7, 5, 20, 2, 9, 34, 11, 8, 1, 14, 7, 5, 20, 2, 9, 34, 11, 8, 1];

  return (
    <>
      <header>
        <Logo />
      </header>

      <main>
        <Cards numbers={numbers} />
      </main>

      <footer className="metrics">
        <Meter label="Tempo" value="0:00" />
        <Meter label="Movimentos" value="0" />
      </footer>
    </>
  );
}