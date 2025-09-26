'use client'
import React from "react";
import { twMerge } from "tailwind-merge";
import { MotionConfig, motion } from "framer-motion";
import { ArrowRight, Section } from "lucide-react";
import Nav from "../components/navbar";
import Silk from "../components/projectbackground";

export default function projects() {
  return (
    <>  
        <Nav/>
        <section className=" text-center text-white">
            <h1 className="text-[140px] font-medium uppercase">
                Projects
            </h1>
            <p1 className="mx-auto text-[20px] font-medium">
                This is where my most influential, pivitol projects go which made made a big impact on my journey as an Software Engineer 
            </p1>
        </section>
        <section className="m-auto py-10">
            <div className="mx-auto grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-2">
                <Card
                    title="Obelisk DB"
                    subtitle="A custom database management system with file handling, ACID transactions, and sql-like usage"
                    className="bg-white"
                    href="https://github.com/AdvaitP-1/obelisk"
                />
                <Card
                    title="Moodle Tracer"
                    subtitle="Open source tool to help NC State students build custom applications for their classes"
                    className="bg-white"
                    href="https://github.com/AdvaitP-1/moodletracer"
                />
                <Card
                    title="Music Bot"
                    subtitle="Listen to music on Discord without restrictions or paywalls"
                    className="bg-white"
                    href="https://github.com/AdvaitP-1/musicbot"
                />
                <Card
                    title="Spectrum Project Deployment Tool"
                    subtitle="My internship project demo: a support tool to access lower level testing environments"
                    className="bg-white"
                    href="https://github.com/AdvaitP-1/spectrum_os_management_tool"
                />
            </div>
        </section> 

    </>
  );
};

const Card = ({ title, subtitle, className, href }) => {
  return (
    <MotionConfig transition={{ type: "spring", bounce: 0.5 }}>
      <motion.div
        whileHover="hovered"
        className={twMerge(
          "group w-full border-[2px] border-black bg-emerald-300 text-black",
          className
        )}
      >
        <motion.div
          initial={{ x: 0, y: 0 }}
          variants={{ hovered: { x: -8, y: -8 } }}
          className={twMerge("!-m-[2px] border-[2px] border-black bg-emerald-300", className)}
        >
          <motion.div
            initial={{ x: 0, y: 0 }}
            variants={{ hovered: { x: -8, y: -8 } }}
            className={twMerge(
              "relative !-m-[2px] flex h-72 flex-col justify-between overflow-hidden border-[2px] border-black bg-emerald-300 p-8",
              className
            )}
          >
            <p className="flex items-center text-2xl font-medium uppercase">
              <ArrowRight className="-ml-8 mr-2 opacity-0 transition-all duration-300 ease-in-out group-hover:ml-0 group-hover:opacity-100" />
              {title}
            </p>

            <div>
              <p className="transition-[margin] duration-300 ease-in-out group-hover:mb-10">
                {subtitle}
              </p>

              {href && (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-2 left-2 right-2 translate-y-[120%] border-[2px] border-black bg-white px-4 py-2 text-center text-black opacity-0 transition-all duration-300 ease-in-out group-hover:translate-y-0 group-hover:opacity-100"
                >
                  LET&apos;S GO
                </a>
              )}
            </div>

            <motion.svg
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, repeatType: "loop", ease: "linear" }}
              style={{ top: 0, right: 0, x: "50%", y: "-50%", scale: 0.75 }}
              width="200"
              height="200"
              className="pointer-events-none absolute z-10 rounded-full"
            >
              <path
                id="circlePath"
                d="M100,100 m-100,0 a100,100 0 1,0 200,0 a100,100 0 1,0 -200,0"
                fill="none"
              />
              <text>
                <textPath
                  href="#circlePath"
                  className="fill-black text-2xl font-black uppercase opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"
                >
                  LEARN MORE • LEARN MORE • LEARN MORE • LEARN MORE •
                </textPath>
              </text>
            </motion.svg>
          </motion.div>
        </motion.div>
      </motion.div>
    </MotionConfig>
  )
}
