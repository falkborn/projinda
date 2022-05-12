import React from 'react'
import {FaBitcoin} from 'react-icons/fa'
import './Navbar.css'
/*import {BsNewspaper} from 'react-icons/bs'*/
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <Link to='/'>
    <div className='navbar'>
        <FaBitcoin className='icon' />
        <h1> Crypto <span className='orange'>Lab</span></h1>
        <div className='stockrecommendations'>
        <h1> Stock <span className='orange'>Recommendations</span></h1>
        </div>
        
        
       
    </div>
        
        
</Link>
  )
}

export default Navbar