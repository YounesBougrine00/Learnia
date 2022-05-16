import React, {useEffect, useState} from 'react'
import Logo from './Logo'
import Searchbar from './Searchbar'
import '../../App.css'
import { Link } from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import { logout } from '../../Redux/actions/auth'
import { useNavigate } from 'react-router'


const Navbar = () => {

  
   const {user, user_loading}= useSelector(state=> state.auth)
   const dispatch = useDispatch()
   const navigate = useNavigate()

/*----------------*/
 
  const [showMobileSearch, setShowMobileSearch] = useState(false)

  const authLinks = (
  <>
   <button onClick={()=> navigate('/my-courses')} className="btn ">My Courses</button>
    <button onClick={()=>{ dispatch(logout()); navigate('/')}} className="btn  btn-primary">Logout</button>
  </>
  )

  const guestLinks = (
      <>
        <Link to="/sign-in"><button className="btn ">Sign In</button></Link>
        <Link to="/register"><button className="btn btn-primary" style={{'fontWeight':'600'}}>Register</button></Link>
      </>
    
  )


  return (
   
      <nav>
      <Logo/>

      <Searchbar/>
      
      <div className='links-wrapper' >
        <i className="fas fa-search mobile" onClick={()=>setShowMobileSearch(true)}></i>
        {user ? authLinks: guestLinks }

 
      </div>
    {showMobileSearch &&<div className="mobile-search">
                        <div className='searchbar-mobile '  >
                            <input type="text" placeholder='What do you want to learn?' />
                            <i className="fas fa-search"></i>
                        </div>
                        <i className="fas fa-times" onClick={()=>setShowMobileSearch(false)}></i>
    </div>}
    </nav>  
    
    
     
    
  )
}

export default Navbar