import { useModal } from '@/context/modalProvider';
import { toPersianNumbers } from '@/utilities/toPersianNumbers';
import React from 'react'
import { LuImage } from "react-icons/lu";

export default function Card({name , img , price}) {

  const { setDisplay : displayModal } = useModal()

  return (
    <figure onClick={() => displayModal(true)} className='cursor-pointer sm:rounded-xl relative sm:border border-zinc-300 md:w-64 p-3 max-sm:border-t max-sm:odd:border-l max-sm:first:border-t-0 max-sm:[&:nth-child(2)]:border-t-0'>
        <img src='/images/11.png' className='w-full object-cover sm:min-h-56 rounded-2xl shadow-lg shadow-neutral-300'/>
        {/* <ImageLogo/> */}
        <figcaption className='flex gap-2 mt-3 items-center justify-between'>
            <strong className='sm:text-2xl'>{name}</strong>
            <b className='flex flex-row-reverse sm:text-2xl text-xl text-primary-500'>{toPersianNumbers(price)}<span className='hidden sm:block'>۰۰۰,</span></b>
        </figcaption>
    </figure>
  )
}

const ImageLogo = () => {
  return (
      <div className='w-full min-h-56 h-auto bg-gradient-to-bl from-zinc-300 to-zinc-100 rounded-xl grid place-content-center'>
        <LuImage className='text-[6rem] text-zinc-600'/>
      </div>
  )
}