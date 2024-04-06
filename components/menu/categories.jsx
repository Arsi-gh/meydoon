import React from 'react'
import { LuCupSoda, LuEggFried, LuSalad } from "react-icons/lu";

export default function Categories() {
  return (
    <div className="w-full bg-white lg:mt-6 max-lg:my-2 py-4 lg:py-6 sticky top-0 z-10  lg:backdrop-blur-md lg:bg-opacity-70 max-lg:shadow-none">
      <div className="p-2 bg-zinc-100 flex gap-2 xl:w-fit max-xl:w-full xl:mx-auto xl:rounded-lg overflow-auto max-lg:bg-white text-2xl max-sm:text-lg">
        <button className='flex gap-2 p-2 items-center rounded-lg bg-white shadow-md border border-zinc-100 min-w-fit'><LuEggFried className='menu-icon'/><p>صبحانه</p></button>
        <button className='flex gap-2 p-2 items-center rounded-lg bg-white shadow-md border border-zinc-100 min-w-fit'><LuSalad className='menu-icon'/><p>پیش غذا</p></button>
        <button className='flex gap-2 p-2 items-center rounded-lg bg-white shadow-md border border-zinc-100 min-w-fit'><LuCupSoda className='menu-icon'/><p>نوشیدنی</p></button>
        <button className='flex gap-2 p-2 items-center rounded-lg bg-white shadow-md border border-zinc-100 min-w-fit'><p>نوشیدنی های گرم</p></button>
        <button className='flex gap-2 p-2 items-center rounded-lg bg-white shadow-md border border-zinc-100 min-w-fit'><p>نوشیدنی های گرم بر پایه قهوه</p></button>
        <button className='flex gap-2 p-2 items-center rounded-lg bg-white shadow-md border border-zinc-100 min-w-fit'><p>نوشیدنی های سرد بر پیاه قهوه</p></button>
        <button className='flex gap-2 p-2 items-center rounded-lg bg-white shadow-md border border-zinc-100 min-w-fit'><p>چای ایرانی و سایر اقوام</p></button>
        <button className='flex gap-2 p-2 items-center rounded-lg bg-white shadow-md border border-zinc-100 min-w-fit'><p>میلک شیک</p></button>
      </div>
    </div>
  )
}

// onClick={() => window.scrollTo({top : refs[0].current.offsetTop - 200})}