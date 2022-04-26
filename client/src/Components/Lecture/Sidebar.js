import React, {useState} from 'react'
import CourseLecture from './CourseLecture'


const Sidebar = ({loading,lectures,setVideo,current,setCurrent}) => {



  return (
    <div className="sidebar">
        <div className="sidebar-top">
            <span>Course content</span>
        </div>
        <div className="sidebar-body">
          {(!loading && lectures) && lectures.map(lecture=> <CourseLecture key={lecture._id} id={lecture._id}  setVideo={setVideo} video={lecture.video.url} title={lecture.title} duration={lecture.video.duration}  current={current} setCurrent={setCurrent}/> )}
            

        </div>
    </div>
  )
}

export default Sidebar