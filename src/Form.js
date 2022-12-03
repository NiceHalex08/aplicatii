import { useState } from 'react';

const Form = (props) => {
  const { addCard } = props;

  const [name, setName] = useState();
  const [count, setCount] = useState();

  return (
    <div>
      <div>
        <label>Name:</label>
        <input
          type='text'
          id='name'
          name='name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Count:</label>
        <input
          type='text'
          id='count'
          name='count'
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button onClick={() => addCard(name, count)}>Add</button>
      </div>
    </div>
  );
};
export default Form;
