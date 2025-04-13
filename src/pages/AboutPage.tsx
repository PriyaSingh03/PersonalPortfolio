
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, Calendar } from "lucide-react";


const AboutPage = () => {
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex-1 relative w-full"
      >
        <Navbar />
        
        <main className="pt-24 pb-12 px-4 md:px-8 container mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Me</h1>
            <div className="h-1 w-20 mx-auto bg-cyan-500"></div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="md:col-span-1"
            >
              <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-xl p-6 h-full">
                <div className="flex flex-col items-center">
                  <div className="w-48 h-48 rounded-full overflow-hidden mb-6 border-4 border-cyan-500/30">
                    <img 
                      src="ChatGPT Image Mar 30, 2025, 09_34_55 PM.png" 
                      alt="Priya Singh"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <h2 className="text-2xl font-bold mb-2">Priya Singh</h2>
                  <p className="text-cyan-400 mb-4">Web Developer</p>
                  
                  <div className="flex flex-col gap-3 text-sm text-gray-300">
                    <div className="flex items-center gap-2">
                      <MapPin size={16} className="text-cyan-400" />
                      <span>Kolkata, India</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={16} className="text-cyan-400" />
                      <span>Available for freelance</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="md:col-span-2"
            >
              <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-8 h-full">
                <h3 className="text-2xl font-bold mb-4 text-cyan-400">Who Am I?</h3>
                <p className="text-gray-300 mb-6">
                I'm a passionate web developer dedicated to building immersive and interactive web experiences. With a strong foundation in frontend development and a growing skill set in modern technologies, I blend technical precision with creative design to craft engaging digital solutions.
                </p>
                <p className="text-gray-300 mb-6">        
My journey began during my college years at JIS University, where I specialized in Computer Science Engineering with a focus on Artificial Intelligence and Machine Learning. It was there that I discovered my love for creating intuitive and visually appealing interfaces.

                </p>
                <p className="text-gray-300 mb-6">
                  
Over time, I’ve deepened my knowledge in React, Next.js, TypeScript, Tailwind CSS, and tools like ShadCN, Axios, and JWT—constantly pushing myself to build high-performance, accessible, and user-friendly web applications.
                </p>
                <p className="text-gray-300 mb-6">
                Every project I take on is an opportunity to create meaningful, impactful digital experiences that genuinely help users and solve real-world problems.</p>
                
                <h3 className="text-xl font-bold mb-4">My Skills</h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div>
                    <p className="text-white mb-1">Frontend Development</p>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div className="bg-cyan-500 h-2 rounded-full" style={{ width: '95%' }}></div>
                    </div>
                  </div>
                  <div>
                    <p className="text-white mb-1">UI/UX Design</p>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div className="bg-cyan-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                  <div>
                    <p className="text-white mb-1">Backend Development</p>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div className="bg-cyan-500 h-2 rounded-full" style={{ width: '80%' }}></div>
                    </div>
                  </div>
                  <div>
                    <p className="text-white mb-1">Database Management</p>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div className="bg-cyan-500 h-2 rounded-full" style={{ width: '75%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </main>
        
        <Footer />
        
        {/* Theme toggle fixed button */}
       
      </motion.div>
    </div>
  );
};

export default AboutPage;
