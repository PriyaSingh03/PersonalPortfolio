
// import { useRef, useState } from "react";
// import { Card } from "@/components/ui/card";
// import { ExternalLink, Github, Eye, X } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Badge } from "@/components/ui/badge";
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
//   DialogClose,
// } from "@/components/ui/dialog";
// import { cn } from "@/lib/utils";

// interface ProjectCardProps {
//   title: string;
//   description: string;
//   image: string;
//   technologies: string[];
//   githubUrl?: string;
//   liveUrl?: string;
//   longDescription?: string;
//   features?: string[];
//   screenshots?: string[];
// }

// const ProjectCard = ({
//   title,
//   description,
//   image,
//   technologies,
//   githubUrl,
//   liveUrl,
//   longDescription,
//   features,
//   screenshots,
// }: ProjectCardProps) => {
//   const [isHovered, setIsHovered] = useState(false);
//   const [isOpen, setIsOpen] = useState(false);
//   const cardRef = useRef<HTMLDivElement>(null);

//   const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
//     if (!cardRef.current) return;
    
//     const card = cardRef.current;
//     const rect = card.getBoundingClientRect();
//     const x = e.clientX - rect.left;
//     const y = e.clientY - rect.top;
    
//     const centerX = rect.width / 2;
//     const centerY = rect.height / 2;
    
//     const rotateX = (y - centerY) / 25;
//     const rotateY = (centerX - x) / 25;
    
//     card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
//   };
  
//   const handleMouseLeave = () => {
//     if (!cardRef.current) return;
//     cardRef.current.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
//     setIsHovered(false);
//   };

//   return (
//     <>
//       <Card
//         ref={cardRef}
//         className="overflow-hidden transition-all duration-300 bg-card border border-border/50 h-full shadow-lg hover:shadow-xl hover:border-orange-500/20"
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseMove={handleMouseMove}
//         onMouseLeave={handleMouseLeave}
//       >
//         <div className="relative overflow-hidden group">
//           {/* Image container with overlay */}
//           <div className="aspect-video relative overflow-hidden">
//             <img
//               src={image}
//               alt={title}
//               className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
//             />
            
//             {/* Gradient overlay that appears on hover */}
//             <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
//               <div className="flex justify-end space-x-2">
//                 {githubUrl && (
//                   <motion.a
//                     href={githubUrl}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="p-2 rounded-full bg-background/30 backdrop-blur-sm hover:bg-orange-500/80 transition-colors duration-300"
//                     whileHover={{ scale: 1.1 }}
//                     whileTap={{ scale: 0.95 }}
//                   >
//                     <Github className="h-5 w-5 text-white" />
//                   </motion.a>
//                 )}
                
//                 {liveUrl && (
//                   <motion.a
//                     href={liveUrl}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="p-2 rounded-full bg-background/30 backdrop-blur-sm hover:bg-orange-500/80 transition-colors duration-300"
//                     whileHover={{ scale: 1.1 }}
//                     whileTap={{ scale: 0.95 }}
//                   >
//                     <ExternalLink className="h-5 w-5 text-white" />
//                   </motion.a>
//                 )}
                
//                 <Dialog open={isOpen} onOpenChange={setIsOpen}>
//                   <DialogTrigger asChild>
//                     <motion.button
//                       className="p-2 rounded-full bg-background/30 backdrop-blur-sm hover:bg-orange-500/80 transition-colors duration-300"
//                       whileHover={{ scale: 1.1 }}
//                       whileTap={{ scale: 0.95 }}
//                     >
//                       <Eye className="h-5 w-5 text-white" />
//                     </motion.button>
//                   </DialogTrigger>
                  
//                   <DialogContent className="sm:max-w-3xl bg-card/95 backdrop-blur-md border-orange-500/20">
//                     <DialogHeader>
//                       <div className="flex items-center justify-between">
//                         <DialogTitle className="text-2xl font-bold">{title}</DialogTitle>
//                         <DialogClose className="rounded-full p-1.5 bg-background/50 hover:bg-orange-500/20 transition-colors">
//                           <X className="h-5 w-5" />
//                         </DialogClose>
//                       </div>
//                       <DialogDescription className="text-muted-foreground">
//                         {longDescription || description}
//                       </DialogDescription>
//                     </DialogHeader>
                    
