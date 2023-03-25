import {createContext, useState} from "react";

export const MyContext = createContext('')

export const MyProvider = ({ children }:{ children: React.ReactNode }) => {
  const value = 'teste'
  return (
    <MyContext.Provider value={value}>
      {children}
    </MyContext.Provider>
  )
};