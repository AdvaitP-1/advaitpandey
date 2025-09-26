'use client'
import React from "react";
import { twMerge } from "tailwind-merge";
import { MotionConfig, motion } from "framer-motion";
import { ArrowRight, Section } from "lucide-react";
import Nav from "../components/navbar";
import Silk from "../components/background";

export default function projects() {
  return (
    <>  <div className="relative z-50">
          <Nav/>
        </div>
        <div className="fixed inset-0 z-0">
          <Silk
            speed={5}
            scale={1.2}
            color="#7B7481"
            noiseIntensity={3.8}
            rotation={0}
          />
        </div>
      
        <div className="relative z-10">
          <section className="relative text-center text-white py-12 px-4">
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-96 h-96 border border-white/10 rounded-full"></div>
                <div className="absolute w-64 h-64 border border-white/5 rounded-full"></div>
              </div>
              
              <div className="relative z-10">
                <h1 className="text-[120px] md:text-[160px] font-black uppercase tracking-tighter leading-none mb-8">
                  <span className="bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">
                    Projects
                  </span>
                </h1>
                
                <div className="max-w-4xl mx-auto">
                  <p className="text-xl md:text-2xl font-light leading-relaxed text-white/90 mb-6">
                    A curated collection of my most impactful software engineering projects
                  </p>
                  <div className="flex items-center justify-center gap-4 text-sm font-mono text-white/60 mb-8">
                    <span>• Full-Stack Development</span>
                    <span>• Database Systems</span>
                    <span>• Open Source</span>
                    <span>• Enterprise Tools</span>
                  </div>
                  
                  <div className="flex justify-center">
                    <a 
                      href="https://github.com/AdvaitP-1" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white hover:bg-white/20 transition-all duration-300 font-mono text-sm tracking-wider"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
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
        </div>
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
};