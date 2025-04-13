
import SkillBar from "./SkillBar";

interface Skill {
  name: string;
  level: number;
  color: string;
  category: string;
}

interface SkillsListProps {
  skills: Skill[];
}

const SkillsList = ({ skills }: SkillsListProps) => {
  return (
    <div className="bg-card shadow-lg rounded-lg p-6 border border-accent/10">
      {skills.map((skill, index) => (
        <SkillBar 
          key={index}
          name={skill.name}
          level={skill.level}
          color={skill.color}
        />
      ))}
    </div>
  );
};

export default SkillsList;
