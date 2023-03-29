import { useContext, useEffect, useState } from "react";
import { MyContext } from "../../context/MyContext";
import { getSearch } from "../../services/GithubService";
import { Button } from "../button";
import './index.scss'

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

  const handleClick = async (e?: React.FormEvent<HTMLFormElement>): Promise<any> => {
    e?.preventDefault()
    const teste = await getSearch(value)
    console.log('teste', teste)
    handleSubmit(value)
    clearState()
  }

  const clearState = () => {
    setValue("")
  }

  return (
    <div className="input-container">
      <form onSubmit={handleClick}>
        {/* Ao submit, executa a função handleSubmit enviando o argumento value */}
        <h1>SEARCH </h1>
        <p>pesquisa</p>
        <p id="text-search">Vamos achar um imóvel pra você</p>
        <div className="input-group">
          <input
            id="name"
            type="text"
            value={value}
            onChange={(item) => setValue(item.target.value)}
          />
          <Button method={handleClick}/>
        </div>

      </form>
    </div>
  );
}
