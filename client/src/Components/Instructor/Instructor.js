import React, {useState, useEffect} from 'react'
import InstructorTop from './InstructorTop'
import InstructorBottom from './InstructorBottom'
import '../../App.css'
import axios  from 'axios'
import {  useParams } from "react-router";

const Instructor = () => {

  const {instructorId} = useParams()

  const [instructor,setInstructor] = useState('')

  useEffect(()=>{
    async function getResults() {
      if(instructorId){

     const res = await axios.get(`http://localhost:5002/api/instructor/${instructorId}`)

     setInstructor(res.data)
   }
   }

   getResults()
  
  },[instructorId])
 
  return (
    <>
        <InstructorTop instructor={instructor}/>
        <InstructorBottom courses={instructor.courses}/>
    </>
  )
}

export default Instructor