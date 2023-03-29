import { createContext, ReactNode, useEffect, useState } from "react";
import { getSearch } from "../services/SearchService";

interface MyContextInterface {
  handleSubmit: (username: string) => Promise<Search>
  response: any | undefined
}
interface Search {
data: any
local_results: Array<string | number>
organic_results: Array<string | number>
inline_images: Array<string | number>
}

export const MyContext = createContext<MyContextInterface>(
  {} as MyContextInterface,
);

interface MyProviderType {
  children: ReactNode;
}

export const MyProvider = ({ children }: MyProviderType): JSX.Element => {
  const [response, setResponse] = useState();
  const [error, setError] = useState<string | boolean>(false);
  const [loading, setLoading] = useState(false);

   async function handleSubmit(seach: string): Promise<any>{
     try {
      const res = await getSearch<Search>(seach)
      console.log('res', res)
        setResponse((prevState: any) => ({
          ...prevState,
          local_results: res.data.local_results,
          organic_results: res.data.organic_results,
          inline_images: res.data.inline_images
        }));
    } catch (erro) {
      setError("Um erro ocorreu: " + erro);
    } finally {
      setLoading(false);
    }
  }

  return (
    <MyContext.Provider value={{ response, handleSubmit }}>{children}</MyContext.Provider>
  );
};
