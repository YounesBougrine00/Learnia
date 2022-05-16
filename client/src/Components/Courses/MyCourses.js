import React from 'react'
import GoToCourseCard from './GoToCourseCard'


const MyCourses = () => {
  

  return (
    <div className="container" style={{"paddingTop":"100px"}}>
    <p className='p-title' style={{"width":"100%","borderBottom":"1px solid rgb(222 222 222)","padding":"1rem"}}>My courses</p>
    <div className="courses" style={{"marginBottom":"3rem"}}>
    
      <GoToCourseCard/>
      <GoToCourseCard/>
      <GoToCourseCard/>
      <GoToCourseCard/>

    </div>
  </div>
  )
}

export default MyCourses