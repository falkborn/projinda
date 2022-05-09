import React from 'react'
import {FaBitcoin} from 'react-icons/fa'
import './Navbar.css'
import {BsNewspaper} from 'react-icons/bs'

const Navbar = () => {
  return (
    <div>
        <div className='navbar'>
            <FaBitcoin className='icon' />
            <h1> Crypto <span className='orange'>Lab </span></h1>

        </div>
        <div className='news'>
         <BsNewspaper className='icon2' />
         <h1> Crypto News </h1>
        </div>

    </div>
  )
}

export default Navbar