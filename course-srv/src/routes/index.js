const express = require('express')
const router = express.Router()
const Course = require('../../models/Course')
const {cloudinary} = require('../../utils/cloudinary')
const {sendtoQueue}= require('../../queue/queue')

// get all courses
router.get('/',async (req,res)=>{
    try {
        const courses = await Course.find()
        res.send(courses)
    } catch (error) {
        console.log(error.message)
    }
  
  })
  

// get landing page  courses
router.get('/landing',async (req,res)=>{
    try {
        const courses = await Course.find().limit(8)
        res.send(courses)
    } catch (error) {
        console.log(error.message)
    }
  
  })


  //Create a new course
  router.post('/',async (req,res)=>{
      const {title,subtitle,instructor,category,language,description,whatYouWillLearn,prerequisites,level} = req.body
      const fileStr = req.body.previewSource
      let image = await cloudinary.v2.uploader.upload(fileStr, {folder: 'learnia/courses'})
      try {
          const course = new Course({title,instructor,level,subtitle,category,language,description,thumbnail:image.url})
          prerequisites.map(item=>{
              course.prerequisites.push(item.text)
          })
          whatYouWillLearn.map(item=> {
              course.wylearn.push(item.text)
          })
          await course.save()
          sendtoQueue("instructor:course.created",{courseId:course._id,title,instructor,thumbnail:image.url})
          res.send(course)
      } catch (error) {
          console.log(error.message)
      }
  })


//get course by id

router.get('/:courseId',async (req,res)=>{
    
    const courseId = req.params.courseId

    try {
        const course = await Course.findById(courseId)
        res.send(course)
    } catch (error) {
        console.log(error.message)
    }
  
  })
  
// Buy a course
router.post('/buy/:courseId/:userId', async (req,res)=>{
    const courseId = req.params.courseId
    const userId = req.params.userId

    const course = await Course.findById(courseId)

    const title = course.title
    const purchaseDate = new Date()
    sendtoQueue("purchase:course.purchased",{userId, courseId, title, purchaseDate})
    res.send({userId, courseId, title, purchaseDate})
})



module.exports = router


