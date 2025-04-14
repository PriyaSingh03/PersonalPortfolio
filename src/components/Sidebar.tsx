
// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// // import ThemeToggle from "./ThemeToggle";
// import { Home, Briefcase, User, Menu, X, Instagram, Linkedin, Github, ExternalLink } from "lucide-react";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// const Sidebar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [activeSection, setActiveSection] = useState("home");
//   const [isMobile, setIsMobile] = useState(false);

//   // Check if we're on mobile
//   useEffect(() => {
//     const checkMobile = () => {
//       setIsMobile(window.innerWidth < 768);
//     };
    
//     checkMobile();
//     window.addEventListener("resize", checkMobile);
//     return () => window.removeEventListener("resize", checkMobile);
//   }, []);

//   const toggleSidebar = () => {
//     setIsOpen(!isOpen);
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       const sections = ["home", "projects", "about", "skills", "contact"];
      
//       for (const section of sections) {
//         const element = document.getElementById(section);
//         if (element) {
//           const rect = element.getBoundingClientRect();
//           if (rect.top <= 100 && rect.bottom >= 100) {
//             setActiveSection(section);
//             break;
//           }
//         }
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const navItems = [
//     { name: "Home", href: "#home", icon: <Home size={20} strokeWidth={2.5} /> },
//     { name: "Portfolio", href: "#projects", icon: <Briefcase size={20} strokeWidth={2.5} /> },
//     { name: "Who am I?", href: "#about", icon: <User size={20} strokeWidth={2.5} /> },
//   ];

//   const socialIcons = [
//     { name: "Instagram", href: "#", icon: <Instagram size={20} /> },
//     { name: "LinkedIn", href: "#", icon: <Linkedin size={20} /> },
//     { name: "Github", href: "#", icon: <Github size={20} /> },
//     { name: "Personal Site", href: "#", icon: <ExternalLink size={20} /> },
//   ];

//   const sidebarVariants = {
//     closed: {
//       x: "-100%",
//       transition: {
//         type: "spring",
//         stiffness: 400,
//         damping: 40
//       }
//     },
//     open: {
//       x: 0,
//       transition: {
//         type: "spring",
//         stiffness: 400,
//         damping: 40
//       }
//     }
//   };

//   return (
//     <>
//       {/* Mobile toggle button */}
//       <button
//         className="md:hidden fixed top-4 left-4 z-50 p-2 rounded-full bg-white/90 dark:bg-slate-900/90 shadow-md"
//         onClick={toggleSidebar}
//         aria-label="Toggle navigation"
//       >
//         {isOpen ? <X size={24} /> : <Menu size={24} />}
//       </button>

//       {/* Sidebar */}
//       <motion.div
//         className={`fixed md:sticky top-0 bottom-0 left-0 z-40 w-64 md:w-24 bg-white dark:bg-slate-950 border-r border-transparent md:border-r-0 shadow-xl md:shadow-none ${
//           isOpen ? "block" : "hidden md:block"
//         }`}
//         variants={sidebarVariants}
//         initial="closed"
//         animate={isOpen ? "open" : "closed"}
//       >
//         <div className="h-full flex flex-col justify-between py-8">
//           <div>
//             {/* Logo */}
//             <div className="mb-12 flex justify-center">
//               <Avatar className="h-16 w-16 bg-orange-500">
//                 <AvatarImage 
//                   src="/lovable-uploads/238255cf-8120-4260-a0f8-940127c2b2db.png"
//                   alt="Developer"
//                 />
//                 <AvatarFallback className="text-white text-2xl font-bold">
//                   Dev
//                 </AvatarFallback>
//               </Avatar>
//             </div>

//             {/* Navigation */}
//             <nav className="px-4">
//               <ul className="space-y-8">
//                 {navItems.map((item) => (
//                   <li key={item.name}>
//                     <a
//                       href={item.href}
//                       className={`flex flex-col md:flex-col items-center gap-2 py-2 rounded-lg transition-colors duration-300 group ${
//                         activeSection === item.href.substring(1)
//                           ? "text-orange-500"
//                           : "text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-500"
//                       }`}
//                       onClick={() => {
//                         if (window.innerWidth < 768) {
//                           setIsOpen(false);
//                         }
//                       }}
//                     >
//                       <span className="p-2 rounded-lg group-hover:bg-orange-100 dark:group-hover:bg-slate-800/50 transition-colors duration-300">
//                         {item.icon}
//                       </span>
//                       <span className="text-sm font-medium">{item.name}</span>
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </nav>
//           </div>

//           <div className="px-4 flex flex-col items-center space-y-8">
//             <div className="text-sm font-medium">
//               <span className="text-gray-500">EN</span>
//               <span className="mx-2">|</span>
//               <span className="text-orange-500">FR</span>
//             </div>

//             {/* Social Icons */}
//             <div className="flex flex-wrap justify-center gap-3 mb-4 md:gap-4">
//               {socialIcons.map((item) => (
//                 <a
//                   key={item.name}
//                   href={item.href}
//                   className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-500 transition-colors duration-300"
//                   aria-label={item.name}
//                 >
//                   {item.icon}
//                 </a>
//               ))}
//             </div>
           
//         </div>
//       </motion.div>
//     </>
//   );
// };

// export default Sidebar;
