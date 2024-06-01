import React from 'react'
import { LuCakeSlice, LuCupSoda, LuEggFried, LuGlassWater, LuSalad, LuSoup } from "react-icons/lu";
import { BiCoffeeTogo } from "react-icons/bi";
import { LiaCoffeeSolid, LiaHamburgerSolid } from "react-icons/lia";
import { TbMeat, TbMilkshake } from "react-icons/tb";
import { BsCupStraw } from "react-icons/bs";
import { PiCoffeeBold } from "react-icons/pi";
import { useRefs } from '@/context/refProvider';



export default function Categories() {
  
  const { appetizerRef, breakfastRef, burgerRef, coldDrinkRef, coldEspressoRef, desertRef, grillRef, hotDrinkRef, hotEspressoRef, juiceRef, pastaRef, saladRef, shakeRef, sharbatRef, teaRef } = useRefs()

  return (
    <div className="w-full bg-white lg:mt-6 max-lg:my-2 py-4 lg:py-6 sticky top-0 z-10  lg:backdrop-blur-md lg:bg-opacity-70 max-lg:shadow-none">
      <div className="xl:max-w-screen-xl xl:bg-zinc-100 xl:mx-auto xl:rounded-lg flex gap-2 p-2  max-xl:w-full overflow-auto md:text-lg ">
         <button onClick={() => window.scrollTo({top : hotEspressoRef.current.offsetTop - 110})} className='category-btn text-lg md:font-bold'><BiCoffeeTogo className='menu-icon'/><p>نوشیدنی های گرم بر پایه قهوه</p></button>
         <button onClick={() => window.scrollTo({top : hotDrinkRef.current.offsetTop - 110})} className='category-btn text-lg md:font-bold'><PiCoffeeBold className='menu-icon'/><p>نوشیدنی های گرم</p></button>
         <button onClick={() => window.scrollTo({top : coldEspressoRef.current.offsetTop - 110})} className='category-btn text-lg md:font-bold'><LuCupSoda className='menu-icon'/><p>نوشیدنی های سرد بر پایه قهوه</p></button>
         <button onClick={() => window.scrollTo({top : teaRef.current.offsetTop - 110})} className='category-btn text-lg md:font-bold'><LiaCoffeeSolid className='menu-icon'/><p>چای ایرانی و سایر اقوام</p></button>
         <button onClick={() => window.scrollTo({top : coldDrinkRef.current.offsetTop - 110})} className='category-btn text-lg md:font-bold'><LuCupSoda className='menu-icon'/><p>نوشیدنی های سرد</p></button>
         <button onClick={() => window.scrollTo({top : shakeRef.current.offsetTop - 110})} className='category-btn text-lg md:font-bold'><TbMilkshake className='menu-icon'/><p>میلک شیک</p></button>
         <button onClick={() => window.scrollTo({top : juiceRef.current.offsetTop - 110})} className='category-btn text-lg md:font-bold'><LuGlassWater className='menu-icon'/><p>نوشیدنی های طبیعی</p></button>
         <button onClick={() => window.scrollTo({top : sharbatRef.current.offsetTop - 110})} className='category-btn text-lg md:font-bold'><BsCupStraw className='menu-icon'/><p>نوشیدنی و شربت های دست ساز</p></button>
         <button onClick={() => window.scrollTo({top : breakfastRef.current.offsetTop - 110})} className='category-btn text-lg md:font-bold'><LuEggFried className='menu-icon'/><p>صبحانه</p></button>
         <button onClick={() => window.scrollTo({top : appetizerRef.current.offsetTop - 110})} className='category-btn text-lg md:font-bold'><LuSoup className='menu-icon'/><p>پیش غذا</p></button>
         <button onClick={() => window.scrollTo({top : saladRef.current.offsetTop - 110})} className='category-btn text-lg md:font-bold'><LuSalad className='menu-icon'/><p>سالاد</p></button>
         <button onClick={() => window.scrollTo({top : grillRef.current.offsetTop - 110})} className='category-btn text-lg md:font-bold'><TbMeat className='menu-icon'/><p>بشقاب های اصلی</p></button>
         <button onClick={() => window.scrollTo({top : pastaRef.current.offsetTop - 110})} className='category-btn text-lg md:font-bold'><p>پاستا</p></button>
         <button onClick={() => window.scrollTo({top : burgerRef.current.offsetTop - 110})} className='category-btn text-lg md:font-bold'><LiaHamburgerSolid className='menu-icon'/><p>ساندویچ و برگر</p></button>
         <button onClick={() => window.scrollTo({top : desertRef.current.offsetTop - 110})} className='category-btn text-lg md:font-bold'><LuCakeSlice className='menu-icon'/><p>دسر</p></button>
      </div>
    </div>
  )
}