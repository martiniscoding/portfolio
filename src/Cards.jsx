import React from "react";
import { GoNorthStar } from "react-icons/go";
import { motion } from "framer-motion";
import { useScroll } from "./ScrollContext";
import freelancer from "../public/freelancer.jpg";
import jeesoc from "../public/jeesoc.png";
import ingest from "../public/inngest.png"
import { 
  SiReact, SiNextdotjs, SiTailwindcss, SiReactquery, SiFramer, SiRedux, SiShadcnui,
  SiExpress, SiNestjs, SiTrpc, SiMongodb, SiPostgresql, SiRedis, SiSocketdotio, SiWebrtc, 
  SiPrisma, SiDrizzle, SiStripe, SiDocker, SiAmazons3, SiAwslambda, SiKubernetes, 
  SiNginx, SiGithubactions, SiGit, SiGithub, SiOpenai, SiLangchain, SiAmazonwebservices
} from "react-icons/si";
import { FaTerminal } from "react-icons/fa";

function Cards() {
  const { workRef } = useScroll();

  const SkillBadge = ({ icon: Icon, text, color }) => (
    <span className="flex items-center gap-2 px-3 py-1 text-xs font-bold rounded-md bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
      {Icon && <Icon className="text-sm" style={{ color: color || "inherit" }} />}
      {text}
    </span>
  );

  return (
    <div ref={workRef} className="flex flex-col w-full justify-between gap-1 px-4 py-10 border-t border-b border-neutral-600 text-white">
      
      <div className="bg-white/5 border-white/10 border rounded-2xl px-3 py-4">
        <p className="font-bold text-xl mb-4">Work Experience</p>
        <div className="flex flex-col gap-6 relative ml-2">
          <motion.div 
            initial={{ scaleY: 0 }} 
            whileInView={{ scaleY: 1 }} 
            className="absolute w-[3px] h-20 bg-gradient-to-b from-blue-500 via-purple-500 to-red-500 left-[14px] top-2 bottom-2 origin-top"
          />
          
          <div className="flex justify-between items-start z-10">
            <div className="flex gap-4">
              <img src={freelancer} className="size-7 rounded-full border-2 border-black" alt="Freelance" />
              <div>
                <p className="font-bold">Freelancer</p>
                <p className="text-sm text-neutral-400">Delivered 3+ products</p>
              </div>
            </div>
            <div className="text-xs text-neutral-500 mt-1">Oct 2025 - Now</div>
          </div>

          <div className="flex justify-between items-start z-10 ">
            <div className="flex gap-4">
              <img src={jeesoc} className=" size-7 rounded-full border-2 border-black" alt="Jee Society" />
              <div>
                <p className="font-bold">Jee Society</p>
                <p className="text-sm text-neutral-400">CMO (took startup from 0 - 10k $ revenue)</p>
              </div>
            </div>
            <div className="text-xs text-neutral-500 mt-1">Sep 2024 - Feb 2025</div>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 0.5 }}
        className="bg-white/5 border-white/10 border rounded-2xl p-6 w-full mt-4"
      >
        <div className="flex items-center gap-2 font-bold text-xl mb-6">
          <GoNorthStar className="text-blue-400" />
          <span>Skills & Technologies</span>
        </div>

        <div className="space-y-6">
          
          <div>
            <p className="text-sm font-bold text-neutral-500 uppercase tracking-widest mb-3">Frontend</p>
            <div className="flex flex-wrap gap-2">
              <SkillBadge icon={SiReact} text="React JS" color="#61DAFB" />
              <SkillBadge icon={SiNextdotjs} text="Next JS" color="#FFFFFF" />
              <SkillBadge icon={SiTailwindcss} text="Tailwind CSS" color="#06B6D4" />
              <SkillBadge icon={SiReactquery} text="Tanstack Query" color="#FF4154" />
              <SkillBadge icon={SiFramer} text="Framer Motion" color="#0055FF" />
              <SkillBadge icon={SiRedux} text="Redux" color="#764ABC" />
              <SkillBadge icon={SiShadcnui} text="Shadcn" color="#FFFFFF" />
            </div>
          </div>

          <div>
            <p className="text-sm font-bold text-neutral-500 uppercase tracking-widest mb-3">Backend</p>
            <div className="flex flex-wrap gap-2">
              <SkillBadge icon={SiExpress} text="Express JS" color="#FFFFFF" />
              <SkillBadge icon={SiNestjs} text="Nest JS" color="#E0234E" />
              <SkillBadge icon={SiTrpc} text="tRPC" color="#2596BE" />
              <SkillBadge icon={SiMongodb} text="Mongo DB" color="#47A248" />
              <SkillBadge icon={SiPostgresql} text="Postgres" color="#4169E1" />
              <SkillBadge icon={SiRedis} text="Redis" color="#DC382D" />
              <SkillBadge icon={SiSocketdotio} text="Web-Sockets" color="#FFFFFF" />
              <SkillBadge icon={SiWebrtc} text="Web-RTC" color="#333333" />
              <SkillBadge icon={SiPrisma} text="Prisma" color="#2D3748" />
              <SkillBadge icon={SiDrizzle} text="Drizzle" color="#C5F74F" />
              <SkillBadge icon={SiStripe} text="Stripe" color="#008CDD" />
            </div>
          </div>

          <div>
            <p className="text-sm font-bold text-neutral-500 uppercase tracking-widest mb-3">Devops</p>
            <div className="flex flex-wrap gap-2">
              <SkillBadge icon={SiDocker} text="Docker" color="#2496ED" />
              <SkillBadge icon={SiAmazonwebservices} text="EC2" color="#FF9900" />
              <SkillBadge icon={SiAmazons3} text="S3" color="#569A31" />
              <SkillBadge icon={SiAwslambda} text="Lambda" color="#FD6600" />
              <SkillBadge icon={SiNginx} text="Nginx" color="#009639" />
              <SkillBadge icon={SiGithubactions} text="Github Actions" color="#2088FF" />
              <SkillBadge  text="CloudFront" color="#FF9900" />
              <SkillBadge icon={SiGit} text="Git" color="#F05032" />
              <SkillBadge icon={SiGithub} text="Github" color="#FFFFFF" />
            </div>
          </div>

          <div>
            <p className="text-sm font-bold text-neutral-500 uppercase tracking-widest mb-3">Gen-Agentic AI</p>
            <div className="flex flex-wrap gap-2">
              <SkillBadge icon={SiLangchain} text="Langchain" color="#1C3C3C" />
              <SkillBadge icon={SiOpenai} text="RAG" color="#412991" />
              <SkillBadge icon={FaTerminal} text="MCP" color="#60a5fa" />
              <span className="flex items-center gap-2 px-3 py-1 text-xs font-bold rounded-md bg-white/5 border border-white/10 hover:bg-white/10 transition-colors ">
                <img src={ingest}  className="size-5 rounded-full" alt="" />
                <span>Inngest</span>
              </span>
              <SkillBadge icon={SiOpenai} text="Open AI" color="#10a37f" />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Cards;