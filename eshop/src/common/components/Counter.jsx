import { useState } from 'react';
import Button from '../../common/components/Button';

const buttonClass = 'font-bold transform scale-125 duration-200 hover:-translate-y-0.5 active:translate-y-0.5';

function Counter() {
  const [count, setCount] = useState(1);

  function handleIncrement() {
    if (count === '') {
      setCount(1);
    } else {
      setCount((prevCount) => prevCount + 1);
    }
  }

  function handleDecrement() {
    if (count === 1 || count === '') {
      setCount(1);
    } else {
      setCount((prevCount) => prevCount - 1);
    }
  }

  function handleInputChange(e) {
    const val = e.target.value;
    const newVal = val === '' ? '' : parseInt(val);

    setCount(newVal);
  }

  return (
    <div>
      <Button className={buttonClass} onClick={handleDecrement}>
        -
      </Button>
      <input type="number" value={count} className="outline-none p-2 w-10" inputMode="numeric" onChange={handleInputChange} />
      <Button className={buttonClass} onClick={handleIncrement}>
        +
      </Button>
    </div>
  );
}

export default Counter;
