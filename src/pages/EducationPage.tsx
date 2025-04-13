
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const EducationPage = () => {
  const educationData = [
    {
      degree: "Master of Computer Applications",
      institution: "University of Technology",
      location: "Kolkata, India",
      duration: "2017 - 2019",
      description: "Specialized in advanced web development and data structures. Graduated with honors and completed a thesis on optimizing web application performance.",
      courses: ["Advanced Algorithms", "Database Systems", "Web Application Architecture", "Cloud Computing"]
    },
    {
      degree: "Bachelor of Computer Science",
      institution: "City College of Science",
      location: "Kolkata, India",
      duration: "2014 - 2017",
      description: "Focused on core computer science principles including programming fundamentals, data structures, and database design.",
      courses: ["Data Structures", "Object-Oriented Programming", "Web Development", "Database Management"]
    },
    {
      degree: "Diploma in Web Design",
      institution: "Digital Arts Institute",
      location: "Kolkata, India",
      duration: "2013 - 2014",
      description: "Intensive program covering UI/UX fundamentals and responsive web design principles.",
      courses: ["UI Design", "UX Principles", "Responsive Web Design", "Design Thinking"]
    }
  ];

  const certifications = [
    {
      name: "AWS Certified Developer",
      issuer: "Amazon Web Services",
      date: "2022",
      description: "Certification validating expertise in developing, deploying, and debugging cloud-based applications using AWS."
    },
    {
      name: "React Developer Certification",
      issuer: "Meta",
      date: "2021",
      description: "Comprehensive certification covering advanced React concepts, patterns, and best practices."
    },
    {
      name: "Full Stack Web Development",
      issuer: "Udemy",
      date: "2020",
      description: "Extensive course covering both frontend and backend technologies including React, Node.js, and MongoDB."
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Education</h1>
            <div className="h-1 w-20 mx-auto bg-cyan-500"></div>
          </motion.div>
          
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <GraduationCap className="mr-2 text-cyan-400" size={24} />
              <span>Academic Background</span>
            </h2>
            
            <div className="space-y-8 mb-16">
              {educationData.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-xl font-bold text-cyan-400">{edu.degree}</h3>
                    <span className="text-gray-400 flex items-center mt-2 md:mt-0">
                      <Calendar size={16} className="mr-1" />
                      {edu.duration}
                    </span>
                  </div>
                  
                  <div className="flex items-center mb-4">
                    <MapPin size={16} className="mr-2 text-gray-400" />
                    <span className="text-white">{edu.institution}, {edu.location}</span>
                  </div>
                  
                  <p className="text-gray-300 mb-4">{edu.description}</p>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-gray-400 mb-2">Key Courses:</h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.courses.map((course, courseIndex) => (
                        <span 
                          key={courseIndex}
                          className="px-3 py-1 bg-cyan-500/10 text-cyan-400 text-xs rounded-full"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <GraduationCap className="mr-2 text-cyan-400" size={24} />
              <span>Certifications</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-5"
                >
                  <div className="flex flex-col mb-2">
                    <h3 className="text-lg font-semibold text-cyan-400">{cert.name}</h3>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-300">{cert.issuer}</span>
                      <span className="text-sm text-gray-400">{cert.date}</span>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm">{cert.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </main>
        
        <Footer />
        
        {/* Theme toggle fixed button */}
        
      </motion.div>
    </div>
  );
};

export default EducationPage;
