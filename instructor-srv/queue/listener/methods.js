async function addCourse({courseId,title,instructor,thumbnail }){
    const foundInstructor = await Instructor.findById(instructor.instructorId)
    await foundInstructor.courses.push({courseId,title,thumbnail})
    foundInstructor.save()
    console.log("course added to instructor")
  }

module.exports = {addCourse}