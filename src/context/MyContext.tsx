import { createContext, ReactNode, useEffect, useState } from "react";
import { getUser } from "../services/GithubService";

interface MyContextInterface {
  handleSubmit: (username: string) => Promise<User>
  response: User | undefined
}
interface User {
  name: string
  followers: number
  following: number
  visit_url: string
  repos: number
  description?: string
}

export const MyContext = createContext<MyContextInterface>(
  {} as MyContextInterface,
);

interface MyProviderType {
  children: ReactNode;
}

export const MyProvider = ({ children }: MyProviderType): JSX.Element => {
  const [response, setResponse] = useState<User>({
    name:'',
    followers: 0,
    following: 0,
    visit_url: '',
    repos: 0,
    description: ''
  });
  const [error, setError] = useState<string | boolean>(false);
  const [loading, setLoading] = useState(false);

   async function handleSubmit(username: string): Promise<any> {
     try {
      getUser(username).then((res) => {
          setResponse({
          name: res.data.name,
          followers: res.data.followers,
          following: res.data.following,
          visit_url: res.data.html_url,
          repos: res.data.public_repos,
          description: res.data.bio
        })
      })
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
