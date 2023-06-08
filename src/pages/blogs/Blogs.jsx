import React from 'react'
import './blog.css'

import comic1 from './A-path-planning-comic.png'
import { Link } from 'react-router-dom'
const Blogs = () => {
  return (
    <div className="section__padding section__margin">
      <div className="cardGrid">
      <div className="card hugemargin">
        <img src={comic1} style={{borderRadius:"1rem"}} alt="" srcset="" />
        <h3>March 9,2023</h3>
      <p className='blogP'>Report Authored By:Antriksh Singh Rathore, Kshitij Gupta </p>
      <button className='cardBtn'><Link style={{color:'black'}} to='/2Dpathplanning'> Read More </Link></button>
      </div>
      
    </div>
    </div>

   
  )
}

export default Blogs