import React from "react";
import work from "../public/work.jpg";
import { RiRobot2Line } from "react-icons/ri";
import { motion } from "motion/react";
function RecentWork() {
  return (
    <div className="w-full  text-white py-10">
      <div className="text-3xl mb-4">Recent Work</div>
      <div className="grid grid-cols-3 gap-4 w-full">
        <motion.div 
        initial={{
            x:-200
        }}
        whileInView={{
            x:0
        }}
        viewport={{
            once:false,
            amount:0.1
        }}
        transition={{
            duration:0.5
        }}
        className="flex flex-col border border-white rounded-2xl col-span-1">
          <div className="h-[60%] overflow-hidden">
            <img src={work} alt="" className=" h-full w-full rounded-t-2xl hover:scale-105 duration-500 transition-transform" />
          </div>
          <div className="h-[40%]  mx-2 mt-3 flex flex-col">
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <RiRobot2Line></RiRobot2Line>
              <span>RAG Platform</span>
            </div>
            <span className="font-bold">Vector-backed Retrieval</span>
            <span>
              Hybrid search, chunking, schema-aware re-ranking, observability.
            </span>
          </div>
        </motion.div>
        <motion.div 
        initial={{
            y:200
        }}
        animate={{
            y:0
        }}
       
         transition={{
            duration:0.3
        }}
        className="flex flex-col border border-white rounded-2xl col-span-1">
          <div className="h-[60%] overflow-hidden">
            <img src={work} alt="" className=" h-full w-full rounded-t-2xl hover:scale-105 duration-500 transition-transform" />
          </div>
          <div className="h-[40%]  mx-2 mt-3 flex flex-col">
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <RiRobot2Line></RiRobot2Line>
              <span>RAG Platform</span>
            </div>
            <span className="font-bold">Vector-backed Retrieval</span>
            <span>
              Hybrid search, chunking, schema-aware re-ranking, observability.
            </span>
          </div>
        </motion.div>
        <motion.div
            initial={{
            x:200
        }}
        whileInView={{
            x:0
        }}
        viewport={{
            once:false,
            amount:0.1
        }}
        transition={{
            duration:0.5
        }}
         className="flex flex-col border border-white rounded-2xl col-span-1">
          <div className="h-[60%] overflow-hidden">
            <img src={work} alt="" className=" h-full w-full rounded-t-2xl hover:scale-105 duration-500 transition-transform" />
          </div>
          <div className="h-[40%]  mx-2 mt-3 flex flex-col">
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <RiRobot2Line></RiRobot2Line>
              <span>RAG Platform</span>
            </div>
            <span className="font-bold">Vector-backed Retrieval</span>
            <span>
              Hybrid search, chunking, schema-aware re-ranking, observability.
            </span>
          </div>
        </motion.div>
        <motion.div 
        initial={{
            x:-200
        }}
        whileInView={{
            x:0
        }}
        viewport={{
            once:false,
            amount:0.1
        }}
        
        className="flex flex-col border border-white rounded-2xl col-span-1">
          <div className="h-[60%] overflow-hidden">
            <img src={work} alt="" className=" h-full w-full rounded-t-2xl hover:scale-105 duration-500 transition-transform" />
          </div>
          <div className="h-[40%]  mx-2 mt-3 flex flex-col">
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <RiRobot2Line></RiRobot2Line>
              <span>RAG Platform</span>
            </div>
            <span className="font-bold">Vector-backed Retrieval</span>
            <span>
              Hybrid search, chunking, schema-aware re-ranking, observability.
            </span>
          </div>
        </motion.div>
        <div className="flex flex-col border border-white rounded-2xl col-span-1">
          <div className="h-[60%] overflow-hidden">
            <img src={work} alt="" className=" h-full w-full rounded-t-2xl hover:scale-105 duration-500 transition-transform" />
          </div>
          <div className="h-[40%]  mx-2 mt-3 flex flex-col">
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <RiRobot2Line></RiRobot2Line>
              <span>RAG Platform</span>
            </div>
            <span className="font-bold">Vector-backed Retrieval</span>
            <span>
              Hybrid search, chunking, schema-aware re-ranking, observability.
            </span>
          </div>
        </div>
        <motion.div
        initial={{
            x:200
        }}
        whileInView={{
            x:0
        }}
        viewport={{
            once:false,
            amount:0.1
        }}
        transition={{
            duration:0.3
        }}
         className="flex flex-col border border-white rounded-2xl col-span-1">
          <div className="h-[60%] overflow-hidden">
            <img src={work} alt="" className=" h-full w-full rounded-t-2xl hover:scale-105 duration-500 transition-transform" />
          </div>
          <div className="h-[40%]  mx-2 mt-3 flex flex-col">
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <RiRobot2Line></RiRobot2Line>
              <span>RAG Platform</span>
            </div>
            <span className="font-bold">Vector-backed Retrieval</span>
            <span>
              Hybrid search, chunking, schema-aware re-ranking, observability.
            </span>
          </div>
        </motion.div>
       

      </div>
    </div>
  );
}

export default RecentWork;
