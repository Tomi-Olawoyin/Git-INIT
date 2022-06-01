import React from 'react'
import img from './images/Dots.png'
import imgone from  './images/Group 221.png'

const Main = () => {
  return (
    <div className='main-container'>
      <div className='sub-main-container'>
        <h2 className = 'item1'>Design Thinker</h2>
        <p className='item2'>
          I am a Designer that thinks creatively. I make outstanding innovations for any startup.
          I am a Designer that thinks creatively. I make outstanding innovations for any startup.
        </p>
        <img src={img} alt='Dots' className='item3'/>
      </div>
      <div className='absolute'>
        <img src = {imgone} alt ='Group' />
      </div>
    </div>
  )
}

export default Main