
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const ExperiencePage = () => {
  const experienceData = [
    {
      position: "Senior Frontend Developer",
      company: "TechSolutions Inc.",
      location: "Kolkata, India",
      type: "Full-time",
      duration: "Jan 2022 - Present",
      description: "Leading frontend development for enterprise applications using React, TypeScript, and modern UI frameworks.",
      responsibilities: [
        "Architected and developed responsive web applications using React and TypeScript",
        "Led a team of 4 frontend developers and mentored junior developers",
        "Implemented CI/CD pipelines using GitHub Actions",
        "Collaborated with UX designers to implement pixel-perfect interfaces",
        "Reduced application load time by 40% through code optimization"
      ],
      technologies: ["React", "TypeScript", "Redux", "Tailwind CSS", "Jest", "Webpack"]
    },
    {
      position: "Web Developer",
      company: "Digital Creations",
      location: "Kolkata, India",
      type: "Full-time",
      duration: "Jun 2019 - Dec 2021",
      description: "Developed responsive websites and web applications for clients across various industries.",
      responsibilities: [
        "Built and maintained client websites using JavaScript, HTML, and CSS",
        "Implemented responsive designs and ensured cross-browser compatibility",
        "Integrated third-party APIs and services",
        "Collaborated with graphic designers to create visually appealing interfaces",
        "Performed regular website maintenance and updates"
      ],
      technologies: ["JavaScript", "HTML5", "CSS3", "jQuery", "Bootstrap", "PHP", "MySQL"]
    },
    {
      position: "Junior Web Developer",
      company: "WebTech Solutions",
      location: "Kolkata, India",
      type: "Contract",
      duration: "Jan 2018 - May 2019",
      description: "Assisted in the development and maintenance of company websites and internal tools.",
      responsibilities: [
        "Developed and maintained company websites",
        "Created responsive layouts using HTML5 and CSS3",
        "Fixed bugs and implemented new features",
        "Collaborated with senior developers on larger projects",
        "Participated in code reviews and team meetings"
      ],
      technologies: ["HTML", "CSS", "JavaScript", "WordPress", "PHP"]
    },
    {
      position: "Web Development Intern",
      company: "CreativeTech",
      location: "Kolkata, India",
      type: "Internship",
      duration: "May 2017 - Dec 2017",
      description: "Gained hands-on experience in web development while working on real-world projects.",
      responsibilities: [
        "Assisted senior developers with website creation and maintenance",
        "Learned and implemented responsive design principles",
        "Created and maintained documentation",
        "Participated in team meetings and brainstorming sessions",
        "Developed small web applications under supervision"
      ],
      technologies: ["HTML", "CSS", "JavaScript Basics", "WordPress"]
    }
  ];

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex-1 relative w-full"
      >
        <Navbar />
        
        <main className="pt-24 pb-12 px-4 md:px-8 container mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Experience</h1>
            <div className="h-1 w-20 mx-auto bg-cyan-500"></div>
          </motion.div>
          
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <Briefcase className="mr-2 text-cyan-400" size={24} />
              <span>Work History</span>
            </h2>
            
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-6 bottom-10 w-0.5 bg-cyan-500/30"></div>
              
              <div className="space-y-12">
                {experienceData.map((job, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative pl-16"
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-0 top-0 w-12 h-12 bg-slate-800 border-4 border-cyan-500 rounded-full flex items-center justify-center">
                      <Briefcase size={20} className="text-cyan-400" />
                    </div>
                    
                    <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <h3 className="text-xl font-bold text-cyan-400">{job.position}</h3>
                        <span className="text-gray-400 flex items-center mt-2 md:mt-0">
                          <Calendar size={16} className="mr-1" />
                          {job.duration}
                        </span>
                      </div>
                      
                      <div className="flex flex-col md:flex-row md:items-center mb-4 gap-4">
                        <div className="flex items-center">
                          <MapPin size={16} className="mr-2 text-gray-400" />
                          <span className="text-white">{job.company}, {job.location}</span>
                        </div>
                        <span className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full md:ml-2">
                          {job.type}
                        </span>
                      </div>
                      
                      <p className="text-gray-300 mb-4">{job.description}</p>
                      
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-400 mb-2">Key Responsibilities:</h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-300">
                          {job.responsibilities.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-semibold text-gray-400 mb-2">Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {job.technologies.map((tech, techIndex) => (
                            <span 
                              key={techIndex}
                              className="px-3 py-1 bg-cyan-500/10 text-cyan-400 text-xs rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </main>
        
        <Footer />
        
       
      </motion.div>
    </div>
  );
};

export default ExperiencePage;
