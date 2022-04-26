import React, {useState} from 'react'
import Logo from './Logo'
import Searchbar from './Searchbar'
import '../../App.css'
import { Link } from 'react-router-dom'

const Navbar = () => {

  const [isAuthenticated,setIsAuthenticated] = useState(false)
  const [showMobileSearch, setShowMobileSearch] = useState(false)

  const authLinks = (
  <>
    <button className="btn ">My Courses</button>
    <button className="btn ">Logout</button>
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
        {isAuthenticated ? authLinks : guestLinks }
 
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