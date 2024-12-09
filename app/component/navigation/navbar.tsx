"use client"

import { deleteSession } from '@/lib/auth';
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation';
import React, { useState } from 'react'

import { IoMdMenu, IoMdClose } from "react-icons/io";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const router = useRouter()
  const pathname = usePathname()

  const togglemenu = () => {
    setMenuOpen(!menuOpen);
  }

  return (
    <div>
      <div className={`${pathname.startsWith('/login') ? 'hidden' : ''}  fixed top-0 z-30 flex justify-end lg:justify-between items-center w-full p-10 lg:py-5 lg:px-20 bg-slate-100`}>


        <div className='hidden  lg:flex justify-between items-center w-1/3 font-semibold'>
          {pathname.startsWith('/admin') ?
            <>
              <Link href={'/admin'} className='hover:text-lg transition-all'>home</Link>
              <Link href={'/admin/kegiatan'} className='hover:text-lg transition-all '>Kegiatan</Link>
              <Link href={'/admin/berita'} className='hover:text-lg transition-all'>Berita</Link>
            </>
            :
            <>
              <Link href={'#beranda'} className='hover:text-lg transition-all'>Beranda</Link>
              <Link href={'#tentangKita'} className='hover:text-lg transition-all '>Tentang Kita</Link>
              <Link href={'#kegiatan'} className='hover:text-lg transition-all '>Kegiatan</Link>
              <Link href={'#berita'} className='hover:text-lg transition-all'>Berita</Link>
            </>
          }
        </div>

        {pathname.startsWith('/admin') ?
          <button onClick={async () => {
            await deleteSession()
            router.push('/login')
          }} className={`${pathname.startsWith('/admin') ? '' : 'hidden'} hidden lg:block bg-white hover:bg-emerald-300 py-2 px-8 text-sm font-bold text-emerald-300 hover:text-white rounded-full ring-2 ring-emerald-300 hover:ring-white transition-all`}>Log out</button>
          :
          <button onClick={() => router.push('/login')} className='hidden lg:block bg-white hover:bg-emerald-300 py-2 px-8 text-sm font-bold text-emerald-300 hover:text-white rounded-full ring-2 ring-emerald-300 hover:ring-white transition-all'>admin</button>
        }

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
          {/* hover:bg-slate-300 hover:border-b-4 border-slate-500 px-10 py-5 w-full text-right */}
          <Link href={'#beranda'} className='hover:bg-slate-300 hover:border-b-4 border-slate-500 px-10 py-5 w-full text-right'>Beranda</Link>
          <Link href={'#tentangKita'} className='hover:bg-slate-300 hover:border-b-4 border-slate-500 px-10 py-5 w-full text-right '>Tentang Kita</Link>
          <Link href={'#kegiatan'} className='hover:bg-slate-300 hover:border-b-4 border-slate-500 px-10 py-5 w-full text-right '>Kegiatan</Link>
          <Link href={'#berita'} className='hover:bg-slate-300 hover:border-b-4 border-slate-500 px-10 py-5 w-full text-right'>Berita</Link>
        </div>
      </div>
    </div>
  )
}
