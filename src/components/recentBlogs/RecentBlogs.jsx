import React from 'react'
import './recentBlogs.css'
import Image2 from './20.png'
import comic1 from './A-path-planning-comic.png'
import { Link } from 'react-router-dom'
const RecentBlogs = () => {
  return (
    <div className='section__padding section__margin'>
      <h1>Recent Blogs</h1>
      <div className="cardGrid flex_center">
        <div className="card flex_center">
          <img src={comic1} alt="" srcset="" />
          <h2>March 9,2023</h2>
          <span>Antriksh Singh Rathore, Kshitij Gupta</span>
          <p className='blogP'>2D Path
    Planning, its importance
    and its application</p>
          <button className='cardBtn'><Link style={{color:"black", fontSize:"1rem"}} to={'/blogs'}>Read More</Link></button> 
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