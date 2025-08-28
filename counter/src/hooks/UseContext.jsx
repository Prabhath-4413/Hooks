import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

const UseContext = ({ onNext }) => {
  const { count, handleCounterChange, history } = useContext(CounterContext);

  return (
    <div className="hook-card">
      <h2>useContext</h2>
      <p>Shared count: {count}</p>
      <div>
        <button onClick={() => handleCounterChange(1)}>+1</button>
        <button onClick={() => handleCounterChange(-1)}>-1</button>
        <button onClick={() => handleCounterChange(0)}>Reset</button>
      </div>
      <div style={{ marginTop: 8, fontSize: 12, opacity: 0.8 }}>
        <strong>History:</strong>
        <ul style={{ textAlign: "left" }}>
          {history.map((h, i) => (
            <li key={i}>{h}</li>
          ))}
        </ul>
      </div>
      {onNext && <button onClick={onNext}>Next →</button>}
    </div>
  );
};

export default UseContext;

