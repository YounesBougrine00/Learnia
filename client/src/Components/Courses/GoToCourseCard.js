import React from 'react'
import Angular from '../../images/Angular.jpg'
import { Link } from 'react-router-dom'

const GoToCourseCard = ({course}) => {
  return (
    <div className="course-item">
    <div className="course-item-thumbnail">
        <img src={course.thumbnail} alt="" />
    </div>  
  <Link to={`/lecture/${course.courseId}`}> 
    <div className='course-card-info' >
        <p style={{"fontSize":"1rem", "fontWeight":"600","color":"#1C1D1F"}}>{course.title}</p>
        <button className="btn btn-secondary" style={{"fontWeight":"600"}}>Go to lecture</button>
    </div>  
    
  </Link>
</div>
  )
}

export default GoToCourseCard