import React from 'react'
import butterfly from "../public/butterfly.png"
import { motion } from 'motion/react'
function Butter() {
  return (
    <div className=''>
         <motion.img 
        animate={{
           x: [0,10,40,60,100],  // horizontal path
        y: [3,60,54,69,100],   // vertical wave movement
        rotate: [0, 15, -15, 0],       
        }}
         transition={{
        duration: 1,
        repeat: Infinity,
        ease: "linear",
      }}
      src={butterfly} className='size-10 fixed top-0 left-0 pointer-events-none' alt="" />
    </div>
  )
}

export default Butter