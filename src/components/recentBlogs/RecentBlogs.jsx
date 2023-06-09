import React from 'react'
import './recentBlogs.css'
import Image2 from './20.png'
import image2 from '../../assets/27.png'
import image3 from '../../assets/14.png'
import comic1 from './A-path-planning-comic.png'
import { Link } from 'react-router-dom'
const RecentBlogs = () => {
  return (
    <div className='section__padding section__margin'>
      <h1>Recent Blogs</h1>
      <div className="cardGrid flex_center">
        <div className="card flex_center">
          <img src={Image2} alt="" srcset="" />
          <h2>March 9,2023</h2>
          <span>Antriksh Singh Rathore, Kshitij Gupta</span>
          <p className='blogP'>2D Path
    Planning, its importance
    and its application</p>
    <Link to={'/2Dpathplanning'}><button className='cardBtn'>Read More</button></Link>
        </div>
        <div className="card flex_center">
          <img src={image2} alt="" srcset="" />
          <h2>March 17,2023</h2>
          <span>Divyansh Jaiswal, Gaurav Chaurasiya </span>
          <p className='blogP'>Dijkstra’s Algorithm & Its Application</p>
          <Link to={'/dijkstras'}><button className='cardBtn'>Read More</button></Link>
        </div>
        <div className="card flex_center">
          <img src={Image2} alt="" srcset="" />
          <h2>April 28,2023</h2>
          <span>Anindya Ranjan Samaddar, Abhinav Kumart</span>
          <p className='blogP'>2D Path Planning
and Line Follower Robot</p>
          <Link to={'/2Dpathfollowingrobot'}><button className='cardBtn'>Read More</button> </Link>
        </div>    
      </div>
    </div>
  )
}

export default RecentBlogs