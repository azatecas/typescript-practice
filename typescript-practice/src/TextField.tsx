import React, { useState, useRef } from "react";
import { setCommentRange } from "typescript";

interface Person {
  firstName: string;
  lastName: string;
}

interface Props {
  text: string;
  ok: boolean;
  interger?: number;
  fn?: (bob: string) => string;
  person: Person;
  handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface TextNode {
  text: string;
}

export const TextField: React.FC<Props> = ({ text, handleChange }) => {
  const [count, setcount] = useState<TextNode>({ text: "hello" });

  const inputRef = useRef<HTMLInputElement>(null);
  const divRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={divRef}>
      <h1>{text}</h1>
      <input ref={inputRef} onChange={handleChange} />
    </div>
  );
};
