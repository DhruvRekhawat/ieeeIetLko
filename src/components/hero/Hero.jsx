import React from 'react'
import './hero.css'
import Logo from './ieee_white.png'

const Hero = () => {
  
  return (
    <div className='hero'>
      <h1 className='hero__header'>CREATE,LEARN,TEACH</h1>
      <img className='ieeeLogo' src={Logo} alt="ieeeLogoWhite" />
      <button className='btn'> About Us</button>
    </div>
  )
}

export default Hero