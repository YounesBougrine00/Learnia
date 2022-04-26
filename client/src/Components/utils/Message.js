import React from 'react'

const Message = ({msg}) => {
  return (
<div className="alert-box" style={ msg.success && {"color":"#155724","background":"#D4EDDA", "border":"1px solid #c3e6cb"}} >
  {msg.text}
</div>
  )
}

export default Message