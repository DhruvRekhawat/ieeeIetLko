import React from 'react'
import './events.css'
import Image from './13.png'

const Events = () => {
  return (
    <div className='flex_center section__padding section__margin'>
      <h1>Events</h1>
      <div className="cardGrid">
        <div className="card flex_center">
          <img src={Image} alt="" srcset="" />
          <span>blah blah blah filler text blah blah blah lorem epsum posum</span>
          <button className='cardBtn'>Know More</button>
        </div>
        <div className="card flex_center">
          <img src={Image} alt="" srcset="" />
          <span>blah blah blah filler text blah blah blah lorem epsum posum</span>
          <button className='cardBtn'>Know More</button>
        </div>
        <div className="card flex_center">
          <img src={Image} alt="" srcset="" />
          <span>blah blah blah filler text blah blah blah lorem epsum posum</span>
          <button className='cardBtn'>Know More</button>
        </div>
        <div className="card flex_center">
          <img src={Image} alt="" srcset="" />
          <span>blah blah blah filler text blah blah blah lorem epsum posum</span>
          <button className='cardBtn'>Know More</button>
        </div>
        <div className="card flex_center">
          <img src={Image} alt="" srcset="" />
          <span>blah blah blah filler text blah blah blah lorem epsum posum</span>
          <button className='cardBtn'>Know More</button>
        </div>
        <div className="card flex_center">
          <img src={Image} alt="" srcset="" />
          <span>blah blah blah filler text blah blah blah lorem epsum posum</span>
          <button className='cardBtn'>Know More</button>
        </div>
      </div>
    </div>
  )
}

export default Events