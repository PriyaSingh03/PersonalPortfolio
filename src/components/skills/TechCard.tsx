
import { motion } from 'framer-motion';
import { TechItem } from './techData';
import TechSkill from './TechSkill';

interface TechCardProps {
  tech: TechItem;
  isVisible: boolean;
  techIndex: number;
  visibleSkills: Record<number, Record<number, boolean>>;
}

const TechCard = ({ tech, isVisible, techIndex, visibleSkills }: TechCardProps) => {
  // Function to check if a skill should be visible
  const isSkillVisible = (techIndex: number, skillIndex: number) => {
    return visibleSkills[techIndex]?.[skillIndex] || false;
  };

  const Icon = tech.icon;

  return (
    <motion.div
      className="bg-white dark:bg-slate-800/50 backdrop-blur-sm rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 p-6 group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ 
        opacity: isVisible ? 1 : 0,
        y: isVisible ? 0 : 20,
        transition: { duration: 0.5 }
      }}
    >
      <div className={`bg-gradient-to-r ${tech.color} p-3 rounded-lg inline-flex mb-4 text-white`}>
        <Icon size={24} />
      </div>
      <h3 className="text-xl font-semibold mb-3 group-hover:text-orange-500 transition-colors">
        {tech.name}
      </h3>
      <ul className="space-y-2 text-sm text-slate">
        {tech.skills.map((skill, skillIndex) => (
          <TechSkill 
            key={skillIndex}
            skill={skill}
            isVisible={isSkillVisible(techIndex, skillIndex)}
            index={skillIndex}
          />
        ))}
      </ul>
    </motion.div>
  );
};

export default TechCard;
