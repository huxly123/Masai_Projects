import { useState } from "react";
import { Button } from "./Button";
export const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1 data-testid="counter">{count}</h1>
      <Button label="Add" onclick={() => setCount(count + 5)} />
      <Button label="Sub" onclick={() => setCount(count - 5)} />
    </>
  );
};
