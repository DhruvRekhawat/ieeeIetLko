import React from 'react'
import './teamMembers.css'
import neelamMaam from '../../assets/neelammaam.jpg'
const TeamMembers = () => {
  return (
    <> 
    <div className="banner flex_center"><h1>Our Team</h1></div>
    <div className='section__padding section__margin'>
    <h1>Faculty Members: </h1>
    <div className="cardGrid">
      <div className="card">
        <img src={neelamMaam} alt="" />
        <p className='blogP'>Dr. Neelam Srivastava</p>
      </div>
    </div>
    <h1>Core Members: </h1>
    <div className="cardGrid flex_center">
      <div className="card">
        <img src={neelamMaam} alt="" />
        <p className='blogP'>Saksham Gautam</p>
      </div>
      <div className="card">
        <img src={neelamMaam} alt="" />
        <p className='blogP'>Keshav Gupta</p>
      </div>
      <div className="card">
        <img src={neelamMaam} alt="" />
        <p className='blogP'>Anshuman Singh</p>
      </div>
    </div>
    </div>
    </>
     
  )
}

export default TeamMembers