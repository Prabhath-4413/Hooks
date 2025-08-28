import React, { createContext, useState, useCallback } from "react";

export const CounterContext = createContext();

export const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const [history, setHistory] = useState([]);

  const clearHistory = useCallback(() => {
    setHistory([]); // Clear history
  }, []);

  const handleCounterChange = useCallback((value) => {
    if (value === 0) {
      setCount(0);
      clearHistory(); // Clear history on reset
    } else {
      setCount((prev) => prev + value);
      setHistory((prev) => [...prev, value > 0 ? `Incremented by ${value}` : `Decremented by ${Math.abs(value)}`]);
    }
  }, [clearHistory]);

  return (
    <CounterContext.Provider value={{ count, handleCounterChange, history }}>
      {children}
    </CounterContext.Provider>
  );
};
