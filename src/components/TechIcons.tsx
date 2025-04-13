
import { useRef, useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import TechCard from './skills/TechCard';
import { technologies } from './skills/techData';

const TechIcons = () => {
  const controls = useAnimation();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visibleSkills, setVisibleSkills] = useState<Record<number, Record<number, boolean>>>({});
  const [visibleTechs, setVisibleTechs] = useState<Record<number, boolean>>({});
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start('visible');
          
          // Begin tech card animation sequence
          technologies.forEach((_, techIndex) => {
            setTimeout(() => {
              setVisibleTechs(prev => ({
                ...prev,
                [techIndex]: true
              }));
              
              // After tech card appears, begin revealing its skills
              setTimeout(() => {
                revealSkillsForTech(techIndex);
              }, 300);
            }, techIndex * 200);
          });
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [controls]);
  
  // This function will handle revealing each skill line one by one
  const revealSkill = (techIndex: number, skillIndex: number) => {
    setVisibleSkills(prev => {
      const techSkills = prev[techIndex] || {};
      return {
        ...prev,
        [techIndex]: {
          ...techSkills,
          [skillIndex]: true
        }
      };
    });
  };

  // Reveal skills for a specific tech card, one by one
  const revealSkillsForTech = (techIndex: number) => {
    technologies[techIndex].skills.forEach((_, skillIndex) => {
      setTimeout(() => {
        revealSkill(techIndex, skillIndex);
      }, skillIndex * 200);
    });
  };

  // Function to check if a tech card should be visible
  const isTechVisible = (techIndex: number) => {
    return visibleTechs[techIndex] || false;
  };
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };
  
  return (
    <section 
      ref={sectionRef} 
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-slate-50 dark:to-slate-900/30"
      id="skills"
    >
      <div className="container mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          variants={containerVariants}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            variants={itemVariants}
          >
            My <span className="text-orange-500">Tech Stack</span>
          </motion.h2>
          <motion.p 
            className="text-muted-foreground max-w-2xl mx-auto"
            variants={itemVariants}
          >
            The technologies and tools I use to bring ideas to life
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {technologies.map((tech, techIndex) => (
            <TechCard
              key={techIndex}
              tech={tech}
              isVisible={isTechVisible(techIndex)}
              techIndex={techIndex}
              visibleSkills={visibleSkills}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechIcons;
