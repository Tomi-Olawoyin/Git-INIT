import React from 'react'
import picone from  './images/Logo.png'
import picfour from  './images/bi_collection.png'

const Navbar = () => {
  return (
    <div className='navbar-container'>
       <img src={picone} alt='Logo' className='logo'/>
       <div className='navbar-links'>
           <a href= '' >Home</a>
           <a href=''>Works</a>
           <a href=''>References</a>
       </div>
        <img src={picfour} alt='bi' className='small-icon' />
    </div>
  )
}

export default Navbar