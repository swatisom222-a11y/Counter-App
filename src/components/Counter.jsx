import React from "react";
import useCount from "../hook/useCount";
import './Counter.css';

function Counter() {
  const { count, increment, decrement, reset } = useCount(0);
  return (
    <div>
      <p>Count : {count} </p>
      <button className="add" onClick={increment}>Increment</button>
      <button className="minus" onClick={decrement}>Decrement</button>
      <button className="reset" onClick={reset}>Reset</button>
    </div>
  );
}

export default Counter;
