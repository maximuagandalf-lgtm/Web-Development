import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className="flex justify-around bg-slate-800 text-white py-4">
      <div className="text-center">Copyright @ Faceboook | All rights reserved</div>
      <ul className="flex">
        <a href="/"><li className='test-xs'>Home</li></a>
        <a href="/about"><li className='text-xs'>About</li></a>
        <a href="/contact"><li className="text-xs">Contact</li></a>
        </ul>
        </footer>
    </div>
  )
}

export default Footer
