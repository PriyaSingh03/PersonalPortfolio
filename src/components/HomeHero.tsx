import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const HomeHero = () => {
  return (
    <div id="home" className="relative min-h-screen flex items-center px-4 sm:px-8 md:px-16 lg:px-24 bg-[#0d111a]">
      {/* Background gradient */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#0d111a] via-[#101624] to-[#0d111a]">
        <div className="absolute left-0 top-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-700/10 via-transparent to-transparent"></div>
      </div>

      <div className="container mx-auto z-10 flex flex-col lg:flex-row items-center">
        <div className="w-full lg:w-1/2 mb-10 lg:mb-0 pr-0 lg:pr-8">
         

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-5xl md:text-7xl font-bold text-blue-100 mb-6 leading-tight"
          >
            Priya Singh
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            is a frontend 
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            developer
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-gray-300 max-w-xl mb-8 text-lg"
          >
            I build fast, user-focused web apps using modern technologies. 
            Clean code, sleek design, and problem-solving are at the core of my work
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <Link to="/get-started" className="inline-block">
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg blur opacity-60 group-hover:opacity-100 transition duration-300 group-hover:duration-200"></div>
                <Button className="relative bg-slate-900 text-white border-0 px-8 py-6 rounded-lg">
                  Get started with Priya <ArrowRight size={16} className="ml-2" />
                </Button>
              </div>
            </Link>
          </motion.div>
        </div>

        {/* Right side: Chat UI Mockup */}
        <div className="w-full lg:w-1/2">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative perspective"
          >
            {/* Stack of cards with 3D effect */}
            <div className="relative ml-4 sm:ml-8 md:ml-12">
              {/* Background cards */}
              <div className="absolute top-5 -left-8 w-full h-[300px] bg-gradient-to-br from-blue-800/30 to-purple-800/30 rounded-lg transform rotate-6 border border-white/10"></div>
              <div className="absolute top-3 -left-4 w-full h-[300px] bg-gradient-to-br from-blue-700/40 to-purple-700/40 rounded-lg transform rotate-3 border border-white/10"></div>
              
              {/* Main card */}
              <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-5 border border-white/10 shadow-xl w-full max-w-md">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21 10.5C15.201 10.5 10.5 15.201 10.5 21C10.5 26.799 15.201 31.5 21 31.5C26.799 31.5 31.5 26.799 31.5 21C31.5 15.201 26.799 10.5 21 10.5ZM21 28C17.136 28 14 24.864 14 21C14 17.136 17.136 14 21 14C24.864 14 28 17.136 28 21C28 24.864 24.864 28 21 28Z" fill="white" />
                      <path d="M36.75 10.5C33.853 10.5 31.5 12.853 31.5 15.75C31.5 18.647 33.853 21 36.75 21C39.647 21 42 18.647 42 15.75C42 12.853 39.647 10.5 36.75 10.5Z" fill="white" />
                      <path d="M5.25 10.5C2.353 10.5 0 12.853 0 15.75C0 18.647 2.353 21 5.25 21C8.147 21 10.5 18.647 10.5 15.75C10.5 12.853 8.147 10.5 5.25 10.5Z" fill="white" />
                      <path d="M5.25 21C2.353 21 0 23.353 0 26.25C0 29.147 2.353 31.5 5.25 31.5C8.147 31.5 10.5 29.147 10.5 26.25C10.5 23.353 8.147 21 5.25 21Z" fill="white" />
                      <path d="M36.75 21C33.853 21 31.5 23.353 31.5 26.25C31.5 29.147 33.853 31.5 36.75 31.5C39.647 31.5 42 29.147 42 26.25C42 23.353 39.647 21 36.75 21Z" fill="white" />
                      <path d="M21 0C18.103 0 15.75 2.353 15.75 5.25C15.75 8.147 18.103 10.5 21 10.5C23.897 10.5 26.25 8.147 26.25 5.25C26.25 2.353 23.897 0 21 0Z" fill="white" />
                      <path d="M21 31.5C18.103 31.5 15.75 33.853 15.75 36.75C15.75 39.647 18.103 42 21 42C23.897 42 26.25 39.647 26.25 36.75C26.25 33.853 23.897 31.5 21 31.5Z" fill="white" />
                    </svg>
                  </div>
                  <span className="font-medium text-white">Priya</span>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <p className="text-white mb-1">Hey there! 👋 I have created a pull request for the changes requested.</p>
                    <p className="text-gray-300">Please let me know if there's anything else you need!</p>
                  </div>
                  
                  <div className="mt-8">
                    <div className="bg-slate-800/50 hover:bg-slate-700/50 transition-colors rounded-lg p-3 flex items-center justify-between cursor-pointer group">
                      <span className="text-gray-300">Give Priya a task to work on...</span>
                      <ArrowRight className="h-4 w-4 text-blue-400 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      
    </div>
  );
};

export default HomeHero;
