import React from "react";
import { GoNorthStar } from "react-icons/go";
import { motion } from "framer-motion";
import { useScroll } from "./ScrollContext";
import jeesoc from "../public/jeesoc.png";
import mithub from "../public/mit-logo-voilet.png";
import ingest from "../public/inngest.png"
import orvinex from "../public/orvinex-mark.png";
import { 
  SiReact, SiNextdotjs, SiTailwindcss, SiReactquery, SiFramer, SiRedux, SiShadcnui,
  SiExpress, SiNestjs, SiTrpc, SiMongodb, SiPostgresql, SiRedis, SiSocketdotio, SiWebrtc, 
  SiPrisma, SiDrizzle, SiStripe, SiDocker, SiAmazons3, SiAwslambda, SiKubernetes, 
  SiNginx, SiGithubactions, SiGit, SiGithub, SiOpenai, SiLangchain, SiAmazonwebservices,SiOllama ,SiHuggingface
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

  const experiences = [
    {
      logo: orvinex,
      role: "Full Stack Developer",
      company: "Orvinex Studios · Full-time",
      date: "Jun 2026 - Present",
      duration: "2 mos",
      location: "Remote",
      desc: "Building and shipping full-stack web applications end to end.",
    },
    {
      logo: jeesoc,
      role: "Chief Marketing Officer",
      company: "JEEsociety · Full-time",
      date: "Feb 2026 - Present",
      duration: "6 mos",
      location: "Remote",
      desc: "Scaling business operations and building systems that make the user experience better.",
    },
    {
      logo: mithub,
      logoClass: "object-contain p-1",
      role: "Backend Developer",
      company: "MIT Hub · Internship",
      date: "Nov 2025 - Feb 2026",
      duration: "4 mos",
      location: "Remote",
      desc: "Built a cloud-native full-stack SaaS platform calendia.io (beta) for Mark Visentin (renowned NHL player) using Express.js, FastAPI, MongoDB, React, Better-Auth, Stripe & Cloudflare infrastructure.",
    },
    {
      logo: jeesoc,
      role: "Chief Marketing Officer",
      company: "JEEsociety · Full-time",
      date: "Aug 2024 - Apr 2025",
      duration: "9 mos",
      location: "Mumbai, India · Remote",
      desc: "Took the ed-tech B2C startup from ₹0 to ₹15 lakhs in revenue.",
    },
  ];

  return (
    <div ref={workRef} className="flex flex-col w-full justify-between gap-1 px-4 py-10 border-t border-b border-neutral-600 text-white">
      
      <div className="bg-white/5 border-white/10 border rounded-2xl p-6">
        <p className="font-bold text-xl mb-6">Work Experience</p>
        <div className="relative flex flex-col gap-7">
          {/* timeline line */}
          <div className="absolute left-[18px] top-3 bottom-6 w-px bg-linear-to-b from-white/40 via-white/20 to-transparent" />

          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="relative z-10 flex gap-4"
            >
              {exp.logo ? (
                <img
                  src={exp.logo}
                  alt={exp.company}
                  className={`size-9 shrink-0 rounded-full border border-white/20 bg-neutral-900 ${exp.logoClass || "object-cover"}`}
                />
              ) : (
                <div className="size-9 shrink-0 flex items-center justify-center rounded-full text-[11px] font-bold text-white border border-white/20 bg-linear-to-br from-blue-500 to-indigo-600">
                  {exp.initials}
                </div>
              )}

              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-0.5 sm:gap-3">
                  <div>
                    <p className="font-bold leading-tight">{exp.role}</p>
                    <p className="text-sm text-neutral-300">{exp.company}</p>
                  </div>
                  <div className="text-xs text-neutral-500 shrink-0 sm:text-right sm:whitespace-nowrap">
                    <p>{exp.date} · {exp.duration}</p>
                    <p>{exp.location}</p>
                  </div>
                </div>
                <p className="text-sm text-neutral-400 mt-2">{exp.desc}</p>
              </div>
            </motion.div>
          ))}
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
              <SkillBadge icon={SiTrpc} text="tRPC" color="#2596BE" />
              <SkillBadge icon={SiMongodb} text="Mongo DB" color="#47A248" />
              <SkillBadge icon={SiPostgresql} text="Postgres" color="#4169E1" />
              <SkillBadge icon={SiRedis} text="Redis" color="#DC382D" />
              <SkillBadge text="BullMQ" color="#E11D48" />
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
              <SkillBadge  text="Langgraph" color="#412991" />
              <SkillBadge icon={SiOpenai} text="RAG" color="#412991" />

              <SkillBadge icon={FaTerminal} text="MCP" color="#60a5fa" />
              <span className="flex items-center gap-2 px-3 py-1 text-xs font-bold rounded-md bg-white/5 border border-white/10 hover:bg-white/10 transition-colors ">
                <img src={ingest}  className="size-5 rounded-full" alt="" />
                <span>Inngest</span>
              </span>
              <SkillBadge icon={SiOllama} text="Ollama" color="#FFFFFF" /> 
              <SkillBadge icon={SiHuggingface} text="Hugging Face" color="#F3FF24" />

            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Cards;