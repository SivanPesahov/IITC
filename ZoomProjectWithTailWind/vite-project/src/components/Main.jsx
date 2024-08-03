import React from 'react'
import introMobile from '../images/image-intro-mobile.jpg'
import introDesktop from '../images/image-intro-desktop.jpg'
import { Button } from './ui/Button'


export const Main = () => {
  return (
    <>

      <div className='bg-purple-950 pb-20 sm:flex'>
        <div className='flex justify-center sm:hidden max-w-lg '>
          <img src={introMobile} alt=""/>
        </div>
          <div className='text-white'>
              <h1 className='text-5xl mt-14 mb-4 text-center p-1 sm:px-10 sm:py-5 sm:text-start '>Humanizing your insurance.</h1>
            <p className='text-center p-4 sm:text-start sm:px-10'>Get your life insurance coverage easier and faster. We blend our expertise 
                and technology to help you find the plan that’s right for you. Ensure you 
                and your loved ones are protected.
                </p>
            <div className='flex justify-center items-center md:justify-start md:px-10'>
              <Button invertedRectangle>VIEW PLANS</Button>
            </div>
          </div>
          <div className='hidden sm:block md:static '>
            <img src={introDesktop} alt="" className='  md:max-w-96 md:max-h-200 static translate-y-32 mr-10'/>
          </div>
          
        
      </div>
        

      
          
    </>
  )
}
