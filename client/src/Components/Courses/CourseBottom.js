import React, { useState } from 'react'
import '../../App.css'
import './CourseBottom.css'
import {MdCheck} from 'react-icons/md'

const CourseBottom = ({course,loading}) => {

  const [expand,setExpand] = useState(false)
  return (
    <div className='container'>
      <div className="what-you-will-learn">
        <p className='p-title'> What you will learn</p>
        <div>
          {(!loading && course) && course.wylearn.map((item,index)=> 
            
          <span key={index}>
          <MdCheck/>
           <p>{item}</p>
         </span>
            )}
          

    
        </div>   
      </div>

      <div className="prerequisits">
         <p className='p-title'>Prerequisites</p>
         <ul>
           {(!loading && course) && course.prerequisites.map((item,index)=> <li key={index}>{item}</li>) }
           
         </ul>
      </div>
      <div className={expand? `description expand`: 'description'} >
        <p className='p-title'>Description</p>
        <p className='description-text'>{(!loading && course) && course.description }</p>
         <span className={expand? `readmore-link expand`: 'readmore-link'} onClick={()=>setExpand(!expand)}></span>   
      </div>
     {/*
       <div className="course-content">
        <p className="p-title">Course content</p>
      </div>
          */} 
    </div>
  )
}

export default CourseBottom