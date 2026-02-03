'use client'
import Nav from "../components/navbar"
import Silk from "../components/background"

export default function Experience(){
    return(
        <>
        <div className="relative z-50">
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
                    Experience
                  </span>
                </h1>
                
                <div className="max-w-4xl mx-auto">
                  <p className="text-lg sm:text-xl md:text-2xl font-light leading-relaxed text-white/90 mb-4 sm:mb-6">
                    My professional journey in software engineering through research, startups, and internships
                  </p>
                  
                  <div className="flex justify-center">
                    <a 
                      href="https://www.linkedin.com/in/advp/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white hover:bg-white/20 transition-all duration-300 font-mono text-sm tracking-wider"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
          </section>

          <section className="relative py-12 px-4 sm:py-20">
            <div className="max-w-6xl mx-auto">
              <div className="relative">
                <div className="absolute left-4 sm:left-1/2 transform sm:-translate-x-1/2 w-1 h-full bg-white"></div>

                <div className="space-y-8 sm:space-y-16">
                  <ExperienceCard
                    side="left"
                    company="Red Hat"
                    position="Software Engineer Intern - Openshift"
                    location="Raleigh, NC"
                    duration="Incoming Summer 2026"
                    achievements={[
                      "Backend-Development and Distributed Systems"
                    ]}
                  />

                  <ExperienceCard
                    side="right"
                    company="Spectrum"
                    position="Software Engineer Intern"
                    location="Charlotte, North Carolina, United States · On-site"
                    duration="May 2025 - Aug 2025"
                    achievements={[
                      "Built an internal developer/support tool to automate access provisioning for lower-level test environments using Java and SQL Server on a custom C++ infrastructure automation, shipped to production",
                      "Implemented and maintained REST APIs for call-center workflows used by 1,000+ internal users; improved reliability via input validation, error handling, and API contract consistency",
                      "Built a fault-tolerant service using Raft for consensus, enabling linearizable reads/writes with automatic failover and metrics/tracing"
                    ]}
                  />

                  <ExperienceCard
                    side="left"
                    company="InternOptima"
                    position="Software Engineer Intern"
                    location="Austin, TX"
                    duration="Sep 2024 - Dec 2024"
                    achievements={[
                      "Built secure REST APIs for job-board playlists and user data retrieval, deployed on AWS EC2 and Lambda",
                      "Developed a responsive React frontend with a Node.js + GraphQL backend, using MySQL for queries",
                      "Used CloudFormation Outputs and Exports to share core resources (VPC IDs, subnets, SGs) across stacks while maintaining clean boundaries"
                    ]}
                  />

                  <ExperienceCard
                    side="right"
                    company="North Carolina State University"
                    position="Undergraduate Research Assistant"
                    location="Raleigh, North Carolina, United States"
                    duration="Aug 2024 - Nov 2024"
                    achievements={[
                      "Built and optimized compiler passes to generate hardware-efficient code for datacenter workloads (SIMD/vectorization, loop tiling, cache-aware scheduling), improving end-to-end latency by 32.478% on representative benchmarks",
                      "Extended an LLVM/MLIR-based compilation pipeline with new IR transforms (fusion, common subexpression elimination, strength reduction) to reduce memory traffic and increase throughput by 15.821%",
                      "Implemented hardware-aware cost models (cache/NUMA, instruction throughput, memory bandwidth) to guide auto-tuning and scheduling decisions for CPU/GPU kernels"
                    ]}
                  />

                  <ExperienceCard
                    side="left"
                    company="Outlier"
                    position="AI Intern"
                    location="Remote"
                    duration="June 2024 - Aug 2024"
                    achievements={[
                      "Deployed 4 AI use-cases using AWS Bedrock and Tensorflow(Python) for business analytics",
                      "Improved UI usability by 10% through collaborative capstone development using client collaboration"
                    ]}
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
        </>
    )
};

const ExperienceCard = ({ side, company, position, location, duration, achievements }) => {
  return (
    <div className={`relative flex ${side === 'left' ? 'justify-start' : 'justify-end'} sm:${side === 'left' ? 'justify-start' : 'justify-end'}`}>
      <div className={`w-full sm:w-5/12 ${side === 'left' ? 'sm:pr-8' : 'sm:pl-8'} ${side === 'left' ? 'ml-8 sm:ml-0' : 'mr-8 sm:mr-0'}`}>
        <div className="bg-white/3 backdrop-blur-sm border-2 border-white rounded-2xl p-4 sm:p-6 shadow-[0_8px_16px_rgba(0,0,0,0.5)] hover:bg-white/6 hover:scale-105 hover:-translate-y-1 transition-all duration-300 ease-out">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 sm:mb-4">
            <h3 className="text-lg sm:text-xl font-bold text-white">{company}</h3>
            <span className="text-xs sm:text-sm font-mono text-white/60">{duration}</span>
          </div>
          <h4 className="text-base sm:text-lg font-semibold text-white/90 mb-2">{position}</h4>
          <p className="text-xs sm:text-sm font-mono text-white/70 mb-3 sm:mb-4">{location}</p>
          <ul className="space-y-1 sm:space-y-2">
            {achievements.map((achievement, index) => (
              <li key={index} className="text-xs sm:text-sm text-white/80 leading-relaxed">
                • {achievement}
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      <div className="absolute left-4 sm:left-1/2 transform sm:-translate-x-1/2 w-3 h-3 sm:w-4 sm:h-4 bg-white rounded-full border-2 sm:border-4 border-white/20"></div>
    </div>
  );
};
