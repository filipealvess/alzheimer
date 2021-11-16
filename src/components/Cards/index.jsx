import React, { useEffect, useState } from 'react';

import Card from '../Card';
import './style.css';
import generate from '../../controllers/numbers';

export default function Cards({ incrementMoves, finishGame, restart }) {
  let [numbers, setNumbers] = useState([]);
  let [selectedCard, setSelectedCard] = useState(null);

  useEffect(() => {
    generateRandomNumbers();
  }, []);

  useEffect(() => {
    if (restart) {
      generateRandomNumbers();
    }
  }, [restart]);

  function generateRandomNumbers() {
    setNumbers(
      generate().map((number, index) => ({
        id: index,
        number,
        visible: false,
        found: false
      }))
    );
  }

  function hideNumbers() {
    setSelectedCard(null);

    setTimeout(() => {
      setNumbers(
        numbers.map(number => {
          const cardWasFound = number.visible && number.found === false;

          number.visible = cardWasFound ? false : number.visible;

          return number;
        })
      );
    }, 300);
  }

  function markCardAsFound(card) {
    setTimeout(() => {
      setNumbers(
        numbers.map(number => {
          const { id } = number;
          const cardWasFound = (selectedCard.id === id) || (card.id === id);

          number.found = cardWasFound ? true : number.found;

          return number;
        })
      );

      const numbersFound = numbers.filter(({ found }) => found);
      const allNumbersWereFound = numbersFound.length === numbers.length;

      if (allNumbersWereFound) {
        finishGame();
        setNumbers(
          numbers.map(number => {
            number.visible = false;
            return number;
          })
        );
      }
    }, 100);
  }

  function handleSelectCard(id) {
    const card = numbers.filter(number => number.id === id)[0];

    if (card.found) return;

    if (selectedCard === null) {
      setSelectedCard(card);
      incrementMoves();
      return;
    }

    if (selectedCard.id === id) return;

    if (selectedCard.number === card.number) {
      markCardAsFound(card);
      setSelectedCard(null);
      incrementMoves();
      return;
    }

    incrementMoves();
    hideNumbers();
  }

  function handleCardClick(id) {
    setNumbers(
      numbers.map(number => {
        number.visible = (number.id === id) ? true : number.visible;

        return number;
      })
    );
    handleSelectCard(id);
  }

  return (
    <div className="cards">
      {
        numbers.map(number => {
          return <Card
            key={number.id}
            card={number}
            handleCardClick={handleCardClick}
          />
        })
      }
    </div>
  );
}