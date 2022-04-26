import React from 'react'
import '../../App.css'
import './InstructorTop.css'
import Angular from '../../images/Angular.jpg'

const InstructorTop = () => {
  return (
    <div className="instructor-banner">
        <div className="container">
            <div className="img-wrapper">
                <img src={Angular} alt="" />
            </div>
            <div>
                <p>Instructor name</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Aspernatur dolorum debitis alias qui odio velit quos! Nostrum quo odit impedit! 
                    Optio excepturi molestias cupiditate recusandae numquam consectetur voluptatem velit quia?
                     Illo eum velit dicta. Aliquid asperiores quae in explicabo velit, quia voluptatibus recusandae 
                     ullam hic aut expedita quas dolor! Deleniti.</p>

            </div>
        </div>
    </div>
  )
}

export default InstructorTop