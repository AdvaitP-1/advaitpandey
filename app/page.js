'use client';

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Nav from "./components/navbar";
import { HomeHero } from "./components/homeparallax";
import NeuFollowButton from "./components/button"; // 👈 your resume button
import { Github, Linkedin } from "lucide-react"; // 👈 new icons

export default function Home() {
  const heroRef = useRef(null);
  const restRef = useRef(null);

  const heroInView = useInView(heroRef, { amount: 0.35, margin: "0px 0px -50% 0px" });
  const restInView = useInView(restRef, { amount: 0.2 });

  const hideNav = heroInView && !restInView;

  return (
    <>
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: hideNav ? -120 : 0 }} 
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="fixed right-4 top-4 z-50"
      >
        <Nav />
      </motion.div>

      <div ref={heroRef}>
        <HomeHero />
      </div>

      <section
        ref={restRef}
        className="bg-black text-white"
      >
        <div className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-12 px-6 py-24 md:grid-cols-[240px,1fr]">
          <div className="flex justify-center md:justify-start">
            <img
              src="/profile.jpg"  
              alt="Advait Pandey profile photo"
              className="h-48 w-48 rounded-full object-cover ring-2 ring-white/20 shadow-xl md:h-60 md:w-60"
            />
          </div>

          <div className="space-y-5">
            <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl">
              About me
            </h2>

            <p className="max-w-prose text-xl leading-relaxed text-white/90 md:text-2xl">
              I’m a Computer Engineering student at NC State who’s been coding since middle school.
              I love building real products end-to-end—from clean, reactive frontends to efficient,
              reliable backends and distributed systems. In my free time I read and watch comics and
              I like to draw; I’m big on design, craft, and shipping things people actually use.
            </p>

            <p className="max-w-prose text-lg leading-relaxed text-white/80 md:text-xl">
              Comfortable with <span className="font-semibold text-white">Java, JavaScript, and C#</span> for backend;
              <span className="font-semibold text-white"> React and TypeScript</span> for frontend; and
              <span className="font-semibold text-white"> SQL</span> for databases.
              Currently exploring <span className="font-semibold text-white">Go</span> and
              <span className="font-semibold text-white"> infrastructure development</span>.
            </p>

  
            <NeuFollowButton />


            <div className="flex items-center gap-2 pt-2 text-xs text-white/60 md:text-sm">
              <span>learn more from the hamburger</span>
              <svg
                className="h-4 w-4 -mt-0.5"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path d="M6 6h12v12" stroke="currentColor" strokeWidth="2" />
                <path d="M6 18L18 6" stroke="currentColor" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
