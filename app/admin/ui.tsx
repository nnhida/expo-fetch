'use client';

import React from 'react'
import { FaNewspaper, FaUser } from 'react-icons/fa'
import { MdOutlineSportsKabaddi } from 'react-icons/md';

interface adminProps{

    kegiatanCount: number | undefined,
    berita: number | undefined,
}


export default function Ui({kegiatanCount, berita,}: adminProps) {
    return (
        <div>
            <section className='w-full h-screen flex-col space-y-10 px-20 py-24'>
                <p className='text-5xl font-bold'>Welcome Back, Guest</p>

                <div className='flex justify-between'>
                    <div className='flex space-x-10'>
                        <div className='rounded-full w-56 h-56 bg-slate-400' />
                        <div className='flex-col space-y-5'>
                            <div className='flex space-x-5'>
                                <div className='flex-col space-y-3 text-2xl font-semibold'>
                                    <p>Email</p>
                                    <p>Telp</p>
                                </div>
                                <div className='flex-col space-y-3 text-2xl text-gray-500'>
                                    <p>coba@gmail.com</p>
                                    <p>not available</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='flex-col bg-blue-400 space-y-10 p-5 rounded-lg w-60 '>
                        <p className='text-3xl font-semibold text-center text-white'>Kegiatan</p>
                        <MdOutlineSportsKabaddi  className='size-20  mx-auto fill-white' />
                        <p className='text-center text-white font-semibold text-3xl'>{kegiatanCount}</p>
                    </div>

                    <div className='flex-col bg-red-400 space-y-10 p-5 rounded-lg w-60 '>
                        <p className='text-3xl font-semibold text-center text-white'>Berita</p>
                        <FaNewspaper className='size-20  mx-auto fill-white' />
                        <p className='text-center text-white font-semibold text-3xl'>{berita}</p>
                    </div>
                </div>
            </section>

           
        </div>
    )
}
