import React from 'react'
import './footer.css'
import ietLogo from '../../assets/800px-Ietlogo.png'
import ieeeLogo from '../../assets/ieee_white.png'
const Footer = () => {
  return (

      <div className="footer">
        <div className='flex_center'>
        <h2>About IEEE</h2>
        <p className='footerP'>A not-for-profit organization, IEEE is the world's largest technical professional organization dedicated to advancing technology for the benefit of humanity</p>
        
        
        </div>
        <div className='flex_center'>
        <h2>Address</h2>
        <p className='footerP'>Sitapur Rd, Sector F, Jankipuram, Lucknow, Uttar Pradesh 226021</p>

        </div>
        <div>
        <div className="footerimg"><img src={ietLogo} alt=""  /></div>
        <div className="footerimg"><img src={ieeeLogo} alt="" /></div>
        </div>
        
        <h3> Made By Dhruv Rekhawat (EC 26) </h3>
      </div>

  )
}

export default Footer