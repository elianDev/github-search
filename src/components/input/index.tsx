import { useContext, useState } from "react";
import MyContext from "../../context/MyContext";

export function Input() {

  interface Prop {
    name: string
  }
  const { name, setName }: any = useContext(MyContext)
  return (
    <div>
      <h1>Input</h1>
      <button onClick={() => setName('Pedro')}>Botão</button>
      {name}
    </div>
  );
}
