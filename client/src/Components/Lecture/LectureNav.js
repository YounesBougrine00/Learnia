import React from 'react'
import Logo from '../../Components/Layout/Logo'

const LectureNav = () => {
  return (
    <nav className="lecture-nav">
        <div >
            <Logo style={{"color":"#fff"}}/>         
            <span  >Course Name </span>       
            
        </div>
        <div>
            <span className='progress'>27%</span>
            <span >Logout</span>
        </div>
        

    </nav>
  )
}

export default LectureNav

 