
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface SkillBarProps {
  name: string;
  level: number;
  color: string;
}

const SkillBar = ({ name, level, color }: SkillBarProps) => {
  const barRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (barRef.current) {
      gsap.fromTo(
        barRef.current,
        { width: "0%" },
        {
          width: `${level}%`,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: barRef.current.parentElement,
            start: "top 85%",
            toggleActions: "play none none none"
          }
        }
      );
    }
  }, [level]);

  return (
    <div className="mb-5 skill-item">
      <div className="flex justify-between mb-1">
        <span className="font-medium">{name}</span>
        <span className="text-muted-foreground">{level}%</span>
      </div>
      <div className="w-full bg-secondary rounded-full h-2.5 overflow-hidden">
        <div
          ref={barRef}
          className="skill-bar-fill h-2.5 rounded-full"
          style={{ backgroundColor: color, width: 0 }}
          data-width={level}
        ></div>
      </div>
    </div>
  );
};

export default SkillBar;
