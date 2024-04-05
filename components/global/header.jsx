import React from 'react'
import { FiSearch } from "react-icons/fi";
import Logo from './logo';


export default function Header() {
  return (
    <header className='2xl:max-w-screen-2xl 2xl:px-24 max-w-screen-xl mx-auto p-3 flex justify-between items-center'>
        <Logo/>
        <Search/>
    </header>
  )
}


const Search = () => {
    return (
        <div className='relative flex items-center bg-zinc-100 rounded-lg overflow-hidden pl-2 max-sm:p-3 max-sm:cursor-pointer'>
            <input type="text" className=' p-2 bg-inherit text-xl rounded-r-lg placeholder:text-neutral-600 outline-none max-sm:hidden' placeholder='جست و جو'/>
            <FiSearch className='text-2xl text-zinc-500'/>
        </div>
    )
}