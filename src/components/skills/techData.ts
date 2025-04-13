
import { ComponentType } from 'react';
import { Code2, Database, Figma, Globe, Cpu, Code, GitBranch, Server, LucideProps } from 'lucide-react';

export interface TechItem {
  name: string;
  icon: ComponentType<LucideProps>;
  color: string;
  skills: string[];
}

export const technologies: TechItem[] = [
  {
    name: 'Frontend',
    icon: Code2,
    color: 'from-blue-500 to-cyan-400',
    skills: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS']
  },
  {
    name: 'Backend',
    icon: Server,
    color: 'from-green-500 to-emerald-400',
    skills: ['Node.js', 'Express', 'MongoDB', 'Firebase']
  },
  {
    name: 'Design',
    icon: Figma,
    color: 'from-purple-500 to-pink-500',
    skills: ['UI/UX', 'Figma', 'Adobe XD', 'Photoshop']
  },
  {
    name: 'Web & Deployment',
    icon: Globe,
    color: 'from-orange-500 to-amber-400',
    skills: ['Three.js', 'GSAP', 'Framer Motion', 'WebGL']
  },
  {
    name: 'Developer Tools',
    icon: GitBranch,
    color: 'from-red-500 to-rose-400',
    skills: ['Git', 'Docker', 'CI/CD', 'Testing']
  }
];
