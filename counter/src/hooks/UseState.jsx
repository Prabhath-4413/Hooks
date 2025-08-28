import { useState } from "react";

const UseState = ({ onNext }) => {
  const [count, setCount] = useState(0);

  return (
    <div className="hook-card">
      <h2>useState</h2>
      <p>Count: {count}</p>
      <div>
        <button onClick={() => setCount((c) => c + 1)}>Increment</button>
        <button onClick={() => setCount((c) => c - 1)}>Decrement</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
      {onNext && <button onClick={onNext}>Next →</button>}
    </div>
  );
};

export default UseState;

