import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
  <nav>
      <p className='logo'>IEEE IET LUCKNOW</p>
    <ul>
      <li><Link to='/' >Home</Link></li>
      <li><Link to='/blogs' >Blogs</Link></li>
      <li><Link to='/sessions'>Sessions</Link></li>
      <li><Link to='/teamMembers'>Team Members</Link></li>
      <li><Link to='/beAMember'>Become A Member</Link></li>
    </ul>
  </nav>
  )
}

export default Navbar