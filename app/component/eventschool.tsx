import React from 'react'

interface eventProps {
  url: string,
  title: string,
  desc: string
}

export default function EventSchool({url, title, desc}:eventProps) {
  return (
    <div className='flex flex-col space-y-3 lg:space-y-5 w-72 lg:w-min'>
      <div className='w-full lg:w-[400px] h-56 lg:h-72 bg-slate-500 rounded-3xl' style={{
            backgroundImage: `url(${url})`,
            backgroundSize: 'cover',  // or 'contain' depending on your needs
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}/>

        <div className='flex flex-col space-y-1'>
          <p className='text-3xl font-medium'>{title}</p>
          <p className='text-gray-500 text-lg'>{desc}</p>
        </div>
    </div>
  )
}
