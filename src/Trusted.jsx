import React from "react";
import { motion } from "framer-motion"; 
function Trusted() {
  return (
   
      <div className=" flex flex-col flex-wrap items-center  mt-10 text-white py-10 border-t  w-full pt-5 pb-15  gap-5 mb-4 bg-neutral-950 border-white/10 border rounded-3xl">
        <div className="  text-xl md:text-3xl font-semibold">Trusted by product teams</div>
        <div className="px-3 text-center">From seed-stage startups to enterprise platform groups.</div>

        <div className="w-full overflow-hidden">
          <motion.div
            className="flex whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <span className="mx-10">Barclays</span>
            <span className="mx-10">Vodafone</span>
            <span className="mx-10">Camp K12</span>
            <span className="mx-10">Alpine Media</span>
            <span className="mx-10">Camy's Pizza</span>
            <span className="mx-10">Barclays</span>
            <span className="mx-10">Vodafone</span>
            <span className="mx-10">Kamp 12</span>
            <span className="mx-10">Alpine Media</span>
            <span className="mx-10">Barclays</span>
            
          </motion.div>
        </div>
      </div>
  
  );
}

export default Trusted;
