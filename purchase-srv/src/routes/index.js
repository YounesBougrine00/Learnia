const express = require('express')
const router = express.Router()
const Purchase  = require('../../models/Purchase')


// Get a user's purchases

router.get("/:userId", async (req,res)=>{
   
   const userId = req.params.userId

   const purchasedCourses = Purchase.find({userId})

   res.send(purchasedCourses)
})




module.exports = router