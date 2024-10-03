'use client'
import { useState } from "react";
import { createContext } from "react";

export let Context = createContext();

export default function ContextProvider({ children }) {
    let [isLogged, setIsLogged] = useState(false);
    return(
        <Context.Provider value={{isLogged, setIsLogged}}>
        {children}
        </Context.Provider>
    )
}