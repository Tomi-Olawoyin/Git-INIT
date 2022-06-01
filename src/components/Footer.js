import React from 'react'
import pic from './images/akar-icons_arrow-right.png'
import pictwo from './images/Group 226.png'
import picthree from './images/akar.png'
import picfour from './images/SocialMedia.png'


const Footer = () => {
  return (
    <div className='footer-container'>
      <h2>People like working with me</h2>
      <h4>Here is why</h4>
      <div className='main-image'>
        <img src = {pic} alt='arrow-left' />
        <img src = {pictwo} alt='profile' className='pic-two'/>
        <img src = {picthree} alt='arrow-right' />
      </div>
      <p>I love working with him, He is so sturbborn and bla bla bla,Maybe in his next life, 
        he will be less sturbborn, it does not mean i wil work with him though</p>
      <img src ={picfour} alt='social-media'className='social-media' />
    </div>
  )
}

export default Footer