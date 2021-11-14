import React, { useEffect, useState } from 'react';

import Card from '../Card';
import './style.css';
import generate from '../../controllers/numbers';

export default function Cards() {
  let [numbers, setNumbers] = useState([]);
  let [selectedCard, setSelectedCard] = useState(null);

  useEffect(() => {
    const newNumbers = generate().map((number, index) => ({
      id: index,
      number,
      visible: false,
      finded: false
    }));

    setNumbers(newNumbers);
  }, []);

  function hideNumbers() {
    setTimeout(() => {
      setSelectedCard(null);
      setNumbers(
        numbers.map(number => {
          const cardWasFound = number.visible && number.finded === false;
          
          number.visible = cardWasFound ? false : number.visible;

          return number;
        })
      );
    }, 500);
  }

  function markCardAsFinded(card) {
    setTimeout(() => {
      setNumbers(
        numbers.map(number => {
          const { id } = number;
          const cardWasFound = (selectedCard.id === id) || (card.id === id);

          number.finded = cardWasFound ? true : number.finded;

          return number;
        })
      );
    }, 300);
  }

  function handleSelectCard(id) {
    const card = numbers.filter(number => number.id === id)[0];

    if (card.finded) return;

    if (selectedCard === null) {
      setSelectedCard(card);
      return;
    }

    if (selectedCard.id === id) return;

    if (selectedCard.number === card.number) {
      markCardAsFinded(card);
      setSelectedCard(null);
      return;
    }

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