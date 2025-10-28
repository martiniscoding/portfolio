import React from "react";
import { GoNorthStar } from "react-icons/go";
import { motion } from "motion/react";
import { useScroll } from "./ScrollContext";
function Cards() {
    const {aboutRef, projectsRef, workRef } = useScroll();

  return (
    <div ref={workRef} className="flex flex-col   w-full md:flex-row  justify-between gap-1 px-4 py-10 border-t border-b border-neutral-600  text-white">
      <motion.div
      initial={{
        y:200,
        opacity:0
      }}
      whileInView={{
        y:0,
        opacity:1
      }}
      viewport={{
         once: false, amount: 0.1
      }}
      transition={{
        duration:0.4
      }}
       className="bg-white/5 border-white/10 border rounded-2xl pt-4 pr-4 pb-4 pl-4 w-full  md:w-1/3">
        <div className="text-xl font-bold">Timeline</div>
        <div className="gap-2 text-sm relative mt-3 flex flex-col border-l border-gray-500 pl-3  ">
          <div className=" border-gray-500 flex flex-col">
            <span className="size-2 bg-white rounded-full absolute -left-1 top-1"></span>
            <span className="text-gray-300 font-semibold">2025</span>
            <span className="font-bold">Independent — AI Engineer</span>
            <span>
              Building production AI systems, RAG pipelines, and agentic
              workflows for startups and enterprise teams.
            </span>
          </div>
          <div className=" border-gray-500 flex flex-col">
            <span className="size-2 bg-white rounded-full absolute -left-1 top-23"></span>
            <span className="text-gray-300 font-semibold">2025</span>
            <span className="font-bold">Independent — AI Engineer</span>
            <span>
              Building production AI systems, RAG pipelines, and agentic
              workflows for startups and enterprise teams.
            </span>
          </div>
          <div className=" border-gray-500 flex flex-col">
            <span className="size-2 bg-white rounded-full absolute -left-1 top-45"></span>
            <span className="text-gray-300 font-semibold">2025</span>
            <span className="font-bold">Independent — AI Engineer</span>
            <span>
              Building production AI systems, RAG pipelines, and agentic
              workflows for startups and enterprise teams.
            </span>
          </div>
        </div>
      </motion.div>
      <motion.div
      initial={{
        y:200,
        opacity:0
      }}
      whileInView={{
        y:0,
        opacity:1
      }}
      viewport={{
         once: false, amount: 0.1
      }}
      transition={{
        duration:0.4
      }} className="bg-white/5 border-white/10 border rounded-2xl pt-4 pr-4 pb-4 pl-4 w-full md:w-1/3  ">
          <div className="flex items-center gap-1 font-bold text-xl">
            <span><GoNorthStar></GoNorthStar></span>
            <span>Tech Stack</span>
          </div>
          <div className="flex flex-col gap-3 mt-2">
            <div className="">
            <span className="font-bold  ">Frontend & UI</span>
            <div className="flex flex-wrap mt-2 gap-2 ">
              <span className=" w-1/4 px-2 py-1 text-xs rounded-md bg-white/10 border border-white/10">TypeScript</span>
              <span className=" w-1/4 px-2 py-1 text-xs rounded-md bg-white/10 border border-white/10">TypeScript</span>
              <span className=" w-1/4 px-2 py-1 text-xs rounded-md bg-white/10 border border-white/10">TypeScript</span>
              <span className=" w-1/4 px-2 py-1 text-xs rounded-md bg-white/10 border border-white/10">TypeScript</span>
              <span className=" w-1/4 px-2 py-1 text-xs rounded-md bg-white/10 border border-white/10">TypeScript</span>
              <span className=" w-1/4 px-2 py-1 text-xs rounded-md bg-white/10 border border-white/10">TypeScript</span>
             
            </div>
          </div>
          <div className="">
            <span  className="font-bold  ">Backend & AI</span>
            <div className="flex flex-wrap mt-2 gap-2">
              <span className=" w-1/4 px-2 py-1 text-xs rounded-md bg-white/10 border border-white/10">TypeScript</span>
              <span className=" w-1/4 px-2 py-1 text-xs rounded-md bg-white/10 border border-white/10">TypeScript</span>
              <span className=" w-1/4 px-2 py-1 text-xs rounded-md bg-white/10 border border-white/10">TypeScript</span>
              <span className=" w-1/4 px-2 py-1 text-xs rounded-md bg-white/10 border border-white/10">TypeScript</span>
              <span className=" w-1/4 px-2 py-1 text-xs rounded-md bg-white/10 border border-white/10">TypeScript</span>
              <span className=" w-1/4 px-2 py-1 text-xs rounded-md bg-white/10 border border-white/10">TypeScript</span>
            </div>
          </div>
          </div>
      </motion.div>
      <motion.div
      initial={{
        y:200,
        opacity:0
      }}
      whileInView={{
        y:0,
        opacity:1
      }}
      viewport={{
         once: false, amount: 0.1
      }}
      transition={{
        duration:0.4
      }} className="bg-white/5 border-white/10 border rounded-2xl pt-4 pr-4 pb-4 pl-4 w-full md:w-1/3 ">
        <div className="text-xl font-bold">Timeline</div>
        <div className="gap-2 text-sm relative mt-3 flex flex-col border-l border-gray-500 pl-3  ">
          <div className=" border-gray-500 flex flex-col">
            <span className="size-2 bg-white rounded-full absolute -left-1 top-1"></span>
            <span className="text-gray-300 font-semibold">2025</span>
            <span className="font-bold">Independent — AI Engineer</span>
            <span>
              Building production AI systems, RAG pipelines, and agentic
              workflows for startups and enterprise teams.
            </span>
          </div>
          <div className=" border-gray-500 flex flex-col">
            <span className="size-2 bg-white rounded-full absolute -left-1 top-23"></span>
            <span className="text-gray-300 font-semibold">2025</span>
            <span className="font-bold">Independent — AI Engineer</span>
            <span>
              Building production AI systems, RAG pipelines, and agentic
              workflows for startups and enterprise teams.
            </span>
          </div>
          <div className=" border-gray-500 flex flex-col">
            <span className="size-2 bg-white rounded-full absolute -left-1 top-45"></span>
            <span className="text-gray-300 font-semibold">2025</span>
            <span className="font-bold">Independent — AI Engineer</span>
            <span>
              Building production AI systems, RAG pipelines, and agentic
              workflows for startups and enterprise teams.
            </span>
          </div>
        </div>
      </motion.div>
      
    </div>
  );
}

export default Cards;
