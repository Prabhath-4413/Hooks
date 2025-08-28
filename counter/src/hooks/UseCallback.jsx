import { useCallback, useState } from "react";

const Child = ({ onCompute }) => (
  <button onClick={() => onCompute(2)}>Child compute x2</button>
);

const UseCallback = ({ onNext }) => {
  const [base, setBase] = useState(1);
  const [dark, setDark] = useState(false);

  const onCompute = useCallback((multiplier) => setBase((b) => b * multiplier), []);

  return (
    <div className={`hook-card ${dark ? "dark" : ""}`}>
      <h2>useCallback</h2>
      <p>Base: {base}</p>
      <div>
        <button onClick={() => setBase((b) => b + 1)}>+1</button>
        <Child onCompute={onCompute} />
      </div>
      <button onClick={() => setDark((d) => !d)}>Toggle Theme</button>
      {onNext && <button onClick={onNext}>Next →</button>}
    </div>
  );
};

export default UseCallback;

