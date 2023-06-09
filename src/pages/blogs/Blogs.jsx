import React from 'react'
import './blog.css'
import image1 from './20.png'
import image2 from '../../assets/27.png'
import image3 from '../../assets/14.png'
import comic1 from './A-path-planning-comic.png'
import { Link } from 'react-router-dom'
const Blogs = () => {
  return (
    <div className="section__padding section__margin">
      <div className="cardGrid flex_center">
      <div className="card hugemargin ">
        <img src={image1}  alt="" srcset="" />
        <h3>March 9,2023</h3>
       <p className='blogP'>2D Path Planning, its importance and its application</p>
      <Link to='/2Dpathplanning'><button className='cardBtn'> Read More</button></Link>
    </div>
      <div className="card hugemargin">
        <img src={image2}  alt="" srcset="" />
        <h3>March 17,2023</h3>
       <p className='blogP'>Dijkstra’s Algorithm & Its Application </p>
      <Link to='/dijkstras'><button className='cardBtn'> Read More</button></Link>
    </div>
      <div className="card hugemargin">
        <img src={image3} style={{background:"white"}}  alt="" srcset="" />
        <h3>April 28,2023</h3>
       <p className='blogP'>2D Path Planning
and Line Follower Robot</p>
      <Link to='/2Dpathfollowingrobot'><button className='cardBtn'> Read More</button></Link>
    </div>
      
    </div>
    </div>

   
  )
}

export default Blogs