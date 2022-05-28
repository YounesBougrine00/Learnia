import React,{useState,useEffect} from 'react'
import AdminNav from '../AdminNav'
import './Courses.css'
import { v4 } from 'uuid';
import { getInstructors } from '../../../Redux/actions/instructor';
import { useDispatch, useSelector } from 'react-redux';
import { addCourse, courseAddedState } from '../../../Redux/actions/course';
import { useNavigate } from 'react-router';
import Loader from '../../utils/Loader'





const AddCourse = () => {

    const navigate=useNavigate()
    const [showLoader,setShowLoader] = useState(false)

    //Selector
    const {loading,instructors} = useSelector(state=>state.instructor)
    const {course_added_successfully} = useSelector(state=> state.course)
    const dispatch= useDispatch()

    useEffect(()=>{
        dispatch(getInstructors())
    },[dispatch])
  
    

    const [learnText,setLearnText] = useState('')
    const [prerequisiteText,setPrerequisiteText] = useState('')

    // Inputs
    const [title,setTitle] = useState("")
    const [subtitle,setSubtitle] = useState("")
    const [instructor,setInstructor] = useState({})
    const [category,setCategory] = useState("")
    const [language,setLanguage] = useState("")
    const [description,setDescription] = useState("")
    const [whatYouWillLearn,setWhatYouWillLearn] = useState([])
    const [prerequisites,setPrerequisites] = useState([])
    const [level,setLevel] = useState("")
    




    //Image upload
    const [fileInputState,setFileInputState] = useState('')
    const [previewSource,setPreviewSource] = useState()

    /*What you will learn*/
    const addLearn = ()=>{
        if(learnText){
        whatYouWillLearn.push({
            id: v4(),
            text: learnText
        })
        setLearnText("")
        }    
    }

    const deleteLearnItem = (id) =>{
        setWhatYouWillLearn(whatYouWillLearn.filter(item => item.id !== id))
    }

    /*Prerequisits*/
    const addPrerequisite = ()=>{
        if(prerequisiteText){
            prerequisites.push({
                id: v4(),
                text: prerequisiteText
            })
            setPrerequisiteText("")
            }  
    }

    const deletePrerequisiteItem = (id) =>{
        setPrerequisites(prerequisites.filter(item => item.id !== id))
    }

  
    

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

    /*Form submition*/
    const handleSubmit = e =>{
        e.preventDefault()
        setShowLoader(true)
        dispatch(addCourse({title,subtitle,instructor:JSON.parse(instructor),category,language,description,whatYouWillLearn,prerequisites,previewSource,level}))
        
    
        
  
    }
    
    useEffect(()=>{
        if(course_added_successfully === true){
            dispatch(courseAddedState(false))
            navigate('/admin/home/courses')
        }
        
    },[course_added_successfully])

  return (
    <>
    <AdminNav/>
    <div className="container" style={{"paddingBottom":"2rem"}}>
        <form action="" style={{"paddingTop":"80px"}} onSubmit={handleSubmit}>
            <div>
                <p style={{"marginBottom":"1rem"}}>Course thumbnail</p>
                <div>
                   {previewSource && <img src={previewSource} alt="" style={{"width":"200px","margin":".5rem 0"}} />} 
                </div>
                <label htmlFor='hidden' className="btn btn-primary" style={{"margin":"0"}}>Add thumbnail <i className="fas fa-image"></i></label>
                <input value={fileInputState} id="hidden" type="file" style={{"display":"none"}} onChange={(e)=>handleFileInputChange(e)} />
            </div>
            <div>
                 <p >Course title</p>
                <input type="text" value={title} onChange={e=> setTitle(e.target.value)} />
            </div>
            <div>
                <p >Course subtitle</p>
                <input type="text" value={subtitle} onChange={e=> setSubtitle(e.target.value)}/>
            </div>
            <div>
            <p>Instructor</p>
            <select id="pet-select" value={instructor} onChange={e=>setInstructor(e.target.value)}>
                <option value="">Choose an instructor</option>
                {(!loading && instructors) && instructors.map(instructor =><option key={instructor._id} value={JSON.stringify({instructorId:instructor._id,name:instructor.name})}>{instructor.name}</option> )}
                
            </select>
            </div>
            <div>
            <p>Category</p>
            <select id="pet-select" value={category} onChange={e=>setCategory(e.target.value)}>
                <option value="">Choose a Category</option>
                <option value="Web dev">Web dev</option>
                <option value="UX Design">UX Design</option>
                <option value="ML & AI">ML & AI</option>
                <option value="Mobile dev">Mobile dev</option>
                <option value="Big Data">Big Data</option>
                <option value="Business">Business</option>
                <option value="Marketing">Marketing</option>
                <option value="Cloud">Cloud</option>


            </select>
            </div>
            <div>
            <p>Language</p>
            <select id="pet-select" value={language} onChange={e=>setLanguage(e.target.value)}>
                <option value="">Choose a language</option>
                <option value="English">English</option>
                <option value="French">French</option>
                <option value="Chinese">Chinese</option>
                <option value="Spanish">Spanish</option>
                <option value="German">German</option>
                <option value="Japanese">Japanese</option>
                <option value="Arabic">Arabic</option>
            </select>
            </div>

            <div>
            <p>Level</p>
            <select id="pet-select" value={level} onChange={e=>setLevel(e.target.value)}>
                <option value="">Choose a level</option>
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>

            </select>
            </div>

            <div>
                <p>Description</p>
                <textarea rows="10" value={description} onChange={e => setDescription(e.target.value)} ></textarea>
               
            </div>
            <div>
                <p>What you will learn</p>
                <div>
                    {whatYouWillLearn.map(item=> <div key={item.id} className='add-list-item'>{item.text} <i onClick={()=>deleteLearnItem(item.id)} style={{"color":"#D10170","cursor":"pointer"}} className="fas fa-times"></i></div>)}
                 </div>
                <input onChange={(e)=>setLearnText(e.target.value)} value={learnText} type="text" />
                <span onClick={addLearn} className="btn btn-primary">Add</span>
            </div>
            <div>
                <p>Prerequisites</p>
                 <div>
                 <div>
                    {prerequisites.map(item=> <div key={item.id} className='add-list-item'>{item.text} <i onClick={()=>deletePrerequisiteItem(item.id)} style={{"color":"#D10170","cursor":"pointer"}} className="fas fa-times"></i></div>)}
                 </div>
                 </div>
                <input onChange={(e)=>setPrerequisiteText(e.target.value)} value={prerequisiteText} type="text" />
                <span onClick={addPrerequisite} className="btn btn-primary">Add</span>

            </div>


            <button type="submit" className='btn btn-primary' style={{"margin":"0","width":"150px", "marginTop":"1rem"}}>Save</button>
        </form>
    </div>
    {showLoader && <Loader/>}
    </>
  )
}

export default AddCourse