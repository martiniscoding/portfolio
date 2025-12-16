import React from "react";
import { GoNorthStar } from "react-icons/go";
import { motion } from "motion/react";
import { useScroll } from "./ScrollContext";
import freelancer from "../public/freelancer.jpg";
function Cards() {
  const { aboutRef, projectsRef, workRef } = useScroll();

  return (
    <div
      ref={workRef}
      className="flex flex-col   w-full md:flex-col  justify-between gap-1 px-4 py-10 border-t border-b border-neutral-600  text-white"
    >
      <div className="bg-white/5 border-white/10 border rounded-2xl  px-3 py-3">
        <p className="font-bold  text-xl">Work Experience </p>
        <div className="flex flex-col gap-3 justify-center mt-2 relative">
          <motion.div
            initial={{
              scaleY: 0,
              transformOrigin: "bottom",
            }}
            whileInView={{ scaleY: 1  }}
            
            className="absolute h-36 bg-linear-to-t from-red-500 via-green-500 via-blue-500 to-purple-500 left-4 "
          >
            .
          </motion.div>
          <div className="flex justify-between">
            <div className="flex gap-2">
              <img
                src={freelancer}
                className="size-9 rounded-full z-110 mt-1"
                alt=""
              />
              <div className="flex flex-col ">
                <p className="font-bold">Freelancer</p>
                <p className="font-light">Delievered 3+ products </p>
              </div>
            </div>
            <div className="font-light">Oct 2025-Now</div>
          </div>
          <div className="flex justify-between">
            <div className="flex gap-2">
              <img
                src={freelancer}
                className="size-9 rounded-full  z-110  mt-1"
                alt=""
              />
              <div className="flex flex-col ">
                <p className="font-bold">Freelancer</p>
                <p className="font-light">Delievered 3+ products </p>
              </div>
            </div>
            <div className="font-light">Oct 2025-Now</div>
          </div>
          <div className="flex justify-between">
            <div className="flex gap-2">
              <img
                src={freelancer}
                className="size-9 rounded-full  z-110  mt-1"
                alt=""
              />
              <div className="flex flex-col ">
                <p className="font-bold">Freelancer</p>
                <p className="font-light">Delievered 3+ products </p>
              </div>
            </div>
            <div className="font-light">Oct 2025-Now</div>
          </div>
        </div>
      </div>

      <motion.div
        initial={{
          y: 200,
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        viewport={{
          once: false,
          amount: 0.1,
        }}
        transition={{
          duration: 0.4,
        }}
        className="bg-white/5 border-white/10 border rounded-2xl pt-4 pr-4 pb-4 pl-4 w-full md:w-full mt-4"
      >
        <div className="flex items-center gap-1 font-bold text-xl">
          <span>
            <GoNorthStar></GoNorthStar>
          </span>
          <span>Skills</span>
        </div>
        <div className="mt-3">
          <span className="font-bold">Frontend</span>
          <div className="flex flex-wrap mt-2 gap-3 font-bold">
            <span className=" 1/5 sm:w-fit    text-center px-2 py-1 text-xs rounded-md bg-white/10 border border-white/10">
              React JS
            </span>
            <span className=" 1/5 sm:w-fit    text-center px-2  py-1 text-xs rounded-md bg-white/10 border border-white/10">
              Next JS
            </span>
            <span className=" 1/6 sm:w-fit px-2 text-center py-1 text-xs rounded-md bg-white/10 border border-white/10">
              Tailwind CSS
            </span>

            <span className=" 1/5 sm:w-fit   px-2 py-1  text-xs rounded-md bg-white/10 border border-white/10">
              Framer Motion
            </span>
            <span className=" 1/5 sm:w-fit   px-2 py-1  text-xs rounded-md bg-white/10 border border-white/10">
              Redux
            </span>
            <span className="w-1/4 sm:w-fit    px-2 py-1 text-xs rounded-md bg-white/10 border border-white/10">
              Shadcn
            </span>
          </div>
        </div>
        <div className="mt-2">
          <span className="font-bold  ">Backend</span>
          <div className="flex flex-wrap mt-2 gap-3 font-bold ">
            <span className=" 1/4 sm:w-fit px-2 text-center   py-1 text-xs rounded-md bg-white/10 border border-white/10">
              Express JS
            </span>
            <span className=" 1/2 sm:w-fit px-2    text-center py-1 text-xs rounded-md bg-white/10 border border-white/10">
              Nest JS
            </span>
            <span className=" 1/7 sm:w-fit px-2     text-center py-1 text-xs rounded-md bg-white/10 border border-white/10">
              Mongo DB
            </span>
            <span className="  1/5 sm:w-fit px-2     text-center py-1 text-xs rounded-md bg-white/10 border border-white/10">
              Postgress
            </span>
            <span className=" 1/6 sm:w-fit px-2  text-center    py-1 text-xs rounded-md bg-white/10 border border-white/10">
              Redis
            </span>
            <span className=" 1/6 sm:w-fit px-2  text-center     py-1 text-xs rounded-md bg-white/10 border border-white/10">
              Web-Sockets
            </span>
             <span className=" 1/6 sm:w-fit  text-center  px-1   py-1 text-xs rounded-md bg-white/10 border border-white/10">
              Redis
            </span>
            <span className=" 1/6 sm:w-fit px-2  text-center     py-1 text-xs rounded-md bg-white/10 border border-white/10">
              Web-RTC
            </span>
            <span className=" 1/6 sm:w-fit px-2  text-center    py-1 text-xs rounded-md bg-white/10 border border-white/10">
              Prisma
            </span>
             <span className=" 1/6 sm:w-fit px-2  text-center    py-1 text-xs rounded-md bg-white/10 border border-white/10">
              Drizzle
            </span>
            <span className=" 1/6 sm:w-fit px-2  text-center    py-1 text-xs rounded-md bg-white/10 border border-white/10">
              Stripe
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-3 mt-2">
          <div className="">
            <span className="font-bold  ">Devops</span>
            <div className="flex flex-wrap mt-2 gap-3 font-bold ">
              <span className="  w-/8 sm:w-fit px-2 text-center py-1 text-xs rounded-md bg-white/10 border border-white/10">
                Docker
              </span>
              <span className=" w-1/7 sm:w-fit text-center    px-2 py-1 text-xs rounded-md bg-white/10 border border-white/10">
                EC2
              </span>
              <span className=" w-1/7 sm:w-fit text-center    px-2 py-1 text-xs rounded-md bg-white/10 border border-white/10">
                S3
              </span>
              <span className=" w-1/7 sm:w-fit text-center    px-2 py-1 text-xs rounded-md bg-white/10 border border-white/10">
                Lambda
              </span>

              <span className="   w-1/5 sm:w-fit px-2 text-center py-1 text-xs rounded-md bg-white/10 border border-white/10">
                Kubernetes
              </span>

              <span className="  px-2 sm:w-1fit text-center  py-1 text-xs rounded-md bg-white/10 border border-white/10">
                Ngnix
              </span>

              <span className=" w-1/4  sm:w-fit  text-center px-2 py-1 text-xs rounded-md bg-white/10 border border-white/10">
                Github-Actions
              </span>

              <span className=" w-1/4  sm:w-fit px-2 py-1 text-xs rounded-md bg-white/10 border border-white/10">
                CI CD
              </span>

              <span className=" w-1/4 sm:w-fit px-2   text-center py-1 text-xs rounded-md bg-white/10 border border-white/10">
                CloudFront
              </span>
              <span className="w-1/4 sm:w-fit px-2     text-center  py-1 text-xs rounded-md bg-white/10 border border-white/10">
                Git/Github
              </span>
            </div>
          </div>
          <div className="">
            <span className="font-bold  ">Gen-Agentic AI</span>
            <div className="flex flex-wrap gap-3 font-bold mt-2">
              <span className=" w-fit sm:w-fit text-center    px-2 py-1 text-xs rounded-md bg-white/10 border border-white/10">
                Langchain
              </span>
              <span className=" w-fit sm:w-fit px-2    text-center py-1 text-xs rounded-md bg-white/10 border border-white/10">
                Langgraph
              </span>
              <span className=" w-fit sm:w-fit px-2    text-center  py-1 text-xs rounded-md bg-white/10 border border-white/10">
                RAG
              </span>
              <span className=" w-fit sm:w-fit    px-2 py-1 text-xs rounded-md bg-white/10 border border-white/10">
                MCP
              </span>
              <span className=" w-fit sm:w-fit    px-2 py-1 text-xs rounded-md bg-white/10 border border-white/10">
                Open Ai
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Cards;
