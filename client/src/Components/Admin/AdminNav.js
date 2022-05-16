import React from 'react'
import Logo from '../Layout/Logo'
import {Link} from 'react-router-dom'
import { logout } from '../../Redux/actions/auth'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'

const LectureNav = () => {
 
  const dispatch = useDispatch()
  const navigate = useNavigate()

  return (
    <nav className="admin-nav">
        <div  >
            <Logo style={{"color":"#fff"}}/>               
            
        </div>
        <div>
            <span><Link to="/admin/home" style={{"color":"#fff"}}>Dashboard</Link></span>
            <span style={{"cursor": 'pointer'}} onClick={()=>{ dispatch(logout()); navigate('/')}}>Logout</span>
        </div>
        

    </nav>
  )
}

export default LectureNav

 