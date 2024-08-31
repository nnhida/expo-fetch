import React, { ReactNode } from 'react'


interface benefitProps {
    bgColor: string,
    logo: ReactNode,
    text: string,

}


export default function Benefit({bgColor, logo, text}:benefitProps) {
  return (
    <div className='flex items-center space-x-7'>
        <div className={`p-2 rounded-full h-max ${bgColor} scale-150`}>
            {logo}
        </div>

        <div className='font-bold w-48 text-white'>
            <p>{text}</p>
        </div>

    </div>
  )
}
