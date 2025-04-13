
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { GitBranch, Code2, Terminal, Laptop, Monitor } from "lucide-react";

const CodeHero = () => {
  const [typedText1, setTypedText1] = useState("");
  const [typedText2, setTypedText2] = useState("");
  const [typedText3, setTypedText3] = useState("");
  const [showCursor1, setShowCursor1] = useState(true);
  const [showCursor2, setShowCursor2] = useState(false);
  const [showCursor3, setShowCursor3] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const heroRef = useRef<HTMLDivElement>(null);
  
  const text1 = "Hi, I'm Developer !";
  const text2 = "I design ✎ and develop 💻";
  const text3 = "web sites .";

  useEffect(() => {
    let currentIndex = 0;
    
    // Type the first line
    const interval1 = setInterval(() => {
      if (currentIndex < text1.length) {
        setTypedText1(text1.substring(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(interval1);
        setShowCursor1(false);
        setShowCursor2(true);
        
        // Start typing the second line
        let secondIndex = 0;
        const interval2 = setInterval(() => {
          if (secondIndex < text2.length) {
            setTypedText2(text2.substring(0, secondIndex + 1));
            secondIndex++;
          } else {
            clearInterval(interval2);
            setShowCursor2(false);
            setShowCursor3(true);
            
            // Start typing the third line
            let thirdIndex = 0;
            const interval3 = setInterval(() => {
              if (thirdIndex < text3.length) {
                setTypedText3(text3.substring(0, thirdIndex + 1));
                thirdIndex++;
              } else {
                clearInterval(interval3);
                
                // Keep the cursor blinking on the last line
                setShowCursor3(true);
              }
            }, 100);
            return () => clearInterval(interval3);
          }
        }, 100);
        return () => clearInterval(interval2);
      }
    }, 100);
    
    return () => clearInterval(interval1);
  }, []);

  // Handle mouse movement for parallax effect
  const handleMouseMove = (e: React.MouseEvent) => {
    if (heroRef.current) {
      const rect = heroRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      setMousePosition({ x, y });
    }
  };
  
  return (
    <section 
      id="home" 
      className="min-h-screen w-full flex items-center justify-center relative overflow-hidden px-4"
      ref={heroRef}
      onMouseMove={handleMouseMove}
    >
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-orange-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-cyan/10 rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-purple-500/10 rounded-full filter blur-3xl"></div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-4xl mx-auto"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content Side */}
          <div className="order-2 lg:order-1">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gradient-heading"
            >
              <span className="bg-gradient-to-r from-orange-500 to-purple-600 bg-clip-text text-transparent">
                Creative Developer & <br />Designer
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-lg text-muted-foreground mb-8"
            >
              I create stunning digital experiences with modern technologies
              that help businesses grow and users smile.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <a 
                href="#projects" 
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-medium inline-flex items-center gap-2 transition-all duration-300 shadow-lg hover:shadow-orange-500/20"
              >
                View My Work
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 8H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 4L13 8L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a 
                href="#contact" 
                className="border border-orange-500 text-orange-500 hover:bg-orange-500/10 px-6 py-3 rounded-full font-medium inline-flex items-center gap-2 transition-all duration-300"
              >
                Contact Me
              </a>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex gap-4 mt-8"
            >
              <span className="text-muted-foreground">Tech Stack:</span>
              <div className="flex gap-3">
                <span className="text-orange-500 hover:scale-110 transition-transform cursor-pointer"><Code2 size={20} /></span>
                <span className="text-cyan hover:scale-110 transition-transform cursor-pointer"><GitBranch size={20} /></span>
                <span className="text-purple-500 hover:scale-110 transition-transform cursor-pointer"><Terminal size={20} /></span>
                <span className="text-green-500 hover:scale-110 transition-transform cursor-pointer"><Laptop size={20} /></span>
                <span className="text-blue-500 hover:scale-110 transition-transform cursor-pointer"><Monitor size={20} /></span>
              </div>
            </motion.div>
          </div>
          
          {/* Code Block Side */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            style={{
              transform: `perspective(1000px) rotateX(${mousePosition.y * 5}deg) rotateY(${mousePosition.x * -5}deg)`,
              transition: 'transform 0.1s ease-out'
            }}
            className="order-1 lg:order-2"
          >
            <div className="bg-slate-900 dark:bg-slate-800/80 rounded-2xl shadow-2xl border border-slate-700 backdrop-blur-sm p-1 overflow-hidden">
              <div className="bg-slate-800 rounded-t-xl py-2 px-4 flex items-center gap-2">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="flex-1 text-center text-xs text-slate-400">index.tsx</div>
              </div>
              
              <div className="font-mono text-sm md:text-base p-6 text-slate-300 space-y-4 max-w-md">
                <div className="flex">
                  <span className="text-slate-500 w-8">01</span>
                  <span className="flex-1">
                    <span className="text-pink-400">const</span> <span className="text-blue-400">Developer</span> = <span className="text-orange-400">()</span> <span className="text-pink-400">{`=>`}</span> {`{`}
                  </span>
                </div>
                
                <div className="flex">
                  <span className="text-slate-500 w-8">02</span>
                  <span className="flex-1 pl-6">
                    <span className="text-purple-400">return</span> <span className="text-orange-400">(</span>
                  </span>
                </div>
                
                <div className="flex">
                  <span className="text-slate-500 w-8">03</span>
                  <span className="flex-1 pl-12">
                    &lt;<span className="text-green-400">div</span>&gt;
                  </span>
                </div>
                
                <div className="flex">
                  <span className="text-slate-500 w-8">04</span>
                  <span className="flex-1 pl-16">
                    &lt;<span className="text-green-400">h1</span>&gt; <span>{typedText1}</span>
                    {showCursor1 && <span className="typing-cursor text-white">|</span>} &lt;/<span className="text-green-400">h1</span>&gt;
                  </span>
                </div>
                
                <div className="flex">
                  <span className="text-slate-500 w-8">05</span>
                  <span className="flex-1 pl-16">
                    &lt;<span className="text-green-400">p</span>&gt; <span>{typedText2}</span>
                    {showCursor2 && <span className="typing-cursor text-white">|</span>} &lt;/<span className="text-green-400">p</span>&gt;
                  </span>
                </div>
                
                <div className="flex">
                  <span className="text-slate-500 w-8">06</span>
                  <span className="flex-1 pl-16 text-cyan">
                    <span>{typedText3}</span>
                    {showCursor3 && <span className="typing-cursor text-white">|</span>}
                  </span>
                </div>
                
                <div className="flex">
                  <span className="text-slate-500 w-8">07</span>
                  <span className="flex-1 pl-12">
                    &lt;/<span className="text-green-400">div</span>&gt;
                  </span>
                </div>
                
                <div className="flex">
                  <span className="text-slate-500 w-8">08</span>
                  <span className="flex-1 pl-6">
                    <span className="text-orange-400">)</span>;
                  </span>
                </div>
                
                <div className="flex">
                  <span className="text-slate-500 w-8">09</span>
                  <span className="flex-1">
                    {`}`};
                  </span>
                </div>
                
                <div className="flex">
                  <span className="text-slate-500 w-8">10</span>
                  <span className="flex-1">
                    <span className="text-pink-400">export</span> <span className="text-pink-400">default</span> <span className="text-blue-400">Developer</span>;
                  </span>
                </div>
              </div>
            </div>
            
            <div className="hidden md:block absolute -bottom-4 -right-4 w-20 h-20 bg-cyan/20 rounded-full filter blur-xl"></div>
            <div className="hidden md:block absolute -top-4 -left-4 w-20 h-20 bg-orange-500/20 rounded-full filter blur-xl"></div>
          </motion.div>
        </div>
      </motion.div>
      
      <div className="absolute bottom-12 left-0 right-0 flex justify-center z-10">
        <motion.a
          href="#projects"
          className="flex flex-col items-center gap-2 text-slate hover:text-orange-500 transition-colors"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <span>Scroll Down</span>
          <motion.svg 
            className="w-10 h-10 text-orange-500" 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="12" r="12" fill="currentColor" fillOpacity="0.1"/>
            <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </motion.svg>
        </motion.a>
      </div>
    </section>
  );
};

export default CodeHero;
