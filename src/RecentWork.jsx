import React from "react";
import { RiRobot2Line } from "react-icons/ri";
import { FiUsers } from "react-icons/fi";
import { motion } from "motion/react";
import { useScroll } from "./ScrollContext";
import calendia from "../public/calendia.png";
import jeesoci from "../public/jeesoci.png";

function RecentWork() {
  const { aboutRef, projectsRef, workRef } = useScroll();

  const Tech = ({ children }) => (
    <span className="text-sm font-medium px-2 h-6 bg-white text-black rounded-lg">
      {children}
    </span>
  );

  return (
    <div className=" w-full text-white py-10 px-3" ref={projectsRef}>
      <div className="text-4xl mb-4 font-light">Projects </div>

      <div className="flex flex-col items-stretch md:flex-row md:flex-wrap  justify-center gap-10  w-full ">
        {/* ---------------- Calendia ---------------- */}
        <motion.div
          initial={{ x: -200 }}
          animate={{ x: 0 }}
          viewport={{ once: true, amount: 0.9 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col border border-white rounded-2xl  w-full sm:w-[80%] md:w-[48%] p-2"
        >
          <div className="relative h-52 overflow-hidden rounded-t-2xl">
            <img
              src={calendia}
              alt="Calendia SaaS booking platform"
              className="h-52 w-full object-cover hover:scale-105 duration-500 transition-transform"
            />
            <span className="absolute top-3 right-3 flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-full bg-violet-600/90 text-white backdrop-blur-sm shadow-lg shadow-violet-900/40">
              <span className="size-1.5 rounded-full bg-white animate-pulse" />
              LIVE · BETA
            </span>
          </div>
          <div className="flex-1 mx-2 mt-3 flex flex-col justify-between">
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <RiRobot2Line />
              <span>CLOUD-NATIVE SAAS</span>
            </div>
            <span className="font-bold">Calendia</span>
            <span>
              A cloud-native full-stack SaaS booking platform built during my
              first internship for NHL star Mark Visentin. Engineered a FastAPI
              email-analytics engine that tracks opens and open-counts, plus a
              Hono + Cloudflare Worker media service that validates files and
              streams uploads to R2 — all wired with Stripe payments and
              Better-Auth.
            </span>
            <div className=" flex justify-between w-full mt-2 ">
              <button className="bg-white px-2 py-1 rounded-xl text-black font-light">
                Know More
              </button>
              <button
                onClick={() => {
                  window.open("https://calendia.io/", "_blank", "noopener,noreferrer");
                }}
                className="bg-white px-2 py-1 rounded-xl text-black font-light"
              >
                Live Preview
              </button>
            </div>
            <div className="mt-4 flex  gap-3 max-w-xl  flex-wrap  ">
              <Tech>React</Tech>
              <Tech>Express</Tech>
              <Tech>FastAPI</Tech>
              <Tech>MongoDB</Tech>
              <Tech>Hono</Tech>
              <Tech>Better-Auth</Tech>
              <Tech>Stripe</Tech>
              <Tech>Cloudflare R2</Tech>
            </div>
          </div>
        </motion.div>

        {/* ---------------- JEEsociety Careers ---------------- */}
        <motion.div
          initial={{ x: 200 }}
          animate={{ x: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col border border-white rounded-2xl  w-full sm:w-[80%] md:w-[48%] p-2"
        >
          <div className="relative h-52 overflow-hidden rounded-t-2xl">
            <img
              src={jeesoci}
              alt="JEEsociety Careers portal"
              className="h-52 w-full object-cover hover:scale-105 duration-500 transition-transform"
            />
            <span className="absolute top-3 right-3 flex items-center gap-1.5 px-3 py-1 text-xs font-bold rounded-full bg-linear-to-r from-rose-600 to-red-700 text-white shadow-lg shadow-red-900/40">
              <FiUsers className="text-sm" />
              200+ Users
            </span>
          </div>
          <div className="flex-1 mx-2 mt-3 flex flex-col justify-between">
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <RiRobot2Line />
              <span>FULL STACK + DISTRIBUTED SYSTEMS</span>
            </div>
            <span className="font-bold">JEEsociety Careers</span>
            <span>
              A Google Careers–style hiring portal that lets HR receive, review
              and action applications while auto-sending "Applied", "Accepted" &
              "Rejected" emails. Powered by a distributed BullMQ + Redis queue
              and a dedicated Express worker on Railway, the notification system
              is engineered to scale to 1M+ requests.
            </span>
            <div className=" flex justify-between w-full mt-2 ">
              <button
                onClick={() => {
                  window.open("https://github.com/martiniscoding/carrerJEEsociety", "_blank", "noopener,noreferrer");
                }}
                className="bg-white px-2 py-1 rounded-xl text-black font-light"
              >
                Know More
              </button>
              <button
                onClick={() => {
                  window.open("https://career.jeesociety.in/", "_blank", "noopener,noreferrer");
                }}
                className="bg-white px-2 py-1 rounded-xl text-black font-light"
              >
                Live Preview
              </button>
            </div>
            <div className="mt-4 flex  gap-3 max-w-xl  flex-wrap  ">
              <Tech>Next JS</Tech>
              <Tech>BullMQ</Tech>
              <Tech>Redis</Tech>
              <Tech>Resend</Tech>
              <Tech>PostgreSQL</Tech>
              <Tech>Express</Tech>
              <Tech>Railway</Tech>
              <Tech>Vercel</Tech>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default RecentWork;
