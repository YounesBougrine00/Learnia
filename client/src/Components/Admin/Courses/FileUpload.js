import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Message from '../../utils/Message'
import Progress from '../../utils/Progress'
import { useDispatch } from 'react-redux'
import { addLecture } from '../../../Redux/actions/lecture'


const FileUpload = ({courseId}) => {
   
    const [file,setFile] = useState('')
    const [message,setMessage] = useState(null)
    const [uploadPercentage,setUploadPercentage] = useState(0)
    const [title, setTitle] = useState('')
    const [isDisabled, setIsDisabled] = useState(false)
    const dispatch = useDispatch()

    useEffect(()=>{
      const timer = setTimeout(() => {
        setMessage(null)
      }, 3000);
      return () => clearTimeout(timer);
    }, [message])
    

    const onChange = e => {
        setUploadPercentage(0)
        setFile(e.target.files[0]);
      }

      


      const onSubmit = async e => {
        e.preventDefault();
        setIsDisabled(true)
        
        const formData = new FormData();
        formData.append('file', file);
        formData.append('title',title)
        formData.append('courseId',courseId)

    
        try {
            const res = await axios.post('/api/lectures', formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            },
            onUploadProgress: progressEvent =>{
                setUploadPercentage(parseInt(Math.round(progressEvent.loaded*100/progressEvent.total)))
            }

    
          });

          const {error,result}= res.data
          dispatch(addLecture({title, courseId, video:{url: result.url, duration:result.duration, id: result.public_id}}))
          console.log(result)
          setUploadPercentage(0)
          setTitle('')
          setIsDisabled(false)

          if(error){
            setMessage({text: "Something went wrong!"})
          }else{
            setMessage({text:'File Uploaded',success: true})
          }


          

        } catch (err) {
          setIsDisabled(false)
          if(err.response.status == 500){
              setMessage({text:'There was a problem with the server'})
              
          }else{
              setUploadPercentage(0)
              setMessage({text: err.response.data.msg})
              
          }
        }
      };
   
 
  return (
    <> 
        {message && <Message msg={message} />}
       <form onSubmit={onSubmit} style={{"borderBottom":"1px solid #ccc"}} >
       <p className="text-title">Lecture title</p>
        <div>
        <input type="text" value={title} onChange={e=>setTitle(e.target.value)} placeholder='Lecture title' /> 
        </div>
   
        <div className="custom-file ">
            <input type="file" style={{"background":"#fff","marginBottom":"1rem"}} className="custom-file-input" id="customFile"  onChange={onChange}/>
        </div>
        <button style={{"marginLeft":0, "fontWeight":"500"}} disabled={isDisabled}  className="btn btn-primary" >Upload lecture</button>

         {(uploadPercentage!==0 && file) && <Progress percentage={uploadPercentage} />}
   
       
       </form>
    </>

    
  )
}

export default FileUpload