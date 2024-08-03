import React from 'react'
import { Button } from './ui/Button'


export const Middle = () => {
  return (
    <div className='bg-purple-950 md:flex justify-around mx-20 mb-20 '>
      <h1 className='text-white text-center text-4xl p-10 mx-10 md:text-start'>Find out more about how we work</h1>
      <div className='flex justify-center pb-10 md:p-10'>
      <Button invertedRectangle>HOW WE WORK</Button>

      </div>
    </div>
  )
}
