import React, { useEffect,useState } from 'react'
import '../../App.css'
import './InstructorTop.css'
import axios  from 'axios'
import {  useParams } from "react-router";

const InstructorTop = () => {
  
  const {instructorId} = useParams()

  const [instructor,setInstructor] = useState('')

  useEffect(()=>{
    async function getResults() {
      if(instructorId){

     const res = await axios.get(`/api/instructors/${instructorId}`)

     setInstructor(res.data)
   }
   }

   getResults()
  
  },[instructorId])

  return (
    <div className="instructor-banner">
        <div className="container">
            <div className="img-wrapper">
                <img src={instructor.image} alt="" />
            </div>
            <div>
                <p>{instructor.name}</p>
                <p>{instructor.about}</p>

            </div>
        </div>
    </div>
  )
}

export default InstructorTop