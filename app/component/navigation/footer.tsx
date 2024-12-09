'use client';

import Image from 'next/image'
import React from 'react'
import Social from '../social'

import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { footerLink } from '@/app/constant';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Footer() {

    const pathname = usePathname()

    return (
        <div className={`${pathname.startsWith('/login')? 'hidden' : ''} bg-emerald-900 flex flex-col`}>
            <div className='flex flex-col lg:flex-row space-y-5 lg:space-y-0 text-white p-10 lg:p-20'>
                <div className=' flex flex-col space-y-5 items-center lg:items-start lg:w-1/4'>
                    <p className='text-center lg:text-left'>Jelajahi semua pengetahuan dan ilmu yang berguna bersama kami, untuk kehidupan yang lebih bermanfaat</p>
                    <div className='flex space-x-3'>
                        <Social url='' logo={<FaTwitter />} />
                        <Social url='' logo={<FaFacebookF />} />
                        <Social url='' logo={<FaInstagram />} />
                    </div>
                </div>

                <div className='flex flex-wrap lg:flex-nowrap w-full justify-between lg:justify-evenly'>
                    {footerLink.map((item) => (
                        <div className='flex flex-col space-y-5 m-2'>
                            <p className='font-bold text-2xl'>{item.title}</p>
                            {item.link.map((item) => (
                                <Link href={item.url} className='text-lg hover:underline'>{item.title}</Link>
                            ))}
                        </div>
                    ))}
                </div>
            </div>

            <div className='p-5 flex justify-center border-t-2 text-white'>CopyRight &copy; 2021. All right reserved.</div>

        </div>
    )
}
