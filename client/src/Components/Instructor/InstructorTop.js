import React from 'react'
import '../../App.css'
import './InstructorTop.css'

const InstructorTop = ({instructor}) => {
  
  



  return (
    <div className="instructor-banner">
        <div className="container">
            <div className="img-wrapper">
                <img src={instructor.image} alt="" />
            </div>
            <div>
                <p>{instructor.name}</p>
                <p>{instructor.about}</p>

            </div>
        </div>
    </div>
  )
}

export default InstructorTop