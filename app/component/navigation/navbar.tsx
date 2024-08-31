"use client"

import Link from 'next/link'
import React, { useState } from 'react'

import { IoMdMenu, IoMdClose } from "react-icons/io";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const togglemenu = () => {
    setMenuOpen(!menuOpen);
  }

  return (
    <div>
      <div className='absolute z-30 top-0 flex justify-between items-center w-full p-10 lg:py-10 lg:px-20'>
        <img src={`/logo2.png`} alt='logo inagata' className='w-auto h-10' />

        <div className='hidden lg:flex justify-between items-center w-1/3 font-semibold'>
          <div className='flex flex-col items-center'>
            <Link href={''} className=''>Beranda</Link>
            <div className='h-[2px] w-7 bg-black' />
          </div>
          <Link href={''} className='hover:text-lg transition-all '>Tentang Kita</Link>
          <Link href={''} className='hover:text-lg transition-all text-white'>Berita</Link>
          <Link href={''} className='hover:text-lg transition-all text-white'>Galeri</Link>
          <Link href={''} className='hover:text-lg transition-all text-white'>Kontak</Link>
        </div>

        <button className='hidden lg:block bg-white hover:bg-emerald-300 py-2 px-8 text-sm font-bold text-emerald-300 hover:text-white rounded-full hover:ring-2 hover:ring-white transition-all'>PPOB</button>

        <button onClick={togglemenu} className='lg:hidden p-3 rounded-full bg-slate-200 drop-shadow-2xl'>
          <IoMdMenu className='size-7' />
        </button>
      </div>

      <div className={`${menuOpen ? ` opacity-80` : `hidden`} fixed z-50 h-screen w-screen bg-black transition-all`} />


      <div className={`${menuOpen ? `-right-0 ` : `-right-44 `}lg:hidden fixed top-0 z-[60] h-screen bg-slate-100 pt-10 transition-all`}>
        <div className='flex items-end flex-col space-y-5'>
          <button onClick={togglemenu} className='p-3 mr-10 rounded-full bg-slate-200 drop-shadow-2xl'>
            <IoMdClose className='size-7' />
          </button>
          <Link href={''} className=' hover:bg-slate-300 hover:border-b-4 border-slate-500 px-10 py-5 w-full text-right '>Beranda</Link>
          <Link href={''} className=' hover:bg-slate-300 hover:border-b-4 border-slate-500 px-10 py-5 w-full text-right '>Tentang Kita</Link>
          <Link href={''} className=' hover:bg-slate-300 hover:border-b-4 border-slate-500 px-10 py-5 w-full text-right'>Berita</Link>
          <Link href={''} className=' hover:bg-slate-300 hover:border-b-4 border-slate-500 px-10 py-5 w-full text-right'>Galeri</Link>
          <Link href={''} className=' hover:bg-slate-300 hover:border-b-4 border-slate-500 px-10 py-5 w-full text-right'>Kontak</Link>
        </div>
      </div>
    </div>
  )
}
