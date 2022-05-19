import React from 'react';
import './Signup.css'
import {TiUserAdd} from 'react-icons/ti'
import { Link } from 'react-router-dom';


const Signup = () => {
  
    
  return (

   <div className='cryptoimage'>
   
   <div className='blackborder'>
    <div className='signintext'>
    <TiUserAdd className='icon2' />
       <h1> Sign Up </h1>

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
                  Sign Up
                </button>
                <div className='rbox'>
                  <p>
                    <input className='checkbox' type='checkbox' />
                    Remember me
                  </p>
                
                </div>
                <p className='already'>
                  <span className='text-gray-600'>
                    Already have an account?
                  </span>{' '}
                <Link to='/login'> <span className='signintopage'>Sign In</span></Link>
                  
                </p>
              </form>
    
          </div>
     </div>
 </div>
   
    
  )
}

export default Signup

