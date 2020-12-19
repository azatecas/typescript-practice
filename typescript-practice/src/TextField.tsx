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
}

interface TextNode {
  text: string;
}

export const TextField: React.FC<Props> = ({ text }) => {
  const [count, setcount] = useState<TextNode>({ text: "hello" });

  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div>
      <h1>{text}</h1>
      <input ref={inputRef} />
    </div>
  );
};
