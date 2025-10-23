import React from "react";
import work from "../public/work.jpg";
import { RiRobot2Line } from "react-icons/ri";
function RecentWork() {
  return (
    <div className="w-full  text-white py-10">
      <div className="text-3xl mb-4">Recent Work</div>
      <div className="grid grid-cols-3 gap-4 w-full">
        <div className="flex flex-col border border-white rounded-2xl col-span-1">
          <div className="h-[60%] overflow-hidden">
            <img src={work} alt="" className=" h-full w-full rounded-t-2xl hover:scale-105 duration-500 transition-transform" />
          </div>
          <div className="h-[40%]  mx-2 mt-3 flex flex-col">
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <RiRobot2Line></RiRobot2Line>
              <span>RAG Platform</span>
            </div>
            <span className="font-bold">Vector-backed Retrieval</span>
            <span>
              Hybrid search, chunking, schema-aware re-ranking, observability.
            </span>
          </div>
        </div>
        <div className="flex flex-col border border-white rounded-2xl col-span-1">
          <div className="h-[60%] overflow-hidden">
            <img src={work} alt="" className=" h-full w-full rounded-t-2xl hover:scale-105 duration-500 transition-transform" />
          </div>
          <div className="h-[40%]  mx-2 mt-3 flex flex-col">
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <RiRobot2Line></RiRobot2Line>
              <span>RAG Platform</span>
            </div>
            <span className="font-bold">Vector-backed Retrieval</span>
            <span>
              Hybrid search, chunking, schema-aware re-ranking, observability.
            </span>
          </div>
        </div>
        <div className="flex flex-col border border-white rounded-2xl col-span-1">
          <div className="h-[60%] overflow-hidden">
            <img src={work} alt="" className=" h-full w-full rounded-t-2xl hover:scale-105 duration-500 transition-transform" />
          </div>
          <div className="h-[40%]  mx-2 mt-3 flex flex-col">
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <RiRobot2Line></RiRobot2Line>
              <span>RAG Platform</span>
            </div>
            <span className="font-bold">Vector-backed Retrieval</span>
            <span>
              Hybrid search, chunking, schema-aware re-ranking, observability.
            </span>
          </div>
        </div>
        <div className="flex flex-col border border-white rounded-2xl col-span-1">
          <div className="h-[60%] overflow-hidden">
            <img src={work} alt="" className=" h-full w-full rounded-t-2xl hover:scale-105 duration-500 transition-transform" />
          </div>
          <div className="h-[40%]  mx-2 mt-3 flex flex-col">
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <RiRobot2Line></RiRobot2Line>
              <span>RAG Platform</span>
            </div>
            <span className="font-bold">Vector-backed Retrieval</span>
            <span>
              Hybrid search, chunking, schema-aware re-ranking, observability.
            </span>
          </div>
        </div>
        <div className="flex flex-col border border-white rounded-2xl col-span-1">
          <div className="h-[60%] overflow-hidden">
            <img src={work} alt="" className=" h-full w-full rounded-t-2xl hover:scale-105 duration-500 transition-transform" />
          </div>
          <div className="h-[40%]  mx-2 mt-3 flex flex-col">
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <RiRobot2Line></RiRobot2Line>
              <span>RAG Platform</span>
            </div>
            <span className="font-bold">Vector-backed Retrieval</span>
            <span>
              Hybrid search, chunking, schema-aware re-ranking, observability.
            </span>
          </div>
        </div>
        <div className="flex flex-col border border-white rounded-2xl col-span-1">
          <div className="h-[60%] overflow-hidden">
            <img src={work} alt="" className=" h-full w-full rounded-t-2xl hover:scale-105 duration-500 transition-transform" />
          </div>
          <div className="h-[40%]  mx-2 mt-3 flex flex-col">
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <RiRobot2Line></RiRobot2Line>
              <span>RAG Platform</span>
            </div>
            <span className="font-bold">Vector-backed Retrieval</span>
            <span>
              Hybrid search, chunking, schema-aware re-ranking, observability.
            </span>
          </div>
        </div>
       

      </div>
    </div>
  );
}

export default RecentWork;
