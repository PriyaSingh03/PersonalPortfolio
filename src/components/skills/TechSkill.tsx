
import { motion } from 'framer-motion';

interface TechSkillProps {
  skill: string;
  isVisible: boolean;
  index: number;
}

const TechSkill = ({ skill, isVisible, index }: TechSkillProps) => {
  return (
    <motion.li 
      className="flex items-center gap-2"
      initial={{ opacity: 0, x: -20 }}
      animate={{ 
        opacity: isVisible ? 1 : 0,
        x: isVisible ? 0 : -20,
        transition: { duration: 0.3 }
      }}
    >
      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full flex-shrink-0"></span>
      <span>{skill}</span>
    </motion.li>
  );
};

export default TechSkill;
