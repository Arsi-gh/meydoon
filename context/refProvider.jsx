import React, { createContext, useContext, useRef } from 'react'

const RefContext = createContext()

const RefProvider = ({children}) => {

    const appetizerRef = useRef()
    const breakfastRef = useRef()
    const burgerRef = useRef()
    const coldDrinkRef = useRef()
    const coldEspressoRef = useRef()
    const desertRef = useRef()
    const grillRef = useRef()
    const hotDrinkRef = useRef()
    const hotEspressoRef = useRef()
    const juiceRef = useRef()
    const pastaRef = useRef()
    const saladRef = useRef()
    const shakeRef = useRef()
    const sharbatRef = useRef()
    const teaRef = useRef()

    const refs = { appetizerRef, breakfastRef, burgerRef, coldDrinkRef, coldEspressoRef, desertRef, grillRef, hotDrinkRef, hotEspressoRef, juiceRef, pastaRef, saladRef, shakeRef, sharbatRef, teaRef }

    return (
        <RefContext.Provider value={refs}>
            {children}
        </RefContext.Provider>
    )
}

export default RefProvider


export const useRefs = () => {
    return useContext(RefContext)
}