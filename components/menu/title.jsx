import React from 'react'
import { LuEggFried } from "react-icons/lu";


export default function Title() {
  return (
    <div className='w-[30rem] p-2 rounded-3xl bg-gradient-to-bl from-primary-200 to-primary-100 mx-auto flex gap-2 items-center my-16 overflow-hidden relative max-sm:my-4 max-sm:w-[95%]'>
        <span className='flex items-center '>
            <img className='size-24' src="/images/cafe-meydoon-logo.png" alt="" />
            <b className='sm:text-4xl text-2xl text-primary-500'>صبـحـانـه</b>
        </span>
        <LuEggFried className='text-[7rem] text-primary-500 opacity-50 absolute -left-3 -bottom-5 max-sm:text-[5.5rem]'/>
    </div>
  )
}