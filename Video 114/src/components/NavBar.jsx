import React from 'react'

const NavBar = () => {
  return (
    <ul className='navbar flex border-b-2 min-h-fit h-[6vh] text-white'>
            <li className='hover:bg-blue-700 transition duration-500 w-1/5 h-full flex items-center justify-center cursor-pointer'>Home</li>
            <li className='hover:bg-blue-700 transition duration-500 w-1/5 h-full flex items-center justify-center cursor-pointer'>About Us</li>
            <li className='hover:bg-blue-700 transition duration-500 w-1/5 h-full flex items-center justify-center cursor pointer'>Contact Us</li>
            <li className='hover:bg-blue-700 transition duration-500 w-1/5 h-full flex items-center justify-center cursor-pointer'>Feedback</li>
            <li className='hover:bg-blue-700 transition duration-500 w-1/5 h-full flex items-center justify-center cursor-pointer'>Support</li>
        </ul>
  )
}

export default NavBar
