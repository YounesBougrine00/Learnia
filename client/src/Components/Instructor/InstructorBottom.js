import React from 'react'
import '../../App.css'
import './InstructorBottom.css'
import CourseItem from '../Courses/CourseItem'
import Angular from '../../images/Angular.jpg'
import Firebase from '../../images/Firebase.jpg'
import datascience from '../../images/datascience.jpg'


const InstructorBottom = () => {
  return (
    <div className="container" style={{"marginBottom":"2rem"}}>
      <div className="p-title">Courses made by Instructor name</div>
      <div className="courses">
        <CourseItem image={Angular}/>
        <CourseItem image={Firebase}/>
        <CourseItem image={datascience}/>
        <CourseItem image={Angular}/>
        <CourseItem image={Angular}/>
        <CourseItem image={Angular}/>
        <CourseItem image={Angular}/>
        <CourseItem image={Angular}/>
      </div>
    </div>
  )
}

export default InstructorBottom