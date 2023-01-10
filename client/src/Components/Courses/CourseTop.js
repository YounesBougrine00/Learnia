import React,{useEffect, useState} from 'react'
import '../../App.css'
import './CourseTop.css'
import {BsBarChartFill} from 'react-icons/bs'
import { useNavigate } from 'react-router'
import { useSelector } from 'react-redux'
import Modal from '../utils/Modal'
import PaymentForm from '../utils/PaymentForm'
import axios from 'axios'


const CourseTop = ({course,loading}) => {

 const navigate = useNavigate()
 const {user} = useSelector(state => state.auth)

 const [openModal,setOpenModal] = useState(false)
 const [isPurchased,setIsPurchased] = useState()

 useEffect(()=>{
     const checkPurchase = async ()=> {
         const res = await axios.get(`https://learnia.dev/api/purchase/${user.id}/${course._id}`)
        setIsPurchased(res.data.length>0) 
     }

     checkPurchase()
   
 },[])
 


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
                <i className="fas fa-info-circle"></i> Created by : <span onClick={()=>navigate(`/instructor/${course.instructor[0].instructorId}`)}>{course.instructor[0].name}</span>
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
        <div className="course-banner-thumbnail" >
            <img src={(!loading && course) ? course.thumbnail:undefined} alt="" />
        </div>
        
        </div>  
    </div>
    <div className="price-wrapper">
    <div className="container">
        <div className="price">
            {user && (!isPurchased?<button onClick={()=> setOpenModal(true)} className="btn btn-secondary" style={{"margin":"0 2rem 0 0 ","paddingRight":"2rem","paddingLeft":"2rem"}}><strong>Buy now</strong></button>:<button onClick={()=> navigate(`/lecture/${course._id}`)} className="btn btn-secondary" style={{"margin":"0 2rem 0 0 ","paddingRight":"2rem","paddingLeft":"2rem"}}><strong>Go to lecture</strong></button>)}
             
             { !isPurchased && <p style={{"margin":"0"}}>6.99{' '}$US</p>}
        </div>
    </div>
    </div>
   
    {openModal && <Modal isOpen={setOpenModal}><PaymentForm course={course.title} setIsPurchased={setIsPurchased} setOpenModal={setOpenModal} courseId={course._id} userId={user.id}/></Modal>}
    </>
  )
}

export default CourseTop