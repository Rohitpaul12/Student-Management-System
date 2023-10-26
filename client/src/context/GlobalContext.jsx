import { createContext, useContext, useState } from "react";

const GlobalContext = createContext()

export function GlobalContextProvider({children}){
    const[user,setUser] =useState();
    const[students,setStudents]= useState()
    return(
        <GlobalContext.Provider value={{user,setUser,students,setStudents}} >
             {children}
        </GlobalContext.Provider>

    )
}

export function useGlobalContext(){
    return useContext(GlobalContext)
}