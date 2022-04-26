import React from 'react'
import { useNavigate } from 'react-router'

const CourseCard = ({course}) => {
  const navigate = useNavigate()

  return (
    <div onClick={()=>navigate(`/admin/home/courses/${course._id}/lectures`)} className='course-card'>
      <div style={{"borderBottom":"1px solid #fff"}} >
        <img src={course.thumbnail} alt="" />
      </div >
      <div style={{"borderTop":"5px solid #D10170"}}>
        <p style={{"fontWeight":"600"}}>{course.title}</p>
      </div>
    </div>
  )
}

export default CourseCard