import React from 'react'
import './Header.css';

function Header() {
  return (
    <div className='flex justify-between w-full min-h-15 bg-blue-500'>
      <div>
        <h3 className='ml-30 mt-4 font-[1000] text-2xl wh'>Portfolio</h3>
      </div>
      <div className='mr-20 mt-4 wh font-medium'>
        <a href="" className='mr-10 text-red-900'>Home</a>
        <a href="" className='mr-10  hover:text-red-600'>About</a>
        <a href="" className='mr-10  hover:text-red-600'>Services</a>
        <a href="" className='mr-10  hover:text-red-600'>Portfolio</a>
        <a href="" className='mr-10  hover:text-red-600'>Contact</a>
      </div>
    </div>
  )
}

export default Header
