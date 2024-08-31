import Link from 'next/link';
import React, { ReactNode } from 'react'


interface socialProps {
    url: string,
    logo:ReactNode
}

export default function Social({url, logo}:socialProps) {
  return (
    <Link href={url} className='p-2 rounded-full bg-slate-500 hover:bg-emerald-400'>
        {logo}
    </Link>
  )
}
