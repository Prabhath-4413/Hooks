import { useEffect, useState } from "react";

const UseEffect = ({ onNext }) => {
  const [count, setCount] = useState(0);
  const [title, setTitle] = useState("Effect Demo");

  useEffect(() => {
    document.title = `${title} (${count})`;
  }, [title, count]);

  return (
    <div className="hook-card">
      <h2>useEffect</h2>
      <p>Open the browser tab title to see updates.</p>
      <p>Count: {count}</p>
      <div>
        <button onClick={() => setCount((c) => c + 1)}>+1</button>
        <button onClick={() => setTitle("Title Updated")}>Change Title</button>
      </div>
      {onNext && <button onClick={onNext}>Next →</button>}
    </div>
  );
};

export default UseEffect;

