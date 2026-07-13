import React from 'react'
import { memo } from 'react'

const NavBar = ({adjective, getadjective}) => {
    console.log("Navbar is rendered")
  return (
    <div>
      {adjective}
      <button onClick={getadjective}></button>
    </div>
  )
}

export default memo(NavBar)
