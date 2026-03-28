import React, { useState } from "react";

export default function useCount(initialVal) {
  const [count, setCount] = useState(initialVal);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const reset = () => {
    setCount(initialVal);
  };

  return { count, increment, decrement, reset };
}
