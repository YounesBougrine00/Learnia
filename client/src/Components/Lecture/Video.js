import React, {useRef,useEffect} from 'react'


const Video = ({video,nextLecture,current}) => {

  const videoRef = useRef();

  useEffect(() => {    
    videoRef.current?.load();
 

  }, [video]);
  
  return (
    <video  ref={videoRef} width="750" height="500" className='video' onEnded={() => { nextLecture(current.id)} } controls  >
      <source src={video} type="video/mp4"/>
   </video>
  )
}

export default Video