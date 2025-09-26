'use client';

import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

export function HomeHero() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });

  const scale = useTransform(scrollYProgress, [0, 0.65, 0.8, 1], [1, 1, 0.9, 1.25]);
  const rotate = useTransform(scrollYProgress, [0, 0.25, 1], ["0deg", "0deg", "60deg"]);
  const top = useTransform(scrollYProgress, [0, 0.25], ["80%", "0%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.125], [1, 0]);
  const logoScale = useTransform(scrollYProgress, [0, 0.8, 1], [0, 0, 1]);

  return (
    <div ref={targetRef} className="relative z-0 h-[800vh] bg-neutral-200">
      <div className="sticky top-0 h-screen bg-white">
        <Copy opacity={opacity} />
        <Trippy rotate={rotate} top={top} scale={scale} />
        <OverlayLogo scale={logoScale} />
      </div>
    </div>
  );
}

const NUM_SECTIONS = 25;
const PADDING = `${100 / NUM_SECTIONS / 2}vmin`;

const generateSections = (count, color, scale, rotate) => {
  if (count === NUM_SECTIONS) return <></>;
  const nextColor = color === "black" ? "white" : "black";
  return (
    <Section rotate={rotate} scale={scale} background={color}>
      {generateSections(count + 1, nextColor, scale, rotate)}
    </Section>
  );
};

const Trippy = ({ rotate, scale, top }) => {
  return (
    <motion.div style={{ top }} className="absolute bottom-0 left-0 right-0 overflow-hidden bg-black">
      {generateSections(0, "black", scale, rotate)}
    </motion.div>
  );
};

const Section = ({ background, scale, children, rotate }) => {
  return (
    <motion.div
      className="relative h-full w-full origin-center"
      style={{ background, scale, rotate, padding: PADDING }}
    >
      {children}
    </motion.div>
  );
};

const Copy = ({ opacity }) => {
  return (
    <motion.div
      style={{ opacity }}
      className="relative flex h-4/5 flex-col items-center justify-center gap-6 overflow-hidden bg-white p-4 pt-[calc(56px_+_16px)] text-black"
    >
      <h1 className="text-center text-[120px] md:text-[150px] font-black leading-none">
        Advait Pandey
      </h1>
      <p className="text-center text-[40px] md:text-[56px] font-semibold">
        Software Engineer
      </p>
    </motion.div>
  );
};



const OverlayLogo = ({ scale }) => {
  return (
    <motion.div
      style={{ scale }}
      className="pointer-events-none absolute inset-0 z-[5] grid place-content-center"
    >
      <img
        src="/logo2.jpg"
        alt="Logo"
        className="h-45 w-auto"
      />
    </motion.div>
  );
};

