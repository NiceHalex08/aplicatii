import { useState } from 'react';

const Card = (props) => {
  const { element, update1, handleMinus, deleteCards } = props;
  const [value, setValue] = useState();
  const [isInput, setIsInput] = useState(false);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onSave = () => {
    element.name = value;
    let get = document.getElementById(element.id);
    get.innerHTML = value;
  };

  return (
    <div className='obj'>
      <p id='ename'>
        <p>
          name:<label id={element.id}>{element.name}</label>
          <button onClick={() => setIsInput(!isInput)}>edit</button>
          {isInput ? (
            <div>
              <input className='input' value={value} onChange={onChange} />

              <button onClick={onSave}>Save</button>
            </div>
          ) : (
            <div>{value}</div>
          )}
        </p>
      </p>
      <p>count:{element.count}</p>
      <button onClick={() => update1(element.id)}>+</button>
      <button onClick={() => handleMinus(element.id)}>-</button>
      <button onClick={() => deleteCards(element.id)}>Delete card</button>
    </div>
  );
};
export default Card;
// import { useState } from 'react';

// const TestVsInput = () => {

//   const [value, setValue] = useState('test');

//   const [isInput, setIsInput] = useState(false);

//   const onChange = (e) => {

//     setValue(e.target.value);

//   };

//   const onSave = () => {

//     //actualizeaza numele in array de obiecte

//   };

//   return (

//     <div>

//       <button onClick={() => setIsInput(!isInput)}>edit input</button>

//       {isInput ? (

//         <div>

//           <input value={value} onChange={onChange} />

//           <button onClick={onSave}>Save</button>

//         </div>

//       ) : (

//         <div>{value}</div>

//       )}

//     </div>

//   );

// };

// export default TestVsInput;
