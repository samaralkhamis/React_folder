import React from 'react';
import { useState, useEffect } from "react";
function Counter() {
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);

  useEffect(() => {
    setCalculation(() => count * 12);
  }, [count]); 

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <p>Calculation: {calculation}</p>
    </>
  );
}


export default Counter ;