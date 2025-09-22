"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export function Homehero() {
  return (
    <div className="bg-white">
      <TextParallaxContent subheading="Software Engineer" heading="Advait Pandey" isHero={true}>
        <HeroContent />
      </TextParallaxContent>
      <TextParallaxContent imgUrl="/aboutbg.jpg" subheading="About" heading="Get to know me">
        <AboutContent />
      </TextParallaxContent>
    </div>
  )
}

const IMG_PADDING = 12

const TextParallaxContent = ({ imgUrl, subheading, heading, children, isHero = false }) => {
  return (
    <div
      style={{
        paddingLeft: IMG_PADDING,
        paddingRight: IMG_PADDING,
      }}
    >
      <div className="relative h-[150vh]">
        <StickyImage imgUrl={imgUrl} isHero={isHero} />
        <OverlayCopy heading={heading} subheading={subheading} isHero={isHero} />
      </div>
      {children}
    </div>
  )
}

const StickyImage = ({ imgUrl, isHero }) => {
  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  })

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])

  if (isHero) {
    return (
      <motion.div
        style={{
          height: `calc(100vh - ${IMG_PADDING * 2}px)`,
          top: IMG_PADDING,
          scale,
        }}
        ref={targetRef}
        className="sticky z-0 overflow-hidden rounded-3xl bg-white"
      >
        <motion.div
          className="absolute inset-0 bg-white"
          style={{
            opacity,
          }}
        />
      </motion.div>
    )
  }

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
      }}
      ref={targetRef}
      className="sticky z-0 overflow-hidden rounded-3xl"
    >
      <motion.div
        className="absolute inset-0 bg-neutral-950/70"
        style={{
          opacity,
        }}
      />
    </motion.div>
  )
}

const OverlayCopy = ({ subheading, heading, isHero }) => {
  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [250, -250])
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0])

  return (
    <motion.div
      style={{
        y,
        opacity,
      }}
      ref={targetRef}
      className={`absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center ${
        isHero ? "text-black" : "text-white"
      }`}
    >
      <p className="mb-2 text-center text-xl md:mb-4 md:text-3xl font-medium">{subheading}</p>
      <p className="text-center text-6xl font-bold md:text-8xl text-balance">{heading}</p>
    </motion.div>
  )
}

const HeroContent = () => (
  <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12 bg-gradient-to-b from-gray-50 to-white">
    <div className="col-span-1 md:col-span-12 text-center"></div>
  </div>
)

const AboutContent = () => (
  <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
    <div className="col-span-1 md:col-span-4 flex justify-center md:justify-start">
      <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white shadow-2xl">
        <img src="/profile.jpg" alt="Advait Pandey" className="w-full h-full object-cover" />
      </div>
    </div>
    <div className="col-span-1 md:col-span-8">
      <p className="mb-6 text-xl text-gray-600 md:text-2xl leading-relaxed">
        I'm a computer engineer at NC State 
      </p>
      <p className="mb-6 text-xl text-gray-600 md:text-2xl leading-relaxed">
        When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing
        knowledge with the developer community.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="text-center p-6 bg-white rounded-lg shadow-sm border">
          <h3 className="font-bold text-2xl text-gray-900 mb-2">Frontend</h3>
          <p className="text-gray-600">React, Angular, TypeScript</p>
        </div>
        <div className="text-center p-6 bg-white rounded-lg shadow-sm border">
          <h3 className="font-bold text-2xl text-gray-900 mb-2">Backend</h3>
          <p className="text-gray-600">Java, Go, C#, Node.js, Python, SQl, PostgreSQL</p>
        </div>
        <div className="text-center p-6 bg-white rounded-lg shadow-sm border">
          <h3 className="font-bold text-2xl text-gray-900 mb-2">Tools</h3>
          <p className="text-gray-600">Git, Docker, AWS, </p>
        </div>
      </div>
      <p className="text-center text-lg text-gray-600 font-medium">Check the hamburger for more</p>
    </div>
  </div>
)
