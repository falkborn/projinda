import React from 'react'
import {FaBitcoin} from 'react-icons/fa'
import './Navbar.css'
import {TiUserOutline} from 'react-icons/ti'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    
    <div className='navbar'>
        <FaBitcoin className='icon' />
        <Link to='/'>
        <h1> Crypto <span className='orange'>Lab</span></h1>
        </Link>
        <div>
        <TiUserOutline className='icon1' />
        <Link to='/login'>
          <button className='login'> Sign In</button>
          </Link>
        <Link to='/signup'>
          <button className='signup'>Sign up</button>
        </Link>
        </div>
    </div>

  )
}

export default Navbar