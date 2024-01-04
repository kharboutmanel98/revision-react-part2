import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prev) => {
      console.log(prev);
      return count + 1;
    });
  };
  return (
    <>
      <h2>My Counter</h2>
      <div>{count}</div>
      <button onClick={increment}>Increment</button>
    </>
  );
};

export default Counter;
