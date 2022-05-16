import React, {useState} from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector} from 'react-redux'
import { useNavigate } from 'react-router'
import { register } from '../Redux/actions/auth'


const Register = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {user} = useSelector(state=> state.auth)


 if(user){
    navigate('/')
 }

  
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [password2, setPassword2] = useState('')

  const handleSubmit = async  (e) => {
    e.preventDefault()
    if(password!=password2){
      alert("passwords do not match")
    }else{
      dispatch(register({email,password,firstName,lastName}))

 

     
      
     
    }
  }


  return (
    <div className='form' style={{"marginBottom":"2rem"}}>
       
        <p>Create your Learnia account!</p>
        <form action="" onSubmit={e=>handleSubmit(e)}>
            <input type="text" value={firstName} onChange={e => setFirstName(e.target.value)} className='form-control' placeholder='First name'/>
            <input type="text" value={lastName} onChange={e => setLastName(e.target.value)}  className='form-control' placeholder='Last name'/>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)}  className='form-control' placeholder='Email'/>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)}   placeholder='Password' />
            <input type="password" value={password2} onChange={e => setPassword2(e.target.value)}  placeholder='Confirm padssword' />
            <button type="submit" className='btn btn-primary'style={{"margin":"0"}}><strong>Register</strong></button>
            <span style={{"marginTop":'.5rem',"fontWeight":"300"}}>Already have an account ? <Link to='/sign-in'>Sign In</Link></span>
        </form>
    </div>
  )
}

export default Register