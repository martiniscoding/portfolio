import React from "react";
import { CiMail } from "react-icons/ci";
import { CiCalendar } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { CiGlobe } from "react-icons/ci";
import { IoLogoLinkedin } from "react-icons/io";
import { motion } from "motion/react";
function Footer() {
  return (
   <div className="pt-10 ">
     <motion.div
     
      className="w-full relative  rounded-3xl border border-white/10 bg-neutral-950 text-white p-6 ">
      <div>
        <div className="font-black text-8xl">Build With AI.</div>
      </div>
      <div className="flex justify-between mt-5 mr-10">
        <div>
          <div>Email</div>
          <div className="flex gap- items-center gap-2 text-xl ">
            <CiMail className="size-5"></CiMail>
            <p>Hello@SakshiKanwar.com</p>
          </div>
        </div>
        <div className="pl-5 border-l  border-white ">
          <div>Schedule</div>
          <div className="bg-white px-4 py-2 rounded-3xl flex text-black items-center text-sm gap-1 ">
            <CiCalendar></CiCalendar>
            <span>Book A Call</span>
          </div>
        </div>
        <div className="pl-5 border-l border-white">
          <div>Social</div>
          <div className="flex gap-2 ">
            <span className="bg-white rounded-full p-2 "><CiTwitter className="w-full h-full text-black text-2xl"></CiTwitter></span>
             <span className="bg-white rounded-full p-2 "><FiGithub className="w-full h-full text-black text-2xl"></FiGithub></span>
              <span className="bg-white rounded-full p-2 "><CiGlobe className="w-full h-full text-black text-2xl"></CiGlobe></span>
               <span className="bg-white rounded-full p-2 "><IoLogoLinkedin className="w-full h-full text-black text-2xl"></IoLogoLinkedin></span>
          </div>
        </div>
      </div>
    </motion.div>
   </div>
  );
}

export default Footer;
