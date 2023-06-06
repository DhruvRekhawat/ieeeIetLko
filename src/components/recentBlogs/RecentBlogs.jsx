import React from 'react'
import './recentBlogs.css'
import Image2 from './20.png'
const RecentBlogs = () => {
  return (
    <div className='section__padding section__margin'>
      <h1>Recent Blogs</h1>
      <div className="cardGrid flex_center">
        <div className="card flex_center">
          <img src={Image2} alt="" srcset="" />
          <h2>6th June,2023</h2>
          <span>Dhruv Rekhawat</span>
          <p className='blogP'>Blog Title Goes Here</p>
          <button className='cardBtn'>Read More</button> 
        </div>
        <div className="card flex_center">
          <img src={Image2} alt="" srcset="" />
          <h2>6th June,2023</h2>
          <span>Dhruv Rekhawat</span>
          <p className='blogP'>Blog Title Goes Here</p>
          <button className='cardBtn'>Read More</button> 
        </div>
        <div className="card flex_center">
          <img src={Image2} alt="" srcset="" />
          <h2>6th June,2023</h2>
          <span>Dhruv Rekhawat</span>
          <p className='blogP'>Blog Title Goes Here</p>
          <button className='cardBtn'>Read More</button> 
        </div>
        <div className="card flex_center">
          <img src={Image2} alt="" srcset="" />
          <h2>6th June,2023</h2>
          <span>Dhruv Rekhawat</span>
          <p className='blogP'>Blog Title Goes Here</p>
          <button className='cardBtn'>Read More</button> 
        </div>
        <div className="card flex_center">
          <img src={Image2} alt="" srcset="" />
          <h2>6th June,2023</h2>
          <span>Dhruv Rekhawat</span>
          <p className='blogP'>Blog Title Goes Here</p>
          <button className='cardBtn'>Read More</button> 
        </div>
      
      </div>
    </div>
  )
}

export default RecentBlogs