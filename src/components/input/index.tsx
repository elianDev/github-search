import { useContext, useEffect, useState } from "react";
import { MyContext } from "../../context/MyContext";
import { getSearch } from "../../services/SearchService";
import { Button } from "../button";
import { Result } from "../results";
import { Tips } from "../tips";
import './index.scss'

export function Input(): JSX.Element {

  interface Search {
    data: any
    local_results: Array<string | any>
    organic_results: Array<string | any>
    inline_images: Array<string | any>
    }

  const { response, handleSubmit } = useContext(MyContext);
  // import a função handleSubmit do contexto
  const [value, setValue] = useState<string>("");
  const [data, setData] = useState<Search>()
  const [extensions, setExtensions] = useState<any>([])


  useEffect(() => {
    setData(response)
    
  }, [response])

  useEffect(() => {
    if(data)
    data.local_results.forEach(item => {
      console.log('item', item.extensions)
      setExtensions([...extensions, item.extensions])
    })
  }, [data])

  const handleClick = async (e?: React.FormEvent<HTMLFormElement>): Promise<any> => {
    e?.preventDefault()
    await handleSubmit(value)
    clearState()
  }

  const clearState = () => {
    setValue("")
  }

  return (
    <div className={`input-container ${!data ? 'mt-xl' : 'teste mt-sm'}`}>
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
      {
        !data && <Tips/>
      }
      {
        data && 
          data.local_results.map((item, index )=> {
            return (
              <div key={index}>
              <Result title={item.title} infos={item.extensions}/>
            </div>
            )
          })
      }
    </div>
  );
}
