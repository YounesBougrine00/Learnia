import React from 'react'
import './Searchbar.css'


const Searchbar = () => {
  return (
    <div className='searchbar '>
        <input type="text" placeholder='What do you want to learn?' />
        <i className="fas fa-search"></i>
    </div>
  )
}

export default Searchbar