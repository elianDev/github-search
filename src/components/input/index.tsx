import { useContext, useEffect, useState } from "react";
import { MyContext } from "../../context/MyContext";

export function Input(): JSX.Element {

  interface User {
    name: string
    followers: number
    following: number
    visit_url: string
    repos: number
    description?: string
  }

  const { response, handleSubmit } = useContext(MyContext);
  // import a função handleSubmit do contexto
  const [value, setValue] = useState<string>("");
  const [data, setData] = useState<User>()

  useEffect(() => {
    setData(response)
  }, [response])

  const handleClick = async (e: React.FormEvent<HTMLFormElement>): Promise<any> => {
    e.preventDefault()
    handleSubmit(value)
    setValue("")
  }

  return (
    <div>

      <form onSubmit={handleClick}>
        {/* Ao submit, executa a função handleSubmit enviando o argumento value */}
        <label htmlFor="name">Digite o nome de usuário: </label>
        <input
          id="name"
          type="text"
          value={value}
          onChange={(item) => setValue(item.target.value.toLowerCase().split(' ').join(''))}
        />
        <button>Botão</button>

      </form>
      <div>{data && <p>Nome do usuário: {data.name}</p>}</div>
    </div>
  );
}
