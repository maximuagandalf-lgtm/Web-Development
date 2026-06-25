import React from 'react'
import Footer from './footer'

const NavBar = (props) => {
  return (
    <div>
      <div className="logo">{props.logotext}</div>
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Contact</li>
      </ul>
      <Footer/>
    </div>
  )
}

export default NavBar
