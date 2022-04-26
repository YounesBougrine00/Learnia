import React, { useEffect,useState, useLayoutEffect } from 'react'
import Video from './Video'
import Sidebar from './Sidebar'
import './Lecture.css'
import LectureNav from './LectureNav'
import { useParams } from 'react-router'
import { useDispatch,useSelector } from 'react-redux'
import { getLectures } from '../../Redux/actions/lecture'

const Lecture = () => {

  const {courseId} = useParams()
  const {lectures_loading,lectures} = useSelector(state=> state.lecture)
  const dispatch = useDispatch()

  const [video,setVideo] = useState(null)
  const [current,setCurrent] = useState({id: null, state:false})

  useLayoutEffect(()=>{
    dispatch(getLectures(courseId))
      
  },[dispatch])


  useEffect(()=>{
    if(lectures.length>0) {
      const firstVideo = lectures[0].video.url
      const firstState = {id: lectures[0]._id, state:true} 
      setCurrent(firstState)
      setVideo(firstVideo)
    }
  },[setCurrent, setVideo, lectures])


  
  const nextLecture = (lectureId) => {
    const currentLectureIdx = lectures.findIndex(lecture => lecture._id === lectureId)
    const nextLecture = lectures[currentLectureIdx+1].video.url
    setCurrent({id:lectures[currentLectureIdx+1]._id, state:true})
    setVideo(nextLecture)
    
  }
  
  



  return (
    <>
    
    <LectureNav/>
    <div className="lecture">
        <Video video={video} current={current}  nextLecture={nextLecture}/>
        <Sidebar loading={lectures_loading} setVideo={setVideo} lectures={lectures} current={current} setCurrent={setCurrent} />
    </div>
    </>
  )
}

export default Lecture