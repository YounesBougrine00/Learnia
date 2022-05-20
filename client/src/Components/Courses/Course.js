import React, { useEffect, useState , useLayoutEffect} from 'react'
import CourseTop from './CourseTop'
import CourseBottom from './CourseBottom'
import { useParams } from 'react-router'
import { getCourse } from '../../Redux/actions/course'
import { useDispatch,useSelector } from 'react-redux'
import Loader from './../utils/Loader'
import axios from 'axios'

const Course = () => {
  
  const {courseId} = useParams()
  const dispatch = useDispatch()
  const {course,course_loading} = useSelector(state=> state.course)

  const [instructor,setInstructor] = useState('')
  
  useLayoutEffect(()=>{
    dispatch(getCourse(courseId))
  },[])

  useEffect( ()=> {
    async function getResults() {
       if(course){
      const instructorId = course.instructor

      const res = await axios.get(`http://localhost:5000/api/instructors/${instructorId}`)

      setInstructor(res.data)
    }
    }

    getResults()
   
  },[course])


  return (
    <>{(!course_loading && course)? <>
       <CourseTop course={course} loading={course_loading} instructor={instructor}/>
       <CourseBottom  course={course} loading={course_loading}/>
    
    </>: <Loader/>}
      
    </>
  )
}

export default Course