import {useContext, useState} from "react";

export const MyContext = createContext()

export const MyStorage = ({ children }) => {
  const value = 'teste'
  return (
    <MyContext.Provider value={value}>
      {children}
    </MyContext.Provider>
  )
};