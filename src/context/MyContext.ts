import { createContext } from "react";

export const MyContext = createContext("");

export const MyStorage = () => {
  return <MyContext.Provider></MyContext.Provider>
};
