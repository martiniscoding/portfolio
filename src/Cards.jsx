import React from "react";
import { GoNorthStar } from "react-icons/go";
import { motion } from "motion/react";
import { useScroll } from "./ScrollContext";
import alpine from "../public/alpine.jpg";
import vois from "../public/vois.jpg";
import camp from "../public/camp.jpg";
import barc from "../public/barc.jpg";
function Cards() {
  const { aboutRef, projectsRef, workRef } = useScroll();

  return (
    <div
      ref={workRef}
      className="flex flex-col   w-full md:flex-row  justify-between gap-1 px-4 py-10 border-t border-b border-neutral-600  text-white"
    >
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
        className="bg-white/5  border-white/10 border rounded-2xl pt-4 pr-4 pb-4 pl-4 w-full  md:w-1/3  min-h-104 md:min-h-96 h-auto md:h-105"
      >
        <div className="flex items-center gap-1 font-bold text-xl">
          <span>
            <GoNorthStar></GoNorthStar>
          </span>
          <span>Timeline</span>
        </div>

        <div className="gap-2 text-sm relative mt-3 flex flex-col  pl-3  ">
          <div className=" border-gray-500 flex flex-col relative  ">
            <motion.div
              whileInView={{
                scaleY: 1.01,
              }}
              initial={{
                scaleY: 0,
                transformOrigin: "bottom",
              }}
              transition={{
                duration: 2,
              }}
              className="
    h-85 mt-2 z-2 absolute -left-4 size-1
    bg-linear-to-b from-[#ff00ff] via-[#00eaff] via-[#ffea00] to-[#00ff6a]
    animate-glowBar
    
  "
            ></motion.div>
            <div className="relative ">
              <span className="text-gray-300 font-semibold">2025</span>
              <motion.img
                initial={{
                  opacity: 0,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1.2,
                }}
                transition={{
                  delay: 2,
                }}
                src={alpine}
                className="size-4 bg-white rounded-full absolute -left-5 top-1 z-4"
              ></motion.img>
            </div>
            <span className="font-bold">Alpine Building Maintainance </span>
            <span className="">Customer Service Addministrator</span>
          </div>
          <div className=" border-gray-500 flex flex-col ">
            <div className="relative ">
              <span className="text-gray-300 font-semibold">2022-2025</span>
              <motion.img
                initial={{
                  opacity: 0,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1.2,
                }}
                transition={{
                  delay: 1.5,
                }}
                src={barc}
                className="size-4 bg-white rounded-full absolute -left-5 top-1 z-4"
              ></motion.img>
            </div>
            <span className="font-bold">Barclays-Software Developer </span>
            <span className="">
              Led end-to-end product development of automated business solutions
            </span>
          </div>
          <div className=" border-gray-500 flex flex-col ">
            <div className="relative ">
              <span className="text-gray-300 font-semibold">2021-2022</span>
              <motion.img
                initial={{
                  opacity: 0,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1.2,
                }}
                transition={{
                  delay: 1,
                }}
                src={vois}
                className="size-4 bg-white rounded-full absolute -left-5 top-1 z-4"
              ></motion.img>
            </div>
            <span className="font-bold">VOIS- Graduate Engineer</span>
            <span className="">
              Collaborated with senior product managers on an AI-powered
              customer service platform using Python Flask/Djangobackend and
              ReactJS frontend.
            </span>
          </div>
          <div className=" border-gray-500 flex flex-col ">
            <div className="relative ">
              <span className="text-gray-300 font-semibold">2020</span>
              <motion.img
                initial={{
                  opacity: 0,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1.2,
                }}
                transition={{
                  delay: 0.5,
                }}
                src={camp}
                className="size-4 bg-white rounded-full absolute -left-5 top-1 z-4"
              ></motion.img>
            </div>
            <span className="font-bold">Instructor -K12 Camp</span>
            <span className="">
              Delivered AI and coding curriculum tailored to students’ academic,
              intellectual, and social need.
            </span>
          </div>
        </div>
      </motion.div>
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
        className="bg-white/5 border-white/10 border rounded-2xl pt-4 pr-4 pb-4 pl-4 w-full md:w-1/3  "
      >
        <div className="flex items-center gap-1 font-bold text-xl">
          <span>
            <GoNorthStar></GoNorthStar>
          </span>
          <span>Tech Stack</span>
        </div>

        <div className="mt-2">
          <span className="font-bold  ">Languages</span>
          <div className="flex flex-wrap mt-2 gap-2">
            <span className=" w-1/7 text-center truncate px-1 py-1 text-xs rounded-md bg-white/10 border border-white/10">
              Python
            </span>
            <span className=" w-1/6 truncate text-center py-1 text-xs rounded-md bg-white/10 border border-white/10">
              Javascript
            </span>
            <span className=" w-1/6 truncate  text-center  py-1 text-xs rounded-md bg-white/10 border border-white/10">
              Typescript
            </span>
            <span className=" w-1/6 truncate px-1 py-1 text-xs rounded-md bg-white/10 border border-white/10">
              React JS
            </span>
            <span className=" w-1/5 truncate px-1 py-1 text-xs rounded-md bg-white/10 border border-white/10">
              HTML/CSS
            </span>
          </div>
        </div>
        <div className="mt-2">
          <span className="font-bold  ">Databases</span>
          <div className="flex flex-wrap mt-2 gap-2">
            <span className=" w-1/5 text-center truncate  py-1 text-xs rounded-md bg-white/10 border border-white/10">
              MongoDB
            </span>
            <span className=" w-1/5 truncate text-center py-1 text-xs rounded-md bg-white/10 border border-white/10">
              DynamoDB
            </span>
            <span className=" w-1/8 truncate  text-center  py-1 text-xs rounded-md bg-white/10 border border-white/10">
              Redis
            </span>
            <span className=" w-1/6 truncate  text-center py-1 text-xs rounded-md bg-white/10 border border-white/10">
              Postgress
            </span>
            <span className=" w-1/7 text-center truncate  py-1 text-xs rounded-md bg-white/10 border border-white/10">
              My-SQL
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-3 mt-2">
          <div className="">
            <span className="font-bold  ">Machine Learning</span>
            <div className="flex flex-wrap mt-2 gap-1 ">
              <span className="truncate w-1/9 text-center py-1 text-xs rounded-md bg-white/10 border border-white/10">
                LLM
              </span>
              <span className="truncate w-1/9  text-center py-1 text-xs rounded-md bg-white/10 border border-white/10">
                BERT
              </span>

              <span className="truncate w-1/7 text-center py-1 text-xs rounded-md bg-white/10 border border-white/10">
                OpenCV
              </span>

              <span className="truncate w-1/9  text-center  py-1 text-xs rounded-md bg-white/10 border border-white/10">
                RAG
              </span>

              <span className="truncate w-1/5  text-center px-1 py-1 text-xs rounded-md bg-white/10 border border-white/10">
                LangChain
              </span>

              <span className="truncate w-1/5 px-1 py-1 text-xs rounded-md bg-white/10 border border-white/10">
                LangGraph
              </span>
            </div>
          </div>
          <div className="">
            <span className="font-bold  ">Devops</span>
            <div className="flex flex-wrap mt-2 gap-2">
              <span className=" w-1/8 text-center truncate px-1 py-1 text-xs rounded-md bg-white/10 border border-white/10">
                AWS
              </span>
              <span className=" w-1/5 truncate text-center py-1 text-xs rounded-md bg-white/10 border border-white/10">
                MS Azure
              </span>
              <span className=" w-1/5 truncate  text-center  py-1 text-xs rounded-md bg-white/10 border border-white/10">
                Git/Github
              </span>
              <span className=" w-1/7 truncate px-1 py-1 text-xs rounded-md bg-white/10 border border-white/10">
                Docker
              </span>
            </div>
          </div>
          <div className="">
            <span className="font-bold  ">Automation</span>
            <div className="flex flex-wrap gap-2">
              <span className=" w-1/9 text-center truncate px-1 py-1 text-xs rounded-md bg-white/10 border border-white/10">
                n8N
              </span>
              <span className=" w-1/7 truncate text-center py-1 text-xs rounded-md bg-white/10 border border-white/10">
                Zapier
              </span>
              <span className=" w-1/5 truncate  text-center  py-1 text-xs rounded-md bg-white/10 border border-white/10">
                Blue Prism
              </span>
              <span className=" w-1/7 truncate px-1 py-1 text-xs rounded-md bg-white/10 border border-white/10">
                UI Path
              </span>
              <span className=" w-1/7 truncate px-1 py-1 text-xs rounded-md bg-white/10 border border-white/10">
                Notion
              </span>
            </div>
          </div>
        </div>
      </motion.div>
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
        className="bg-white/5 border-white/10 border rounded-2xl pt-4 pr-4 pb-4 pl-4 w-full md:w-1/3 "
      >
        <div className="flex items-center gap-1 font-bold text-xl">
          <span>
            <GoNorthStar></GoNorthStar>
          </span>
          <span>Leadership + Content Creation</span>
        </div>
        <div className="mt-3 font-bold">
          <span>1. Cultural Secretary and Business Lead</span>
          <br />
          <span className="font-light">Rivera - University Festival</span>
          <div className="text-sm font-normal mt-1">
            Drove high-impact campus fest, led 50+ team, secured $1M sponsors,
            managed $700K, launched revenue innovations delivering 200% ROI and
            attendance.
          </div>
        </div>
        <div className="mt-5 ">
          <span className="font-bold ">2. Digital Content Creator</span>
          <br />
          <span className="font-light">Camy's Pizza </span>
          <div>
            Led content strategy for Camy’s Pizza, creating high-impact visuals and reels (280K+ views) that boosted brand visibility, engagement, and online growth.
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Cards;
