// SALUT DRAGOS
import { useState } from 'react';
import './App.css';
import { v4 as uuidv4 } from 'uuid';
import Card from './Card';
const Cards = () => {
  const [cards, setCards] = useState([
    { id: 1, name: '1', count: 0 },
    // { name: '2', count: 0 },
    // { name: '3', count: 0 },
    // { name: '4', count: 0 },
    // { name: '5', count: 0 },dawdaw
    // { name: '6', count: 0 },
    // { name: '7', count: 0 },
    // { name: '8', count: 0 },
    // { name: '9', count: 0 },
    // { name: '10', count: 0 },
    // { name: '11', count: 0 },
    // { name: '12', count: 0 },
    // { name: '13', count: 0 },
  ]);
  const addCard = () => {
    setCards([...cards, { id: uuidv4(), name: uuidv4(), count: 0 }]);
  };
  console.log(cards);
  const update1 = (id) => {
    let newArr = [...cards];
    newArr.map((el) => {
      if (el.id === id) el.count++;
      return el;
    });

    setCards(newArr);
  };

  const handleMinus = (id) => {
    const newCards = cards.map((card) => {
      if (card.id === id) {
        if (card.count > 0) return { ...card, count: card.count - 1 };
        else {
          deleteCards(id);
          console.log('delete');
        }
      }
      return card;
    });
    setCards(newCards);
  };
  const deleteCards = (id) => {
    setCards(cards.filter((cards) => cards.id !== id));
  };
  return (
    <div className='objcontent'>
      <div className='btnArea'>
        <button className='btn' onClick={() => addCard()}>
          Add card
        </button>
      </div>
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
