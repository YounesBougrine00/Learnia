import React from 'react'
import CourseItem from './CourseItem'
import Angular from '../../images/Angular.jpg'
import Firebase from '../../images/Firebase.jpg'
import datascience from '../../images/datascience.jpg'


const MyCourses = () => {
  return (
    <div className="container" style={{"paddingTop":"100px"}}>
    <p className='p-title' style={{"width":"100%","borderBottom":"1px solid rgb(222 222 222)","padding":"1rem"}}>My courses</p>
    <div className="courses" style={{"marginBottom":"3rem"}}>
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

export default MyCourses