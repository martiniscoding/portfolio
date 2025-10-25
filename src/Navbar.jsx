import React from "react";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoTriangle } from "react-icons/io5";
function Navbar() {
  return (
    <div className=" flex justify-between items-center w-full text-white border-b border-white pb-4 pt-3">
      <div className="flex  gap-1">
        <span className="text-xl"><IoTriangle className="w-full h-full"/></span>
        <p>Sakshi Tanwar</p>
      </div>
      <div className="flex gap-5">
        <span>Work</span>
        <span>Stack</span>
        <span>About</span>
        <span>Contact</span>
      </div>
      <div className="bg-white/30 px-3 rounded-3xl flex py-1">
        <span className="text-xl"><MdOutlineFileDownload className="w-full h-full text-white "/></span>
        <span>Resume</span>
      </div>
    </div>
  );
}

export default Navbar;
