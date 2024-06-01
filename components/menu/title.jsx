import React, { forwardRef } from 'react'

const Title = forwardRef(function Title({children , text} , ref) {

  return (
    <div ref={ref} className='2xl:max-w-screen-2xl 2xl:px-24 px-4 max-w-screen-xl mx-auto my-16 max-sm:my-4 max-md:px-2'>
      <div className='p-2 rounded-3xl bg-gradient-to-bl from-primary-200 to-primary-100 mx-auto flex gap-2 items-center overflow-hidden relative max-sm:rounded-2xl'>
          <span className='flex items-center'>
              <img className='size-24' src="/images/cafe-meydoon-logo.png" alt="" />
              <b className='sm:text-4xl text-2xl text-primary-500 max-sm:max-w-40'>{text}</b>
          </span>
          {children}
      </div>
    </div>
  )
})

export default Title