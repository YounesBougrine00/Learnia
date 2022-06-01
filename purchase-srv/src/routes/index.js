const express = require('express')
const router = express.Router()
const Purchase  = require('../../models/Purchase')


// Get a user's purchases

router.get("/:userId", async (req,res)=>{
   
   const userId = req.params.userId

   const purchasedCourses = await Purchase.findOne({userId})
 

  res.send(purchasedCourses.courses)
})

// Check if course is purchased by user

router.get("/:userId/:courseId", async (req,res)=>{
   
   const userId = req.params.userId
   const courseId = req.params.courseId


   const purchasedCourses = await Purchase.findOne({userId})


   const course = purchasedCourses.courses.filter(course => course.courseId === courseId)

   
 

  res.send(course)
})



module.exports = router