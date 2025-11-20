import React from "react";
import { CiMail, CiCalendar, CiTwitter, CiGlobe } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";
import { IoLogoLinkedin } from "react-icons/io";
import { motion } from "motion/react";
import { useScroll } from "./ScrollContext";

function Footer() {
  const { aboutRef } = useScroll();

  return (
    <div className="pt-10 px-4 sm:px-6 lg:px-8 overflow-y-hidden" ref={aboutRef}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="w-full relative rounded-3xl border border-white/10 bg-neutral-950 text-white p-6 sm:p-8 md:p-10"
      >
        <div>
          <div className="font-black text-4xl sm:text-6xl md:text-6xl text-center md:text-left leading-tight">
            Build Generational Product.
          </div>
        </div>

        <div className="flex flex-col justify-start md:flex-row md:justify-between mt-8 md:mt-10 gap-6 md:gap-0">
          <div className="flex flex-col items-center md:items-start">
            <div className="text-sm sm:text-base text-gray-300">Email</div>
            <div className="flex items-center gap-2 text-lg sm:text-xl mt-2">
              <CiMail className="size-5" />
              <p className="truncate">sakshi_kanwar@yahoo.com</p>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-start md:border-l md:border-white md:pl-5">
            <div className="text-sm sm:text-base text-gray-300">Schedule</div>
            <div className="bg-white px-4 py-2 rounded-3xl flex text-black items-center text-sm sm:text-base gap-1 mt-2 hover:scale-105 transition-transform cursor-pointer">
              <CiCalendar />
              <span>Book A Call</span>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-start md:border-l md:border-white md:pl-5">
            <div className="text-sm sm:text-base text-gray-300">Social</div>
            <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-3">
              <span className="bg-white rounded-full p-2 hover:scale-110 transition-transform">
                <CiTwitter className="text-black text-xl sm:text-2xl" />
              </span>
              <span className="bg-white rounded-full p-2 hover:scale-110 transition-transform">
                <FiGithub className="text-black text-xl sm:text-2xl" />
              </span>
              <span className="bg-white rounded-full p-2 hover:scale-110 transition-transform">
                <CiGlobe className="text-black text-xl sm:text-2xl" />
              </span>
              <span onClick={()=>{
                window.open(" http://linkedin.com/in/sakshi-kanwar")
              }} className="bg-white rounded-full p-2 hover:scale-110 transition-transform">
                <IoLogoLinkedin className="text-black text-xl sm:text-2xl" />
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Footer;
