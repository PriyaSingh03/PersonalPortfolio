
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import HomeHero from "@/components/HomeHero";

import ContactSection from "@/components/ContactSection";
import { Loader2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [firstLoad, setFirstLoad] = useState(true);

  useEffect(() => {
    // Check and apply saved theme on initial load
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      document.documentElement.classList.remove("light", "dark");
      if (savedTheme === "system") {
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        document.documentElement.classList.add(prefersDark ? "dark" : "light");
      } else {
        document.documentElement.classList.add(savedTheme);
      }
    } else {
      // Default to system preference if no saved theme
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      document.documentElement.classList.add(prefersDark ? "dark" : "light");
    }

    // Only run the loading animation on first page load
    if (firstLoad) {
      // Check if we've stored a flag indicating this isn't the first load
      const hasVisited = sessionStorage.getItem('hasVisited');
      if (hasVisited) {
        // Skip loading animation if not first visit in this session
        setLoading(false);
        return;
      }
      
      // Mark that user has visited the site in this session
      sessionStorage.setItem('hasVisited', 'true');
      
      // Simulate loading progress
      const interval = setInterval(() => {
        setProgress(prev => {
          const next = prev + Math.random() * 10;
          return next > 100 ? 100 : next;
        });
      }, 150);

      // Simulate loading time
      const timer = setTimeout(() => {
        clearInterval(interval);
        setProgress(100);
        setTimeout(() => {
          setLoading(false);
          setFirstLoad(false);
        }, 500); // Short delay after 100%
      }, 2000);

      return () => {
        clearTimeout(timer);
        clearInterval(interval);
      };
    } else {
      // Skip loading animation if not first load
      setLoading(false);
    }
  }, [firstLoad]);

  useEffect(() => {
    // Initialize scroll animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, { threshold: 0.1 });

    // Observe all elements with the 'scroll-animation' class
    document.querySelectorAll(".scroll-animation").forEach((el) => {
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, [loading]); // Re-initialize after loading completes

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="flex flex-col items-center">
          <Loader2 className="h-12 w-12 text-cyan-500 animate-spin mb-4" />
          <p className="text-gray-300 mb-4">Loading amazing stuff...</p>
          <div className="w-64 h-2 bg-slate-700 rounded-full overflow-hidden">
            <div 
              className="h-full bg-cyan-500 transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="text-sm text-gray-400 mt-2">{Math.round(progress)}%</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-x-hidden">
   
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex-1 relative w-full"
      >
        <Navbar />
        <main>
          <HomeHero />
          
          <section className="py-20 px-4 sm:px-8 container mx-auto text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold mb-8"
            >
              Explore My Portfolio
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              
              {[
                { title: "About Me", href: "/about", desc: "Learn more about my background and skills" },
                { title: "Education", href: "/education", desc: "View my academic journey and qualifications" },
                { title: "Experience", href: "/experience", desc: "Explore my professional work history" },
                { title: "Projects", href: "/projects", desc: "See my recent development projects" },
                { title: "Skills", href: "/skills", desc: "See my technical abilities and expertise" },
                { title: "Contact", href: "/ContactPage", desc: "Get in touch with me" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-slate-800/50 border border-slate-700/50 p-6 rounded-xl hover:border-cyan-500/30 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300"
                >
                  <h3 className="text-xl font-bold text-cyan-400 mb-2">{item.title}</h3>
                  <p className="text-gray-300 mb-4">{item.desc}</p>
                  <Link to={item.href}>
                    <Button variant="ghost" className="text-cyan-400 hover:text-cyan-300 hover:bg-cyan-500/10">
                      Explore
                    </Button>
                  </Link>
                </motion.div>
              ))}
            </div>
          </section>
          
          <ContactSection />
        </main>
        <Footer />
        
        {/* Theme toggle fixed button */}
        
      </motion.div>
    </div>
  );
};

export default Index;
