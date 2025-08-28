import { useRef } from "react";

const UseRef = ({ onNext }) => {
  const inputRef = useRef(null);
  const focus = () => inputRef.current && inputRef.current.focus();

  return (
    <div className="hook-card">
      <h2>useRef</h2>
      <input ref={inputRef} placeholder="Focus me via ref" style={{ padding: 8, borderRadius: 8, border: "1px solid #ddd" }} />
      <div>
        <button onClick={focus}>Focus</button>
      </div>
      {onNext && <button onClick={onNext}>Next →</button>}
    </div>
  );
};

export default UseRef;

