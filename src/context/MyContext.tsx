import { createContext, ReactNode, useState } from "react";

interface MyContextInterface {
  handleSubmit: (username: string) => void;
}

export const MyContext = createContext<MyContextInterface>(
  {} as MyContextInterface,
);

interface MyProviderType {
  children: ReactNode;
}

export const MyProvider = ({ children }: MyProviderType) => {
  const [name, setName] = useState("");
  const [error, setError] = useState<string | boolean>(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(username: string) {
    try {
      setLoading(true);
      const response = await fetch("teste");
      const json = await response.json();
      setName(json);
    } catch (erro) {
      setError("Um erro ocorreu");
    } finally {
      setLoading(false);
    }
  }

  return (
    <MyContext.Provider value={{ handleSubmit }}>{children}</MyContext.Provider>
  );
};
