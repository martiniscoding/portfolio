import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import RecentWork from './RecentWork'
import Trusted from './Trusted'
import Footer from './Footer'
import Cards from './Cards'
import { motion } from 'motion/react'
import butterfly from "../public/butterfly.png"
import Butter from './Butter'
function App() {
  return (
    <div className='bg-black  flex flex-col items-center py-5 overflow-x-hidden'>
      <div className='w-6xl '>
        <Navbar></Navbar>
        <Hero></Hero>
        <RecentWork></RecentWork>
        <Trusted></Trusted>
        <Cards></Cards>
        <Footer></Footer>
      </div>
     
    </div>
  )
}

export default App