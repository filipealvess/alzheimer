import React, { useState, useEffect } from 'react';

import './App.css';
import Logo from './components/Logo';
import Cards from './components/Cards';
import Meter from './components/Meter';
import Popup from './components/Popup';
import PrimaryButton from './components/PrimaryButton';

export default function App() {
  const [formatedTime, setFormatedTime] = useState('0:00');
  const [finish, setFinish] = useState(false);
  const [restart, setRestart] = useState(false);
  const [moves, setMoves] = useState(0);
  let timeInSeconds = 0;

  useEffect(() => {
    const timer = setInterval(() => {
      const minutes = Math.floor(++timeInSeconds / 60);
      const lessThan10 = timeInSeconds % 60 < 10;
      const seconds = lessThan10 ? `0${timeInSeconds % 60}` : timeInSeconds % 60;
      
      setFormatedTime(`${minutes}:${seconds}`);
    }, 1000);

    finish && clearInterval(timer);

    return () => clearInterval(timer);
  }, [finish, timeInSeconds]);

  function incrementMoves() {
    setMoves(moves + 1);
  }

  function finishGame() {
    setFinish(true);
  }

  function restartGame() {
    timeInSeconds = 0;
    setFinish(false);
    setMoves(0);
    setFormatedTime('0:00');
    setRestart(true);
  }

  return (
    <>
      <header>
        <Logo />
      </header>

      <main>
        <Cards incrementMoves={incrementMoves} finishGame={finishGame} restart={restart} />
      </main>

      {
        finish
        &&
        <Popup
          title='Fim de Jogo!'
          description='Aqui está como você se saiu...'
          metrics={
            <>
              <Meter label="Tempo" value={formatedTime} />
              <Meter label="Movimentos" value={moves} />
            </>
          }
          buttons={
            <PrimaryButton onClick={restartGame} text='Jogar novamente' />
          }
        />
      }

      <footer className="metrics">
        <Meter label="Tempo" value={formatedTime} />
        <Meter label="Movimentos" value={moves} />
      </footer>
    </>
  );
}