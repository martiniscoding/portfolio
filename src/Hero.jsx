import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { FaCheck } from "react-icons/fa6";
import { FaMicrochip } from "react-icons/fa6";
import photo from "../public/photo.png";
import { GoDotFill } from "react-icons/go";
import { motion } from "motion/react";

function Hero() {
  return (
    <section className=" flex flex-col md:flex-row relative overflow-hidden text-white mt-15   justify-center md:justify-between w-full pb-5 px-4 border-b">
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
        className="relative z-10 w-[60%]"
      >
        <div className="flex flex-col gap-1 font-light  text-9xl text-purple-500 drop-shadow-[0_0_10px_#a855f7]">
          <span>Sakshi</span>
          <span>Kanwar</span>
        </div>
        <div className="text-3xl pt-5">
          AI Engineer & Frontend - shipping agentic systems, RAG pipelines, and
          developer UX. I blend product intuition with systems engineering to
          build fast, reliable LLM apps.
        </div>
        <div className="pt-4 flex gap-5 border-b pb-10">
          <button className="bg-white rounded-4xl px-4 py-2 flex gap-1 text-black items-center">
            <span className="size-4">
              <FaArrowRight className="w-full h-full size-2 text-neutral-700" />
            </span>
            <span>View Work</span>
          </button>
          <button className="bg-white/50 rounded-4xl px-4 py-2 flex gap-1 text-black">
            <span className="text-lg">
              <CiMail className="w-full h-full" />
            </span>
            <span>hello@sakshikanwar.dev</span>
          </button>
        </div>
        <div className="flex justify-between mx-3 items-center mt-4 pb-10">
          <div className="flex gap-2">
            <span className="mt-2 text">
              <CiLocationOn className="w-full h-full"></CiLocationOn>
            </span>
            <div className="flex-col flex">
              <span>Based in New Delhi</span>
              <span className="text-sm text-gray-500">open to remote work </span>
            </div>
          </div>
          <div className="flex gap-2">
            <span className="mt-2 text">
              <FaMicrochip className="w-full h-full"></FaMicrochip>
            </span>
            <div className="flex-col flex">
              <span>AI Systems + frontend </span>
              <span className="text-sm text-gray-500">RAG, agents, benchmarks </span>
            </div>
          </div>
          <div className="flex gap-2">
            <span className="mt-2 text">
              <FaCheck className="w-full h-full"></FaCheck>
            </span>
            <div className="flex-col flex">
              <span>Currently Available</span>
              <span className="text-sm text-gray-500">Starting Mid-September </span>
            </div>
          </div>
        </div>
      </motion.div>
      <div className="relative z-10 flex flex-col justify-center w-[35%]">
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
          <img src={photo} alt="" className="rounded-xl" />
          <div className="flex w-full absolute bottom-2 gap-2 px-3">
            <div className="w-1/3 rounded-xl bg-neutral-800 border border-white/15 p-3 shadow-lg">
              <div className=" flex items-center gap-1">
                <GoDotFill className="text-gray-500"></GoDotFill>
                <p className="text-lg font-semibold">82%</p>
              </div>
              <p className="text-[11px] ">pass@1 eval</p>
            </div>
            <div className="w-1/3 rounded-xl bg-neutral-800 border border-white/15 p-3 shadow-lg">
              <div className="flex items-center gap-1">
                <GoDotFill className="text-gray-500"></GoDotFill>
                <p className="text-lg font-semibold">780ms</p>
              </div>
              <p className="text-[11px] ">p95 latency</p>
            </div>
            <div className="w-1/3 rounded-xl bg-neutral-800 border border-white/15 p-3 shadow-lg">
              <div className="flex items-center gap-1">
                <GoDotFill className="text-gray-500"></GoDotFill>
                <p className="text-lg font-semibold">1.2k</p>
              </div>
              <p className="text-[11px] ">tests</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
