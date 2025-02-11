import React, { Children, useState } from "react";

interface CounterProps {
  children: (data: {
    count: number;
    setCount: React.Dispatch<React.SetStateAction<number>>;
  }) => JSX.Element | null;
}

export const Counter: React.FC<CounterProps> = ({ children }) => {
  const [count, setCount] = useState(0);

  return <div>{children({ count, setCount })}</div>;
};
