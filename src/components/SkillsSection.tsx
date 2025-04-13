
// import { useRef, useState, useEffect } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { motion } from "framer-motion";
// import Skills3DCanvas from "./skills/Skills3D";
// import CategoryFilter from "./skills/CategoryFilter";
// import SkillsList from "./skills/SkillsList";
// import { skills } from "./skills/skillsData";

// gsap.registerPlugin(ScrollTrigger);

// const SkillsSection = () => {
//   const sectionRef = useRef<HTMLDivElement>(null);
//   const headingRef = useRef<HTMLHeadingElement>(null);
//   const [activeCategory, setActiveCategory] = useState<string>("all");
//   const [isVisible, setIsVisible] = useState<boolean>(false);

//   // Filtering skills based on active category
//   const filteredSkills = activeCategory === "all" 
//     ? skills 
//     : skills.filter(skill => skill.category === activeCategory);

//   useEffect(() => {
//     // Animation for heading
//     if (headingRef.current) {
//       gsap.fromTo(
//         headingRef.current,
//         { y: 50, opacity: 0 },
//         {
//           y: 0,
//           opacity: 1,
//           duration: 0.8,
//           scrollTrigger: {
//             trigger: headingRef.current,
//             start: "top 80%",
//             toggleActions: "play none none none",
//             onEnter: () => setIsVisible(true)
//           }
//         }
//       );
//     }
//   }, []);

//   return (
//     <section id="skills" ref={sectionRef} className="py-20 bg-gradient-to-b from-background to-accent/5">
//       <div className="container px-4 mx-auto">
//         <div className="text-center mb-16" ref={headingRef}>
//           <h2 className="text-3xl md:text-4xl font-bold mb-4">
//             My <span className="text-cyan text-glow">Skills</span>
//           </h2>
//           <p className="text-muted-foreground max-w-2xl mx-auto">
//             I specialize in these technologies to create amazing web experiences
//           </p>
          
//           <CategoryFilter 
//             activeCategory={activeCategory} 
//             setActiveCategory={setActiveCategory} 
//           />
//         </div>
        
//         <div className="flex flex-col lg:flex-row gap-12 items-center">
//           <motion.div 
//             initial={{ opacity: 0, x: -50 }}
//             animate={isVisible ? { opacity: 1, x: 0 } : {}}
//             transition={{ duration: 0.5, delay: 0.2 }}
//             className="w-full lg:w-1/2 h-[400px]"
//           >
//             <Skills3DCanvas />
//           </motion.div>
          
//           <motion.div 
//             initial={{ opacity: 0, x: 50 }}
//             animate={isVisible ? { opacity: 1, x: 0 } : {}}
//             transition={{ duration: 0.5, delay: 0.4 }}
//             className="w-full lg:w-1/2"
//           >
//             <SkillsList skills={filteredSkills} />
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SkillsSection;
