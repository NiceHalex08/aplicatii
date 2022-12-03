// SALUT DRAGOS
import { useState } from 'react';
import './App.css';
import { v4 as uuidv4 } from 'uuid';
import Card from './Card';
const Cards = (props) => {
  const { cards, update1, handleMinus, deleteCards } = props;

  //console.log(cards);
  // const update1 = (id) => {
  //   let newArr = [...cards];
  //   newArr.map((el) => {
  //     if (el.id === id) el.count++;
  //     return el;
  //   });

  //   setCards(newArr);
  // };

  // const handleMinus = (id) => {
  //   const newCards = cards.map((card) => {
  //     if (card.id === id) {
  //       if (card.count > 0) return { ...card, count: card.count - 1 };
  //       else {
  //         deleteCards(id);
  //         console.log('delete');
  //       }
  //     }
  //     return card;
  //   });
  //   setCards(newCards);
  // };
  // const deleteCards = (id) => {
  //   setCards(cards.filter((cards) => cards.id !== id));
  // };
  return (
    <div className='objcontent'>
      <div className='btnArea'></div>
      <div className='cardsArea'>
        {cards.map((element) => (
          <Card
            element={element}
            update1={update1}
            handleMinus={handleMinus}
            deleteCards={deleteCards}
          ></Card>
        ))}
      </div>
    </div>
  );
};

export default Cards;
