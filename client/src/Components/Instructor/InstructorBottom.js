import React from 'react'
import '../../App.css'
import CourseItem from '../Courses/CourseItem'
import './InstructorBottom.css'



const InstructorBottom = ({courses}) => {
 

 console.log(courses)

  return (
    <div className="container" style={{"marginBottom":"2rem"}}>
      <div className="p-title">Courses made by the instructor</div>
      <hr/>
      <div className="courses">
        {courses && courses.map(course => <CourseItem course={course}/>)
        
        }
      </div>
    </div>
  )
}

export default InstructorBottom