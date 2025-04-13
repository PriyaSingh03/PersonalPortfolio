
export const skills = [
  { name: "React", level: 90, color: "#61DAFB", category: "Frontend" },
  { name: "JavaScript", level: 85, color: "#F7DF1E", category: "Frontend" },
  { name: "TypeScript", level: 80, color: "#3178C6", category: "Frontend" },
  { name: "Node.js", level: 75, color: "#339933", category: "Backend" },
  { name: "Three.js", level: 70, color: "#000000", category: "3D" },
  { name: "GSAP", level: 65, color: "#88CE02", category: "Animation" },
  { name: "TailwindCSS", level: 95, color: "#06B6D4", category: "Frontend" },
  { name: "Firebase", level: 70, color: "#FFCA28", category: "Backend" },
  { name: "MongoDB", level: 65, color: "#47A248", category: "Backend" },
  { name: "Git", level: 85, color: "#F05032", category: "Tools" },
];

export const categories = [...new Set(skills.map(skill => skill.category))];
