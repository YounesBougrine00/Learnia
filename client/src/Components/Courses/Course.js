import React, { useLayoutEffect} from 'react'
import CourseTop from './CourseTop'
import CourseBottom from './CourseBottom'
import { useParams } from 'react-router'
import { getCourse } from '../../Redux/actions/course'
import { useDispatch,useSelector } from 'react-redux'
import Loader from './../utils/Loader'


const Course = () => {
  
  const {courseId} = useParams()
  const dispatch = useDispatch()
  const {course,course_loading} = useSelector(state=> state.course)


  
  useLayoutEffect(()=>{
    dispatch(getCourse(courseId))
  },[])



  return (
    <>{(!course_loading && course)? <>
       <CourseTop course={course} loading={course_loading} />
       <CourseBottom  course={course} loading={course_loading}/>
    
    </>: <Loader/>}
      
    </>
  )
}

export default Course