import React from 'react'
import { useState } from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
import { CiMenuBurger } from 'react-icons/ci'
import { AiOutlineClose} from 'react-icons/ai'
const Navbar = () => {
  const [toggleMenu,setToggleMenu] = useState(false);

        return (
          
          <nav className='nav'>
            <p className='logo'>IEEE IET LUCKNOW</p>
            <ul className='horizontalMenu'>
              <li><Link to='/' >Home</Link></li>
              <li><Link to='/blogs' >Blogs</Link></li>
              <li><Link to='/sessions'>Sessions</Link></li>
              <li><Link to='/teamMembers'>Team Members</Link></li>
              <li><Link to='/beAMember'>Become A Member</Link></li>
            </ul>
            
            <div className="menu">
              {(toggleMenu===false)
              ?<CiMenuBurger className='menuBurger' color='white' size={27} onClick={()=>setToggleMenu(true)}/>
              :<><AiOutlineClose className= 'menuBurger' color='white' size={27} onClick={()=> setToggleMenu(false)}/>
               <div className="dropdownMenu" onClick={()=> setToggleMenu(false)}>
                  <ul className='dropdownList'>
                    <li className='dropdownListElement'><Link to='/' >Home</Link></li>
                    <li className='dropdownListElement'><Link to='/blogs' >Blogs</Link></li>
                    <li className='dropdownListElement'><Link to='/sessions'>Sessions</Link></li>
                    <li className='dropdownListElement'><Link to='/teamMembers'>Team Members</Link></li>
                    <li className='dropdownListElement'><Link to='/beAMember'>Become A Member</Link></li>
                  </ul>
                </div>
               </>
              }
            </div>
            </nav>
          
          
        )
      

     }

export default Navbar

