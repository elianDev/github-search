import { useContext, useState } from "react";
// import { MyStorage } from "../../context/MyContext";

export function Input() {
  const [value, setValue] = useState("");

  return (
    <div>
      <h1>Input</h1>
      <label htmlFor="name">Digite o nome de usuário: </label>
      <input
        id="name"
        type="text"
        value={value}
        onChange={() => setValue(value)}
      />
      <button>Botão</button>
    </div>
  );
}
