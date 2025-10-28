import React, { useState } from "react";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoTriangle } from "react-icons/io5";
import { useScroll } from "./ScrollContext";
import { motion } from "motion/react";
import { IoMdMenu } from "react-icons/io";
import { IoMdDownload } from "react-icons/io";
import { GoDownload } from "react-icons/go";
function Navbar() {
   const { scrollTo, aboutRef, projectsRef,workRef } = useScroll();
   const [menu,setMenu]=useState(false)
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
    
     className="overflow-y-hidden relative flex flex-wrap justify-between items-center w-full text-white pb-4 pt-3">
      <div className="flex  gap-1">
        <span className="text-xl"><IoTriangle className="w-full h-full"/></span>
        <p>Sakshi Kanwar</p>
      </div>
      <div className="flex gap-5">
        <span className="hidden md:block" onClick={()=>{
          scrollTo(projectsRef)
        }}>Work</span>
        <span className="hidden md:block" onClick={()=>{
          scrollTo(workRef)
        }}>Stack</span>
        <span className="hidden md:block" onClick={()=>{
          scrollTo(aboutRef)
        }}>Contact</span>
       
      </div>
      <div className=" hidden md:flex bg-white/30 px-3 rounded-3xl  py-1">
        <span className="text-xl"><MdOutlineFileDownload className="w-full h-full text-white "/></span>
        <span>Resume</span>
      </div>
      

       <span onClick={()=>{
        setMenu(!menu)
       }} className="  bg-gray-800 p-1 w-auto rounded-full md:hidden  h-full text-2xl"><IoMdMenu ></IoMdMenu></span>
        <div className={` w-full border border-neutral-500 mt-2 mb-2`}></div>
       <div className={`md:hidden text-sm mt-1 rounded-xl px-3 py-2 gap-2 w-full bg-white/10 border border-white/30  ${menu?"flex flex-col":"hidden"}`}>
        <div className=" flex flex-col gap-2 py-1">
          <span className="" onClick={()=>{
          scrollTo(projectsRef)
        }}>Work</span>
        <span className="" onClick={()=>{
          scrollTo(workRef)
        }}>Stack</span>
        <span className="" onClick={()=>{
          scrollTo(aboutRef)
        }}>Contact</span>
        </div>
        <div className=" pt-1 w-full border-b text-neutral-500 "></div>
        <div className="flex items-center justify-center px-5">
           <div className="flex justify-center font-medium items-center bg-white  py-2  w-full  rounded-2xl text-black">
              <GoDownload className="size-4"></GoDownload>
              <p>Download Resume</p>
           </div>
        </div>
        
       </div>
    </motion.div>
  );
}

export default Navbar;
