import React, {useEffect, useState} from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector} from 'react-redux'
import { login } from '../Redux/actions/auth'
import { useNavigate } from 'react-router'

const SignIn = () => {
  
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  
  const {user} = useSelector(state=> state.auth)

  if(user){
      if(user.admin){
    navigate('/admin/home')
  } else {
    navigate('/')
  }
  }




  const handleSubmit= (e)=>{
    e.preventDefault()

    if(!email || !password){
      alert('Empty values')
    }else{
      dispatch(login({email,password}))
  
     
    }
    
  }

  return (
    <div className='form' style={{"marginBottom":"2rem"}}>
    {/*<div className="alert-box">
        Alert!
  </div>*/}
    <p>Access your Learnia account!</p>
    <form action="" onSubmit={e => handleSubmit(e)}>
        <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)} className='form-control' placeholder='Email'/>
        <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)} placeholder='Password' />
        <button type="submit" className='btn btn-primary'style={{"margin":"0"}}><strong>Sign In</strong></button>
        <span style={{"marginTop":'.5rem',"fontWeight":"300"}}>Don't have an account ? <Link to='/register'>Register</Link></span>

    </form>
    </div>
  )
}

export default SignIn