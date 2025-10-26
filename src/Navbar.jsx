import React from "react";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoTriangle } from "react-icons/io5";
import { useScroll } from "./ScrollContext";
import { motion } from "motion/react";

function Navbar() {
   const { scrollTo, aboutRef, projectsRef,workRef } = useScroll();
  return (
    <motion.div
    initial={
      {
      y:-200
    }
    }
    animate={{
      y:0
    }}
    
     className=" flex justify-between items-center w-full text-white border-b border-white pb-4 pt-3">
      <div className="flex  gap-1">
        <span className="text-xl"><IoTriangle className="w-full h-full"/></span>
        <p>Sakshi Kanwar</p>
      </div>
      <div className="flex gap-5">
        <span onClick={()=>{
          scrollTo(projectsRef)
        }}>Work</span>
        <span  onClick={()=>{
          scrollTo(workRef)
        }}>Stack</span>
        <span  onClick={()=>{
          scrollTo(aboutRef)
        }}>Contact</span>
      </div>
      <div className="bg-white/30 px-3 rounded-3xl flex py-1">
        <span className="text-xl"><MdOutlineFileDownload className="w-full h-full text-white "/></span>
        <span>Resume</span>
      </div>
    </motion.div>
  );
}

export default Navbar;
