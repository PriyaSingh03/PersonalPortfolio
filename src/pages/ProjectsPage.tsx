
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ExternalLink, Github, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

const ProjectsPage = () => {
  const projectsData = [
    {
      title: "E-Commerce Platform",
      description: "A modern e-commerce platform built with React and Node.js, featuring a sleek user interface and robust backend.",
      longDescription: "A comprehensive e-commerce solution built from the ground up using React for the frontend and Node.js for the backend. The platform features user authentication, product catalog with filtering, shopping cart functionality, secure checkout with Stripe integration, and an admin dashboard for managing products and orders.",
      image: "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?q=80&w=1000&auto=format&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Redux", "Express"],
      githubUrl: "#",
      liveUrl: "#",
      features: [
        "User authentication and profile management",
        "Product catalog with advanced filtering and search",
        "Shopping cart with persistent storage",
        "Secure checkout with Stripe integration",
        "Admin dashboard for product and order management"
      ]
    },
    {
      title: "3D Portfolio Visualizer",
      description: "Interactive 3D portfolio showcase created with Three.js and React Three Fiber.",
      longDescription: "An innovative portfolio visualization tool that presents projects and skills in an immersive 3D environment. Built using Three.js and React Three Fiber, this application allows users to explore content through an interactive 3D interface with smooth animations and transitions powered by GSAP.",
      image: "https://images.unsplash.com/photo-1545670723-196ed0954986?q=80&w=1000&auto=format&fit=crop",
      technologies: ["React", "Three.js", "GSAP", "TailwindCSS", "React Three Fiber"],
      githubUrl: "#",
      liveUrl: "#",
      features: [
        "Interactive 3D environment for showcasing projects",
        "Custom 3D models and animations",
        "Camera controls for exploring the space",
        "Responsive design that adapts to different devices",
        "Optimized performance with instanced rendering"
      ]
    },
    {
      title: "AI Content Generator",
      description: "Web application that uses AI to generate content for marketing, blogs, and social media.",
      longDescription: "A cutting-edge AI content generation platform that leverages OpenAI's GPT models to create high-quality content for various purposes. The application provides an intuitive interface for users to specify their content needs and receive AI-generated text that can be further edited and refined before export.",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1000&auto=format&fit=crop",
      technologies: ["Next.js", "OpenAI API", "TypeScript", "Supabase", "TailwindCSS"],
      githubUrl: "#",
      liveUrl: "#",
      features: [
        "AI-powered content generation for multiple formats",
        "Content editing and refinement tools",
        "User history and saved templates",
        "Export to various formats (Markdown, HTML, etc.)",
        "Usage tracking and subscription management"
      ]
    },
    {
      title: "Real-time Chat Application",
      description: "A feature-rich chat application with real-time messaging, notifications, and user authentication.",
      longDescription: "A modern real-time chat application that enables instant communication between users. Built with Vue.js and Firebase, the application features real-time message delivery, read receipts, typing indicators, and push notifications. User authentication and data storage are handled securely through Firebase services.",
      image: "https://images.unsplash.com/photo-1556155092-490a1ba16284?q=80&w=1000&auto=format&fit=crop",
      technologies: ["Vue.js", "Firebase", "WebSockets", "Tailwind CSS", "PWA"],
      githubUrl: "#",
      liveUrl: "#",
      features: [
        "Real-time messaging with WebSockets",
        "User authentication and profile customization",
        "Message read receipts and typing indicators",
        "Push notifications for new messages",
        "Offline support with PWA capabilities"
      ]
    },
    {
      title: "Fitness Tracker App",
      description: "Mobile-first web application for tracking workouts, nutrition, and fitness goals.",
      longDescription: "A comprehensive fitness tracking application designed to help users monitor their workout routines, nutrition intake, and progress toward fitness goals. Features include exercise libraries, custom workout creation, progress charts, and social sharing capabilities.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1000&auto=format&fit=crop",
      technologies: ["React Native", "Firebase", "Chart.js", "Node.js", "Express"],
      githubUrl: "#",
      liveUrl: "#",
      features: [
        "Workout tracking with custom routines",
        "Nutrition logging and calorie tracking",
        "Progress visualization with interactive charts",
        "Goal setting and achievement tracking",
        "Social sharing and community features"
      ]
    },
    {
      title: "Smart Home Dashboard",
      description: "IoT dashboard for monitoring and controlling smart home devices from a single interface.",
      longDescription: "A centralized dashboard for managing various smart home devices including lights, thermostats, security cameras, and more. The application connects to various IoT APIs and provides a unified interface for monitoring and controlling home automation systems.",
      image: "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=1000&auto=format&fit=crop",
      technologies: ["React", "Node.js", "MQTT", "WebSockets", "Chart.js", "IoT Protocols"],
      githubUrl: "#",
      liveUrl: "#",
      features: [
        "Unified control for multiple smart home devices",
        "Real-time monitoring and status updates",
        "Automated routines and scheduling",
        "Energy usage tracking and optimization",
        "Security camera integration and notifications"
      ]
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Projects</h1>
            <div className="h-1 w-20 mx-auto bg-cyan-500"></div>
            <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
              Explore my portfolio of web development projects showcasing various technologies and solutions.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl overflow-hidden hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300 h-full flex flex-col"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-cyan-400 mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4 flex-grow">{project.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-400 mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 4).map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-2 py-1 bg-cyan-500/10 text-cyan-400 text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-2 py-1 text-xs text-gray-400">
                          +{project.technologies.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mt-auto">
                    <Button variant="ghost" className="text-cyan-400 hover:text-cyan-300 p-0">
                      View Details <ArrowRight size={16} className="ml-1" />
                    </Button>
                    
                    <div className="flex space-x-2">
                      <a href={project.githubUrl} className="text-gray-300 hover:text-white transition-colors" aria-label="View source code">
                        <Github size={18} />
                      </a>
                      <a href={project.liveUrl} className="text-gray-300 hover:text-white transition-colors" aria-label="View live project">
                        <ExternalLink size={18} />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </main>
        
        <Footer />
        
        {/* Theme toggle fixed button */}
      
      </motion.div>
    </div>
  );
};

export default ProjectsPage;
