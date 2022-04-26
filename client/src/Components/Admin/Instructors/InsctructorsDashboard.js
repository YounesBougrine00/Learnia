import React, {useEffect, useState} from 'react'
import AdminNav from '../AdminNav'
import './Instructors.css'
import InstructorCard from './InstructorCard'
import Angular from '../../../images/Angular.jpg'
import { useSelector,useDispatch } from 'react-redux'
import { addInstructor, getInstructors } from '../../../Redux/actions/instructor'






const InsctructorsDashboard = () => {

  const [name,setName] = useState("")
  const [about,setAbout] = useState("")
  
  const dispatch = useDispatch()
  const {loading,instructors} = useSelector(state => state.instructor)

  //Image upload
  const [fileInputState,setFileInputState] = useState('')
  const [previewSource,setPreviewSource] = useState()

  const handleFileInputChange = (e) => {
    const file = e.target.files[0]
    previewFile(file)
  }

  const previewFile = (file) => {
    const reader = new FileReader()
    //Convert the image to a string 64base-encoded
    reader.readAsDataURL(file)
    reader.onloadend = () => {
      setPreviewSource(reader.result)
    }
}
  


  useEffect(()=>{
    dispatch(getInstructors())

  },[])

  return (
        <>
          <AdminNav/>
          <div className="container">
              <div className="add-instructor">
                <div>
                <p style={{"marginBottom":"1rem"}}>Instructor image</p>
                <div>
                  <div>
                 { previewSource &&  <img  alt="" style={{"width":"200px","margin":".5rem 0"}} src={previewSource} />}
                   
                  </div>   
                    <label htmlFor='hidden' className="btn btn-primary" style={{"margin":"0"}}>Add image <i className="fas fa-image"></i></label>
                    <input value={fileInputState} id="hidden" type="file" style={{"display":"none"}} onChange={(e)=>handleFileInputChange(e)} />
                </div>
                  <input onChange={(e)=>setName(e.target.value)} value={name} type="text" placeholder='Instructor name'  />
                </div>
                <div>
                  <textarea onChange={(e)=>setAbout(e.target.value)} value={about} name="" id=""  rows="10" placeholder='About the instructor'></textarea>
                </div>
                
                <button className="btn btn-primary" style={{"marginLeft":0, "fontWeight":"500"}} onClick={()=>dispatch(addInstructor({name,about,previewSource}),setAbout(""),setName(""),setPreviewSource(""))}>Add new instructor </button>
              </div>
              <p className="p-title">Learnia instructors</p>
              <div className="instructors-grid">

                 {!loading && instructors? instructors.map(instructor=><InstructorCard key={instructor._id}   instructor={instructor}/>): ""}
               

              </div>


          </div>
         
        </>
  )
}

  export default InsctructorsDashboard