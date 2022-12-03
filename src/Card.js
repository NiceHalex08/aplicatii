import { useEffect } from 'react';

const Card = (props) => {
  const { element, update1, handleMinus, deleteCards } = props;
  useEffect(() => {
    console.log('Salut');
  }, [handleMinus]);

  return (
    <div className='obj'>
      <p>name:{element.name}</p>
      <p>count:{element.count}</p>
      <button onClick={() => update1(element.id)}>+</button>
      <button onClick={() => handleMinus(element.id)}>-</button>
      <button onClick={() => deleteCards(element.id)}>Delete card</button>
    </div>
  );
};
export default Card;
