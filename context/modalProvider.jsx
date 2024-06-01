import React, { createContext, useContext, useState } from 'react'

const ModalContext = createContext()

export default function ModalProvider ({children}) {

  const [display , setDisplay] = useState(false) 
  
  const [data , setData] = useState(null)

  return (
    <ModalContext.Provider value={{display , setDisplay , data , setData}}>
        {children}
    </ModalContext.Provider>
  )
}

export const useModal = () => {
  return useContext(ModalContext)
}