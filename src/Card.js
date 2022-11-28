const Card 
... ... 
<div className='objcontent'>
      {cards.map((elem) => (
        <div className='obj'>
          <p>name:{elem.name}</p>
          <p>count:{elem.count}</p>
          <button onClick={() => update1(elem.name)}>+</button>
          <button onClick={() => update2(elem.name)}>-</button>
        </div>
      ))}
    </div>