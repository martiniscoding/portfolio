import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { FaCheck } from "react-icons/fa6";
import { FaMicrochip } from "react-icons/fa6";
import photo from "../public/photo.jpg";
import { GoDotFill } from "react-icons/go";
import { motion } from "motion/react";
import { useScroll } from "./ScrollContext";

function Hero() {
  const { scrollTo, aboutRef, projectsRef,workRef } = useScroll();
  return (
    <section className=" flex flex-col  flex-wrap  justify-center md:flex-row relative overflow-hidden text-white mt-10  md:justify-between w-full pb-5 px-4 border-b">
      <motion.div
        initial={{
          x: -200,
          opacity: 0,
        }}
        animate={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.5,
        }}
        className="relative z-10 w-full md:w-[60%]"
      >
        <div className="flex flex-col gap-1 font-light text-3xl md:text-8xl  ">
          <span>Satyam</span>
          <span>Singh</span>
        </div>
        <div className="pt-5 pr-5 w-full max-w-[700px] text-base sm:text-lg md:text-2xl lg:text-3xl leading-relaxed whitespace-normal">
         I can build a full stack application ,integrate AI agent to 
         it, scale it to a million users , deploy it and  make sure the deployment never goes down , all this solo.
        </div>
        <p >(I can migrate your app from ec2 to k8s too ;))</p>
        <p className="mt-3 font-bold text-xl"> Full Stack / AI Agents / System Design / Devops </p>
        <div className=" flex flex-col md:flex-row pt-4  gap-5 border-b pb-10">
          <button className="bg-white rounded-4xl px-4 py-4 md:py-2 flex gap-1 text-black items-center w-full md:w-auto">
            <span className="size-4">
              <FaArrowRight className="w-full h-full size-2 text-neutral-700" />
            </span>
            <span onClick={()=>{
          scrollTo(projectsRef)
        }}>View Work</span>
          </button>
          <button className="flex items-center gap-2 bg-white/20 backdrop-blur-md  text-white px-4 py-4 md:py-2 rounded-4xl hover:bg-white/30 transition-all duration-300 w-full md:w-auto">
            <span className="text-lg">
              <CiMail className="w-full h-full" />
            </span>
            <span>satyamcodes@gmail.com</span>
          </button>
        </div>
        <div className=" flex flex-col  md:flex-row gap-2  md:justify-between mx-3 md:items-center mt-4 pb-10">
          <div className="flex gap-2">
            <span className="mt-2 text">
              <CiLocationOn className="w-full h-full"></CiLocationOn>
            </span>
            <div className="flex-col flex">
              <span>Based in New Delhi, India </span>
              <span className="text-sm text-gray-500">
                open to remote work{" "}
              </span>
            </div>
          </div>
          <div className="flex gap-2">
            <span className="mt-2 text">
              <FaMicrochip className="w-full h-full"></FaMicrochip>
            </span>
            <div className="flex-col flex">
              <span>AI Systems + frontend </span>
              <span className="text-sm text-gray-500">
                RAG, agents, benchmarks{" "}
              </span>
            </div>
          </div>
          <div className="flex gap-2">
            <span className="mt-2 text">
              <FaCheck className="w-full h-full"></FaCheck>
            </span>
            <div className="flex-col flex">
              <span>Currently Available</span>
              <span className="text-sm text-gray-500">
                Starting Mid-September{" "}
              </span>
            </div>
          </div>
        </div>
      </motion.div>
      <div className="relative z-10 flex flex-col   w-full md:w-[40%] ">
        <motion.div
          initial={{
            x: 200,
            opacity: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            duration: 0.5,
          }}
          className="relative w-full"
        >
          <img src={photo} alt="" className="rounded-xl ml-3  h-60 md:h-100 mt-20 " />
          
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
