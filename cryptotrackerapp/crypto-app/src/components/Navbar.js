import React from 'react'
import { FaBitcoin } from 'react-icons/fa'
import './Navbar.css'
/*import {BsNewspaper} from 'react-icons/bs'*/
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (

    <Link to='/'>
      <div className='navbar'>
        <FaBitcoin className='icon' />
        <h1> Crypto <span className='orange'>Lab</span></h1>

      </div>

      <Link to='/cryptorecommendations'>
        <div className='cryptorecommendations'>
          <h1> Crypto <span className='orange'>Recommendations</span></h1>
        </div>
      </Link>
      <Link to='/cryptonews'>
      <div className='cryptonews'>
        <h1> Crypto <span className='orange'>News</span> </h1>
      </div>
      </Link>

    </Link>
  )
}

export default Navbar