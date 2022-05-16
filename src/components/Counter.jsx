import React from "react";
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }
  return (
    <div>
      <h1>Counter is at: {count}</h1>
      <button onClick={increment}>Click Me!</button>
    </div>
  );
}
