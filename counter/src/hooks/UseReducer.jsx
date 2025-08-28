import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "inc":
      return { count: state.count + 1 };
    case "dec":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    default:
      return state;
  }
}

const UseReducer = ({ onNext }) => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div className="hook-card">
      <h2>useReducer</h2>
      <p>Count: {state.count}</p>
      <div>
        <button onClick={() => dispatch({ type: "inc" })}>+1</button>
        <button onClick={() => dispatch({ type: "dec" })}>-1</button>
        <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      </div>
      {onNext && <button onClick={onNext}>Next →</button>}
    </div>
  );
};

export default UseReducer;

