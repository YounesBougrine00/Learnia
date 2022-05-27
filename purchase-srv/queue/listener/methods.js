const Purchase = require('../../models/Purchase')

async function addUser({userId }){
  const purchase = new Purchase({userId})
  await purchase.save()
  console.log(`User with ID: ${userId} added`)
   
  }

  async function addCourse({userId, courseId, title, purchaseDate}){
    const purchase = await Purchase.findOne({userId})


    if(purchase){
     purchase.courses.push({courseId,title,purchaseDate})
     await purchase.save()

    }
    console.log(`Course added to ${userId}'s purchase list`)
  }

module.exports = {addUser,addCourse}