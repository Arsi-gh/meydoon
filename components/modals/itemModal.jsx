import { useModal } from '@/context/modalProvider';
import { toPersianNumbers } from '@/utilities/toPersianNumbers';
import React from 'react'
import { HiMiniXMark } from "react-icons/hi2";

export default function ItemModal() {

  const {display : displayModal , setDisplay : displayHandler , data : item} = useModal()

  if (item) return (
    <>
    <div onClick={() => displayHandler(false)} className={`w-screen h-screen fixed top-0 left-0 bg-black opacity-30 z-20 scale-0 ${displayModal && 'scale-100'}`}></div>
    <div className={`space-y-3 p-5 max-sm:px-3 items-center sm:rounded-xl fixed sm:inset-0 sm:m-auto z-20 bg-white sm:w-[25rem] h-fit pb-6 w-full left-0 bottom-0 rounded-t-3xl sm:scale-0 -mb-[50rem] transition-all delay-75 ${displayModal && 'sm:scale-100 mb-0'}`}>
        <span className='flex gap-2 justify-between items-center border-b pb-3'>
            <b className='text-xl sm:text-2xl'>{item.name}</b>
            <HiMiniXMark onClick={() => displayHandler(false)} className='text-4xl cursor-pointer'/>
        </span>
        <figure className='gap-x-4 items-center'>
            {item.img && <img className='w-full h-auto object-cover rounded-2xl' src={item.img}/>}
            {!item.img && <div className='w-full p-6 rounded-2xl shadow-xl bg-gradient-to-bl from-primary-100 to-primary-50'><img src='/images/cafe-logo.png' className='min-h-56 object-contain'/></div>}
            <figcaption className='flex items-center justify-between gap-3 py-4'>
                <b className='sm:text-2xl text-xl'>{item.name}</b>
                <b className='sm:text-2xl text-2xl'>{toPersianNumbers(item.price)},۰۰۰</b>
            </figcaption>
            {item.for && <b className='sm:text-xl text-lg'>{item.for}</b>}
            <p className='sm:text-xl py-2'>{item.desc}</p>
        </figure>
        <button onClick={() => displayHandler(false)} className='w-full p-3 text-xl font-bold bg-gradient-to-b from-primary-100 to-primary-50 shadow-lg rounded-xl'>بازگشت</button>
    </div>
    </>
  )
}