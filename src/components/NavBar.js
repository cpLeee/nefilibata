import React from 'react'
import {Link} from 'react-router-dom'

function Login() {
  return (
    <nav>
      <Link exact to="/">
    <button className='mainpage-login-button'>
    Home</button>
    </Link>
    </nav>
  )
}

export default Login