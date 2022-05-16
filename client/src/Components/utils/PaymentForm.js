import React from 'react'
import visa from '../../images/visa.png'
import mastercard from '../../images/mastercard.png'


const PaymentForm = ({course}) => {
  return (
    <div className='form'style={{"width":"80%", "paddingTop":"0"}}>
       <form >
        <div style={{"margin":"auto", "marginBottom":"1rem","display":"flex","alignItems":"center"}}>
            <img src={visa} alt="" style={{"width":"80px","paddingRight":'.5rem'}}/>
            <img src={mastercard} alt="" style={{"width":"80px","paddingLeft":'.5rem', "borderLeft":"1px solid #ccc"}} />
        </div>
        <div className="info-box">
            {course}
        </div>
        <input type="text" placeholder='Card holder' />
        <input type="text" placeholder='Card Number'/>
        <input type="text" placeholder='Secret code'/>

        <button className="btn btn-secondary" style={{"margin":"1rem 0"}}><strong>Confirm payment</strong></button>

    </form> 
    </div>
    
  )
}

export default PaymentForm