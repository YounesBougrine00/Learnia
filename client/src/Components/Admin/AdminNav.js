import React from 'react'
import Logo from '../Layout/Logo'
import {Link} from 'react-router-dom'

const LectureNav = () => {
  return (
    <nav className="admin-nav">
        <div  >
            <Logo style={{"color":"#fff"}}/>               
            
        </div>
        <div>
            <span><Link to="/admin/home" style={{"color":"#fff"}}>Dashboard</Link></span>
            <span >Logout</span>
        </div>
        

    </nav>
  )
}

export default LectureNav

 