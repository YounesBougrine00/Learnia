import React from 'react'

const Progress = ({percentage}) => {
  return (
    <div className='progress-wrapper' >
      <div className="progress" style={{"backgroundColor":"rgb(243, 243, 243)"}}>
        <div className="progress-bar" role="progressbar" style={{"width": `${percentage}%`}}></div>
    </div>
    <span style={{"padding": 0}}> {percentage}%</span>
    </div>
    
  )
}

export default Progress