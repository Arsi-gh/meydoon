import React from 'react'
import { useModal } from '@/context/modalProvider';
import { toPersianNumbers } from '@/utilities/toPersianNumbers';

export default function Card({item}) {

  const {name , img , price , desc} = item

  const { setDisplay : displayModal , setData } = useModal()

  const clickHandler = () => {
    displayModal(true)
    setData(item)
  }

  return (
    <figure onClick={() => clickHandler()} className='cursor-pointer sm:rounded-xl  sm:border border-zinc-300 sm:w-64 p-3 max-sm:border-t max-sm:odd:border-l max-sm:first:border-t-0 max-sm:flex max-sm:flex-col max-sm:[&:nth-child(2)]:border-t-0 relative'>
        {img && <img src='/images/burger.png' className='w-full object-cover sm:min-h-56 rounded-2xl sm:relative -top-8 shadow-lg'/>}
        {!img && <ImageLogo/>}
        <figcaption className='flex gap-2 items-center justify-between sm:-mt-3 mt-3'>
            <strong className='sm:text-xl text-lg text-primary-500'>{name}</strong>
            <b className='flex flex-row-reverse sm:text-2xl text-xl  text-primary-500'>{toPersianNumbers(price)}<span className='hidden sm:block'>۰۰۰,</span></b>
        </figcaption>
        {desc && <p className='mt-2 sm:font-bold sm:text-lg line-clamp-2 max-sm:truncate'>{desc}</p>}
    </figure>
  )
}

const ImageLogo = () => {
  return (
      <div className='w-full flex-grow sm:min-h-56 bg-gradient-to-bl from-primary-100 to-primary-50 rounded-2xl grid place-content-center p-3 sm:relative -top-8 shadow-lg max-sm:p-5'>
        <img className='w-full' src="/images/cafe-logo.png" alt="" />
      </div>
  )
}