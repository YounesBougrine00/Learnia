import React from 'react'
import { Link } from 'react-router-dom'


const CourseItem = ({course}) => {
  return (
   
    <div className="course-item">
        <div className="course-item-thumbnail">
            <img src={course.thumbnail} alt="" />
        </div>  
      <Link to={`/course/${course._id ?course._id: course.courseId}`}> 
        <div className='course-card-info' >
            <p style={{"fontSize":"1rem", "fontWeight":"600","color":"#1C1D1F"}}>{course.title}</p>
            {course.category && <span style={{"fontSize":".9rem", "fontWeight":"600",}} className="category-label">{course.category}</span>}
        </div>  
      </Link>
    </div>
   
  )
}

export default CourseItem