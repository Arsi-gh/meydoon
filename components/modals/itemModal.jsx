import { useModal } from '@/context/modalProvider';
import { toPersianNumbers } from '@/utilities/toPersianNumbers';
import React from 'react'
import { HiMiniXMark } from "react-icons/hi2";

export default function ItemModal() {

  const {display : displayModal , setDisplay : displayHandler} = useModal()

  return (
    <>
    <div onClick={() => displayHandler(false)} className={`w-screen h-screen fixed top-0 left-0 bg-black opacity-30 z-20 scale-0 transition-all ${displayModal && 'scale-100'}`}></div>
    <div className={`space-y-3 p-5 max-sm:px-3 items-center sm:rounded-xl fixed sm:inset-0 sm:m-auto z-20 bg-white sm:w-[25rem] h-fit w-full left-0 bottom-0 rounded-t-3xl sm:scale-0 -mb-[50rem] transition-all delay-75 ${displayModal && 'sm:scale-100 mb-0'}`}>
        <span className='flex gap-2 justify-between items-center border-b pb-3'>
            <b className='text-xl sm:text-2xl'>صبحانه ایرانی</b>
            <HiMiniXMark onClick={() => displayHandler(false)} className='text-4xl cursor-pointer'/>
        </span>
        <figure className='gap-x-4 items-center'>
            <img className='w-full h-auto object-cover' src='/images/11.png'/>
            <figcaption className='flex items-center justify-between gap-3 py-4'>
                <b className='sm:text-xl text-lg'>صبحانه ایرانی</b>
                <b className='sm:text-2xl text-xl'>{toPersianNumbers(90)},۰۰۰</b>
            </figcaption>
            <p className='sm:text-xl text-lg'>نون ، پنیر ، خیار ، گوجه ، کره ، خامه ، عسل</p>
        </figure>
    </div>
    </>
  )
}