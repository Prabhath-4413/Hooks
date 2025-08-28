import { forwardRef, useImperativeHandle, useRef } from "react";

const FancyInput = forwardRef((props, ref) => {
  const inputRef = useRef(null);
  useImperativeHandle(ref, () => ({
    focus: () => inputRef.current && inputRef.current.focus(),
    clear: () => inputRef.current && (inputRef.current.value = ""),
  }));
  return <input ref={inputRef} placeholder="Imperative handle input" style={{ padding: 8, borderRadius: 8, border: "1px solid #ddd" }} />;
});

const UseImperativeHandle = ({ onNext }) => {
  const apiRef = useRef(null);
  return (
    <div className="hook-card">
      <h2>useImperativeHandle</h2>
      <FancyInput ref={apiRef} />
      <div>
        <button onClick={() => apiRef.current?.focus()}>Focus</button>
        <button onClick={() => apiRef.current?.clear()}>Clear</button>
      </div>
      {onNext && <button onClick={onNext}>Next →</button>}
    </div>
  );
};

export default UseImperativeHandle;

