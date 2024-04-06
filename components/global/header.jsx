import React from 'react'
import { FiSearch } from "react-icons/fi";
import Logo from './logo';


export default function Header() {
  return (
    <header className='2xl:max-w-screen-2xl 2xl:px-16 max-w-screen-xl mx-auto'>
      <div className='bg-gradient-to-bl from-primary-200 to-primary-100 flex justify-between items-center sm:p-5 sm:pt-0 sm:rounded-b-[3rem] p-3 rounded-b-3xl'>
        <Logo/>
        <Search/>
      </div>
    </header>
  )
}


const Search = () => {
    return (
        <div className='relative flex items-center sm:bg-zinc-100 rounded-lg overflow-hidden sm:pl-2'>
            <input type="text" className='p-2 bg-inherit text-xl rounded-r-lg placeholder:text-neutral-600 outline-none max-md:w-36 max-sm:hidden' placeholder='جست و جو'/>
            <FiSearch className='text-2xl text-zinc-500 max-sm:text-3xl max-sm:text-primary-500 cursor-pointer'/>
        </div>
    )
}