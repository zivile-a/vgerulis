import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(1);

  return (
    <div>
      <button>-</button>
      <input value={count} />
      <button>+</button>
    </div>
  );
}

export default Counter;
