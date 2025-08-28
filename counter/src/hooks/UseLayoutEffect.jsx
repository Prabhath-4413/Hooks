import { useLayoutEffect, useRef, useState } from "react";

const UseLayoutEffect = ({ onNext }) => {
  const boxRef = useRef(null);
  const [measuredWidth, setMeasuredWidth] = useState(0);

  useLayoutEffect(() => {
    if (boxRef.current) {
      setMeasuredWidth(boxRef.current.getBoundingClientRect().width);
    }
  });

  return (
    <div className="hook-card">
      <h2>useLayoutEffect</h2>
      <div ref={boxRef} style={{ padding: 10, border: "1px dashed #aaa" }}>
        I am measured immediately after DOM mutations.
      </div>
      <p>Measured width: {Math.round(measuredWidth)}px</p>
      {onNext && <button onClick={onNext}>Next →</button>}
    </div>
  );
};

export default UseLayoutEffect;

