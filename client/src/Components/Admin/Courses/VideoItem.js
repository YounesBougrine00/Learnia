import React, { useState } from 'react'
import {AiFillPlayCircle} from 'react-icons/ai'
import Modal from '../../../Components/utils/Modal'
import convert from 'convert-seconds'
 
const VideoItem = ({lecture,index,reverse,length}) => {
  
  const [openModal,setOpenModal] = useState(false)
  const d = convert(lecture.video.duration)
  const duration = `${d.minutes}min${d.seconds}s`
  

  return (
    <>
      <abbr onClick={()=> setOpenModal(true)} title={lecture.title}>
      <div className='video-card'>  
        
      <div >
        <div className='index'>
        {reverse? length-index :index+1}
       </div>
        <AiFillPlayCircle style={{"color":"#6a6f73", "marginRight":"6px"}}/>
        <span> {lecture.title}</span>
      </div>
      <div style={{"fontSize":".8rem","color":"grey","textAlign":"center"}}>{duration}</div> 
      </div>
      </abbr>
   {openModal &&<Modal isOpen={setOpenModal} >
   <video style={{"width":"100%"}}  controls >
      <source src={lecture.video.url} type="video/mp4"/>
   </video>
      </Modal>}
    </>
   
  )
}

export default VideoItem