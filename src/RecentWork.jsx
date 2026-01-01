import React from "react";
import work from "../public/work.jpg";
import erasepdf from "../public/erasepdf.png";
import fingo from "../public/fingo.png";
import property from "../public/property.png";
import aiconsole from "../public/aiconsole.png";
import { RiRobot2Line } from "react-icons/ri";
import { motion } from "motion/react";
import { useScroll } from "./ScrollContext";

function RecentWork() {
  const { aboutRef, projectsRef, workRef } = useScroll();

  return (
    <div className=" w-full text-white py-10 px-3" ref={projectsRef}>
      <div className="text-4xl mb-4 font-light">Projects </div>

      <div className="flex flex-col items-center md:flex-row md:flex-wrap  justify-center gap-10  w-full ">
        <motion.div
          initial={{ x: -200 }}
          animate={{ x: 0 }}
          viewport={{ once: true, amount: 0.9 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col border border-white rounded-2xl  w-full sm:w-[80%] md:w-[48%] p-2"
        >
          <div className="h-[60%] overflow-hidden ">
            <img
              src={fingo}
              alt=""
              className="h-50 w-full rounded-t-2xl hover:scale-105 duration-500 transition-transform"
            />
          </div>
          <div className="h-[40%] mx-2 mt-3 flex flex-col">
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <RiRobot2Line />
              <span>FULL-STACK</span>
            </div>
            <span className="font-bold">FINGO</span>
            <span>
              Full-stack E-Commerce app with smooth animations, real-time
              ordering, auth, cart, payments, and scalable backend — fast,
              modern, production-ready
            </span>
            <div className=" flex justify-between w-full mt-2 ">
              <button className="bg-white px-2 py-1 rounded-xl text-black font-light">
                Know More
              </button>
              <button
                onClick={() => {
                  window.open("https://www.codekouture.com/demo/gawade-galore");
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
                JWT
              </span>
              <span className="text-sm font-medium px-2 h-6 bg-white  text-black  rounded-lg ">
                Zod
              </span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ x: 200 }}
          animate={{ x: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col border p-2 border-white rounded-2xl w-full sm:w-[80%] md:w-[48%]"
        >
          <div className="h-[60%] overflow-hidden">
            <img
              src={aiconsole}
              alt=""
              className="h-50 w-full rounded-t-2xl hover:scale-105 duration-500 transition-transform"
            />
          </div>
          <div className="h-[40%] mx-2 mt-3 flex flex-col">
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <RiRobot2Line />
              <span>FULL STACK + Gen AI</span>
            </div>
            <span className="font-bold">AI Search Console</span>
            <span>
              Developed a GPT-powered conversational search system integrating
              vector search, NLU, and image understanding to convert user
              queries into precise backend inventory actions.
            </span>
            <div className=" flex justify-between w-full mt-2 ">
              <button className="bg-white px-2 py-1 rounded-xl text-black font-light">
                Know More
              </button>
              <button
                onClick={() => {
                  window.open(
                    "https://www.codekouture.com/demo/standarde-app/"
                  );
                }}
                className="bg-white px-2 py-1 rounded-xl text-black font-light"
              >
                Live Preview
              </button>
            </div>
          </div>
        </motion.div>

    
      </div>
    </div>
  );
}

export default RecentWork;
