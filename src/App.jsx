import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import RecentWork from './RecentWork'
import Trusted from './Trusted'
import Footer from './Footer'
import Cards from './Cards'
import { ScrollProvider } from './ScrollContext'
import AsteroidsBackground from './MeteorBackground'
import MeteorBackground from './MeteorBackground'
function App() {
  return (
    <ScrollProvider>
      {/* REMOVED bg-black HERE */}
      <div className='flex flex-col items-center pb-5 overflow-x-hidden min-h-screen'>
        
        <MeteorBackground /> 
        
        <div className='relative z-10 w-full max-w-6xl px-4 sm:px-6 md:px-8'>
          <Navbar />
          <Hero />
          <RecentWork />
          <Cards />
          <Footer />
        </div>
      </div>
    </ScrollProvider>
  );
}
export default App
