import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
      <div className="container">
        <ul className='flex items-center justify-center'>
            <NavLink className={(e)=>{e.isActive?"red":""}}><li>Home</li></NavLink>
            <NavLink className={(e)=>{e.isActive?"red":""}}><li>Login</li></NavLink>
            <NavLink className={(e)=>{e.isActive?"red":""}}><li>About</li></NavLink>
        </ul>
      </div>
    </div>
  )
}

export default NavBar
