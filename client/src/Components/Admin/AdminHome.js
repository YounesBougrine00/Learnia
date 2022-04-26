import React from 'react'
import { Link } from 'react-router-dom'
import AdminNav from './AdminNav'

const AdminHome = () => {
  return (
    <>
      <AdminNav/>
      <div className="admin-banner">[ Welcome Admin ]</div>
      <div className="container" style={{"marginBottom":"2.5rem"}}>
        <Link to="/admin/home/instructors">
          <div className='option'>Instructors</div>
        </Link>
        <Link to="/admin/home/courses">
          <div className='option'>Courses</div>
        </Link>
         
          <div className='option'>Statistics</div>
      </div>
    </>
    
  )
}

export default AdminHome