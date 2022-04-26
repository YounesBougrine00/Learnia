import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className='form' style={{"marginBottom":"2rem"}}>
        <div className="alert-box">
            Alert!
        </div>
        <p>Create your Learnia account!</p>
        <form action="">
            <input type="text" className='form-control' placeholder='Username'/>
            <input type="email" className='form-control' placeholder='Email'/>
            <input type="password"  placeholder='Password' />
            <input type="password" placeholder='Confirm padssword' />
            <button type="submit" className='btn btn-primary'style={{"margin":"0"}}><strong>Register</strong></button>
            <span style={{"marginTop":'.5rem',"fontWeight":"300"}}>Already have an account ? <Link to='/sign-in'>Sign In</Link></span>
        </form>
    </div>
  )
}

export default Register