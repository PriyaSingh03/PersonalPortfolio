
// import { useEffect, useRef } from "react";
// import ProjectCard from "./ProjectCard";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { motion } from "framer-motion";

// gsap.registerPlugin(ScrollTrigger);

// const projectsData = [
//   {
//     title: "E-Commerce Platform",
//     description: "A modern e-commerce platform built with React and Node.js, featuring a sleek user interface and robust backend.",
//     longDescription: "A comprehensive e-commerce solution built from the ground up using React for the frontend and Node.js for the backend. The platform features user authentication, product catalog with filtering, shopping cart functionality, secure checkout with Stripe integration, and an admin dashboard for managing products and orders.",
//     image: "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?q=80&w=1000&auto=format&fit=crop",
//     technologies: ["React", "Node.js", "MongoDB", "Stripe", "Redux", "Express"],
//     githubUrl: "#",
//     liveUrl: "#",
//     features: [
//       "User authentication and profile management",
//       "Product catalog with advanced filtering and search",
//       "Shopping cart with persistent storage",
//       "Secure checkout with Stripe integration",
//       "Admin dashboard for product and order management"
//     ],
//     screenshots: [
//       "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1000&auto=format&fit=crop",
//       "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=80&w=1000&auto=format&fit=crop",
//       "https://images.unsplash.com/photo-1616400619175-5beda3a17896?q=80&w=1000&auto=format&fit=crop"
//     ]
//   },
//   {
//     title: "3D Portfolio Visualizer",
//     description: "Interactive 3D portfolio showcase created with Three.js and React Three Fiber.",
//     longDescription: "An innovative portfolio visualization tool that presents projects and skills in an immersive 3D environment. Built using Three.js and React Three Fiber, this application allows users to explore content through an interactive 3D interface with smooth animations and transitions powered by GSAP.",
//     image: "https://images.unsplash.com/photo-1545670723-196ed0954986?q=80&w=1000&auto=format&fit=crop",
//     technologies: ["React", "Three.js", "GSAP", "TailwindCSS", "React Three Fiber"],
//     githubUrl: "#",
//     liveUrl: "#",
//     features: [
//       "Interactive 3D environment for showcasing projects",
//       "Custom 3D models and animations",
//       "Camera controls for exploring the space",
//       "Responsive design that adapts to different devices",
//       "Optimized performance with instanced rendering"
//     ],
//     screenshots: [
//       "https://images.unsplash.com/photo-1528360983277-13d401cdc186?q=80&w=1000&auto=format&fit=crop",
//       "https://images.unsplash.com/photo-1629757509637-7c99379d6d26?q=80&w=1000&auto=format&fit=crop",
//       "https://images.unsplash.com/photo-1617042375876-a13e36732a04?q=80&w=1000&auto=format&fit=crop"
//     ]
//   },
//   {
//     title: "AI Content Generator",
//     description: "Web application that uses AI to generate content for marketing, blogs, and social media.",
//     longDescription: "A cutting-edge AI content generation platform that leverages OpenAI's GPT models to create high-quality content for various purposes. The application provides an intuitive interface for users to specify their content needs and receive AI-generated text that can be further edited and refined before export.",
//     image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1000&auto=format&fit=crop",
//     technologies: ["Next.js", "OpenAI API", "TypeScript", "Supabase", "TailwindCSS"],
//     githubUrl: "#",
//     liveUrl: "#",
//     features: [
//       "AI-powered content generation for multiple formats",
//       "Content editing and refinement tools",
//       "User history and saved templates",
//       "Export to various formats (Markdown, HTML, etc.)",
//       "Usage tracking and subscription management"
//     ],
//     screenshots: [
//       "https://images.unsplash.com/photo-1673002094393-7ab9a01c1d12?q=80&w=1000&auto=format&fit=crop",
//       "https://images.unsplash.com/photo-1680465137207-019ed3b1b3d2?q=80&w=1000&auto=format&fit=crop",
//       "https://images.unsplash.com/photo-1655720828018-7467cfb5c106?q=80&w=1000&auto=format&fit=crop"
//     ]
//   },
//   {
//     title: "Real-time Chat Application",
//     description: "A feature-rich chat application with real-time messaging, notifications, and user authentication.",
//     longDescription: "A modern real-time chat application that enables instant communication between users. Built with Vue.js and Firebase, the application features real-time message delivery, read receipts, typing indicators, and push notifications. User authentication and data storage are handled securely through Firebase services.",
//     image: "https://images.unsplash.com/photo-1556155092-490a1ba16284?q=80&w=1000&auto=format&fit=crop",
//     technologies: ["Vue.js", "Firebase", "WebSockets", "Tailwind CSS", "PWA"],
//     githubUrl: "#",
//     liveUrl: "#",
//     features: [
//       "Real-time messaging with WebSockets",
//       "User authentication and profile customization",
//       "Message read receipts and typing indicators",
//       "Push notifications for new messages",
//       "Offline support with PWA capabilities"
//     ],
//     screenshots: [
//       "https://images.unsplash.com/photo-1611746872915-64382b5c091e?q=80&w=1000&auto=format&fit=crop",
//       "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?q=80&w=1000&auto=format&fit=crop",
//       "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1000&auto=format&fit=crop"
//     ]
//   }
// ];

// const Projects = () => {
//   const sectionRef = useRef<HTMLDivElement>(null);
//   const headingRef = useRef<HTMLHeadingElement>(null);
//   const projectsRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     // Animation for heading
//     if (headingRef.current) {
//       gsap.fromTo(
//         headingRef.current,
//         { y: 50, opacity: 0 },
//         {
//           y: 0,
//           opacity: 1,
//           duration: 0.8,
//           scrollTrigger: {
//             trigger: headingRef.current,
//             start: "top 80%",
//             toggleActions: "play none none none"
//           }
//         }
//       );
//     }

//     // Animation for projects
//     if (projectsRef.current) {
//       const projects = projectsRef.current.children;
//       gsap.fromTo(
//         projects,
//         { y: 100, opacity: 0 },
//         {
//           y: 0,
//           opacity: 1,
//           duration: 0.8,
//           stagger: 0.2,
//           scrollTrigger: {
//             trigger: projectsRef.current,
//             start: "top 70%",
//             toggleActions: "play none none none"
//           }
//         }
//       );
//     }
//   }, []);

//   return (
//     <section id="projects" ref={sectionRef} className="py-20 bg-background">
//       <div className="container px-4 mx-auto">
//         <motion.div 
//           className="text-center mb-16" 
//           ref={headingRef}
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//         >
//           <h2 className="text-3xl md:text-4xl font-bold mb-4">
//             Featured <span className="text-orange-500 relative">
//               Projects
//               <span className="absolute bottom-0 left-0 w-full h-1 bg-orange-500/30"></span>
//             </span>
//           </h2>
//           <p className="text-muted-foreground max-w-2xl mx-auto">
//             These are some of my recent projects showcasing my skills and experience.
//           </p>
//         </motion.div>
        
//         <div 
//           ref={projectsRef} 
//           className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
//         >
//           {projectsData.map((project, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               viewport={{ once: true, margin: "-100px" }}
//             >
//               <ProjectCard {...project} />
//             </motion.div>
//           ))}
//         </div>
        
//         <motion.div 
//           className="mt-16 text-center"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 0.5, delay: 0.3 }}
//           viewport={{ once: true }}
//         >
//           <a 
//             href="#"
//             className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-orange-500 text-white hover:bg-orange-600 transition-colors"
//           >
//             <span>View More Projects</span>
//             <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
//               <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//             </svg>
//           </a>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Projects;
