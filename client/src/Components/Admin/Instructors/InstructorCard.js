import React,{useState} from 'react'
import Modal from '../../utils/Modal'

const InstructorCard = ({instructor}) => {

  const [openModal, setOpenModal] = useState(false)

  return (
    <>
      <div onClick={()=> setOpenModal(true)} className="instructor-card">
          <div>
              <img src={instructor.image} alt="" />
          </div>
          <p style={{"fontWeight":"500","textAlign":"center"}}>{instructor.name}</p>
      </div>
      {openModal && <Modal isOpen={setOpenModal}>
        <div>
          <div style={{"height":"200px","width":"200px","margin":" 1rem auto"}} >
            <img src={instructor.image} alt="" style={{"width":"100%","height":"100%","borderRadius":"50%", "objectFit":"cover"}}/>
          </div>
          
          <p className="p-title" style={{"padding":"1rem 0","borderTop":"1px solid #ccc","borderBottom":"1px solid #ccc","background":"#F7F9FA"}}>About the instructor</p>
          <p>{instructor.about}</p>
        </div> 
      </Modal>}
    </>
    
  )
}

export default InstructorCard