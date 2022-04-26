import React from 'react'
import { Link } from 'react-router-dom'


const CourseItem = ({image}) => {
  return (
   
    <div className="course-item">
        <div className="course-item-thumbnail">
            <img src={image} alt="" />
        </div>  
      <Link to="/course"> 
        <div style={{"padding":"0 10px 10px 10px"}}>
            <p style={{"fontSize":"1.2rem", "fontWeight":"600","color":"#1C1D1F"}}>Course Name</p>
            <p style={{"fontSize":".8rem", "color":"#929292"}}>Creator name</p>
            <p style={{"fontSize":"1.2rem", "fontWeight":"600","marginBottom":"10px" ,"color":"#1C1D1F"}}>89.77 $ </p>
            <span style={{"fontSize":".9rem"}} className="category-label">Category</span>
        </div>  
      </Link>
    </div>
   
  )
}

export default CourseItem