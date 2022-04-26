import React from 'react'
import ReactDOM  from 'react-dom'
import './Loader.css'

const Loader = ({children,isOpen}) => {
  return  ReactDOM.createPortal(
  <div className="loader-bg">
    <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
  </div>, document.getElementById('portal')
  )
}

export default Loader