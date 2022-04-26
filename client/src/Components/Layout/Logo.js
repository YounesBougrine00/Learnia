import React from 'react'
import './Logo.css'
import { useNavigate } from 'react-router'

const Logo = ({style}) => {
  
  const navigate = useNavigate()

  return (
    < >
      <div onClick={()=>{navigate('/')}}className='logo text-primary'>
      <span style={style?style:{"color":"#000"}}>Learnia</span>
      <div></div>
      </div>
    </>
   
  )
}

export default Logo