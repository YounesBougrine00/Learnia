import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'

const SignIn = () => {
  return (
    <div className='form' style={{"marginBottom":"2rem"}}>
    <div className="alert-box">
        Alert!
    </div>
    <p>Access your Learnia account!</p>
    <form action="">
        <input type="text" className='form-control' placeholder='Username'/>
        <input type="password"  placeholder='Password' />
        <button type="submit" className='btn btn-primary'style={{"margin":"0"}}><strong>Sign In</strong></button>
        <span style={{"marginTop":'.5rem',"fontWeight":"300"}}>Don't have an account ? <Link to='/register'>Register</Link></span>

    </form>
    </div>
  )
}

export default SignIn