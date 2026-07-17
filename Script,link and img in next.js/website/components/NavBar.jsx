import React from 'react'
import Link from 'next/link'

const NavBar = () => {
  return (
    <div>
      <nav className="flex justify-between px-4 bg-slate-800 text-white py-4">
        <div className="logo font-bold">Faceboook</div>
        <ul className="flex gap-6">
            <Link href="/" scroll={false} prefetch={true}><li>Home</li></Link>
            <Link href="/about" scroll={false} prefetch={true}><li>About</li></Link>
            <Link href="/contact" scroll={false} prefetch={true}><li>Contact</li></Link>
        </ul>
      </nav>
    </div>
  )
}

export default NavBar
