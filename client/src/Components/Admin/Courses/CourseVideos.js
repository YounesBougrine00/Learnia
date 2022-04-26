import React, { useEffect, useState } from 'react'
import AdminNav from '../AdminNav'
import './Courses.css'
import VideoItem from './VideoItem'
import FileUpload from './FileUpload'
import { useParams } from 'react-router'
import {useDispatch,useSelector} from 'react-redux'
import {getLectures,deleteLectures} from '../../../Redux/actions/lecture'
import { BiSortAlt2 } from 'react-icons/bi';

const CourseVideos = () => {

  const  dispatch = useDispatch()
  const {courseId} = useParams()
  const {lectures, lectures_loading} = useSelector(state=> state.lecture)
   
  const [reverse,setReverse] = useState(false)
 

  useEffect(()=>{
    dispatch(deleteLectures())
    dispatch(getLectures(courseId))
  },[])

  return (
    <>
     <AdminNav/>
     <div className="container" style={{"marginTop":"5rem"}}>
        <FileUpload courseId={courseId} />
        <p className="p-title" style={{"marginTop":"1rem"}}> Lectures</p>
        <button onClick={()=>setReverse((prev)=> !prev)} style={{"marginLeft":"0","fontSize":"1.1rem","display":"flex","alignItems":"center"}} className="btn btn-secondary"><BiSortAlt2/> Sort</button>
        <div className="courses-grid">
          {(!lectures_loading && lectures) && (!reverse ? lectures.map((lecture,index) => <VideoItem key={lecture._id} index={index}  lecture={lecture}/>):
          lectures.slice(0).reverse().map((lecture,index) => <VideoItem index={index} reverse={true} key={lecture._id} length={lectures.length}  lecture={lecture}/>))}

        </div>


    </div>

    </>
  )
}

export default CourseVideos