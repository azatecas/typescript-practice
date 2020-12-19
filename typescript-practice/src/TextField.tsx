import React from "react";

interface Person {
  firstName: string;
  lastName: string;
}

interface Props {
  text: string;
  ok: boolean;
  interger: number;
  //   fn: (bob: string) => string;
  person: Person;
}
export const TextField: React.FC<Props> = ({ text }) => {
  return (
    <div>
      <h1>{text}</h1>
      <input />
    </div>
  );
};
