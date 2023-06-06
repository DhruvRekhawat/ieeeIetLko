import React from 'react'
import './home.css'
import { About, Events, Hero, RecentBlogs } from '../../components'


const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Events />
      <RecentBlogs />
    </>
  )
}

export default Home