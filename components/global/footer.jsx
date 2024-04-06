import React from 'react'
import Logo from './logo'
import { toPersianNumbers } from '@/utilities/toPersianNumbers'
import { PiPhoneDisconnect } from "react-icons/pi";
import { MdAlternateEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa6";
import { FiClock } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className='bg-gradient-to-bl from-primary-200 to-primary-100 mt-20'>
        <div className='2xl:max-w-screen-2xl max-w-screen-xl mx-auto sm:p-5 p-2 2xl:px-24 flex flex-wrap items-start justify-between text-primary-500 text-2xl max-md:flex-col max-md:gap-y-12'>
            <span className="flex flex-wrap gap-x-3 items-center">
                <img className="w-44 max-sm:w-36" src="/images/cafe-logo.png" alt="cafe-logo" />
                <p className="sm:text-4xl text-2xl text-primary-500">کـافه رستـوران میدون</p>
            </span>
            <ContactInfo/>
            <iframe className='rounded-xl shadow-xl sm:w-96 h-72 max-sm:w-full' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3359.1568190968674!2d51.673539276287684!3d32.65527079019695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fbc35fa50a75e03%3A0x6b4454519abee84c!2sMeydoon%20Cafe!5e0!3m2!1sen!2s!4v1712396002043!5m2!1sen!2s" allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </footer>
  )
}

const ContactInfo = () => {
    return (
        <div className='flex flex-col gap-3 text-xl'>
            <b className='sm:text-2xl flex gap-2 items-center'>شماره های تماس : </b>
            <span className='flex gap-2 flex-wrap'>
                <a className='p-2 rounded-lg bg-zinc-50 bg-opacity-40 flex items-center gap-x-3 text-xl font-bold' href="tel:03132244007"><PiPhoneDisconnect className='text-2xl'/>{toPersianNumbers('03132244007')}</a>
                <a className='p-2 rounded-lg bg-zinc-50 bg-opacity-40 flex items-center gap-x-3 text-xl font-bold' href="tel:03132244006"><PiPhoneDisconnect className='text-2xl'/>{toPersianNumbers('03132244006')}</a>
            </span>
            <p><b className='sm:text-2xl'>ساعت کاری : </b>۹ صبح الی ۲۳ شب</p>
            <p><b className='sm:text-2xl flex gap-2 items-center'>نشانی : </b>اصفهان ، خیابان  استانداری ، گذر پشت مطبخ</p>
            <span className='flex gap-2 flex-wrap'> 
                <a className='p-2 rounded-lg flex gap-2 items-center bg-zinc-50 bg-opacity-40 sm:text-2xl px-3' href="mailto:info@cafemeydoon.com"><MdAlternateEmail className='text-xl'/>ایمیل</a>
                <a className='p-2 rounded-lg flex gap-2 items-center bg-zinc-50 bg-opacity-40 sm:text-2xl px-3' href="https://www.instagram.com/meydoon.caferestaurant"><FaInstagram className='text-2xl'/>اینستاگرام</a>
            </span>
        </div>
    )
}