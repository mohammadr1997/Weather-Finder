'use client'
import React, { useState } from 'react'
import { createContext } from 'react'
type contextType={
    cityName:string,
    setCityName:React.Dispatch<React.SetStateAction<string>>,
   
}
 export const Context=createContext<undefined | contextType>(undefined)
export default function ContextProvider({children}:{children:React.ReactNode}) {

  
   const [cityName,setCityName]=useState('Tehran')
  return (
  <Context.Provider value={{cityName,setCityName}}>{children}</Context.Provider>
  )
}
