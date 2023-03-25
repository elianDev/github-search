import { useContext, useState } from "react";
import { MyContext } from "../../context/MyContext";

export function Input() {
  const { handleSubmit } = useContext(MyContext);
  // import a função handleSubmit do contexto
  const [value, setValue] = useState("");

  const handleClick = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    handleSubmit(value)
  }

  return (
    <form onSubmit={handleClick}>
      {/* Ao submit, executa a função handleSubmit enviando o argumento value */}
      <h1>Input</h1>
      <label htmlFor="name">Digite o nome de usuário: </label>
      <input
        id="name"
        type="text"
        value={value}
        onChange={() => setValue(value)}
      />
      <button>Botão</button>
    </form>
  );
}
