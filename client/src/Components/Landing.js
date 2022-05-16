import React, { useEffect } from 'react'
import '../App.css'
import Searchbar from './Layout/Searchbar'
import CourseItem from './Courses/CourseItem'
import woman from '../images/woman.png'
import {useSelector, useDispatch} from 'react-redux'
import { getLandingCourses } from '../Redux/actions/course'






const Landing = () => {

  const dispatch = useDispatch()
  const  {landing_courses,landing_courses_loading}  = useSelector(state => state.course)

  useEffect(()=>{
    dispatch(getLandingCourses())
  },[dispatch])

  return (
    <>
    <div className="banner">
      <div>
        <p>Start learning with learnia</p>
        <p>and advance your career</p>
        <br/>
        <Searchbar/>
      </div>
      <img src={woman} alt="" />
    </div>
    <div className="sub-banner">
      <span>Complet the courses and get certificates</span> 
    </div>
    <div className="container">
      <div className='categories'>
          <div className="category">Marketing</div>
          <div className="category">Web dev</div>   
          <div className="category">ML & AI</div>
          <div className="category">Cloud</div>
          <div className="category">Big Data</div>
          <div className="category">Mobile dev</div>
          <div className="category">UX Design</div>
          <div className="category">Business</div>

      </div>
    </div>
    <div className="banner-v2">
      <p>More opportunities </p>
      <p>for you to learn</p>
    </div>

    <div className="container" style={{"marginBottom":"2rem"}}>
      <p className='text-title'>Explore courses</p>
      <div className="courses">
        {(!landing_courses_loading && landing_courses) && landing_courses.map(course=> <CourseItem key={course._id} course={course}/> )}

      </div>
    </div>
    
    </>
  )
}

export default Landing