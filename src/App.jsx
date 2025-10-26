import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import RecentWork from './RecentWork'
import Trusted from './Trusted'
import Footer from './Footer'
import Cards from './Cards'
import ThreeBackground from './ThreeBackground'
import { ScrollProvider } from './ScrollContext'
function App() {
  return (
    <ScrollProvider>
      <div className='bg-black flex flex-col items-center pb-5 overflow-x-hidden'>
      <div className='w-6xl'>
        <div className='relative'>
          <ThreeBackground />
          <div className='relative z-10'>
            <Navbar></Navbar>
            <Hero></Hero>
          </div>
        </div>
        <RecentWork></RecentWork>
        <Trusted></Trusted>
        <Cards></Cards>
        <Footer></Footer>
      </div>
     
    </div>
    </ScrollProvider>
    
  )
}

export default App
