import React from 'react'

export default function CardWrapper({children}) {
  return (
    <section className="mb-12 2xl:max-w-screen-2xl max-w-screen-xl mx-auto sm:flex sm:gap-8 sm:gap-y-12 sm:justify-center sm:flex-wrap grid grid-cols-2">
        {children}
    </section>
  )
}