import React from 'react'

interface buttonProps {
    bgColor : string,
    round : string,
    txColor : string,
    text : string
}

export default function Button({bgColor, round, txColor, text}:buttonProps) {
  return (
    <button className={`${bgColor} w-max py-2 px-6 ${round} ${txColor} lg:text-xl transition-all`}>
        {text}
    </button>
  )
}
