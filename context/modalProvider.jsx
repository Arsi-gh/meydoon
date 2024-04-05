import React, { createContext, useContext, useState } from 'react'

const ModalContext = createContext()

export default function ModalProvider ({children}) {

  const [display , setDisplay] = useState(false)  

  return (
    <ModalContext.Provider value={{display , setDisplay}}>
        {children}
    </ModalContext.Provider>
  )
}

export const useModal = () => {
    return useContext(ModalContext)
}