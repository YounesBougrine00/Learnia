import React, { useEffect } from 'react'
import CourseTop from './CourseTop'
import CourseBottom from './CourseBottom'
import { useParams } from 'react-router'
import { getCourse } from '../../Redux/actions/course'
import { useDispatch,useSelector } from 'react-redux'
const Course = () => {
  
  const {courseId} = useParams()
  const dispatch = useDispatch()
  const {course,course_loading} = useSelector(state=> state.course)

  useEffect(()=>{
    dispatch(getCourse(courseId))
  },[])

  return (
    <>
      <CourseTop course={course} loading={course_loading}/>
      <CourseBottom  course={course} loading={course_loading}/>
    </>
  )
}

export default Course