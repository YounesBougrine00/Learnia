import React from 'react'
import {AiFillPlayCircle} from 'react-icons/ai'
import convert from 'convert-seconds'

const CourseLecture = ({title, duration, video, setVideo, current,setCurrent,id}) => {

  const d = convert(duration)
  const duration_v2 = `${d.minutes}min ${d.seconds}s`

  return (
    <div className={(!current.state || current.id!==id)  ? "course-lecture": "course-lecture current"} onClick={()=> {setVideo(video); setCurrent({id, state: true})}}>
        <input onClick={e=> e.stopPropagation()} type="checkbox" />
        <div>
            <span>{title}</span>
            <div>
                 <AiFillPlayCircle className="lecture-play-icon"  />
                <span>{duration_v2}</span>
            </div>
        </div>
    </div>
  )
}

export default CourseLecture