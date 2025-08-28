import { forwardRef, useRef } from "react";

const Input = forwardRef((props, ref) => (
  <input ref={ref} placeholder="Forwarded ref input" style={{ padding: 8, borderRadius: 8, border: "1px solid #ddd" }} />
));

const ForwardRef = ({ onNext }) => {
  const ref = useRef(null);
  return (
    <div className="hook-card">
      <h2>forwardRef</h2>
      <Input ref={ref} />
      <div>
        <button onClick={() => ref.current && ref.current.focus()}>Focus via forwarded ref</button>
      </div>
      {onNext && <button onClick={onNext}>Next →</button>}
    </div>
  );
};

export default ForwardRef;

