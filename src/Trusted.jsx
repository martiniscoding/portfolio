import React from "react";
import { motion } from "framer-motion"; // motion/react nahi, ye sahi import hai

function Trusted() {
  return (
    <div className="py-10 border-t border-white">
      <div className="w-full pt-5 pb-15 flex flex-col items-center mt-10 text-white gap-5 mb-4 bg-neutral-950 border-white/10 border rounded-3xl">
        <div className="text-3xl">Trusted by product teams</div>
        <div>From seed-stage startups to enterprise platform groups.</div>

        {/* Parent container with overflow-hidden */}
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
            {/* Original text */}
            <span className="mx-10">TechFlow</span>
            <span className="mx-10">Nexus Labs</span>
            <span className="mx-10">DataSync</span>
            <span className="mx-10">VisionCorp</span>
            <span className="mx-10">CloudBase</span>
            <span className="mx-10">InnovateTech</span>
            <span className="mx-10">FlowState</span>

            {/* Duplicate for seamless loop */}
            <span className="mx-10">TechFlow</span>
            <span className="mx-10">Nexus Labs</span>
            <span className="mx-10">DataSync</span>
            <span className="mx-10">VisionCorp</span>
            <span className="mx-10">CloudBase</span>
            <span className="mx-10">InnovateTech</span>
            <span className="mx-10">FlowState</span>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Trusted;
