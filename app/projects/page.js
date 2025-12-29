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
          <section className="relative text-center text-white py-8 px-4 sm:py-12">
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-64 h-64 border border-white/10 rounded-full sm:w-96 sm:h-96"></div>
                <div className="absolute w-48 h-48 border border-white/5 rounded-full sm:w-64 sm:h-64"></div>
              </div>
              
              <div className="relative z-10">
                <h1 className="text-[60px] sm:text-[80px] md:text-[120px] lg:text-[160px] font-black uppercase tracking-tighter leading-none mb-6 sm:mb-8">
                  <span className="bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">
                    Projects
                  </span>
                </h1>
                
                <div className="max-w-4xl mx-auto">
                  <p className="text-lg sm:text-xl md:text-2xl font-light leading-relaxed text-white/90 mb-4 sm:mb-6">
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
        <section className="m-auto py-8 px-4 sm:py-10">
            <div className="mx-auto grid max-w-3xl grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2">
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
                <Card
                    title="JetPack"
                    subtitle="A lightweight container tool to turn your machine into a datacenter"
                    className="bg-white"
                    href="https://github.com/AdvaitP-1/JetPack"
                />
            </div>
        </section> 
        </div>
    </>
  );
};

const Card = ({ title, subtitle, className, href }) => {
  const CardContent = () => (
    <MotionConfig transition={{ type: "spring", bounce: 0.5 }}>
      <motion.div
        whileHover="hovered"
        className={twMerge(
          "group w-full border-[2px] border-black bg-emerald-300 text-black cursor-pointer",
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
              "relative !-m-[2px] flex h-64 flex-col justify-between overflow-hidden border-[2px] border-black bg-emerald-300 p-4 sm:h-72 sm:p-8",
              className
            )}
          >
            <p className="flex items-center text-lg font-medium uppercase sm:text-2xl">
              <ArrowRight className="-ml-4 mr-2 opacity-100 transition-all duration-300 ease-in-out group-hover:ml-0 sm:opacity-0 sm:group-hover:opacity-100 sm:-ml-8" />
              {title}
            </p>

            <div>
              <p className="mb-4 transition-[margin] duration-300 ease-in-out group-hover:mb-10 sm:mb-0">
                {subtitle}
              </p>

              {href && (
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(href, '_blank', 'noopener,noreferrer');
                  }}
                  className="block sm:absolute sm:bottom-2 sm:left-2 sm:right-2 sm:translate-y-[120%] border-[2px] border-black bg-white px-4 py-2 text-center text-black transition-all duration-300 ease-in-out sm:opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100 cursor-pointer"
                >
                  LET&apos;S GO
                </div>
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
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="block sm:contents"
      >
        <CardContent />
      </a>
    );
  }

  return <CardContent />;
};