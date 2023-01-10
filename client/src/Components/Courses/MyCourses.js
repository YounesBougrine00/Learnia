import React, { useEffect, useState } from 'react'
import GoToCourseCard from './GoToCourseCard'
import { useSelector } from 'react-redux'
import axios from 'axios'

const MyCourses = () => {
  
  const {user} = useSelector(state => state.auth)
  const userId= user.id

  const [courses,setCourses]= useState([])

  useEffect(()=>{
    const fetchCourses = async ()=> {
      const res = await axios.get(`https://learnia.dev/api/purchase/${userId}`)
      setCourses(res.data)
    }

    fetchCourses()
  },[])

  return (
    <div className="container" style={{"paddingTop":"100px"}}>
    <p className='p-title' style={{"width":"100%","borderBottom":"1px solid rgb(222 222 222)","padding":"1rem"}}>My courses</p>
    <div className="courses" style={{"marginBottom":"3rem"}}>

      {courses && courses.map(course=> <GoToCourseCard key={course.courseId} course={course}/>)}
    

    </div>
  </div>
  )
}

export default MyCourses