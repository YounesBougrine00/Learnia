import React from 'react'
import '../../App.css'
import './CourseTop.css'
import {BsBarChartFill} from 'react-icons/bs'
import { useNavigate } from 'react-router'

const CourseTop = ({course,loading}) => {

 const navigate = useNavigate()
  return (
    <>
    <div className="course-banner">
        <div className="container">
        <div className="course-info">
            <p className='title'>
               {(!loading && course) && course.title}
            </p>

            <p className="description">
            {(!loading && course) && course.subtitle}
            </p>
            <p className="participants">
                [ 300 enrolled ]
            </p>
            <p className="creator">
                <i className="fas fa-info-circle"></i> Created by : <span onClick={()=>navigate('/instructor')}>Creator Name</span>
            </p>
            <p className="creator">
                <i className="fa-solid fa-globe"></i> {(!loading && course) && course.language}
            </p>
            <p className="creator">
                <i className="fa-solid fa-hourglass-end"></i> 3.5 houres
            </p>
            <p className="creator">
            <BsBarChartFill/> {(!loading && course) && course.level}
            </p>
            <span style={{"fontSize":".9rem"}} className="category-label"><strong>{(!loading && course) && course.category}</strong></span>
        </div>
        <div className="course-banner-thumbnail">
            <img src={(!loading && course) ? course.thumbnail:undefined} alt="" />
        </div>
        
        </div>  
        
    </div>
    <div className="price-wrapper">
    <div className="container">
        <div className="price">
              <button className="btn btn-secondary" style={{"margin":"0","paddingRight":"2rem","paddingLeft":"2rem"}}><strong>Buy now</strong></button>
              <p>6.99{' '}$US</p>
        </div>
    </div>
    </div>
   
    
    </>
  )
}

export default CourseTop