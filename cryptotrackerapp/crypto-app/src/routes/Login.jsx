import React from 'react'
import './Signup.css'
import {TiUser} from 'react-icons/ti'
import { Link } from 'react-router-dom'



const Login = () => {
  return (
    <div className='cryptoimage'>
   
    <div className='blackborder'>
     <div className='signintext'>
     <TiUser className='icon2' />
        <h1> Sign In </h1>
 
        <form className='form'>
                 <input className='email'
                   type='email'
                   placeholder='Email'
                   autoComplete='email'
                 />
                 <input className='password'
                   type='password'
                   placeholder='Password'
                   autoComplete='current-password'
                 />
                 <button className='signupbutton'>
                   Sign In
                 </button>
                 <div className='rbox'>
                   <p>
                     <input className='checkbox' type='checkbox' />
                     Remember me
                   </p>
                 
                 </div>
                 <p className='already'>
                   <span className='text-gray-600'>
                     New to Crypto <span className='orange'>Lab?</span>
                   </span>{' '}
                 <Link to='/signup'> <span className='signintopage'>Sign Up</span></Link>
                   
                 </p>
               </form>
     
           </div>
      </div>
  </div>
  )
}

export default Login