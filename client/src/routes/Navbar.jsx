import React from 'react'
import {Link} from "react-router-dom"

const Navbar = () => {
  return ( 
    <div>
        <Link to="/" style={{ marginRight: '20px' }}>Home</Link>
        <Link to="/about"style={{ marginRight: '20px' }} >About</Link>
        <Link to= '/contact'>Contact</Link>
    </div>
  )
}

export default Navbar
