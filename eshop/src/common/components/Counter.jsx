import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(1);

  function handleIncrement() {
    setCount((prevCount) => prevCount + 1);
  }

  function handleDecrement() {
    setCount((prevCount) => prevCount - 1);
  }

  function handleInputChange(e) {
    const val = e.target.value;

    if (!val) {
      setCount(1);
    } else {
      setCount(parseInt(val));
    }
  }

  return (
    <div>
      <button onClick={handleDecrement}>-</button>
      <input type="number" value={count} onChange={handleInputChange} />
      <button onClick={handleIncrement}>+</button>
    </div>
  );
}

export default Counter;