//                     <div className="mt-6 space-y-6">
//                       {/* Main image */}
//                       <div className="rounded-lg overflow-hidden">
//                         <img src={image} alt={title} className="w-full h-auto object-cover" />
//                       </div>
                      
//                       {/* Features */}
//                       {features && features.length > 0 && (
//                         <div className="space-y-2">
//                           <h3 className="text-lg font-semibold">Key Features</h3>
//                           <ul className="list-disc pl-5 space-y-1">
//                             {features.map((feature, idx) => (
//                               <li key={idx} className="text-muted-foreground">{feature}</li>
//                             ))}
//                           </ul>
//                         </div>
//                       )}
                      
//                       {/* Screenshots carousel */}
//                       {screenshots && screenshots.length > 0 && (
//                         <div className="space-y-2">
//                           <h3 className="text-lg font-semibold">Screenshots</h3>
//                           <div className="flex overflow-x-auto gap-4 pb-4 scrollbar-none">
//                             {screenshots.map((screenshot, idx) => (
//                               <img 
//                                 key={idx} 
//                                 src={screenshot} 
//                                 alt={`${title} screenshot ${idx + 1}`}
//                                 className="h-40 w-auto object-cover rounded-md flex-shrink-0 hover:opacity-90 transition-opacity"
//                               />
//                             ))}
//                           </div>
//                         </div>
//                       )}
                      
//                       {/* Technologies */}
//                       <div className="space-y-2">
//                         <h3 className="text-lg font-semibold">Technologies</h3>
//                         <div className="flex flex-wrap gap-2">
//                           {technologies.map((tech, index) => (
//                             <Badge
//                               key={index}
//                               variant="outline"
//                               className="bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-200 dark:border-orange-800/30 hover:bg-orange-500/20"
//                             >
//                               {tech}
//                             </Badge>
//                           ))}
//                         </div>
//                       </div>
                      
//                       {/* Links */}
//                       <div className="flex gap-4 pt-2">
//                         {githubUrl && (
//                           <a
//                             href={githubUrl}
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="px-4 py-2 rounded-md bg-background/50 hover:bg-orange-500/20 flex items-center gap-2 text-sm font-medium transition-colors"
//                           >
//                             <Github className="h-4 w-4" /> 
//                             View Source
//                           </a>
//                         )}
//                         {liveUrl && (
//                           <a
//                             href={liveUrl}
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="px-4 py-2 rounded-md bg-orange-500 hover:bg-orange-600 text-white flex items-center gap-2 text-sm font-medium transition-colors"
//                           >
//                             <ExternalLink className="h-4 w-4" /> 
//                             View Live
//                           </a>
//                         )}
//                       </div>
//                     </div>
//                   </DialogContent>
//                 </Dialog>
//               </div>
//             </div>
//           </div>
//         </div>
        
//         <div className="p-6">
//           <motion.h3 
//             className="text-xl font-bold mb-2 group-hover:text-orange-500"
//             initial={{ y: 0 }}
//             animate={isHovered ? { y: -5 } : { y: 0 }}
//             transition={{ duration: 0.3 }}
//           >
//             {title}
//           </motion.h3>
//           <p className="text-muted-foreground mb-4 line-clamp-3">{description}</p>
          
//           <div className="flex flex-wrap gap-2 mt-auto">
//             {technologies.map((tech, index) => (
//               <Badge
//                 key={index}
//                 variant="outline"
//                 className={cn(
//                   "bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-200 dark:border-orange-800/30 hover:bg-orange-500/20 transition-all duration-300",
//                   isHovered && "shadow-sm shadow-orange-500/20"
//                 )}
//               >
//                 {tech}
//               </Badge>
//             ))}
//           </div>
//         </div>
//       </Card>
//     </>
//   );
// };

// export default ProjectCard;
