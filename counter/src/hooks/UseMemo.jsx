import { useMemo, useState } from "react";

const UseMemo = ({ onNext }) => {
  const [num, setNum] = useState(100000);
  const [dark, setDark] = useState(false);

  const expensive = useMemo(() => {
    let sum = 0;
    for (let i = 0; i < num; i++) sum += i;
    return sum;
  }, [num]);

  return (
    <div className={`hook-card ${dark ? "dark" : ""}`}>
      <h2>useMemo</h2>
      <p>Expensive sum of 0..{num} = {expensive}</p>
      <div>
        <button onClick={() => setNum((n) => n + 50000)}>Increase Work</button>
        <button onClick={() => setDark((d) => !d)}>Toggle Theme</button>
      </div>
      {onNext && <button onClick={onNext}>Next →</button>}
    </div>
  );
};

export default UseMemo;

