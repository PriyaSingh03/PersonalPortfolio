
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="py-12 px-4 sm:px-8 relative">
      {/* Top decorative line */}
      <div className="absolute left-0 right-0 top-0 flex justify-center">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent"></div>
      </div>
      
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="uppercase tracking-[0.2em] text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white/80 to-white/40 mb-4"
          >
            PRIYA SINGH
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}  
            className="text-center text-gray-400 mb-8"
          >
            PORTFOLIO 2024
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col items-center"
          >
            <div className="text-xs text-gray-500 mb-2">Built with:</div>
            <div className="flex flex-wrap justify-center gap-2 max-w-xl">
              <span className="px-2 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-xs text-cyan-400">React</span>
              <span className="px-2 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-xs text-cyan-400">TypeScript</span>
              <span className="px-2 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-xs text-cyan-400">Three.js</span>
              <span className="px-2 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-xs text-cyan-400">Tailwind CSS</span>
              <span className="px-2 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-xs text-cyan-400">Framer Motion</span>
              <span className="px-2 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-xs text-cyan-400">Shadcn UI</span>
              <span className="px-2 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-xs text-cyan-400">GSAP</span>
              <span className="px-2 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-xs text-cyan-400">React Router</span>
              <span className="px-2 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-xs text-cyan-400">React Query</span>
              <span className="px-2 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-xs text-cyan-400">Vite</span>
            </div>
            
            <div className="mt-6 text-xs text-gray-500">
              © {new Date().getFullYear()} Priya Singh. All rights reserved.
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
