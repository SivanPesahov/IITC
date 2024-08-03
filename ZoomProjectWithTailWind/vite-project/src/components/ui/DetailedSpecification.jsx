import React from 'react'
import { cn } from '../../utils'


export const DetailedSpecification = ({ children, snappyProcess, affordableProces, peopleFirst}) => {
  return (
    <div>
        <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="86" height="86"><g fill="none" fill-rule="evenodd"><circle cx="43" cy="43" r="43" fill="#96A9C6"/><path fill="#FFF" fill-rule="nonzero" d="M32 59h1.195l21.072-20.146c.276-.356.123-.534-.46-.534H45.11l9.158-10.786c.276-.356.061-.534-.612-.534h-11.67c-.337 0-.613.119-.888.356l-8.515 14.645c-.061.356.122.534.582.534h8.423L32 59z"/></g></svg>
        </span>
        {children}
    </div>
  )
}
