import React from "react";
import { RiRobot2Line } from "react-icons/ri";
import { motion } from "motion/react";
import { useScroll } from "./ScrollContext";
import skettrio from "../public/skettrio.png";
import buildnow from "../public/buildnow.png";
function RecentWork() {
  const { aboutRef, projectsRef, workRef } = useScroll();

  return (
    <div className=" w-full text-white py-10 px-3" ref={projectsRef}>
      <div className="text-4xl mb-4 font-light">Projects </div>

      <div className="flex flex-col items-stretch md:flex-row md:flex-wrap  justify-center gap-10  w-full ">
        <motion.div
          initial={{ x: -200 }}
          animate={{ x: 0 }}
          viewport={{ once: true, amount: 0.9 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col border border-white rounded-2xl  w-full sm:w-[80%] md:w-[48%] p-2"
        >
          <div className="h-52 overflow-hidden">
            <img
              src={buildnow}
              alt=""
              className="h-50 w-full rounded-t-2xl hover:scale-105 duration-500 transition-transform"
            />
          </div>
          <div className="flex-1 mx-2 mt-3 flex flex-col justify-between">
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <RiRobot2Line />
              <span>FULL STACK + AI</span>
            </div>
            <span className="font-bold">BuildNow</span>
            <span>
              An AI-powered website builder that lets users describe their vision
              and generates a fully functional site instantly. Code runs inside
              Docker-based sandboxes for safe, isolated execution with real-time
              preview and LangGraph-orchestrated AI workflows.
            </span>
            <div className=" flex justify-between w-full mt-2 ">
              <button className="bg-white px-2 py-1 rounded-xl text-black font-light">
                Know More
              </button>
              <button
                onClick={() => {
                  window.open();
                }}
                className="bg-white px-2 py-1 rounded-xl text-black font-light"
              >
                Live Preview
              </button>
            </div>
            <div className="mt-4 flex  gap-3 max-w-xl  flex-wrap  ">
              <span className=" text-sm font-medium px-2 h-6 bg-white  text-black  rounded-lg ">
                React
              </span>
              <span className="text-sm font-medium px-2  h-6 bg-white  text-black  rounded-lg ">
                Node
              </span>
              <span className="text-sm font-medium px-2  h-6 bg-white  text-black  rounded-lg ">
                Prisma
              </span>
              <span className="text-sm font-medium px-2 h-6 bg-white  text-black  rounded-lg ">
                Postgres
              </span>
              <span className=" text-sm font-medium px-2 h-6 bg-white  text-black  rounded-lg ">
                Docker
              </span>
              <span className=" text-sm font-medium px-2 h-6 bg-white  text-black  rounded-lg ">
                Redis
              </span>
              <span className="text-sm font-medium px-2 h-6 bg-white  text-black  rounded-lg ">
                Bull MQ
              </span>
              <span className="text-sm font-medium px-2 h-6 bg-white  text-black  rounded-lg ">
                LangGraph
              </span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ x: 200 }}
          animate={{ x: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col border border-white rounded-2xl  w-full sm:w-[80%] md:w-[48%] p-2"
        >
          <div className="h-52 overflow-hidden">
            <img
              src={skettrio}
              alt=""
              className="h-50 w-full rounded-t-2xl hover:scale-105 duration-500 transition-transform"
            />
          </div>
          <div className="flex-1 mx-2 mt-3 flex flex-col justify-between">
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <RiRobot2Line />
              <span>FULL STACK</span>
            </div>
            <span className="font-bold">Skettrio</span>
            <span>
              A realtime whiteboard with video confrencing and chatting feature
              where user can send media . Users can organise meetings ,
              strategise plans , use whiteboard together .
            </span>
            <div className=" flex justify-between w-full mt-2 ">
              <button className="bg-white px-2 py-1 rounded-xl text-black font-light">
                Know More
              </button>
              <button
                onClick={() => {
                  window.open();
                }}
                className="bg-white px-2 py-1 rounded-xl text-black font-light"
              >
                Live Preview
              </button>
            </div>
            <div className="mt-4 flex  gap-3 max-w-xl  flex-wrap  ">
              <span className=" text-sm font-medium px-2 h-6 bg-white  text-black  rounded-lg ">
                React
              </span>
              <span className="text-sm font-medium px-2  h-6 bg-white  text-black  rounded-lg ">
                Express
              </span>
              <span className="text-sm font-medium px-2  h-6 bg-white  text-black  rounded-lg ">
                Mongo DB
              </span>
              <span className="text-sm font-medium px-2 h-6 bg-white  text-black  rounded-lg ">
                Redux Toolkit
              </span>
              <span className=" text-sm font-medium px-2 h-6 bg-white  text-black  rounded-lg ">
                CanvaJS
              </span>
              <span className="text-sm font-medium px-2 h-6 bg-white  text-black  rounded-lg ">
                Websockets
              </span>
              <span className="text-sm font-medium px-2 h-6 bg-white  text-black  rounded-lg ">
                WebRTC
              </span>
              <span className="text-sm font-medium px-2 h-6 bg-white  text-black  rounded-lg ">
                Github actions
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default RecentWork;
