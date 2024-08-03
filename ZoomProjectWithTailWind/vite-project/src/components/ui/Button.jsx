import React from 'react'
import { cn } from '../../utils'

export const Button = ({children, rectangle, invertedRectangle}) => {
  return (
    <>
        <button className={cn(
            'text-gray-500 hover:text-purple-950 px-3', 
            rectangle && 'py-2 px-4 text-black border-2 border-black hover:bg-purple-950 hover:text-white',
            invertedRectangle && 'py-2 px-4 text-white border-2 border-white hover:bg-white hover:text-purple-950 flex justify-center items-center'
        )}>
            {children}
        </button>
    </>
  )
}
