// import { useRef, useEffect, useState } from 'react';
// import { Canvas, useFrame } from '@react-three/fiber';
// import { 
//   OrbitControls, 
//   Text3D, 
//   Environment, 
//   Float, 
//   MeshDistortMaterial, 
//   RoundedBox,
//   Stars,
//   Cloud,
//   Trail
// } from '@react-three/drei';
// import * as THREE from 'three';
// import { motion } from 'framer-motion';

// // Floating circular particles that move around
// const Particles = () => {
//   const particlesRef = useRef<THREE.Group>(null);
//   const particles = useRef<{
//     position: THREE.Vector3;
//     speed: number;
//     direction: THREE.Vector3;
//     size: number;
//     color: string;
//   }[]>([]);
  
//   // Generate random particles
//   useEffect(() => {
//     particles.current = Array.from({ length: 20 }, () => {
//       const angle = Math.random() * Math.PI * 2;
//       const radius = 4 + Math.random() * 4;
      
//       return {
//         position: new THREE.Vector3(
//           Math.cos(angle) * radius,
//           (Math.random() - 0.5) * 6,
//           Math.sin(angle) * radius
//         ),
//         speed: 0.2 + Math.random() * 0.3,
//         direction: new THREE.Vector3(
//           (Math.random() - 0.5) * 0.01,
//           (Math.random() - 0.5) * 0.01,
//           (Math.random() - 0.5) * 0.01
//         ),
//         size: 0.05 + Math.random() * 0.1,
//         color: [
//           '#F97316', '#64ffda', '#9333ea', '#3b82f6', '#ec4899', 
//           '#f59e0b', '#10b981', '#8b5cf6'
//         ][Math.floor(Math.random() * 8)]
//       };
//     });
//   }, []);
  
//   useFrame(() => {
//     if (particlesRef.current) {
//       particles.current.forEach((particle, i) => {
//         // Move particle
//         particle.position.add(particle.direction);
        
//         // Boundary check and bounce
//         ['x', 'y', 'z'].forEach((axis) => {
//           if (Math.abs(particle.position[axis as keyof THREE.Vector3] as number) > 8) {
//             // Need to be careful with modifying the direction vector
//             const key = axis as keyof THREE.Vector3;
//             // Create a new Vector3 with the flipped direction value
//             const newDirection = new THREE.Vector3(
//               axis === 'x' ? -particle.direction.x : particle.direction.x,
//               axis === 'y' ? -particle.direction.y : particle.direction.y,
//               axis === 'z' ? -particle.direction.z : particle.direction.z
//             );
//             particle.direction = newDirection;
//           }
//         });
        
//         // Apply updated position to the mesh
//         const child = particlesRef.current?.children[i] as THREE.Mesh;
//         if (child) {
//           child.position.copy(particle.position);
//           // Slight rotation for visual interest
//           child.rotation.x += 0.01;
//           child.rotation.y += 0.01;
//         }
//       });
//     }
//   });
  
//   return (
//     <group ref={particlesRef}>
//       {particles.current.map((particle, i) => (
//         <mesh key={i} position={[particle.position.x, particle.position.y, particle.position.z]}>
//           <sphereGeometry args={[particle.size, 16, 16]} />
//           <meshStandardMaterial 
//             color={particle.color} 
//             emissive={particle.color} 
//             emissiveIntensity={0.5}
//           />
//         </mesh>
//       ))}
//     </group>
//   );
// };

// // Moving line that connects tech stacks
// const TechLine = ({ startPoint, endPoint, color }: { 
//   startPoint: [number, number, number]; 
//   endPoint: [number, number, number];
//   color: string;
// }) => {
//   // Fix the ref type to match the line component we're using
//   const lineRef = useRef<THREE.LineSegments>(null);
//   const [progress, setProgress] = useState(0);
  
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setProgress(1);
//     }, Math.random() * 1000);
    
//     return () => clearTimeout(timer);
//   }, []);
  
//   useFrame(() => {
//     if (lineRef.current) {
//       // Create points for the line
//       const points = [];
//       const startVector = new THREE.Vector3(...startPoint);
//       const endVector = new THREE.Vector3(...endPoint);
      
//       // Linear interpolation for growing the line
//       for (let i = 0; i <= 20; i++) {
//         const t = Math.min(progress, i / 20);
//         const point = new THREE.Vector3().lerpVectors(startVector, endVector, t);
//         points.push(point);
//       }
      
//       // Update line geometry
//       const geometry = new THREE.BufferGeometry().setFromPoints(points);
//       lineRef.current.geometry = geometry;
//     }
//   });

//   return (
//     <lineSegments ref={lineRef}>
//       <bufferGeometry />
//       <lineBasicMaterial color={color} linewidth={2} />
//     </lineSegments>
//   );
// };

// // Animated spinning cube
// const SpinningCube = () => {
//   const meshRef = useRef<THREE.Mesh>(null);
  
//   useFrame((state) => {
//     if (meshRef.current) {
//       meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
//       meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
//     }
//   });

//   return (
//     <Float speed={1.5} rotationIntensity={1.0} floatIntensity={1.0}>
//       <Trail
//         width={1}
//         color="#F97316"
//         length={8}
//         decay={1}
//         attenuation={(width) => width}
//       >
//         <mesh ref={meshRef} scale={[1.5, 1.5, 1.5]} position={[0, 0, 0]}>
//           <RoundedBox args={[1, 1, 1]} radius={0.1} smoothness={4}>
//             <MeshDistortMaterial
//               color="#64ffda"
//               metalness={0.8}
//               roughness={0.2}
//               wireframe={true}
//               distort={0.4}
//               speed={2}
//             />
//           </RoundedBox>
//         </mesh>
//       </Trail>
//     </Float>
//   );
// };

// // Animated floating letters
// const FloatingLetters = ({ text }: { text: string }) => {
//   const letters = text.split("");
//   const [visibleLetters, setVisibleLetters] = useState(0);
//   const [hoveredIndex, setHoveredIndex] = useState(-1);
  
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setVisibleLetters(prev => {
//         if (prev < letters.length) {
//           return prev + 1;
//         }
//         clearInterval(interval);
//         return prev;
//       });
//     }, 100);
    
//     return () => clearInterval(interval);
//   }, [letters.length]);
  
//   return (
//     <group position={[0, 2, 0]}>
//       {letters.map((letter, index) => (
//         index < visibleLetters && (
//           <Float
//             key={index}
//             speed={2}
//             rotationIntensity={0.2}
//             floatIntensity={0.5}
//             position={[(index - letters.length / 2) * 0.8, Math.sin(index * 0.5) * 0.3, 0]}
//           >
//             <Text3D
//               size={0.5}
//               height={0.1}
//               curveSegments={12}
//               bevelEnabled={false}
//               font="/fonts/Inter-Bold.json"
//               onPointerOver={() => setHoveredIndex(index)}
//               onPointerOut={() => setHoveredIndex(-1)}
//             >
//               {letter}
//               <meshStandardMaterial color={hoveredIndex === index ? "#F97316" : "#64ffda"} />
//             </Text3D>
//           </Float>
//         )
//       ))}
//     </group>
//   );
// };

// // Animated sphere
// const AnimatedSphere = () => {
//   const meshRef = useRef<THREE.Mesh>(null);
  
//   useFrame((state) => {
//     if (meshRef.current) {
//       meshRef.current.position.y = Math.sin(state.clock.getElapsedTime()) * 0.2;
//       meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.2;
//     }
//   });

//   return (
//     <Float speed={3} rotationIntensity={1.0} floatIntensity={1.5}>
//       <Trail
//         width={0.8}
//         color="#64ffda"
//         length={8}
//         decay={1}
//         attenuation={(width) => width}
//       >
//         <mesh ref={meshRef} position={[0, -2, 0]}>
//           <sphereGeometry args={[1, 64, 64]} />
//           <MeshDistortMaterial
//             color="#F97316"
//             metalness={0.5}
//             roughness={0.2}
//             wireframe={true}
//             distort={0.3}
//             speed={3}
//           />
//         </mesh>
//       </Trail>
//     </Float>
//   );
// };

// // Tech nodes that appear one by one
// const TechNodes = () => {
//   const [visibleNodes, setVisibleNodes] = useState(0);
  
//   const techs = [
//     { name: "React", pos: [-3, 1, -2], color: "#61DAFB" },
//     { name: "Node.js", pos: [3, 2, -2], color: "#339933" },
//     { name: "TypeScript", pos: [-2, -2, -1], color: "#3178C6" },
//     { name: "Three.js", pos: [2, -1, -2], color: "#049EF4" },
//     { name: "TailwindCSS", pos: [0, 3, -3], color: "#06B6D4" },
//     { name: "MongoDB", pos: [4, 0, -3], color: "#47A248" },
//   ];
  
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setVisibleNodes(prev => {
//         if (prev < techs.length) {
//           return prev + 1;
//         }
//         clearInterval(interval);
//         return prev;
//       });
//     }, 300);
    
//     return () => clearInterval(interval);
//   }, []);
  
//   return (
//     <group>
//       {techs.slice(0, visibleNodes).map((tech, i) => (
//         <group key={i}>
//           <mesh position={tech.pos as [number, number, number]}>
//             <sphereGeometry args={[0.3, 16, 16]} />
//             <meshStandardMaterial color={tech.color} emissive={tech.color} emissiveIntensity={0.5} />
//           </mesh>
//           <Text3D
//             position={[tech.pos[0], tech.pos[1] + 0.5, tech.pos[2]]}
//             size={0.2}
//             height={0.05}
//             curveSegments={12}
//             bevelEnabled={false}
//             font="/fonts/Inter-Bold.json"
//           >
//             {tech.name}
//             <meshStandardMaterial color="white" />
//           </Text3D>
          
//           {/* Add connecting lines between tech nodes */}
//           {i > 0 && (
//             <TechLine 
//               startPoint={techs[i-1].pos as [number, number, number]} 
//               endPoint={tech.pos as [number, number, number]} 
//               color="#ffffff50"
//             />
//           )}
//         </group>
//       ))}
//     </group>
//   );
// };

// // Main scene component
// const Scene = () => {
//   return (
//     <>
//       <ambientLight intensity={0.3} />
//       <pointLight position={[10, 10, 10]} intensity={1} />
//       <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
//       <Cloud position={[0, 0, -15]} speed={0.2} opacity={0.1} />
      
//       <SpinningCube />
//       <FloatingLetters text="PORTFOLIO" />
//       <AnimatedSphere />
//       <TechNodes />
//       <Particles />
      
//       <OrbitControls 
//         enableZoom={false} 
//         autoRotate 
//         autoRotateSpeed={0.5}
//         maxPolarAngle={Math.PI / 2}
//         minPolarAngle={Math.PI / 3}
//       />
//       <Environment preset="city" />
//     </>
//   );
// };

// const Hero3D = () => {
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
//   const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
//     const { clientX, clientY } = e;
//     const { innerWidth, innerHeight } = window;
    
//     // Calculate normalized mouse position between -1 and 1
//     const normalizedX = (clientX / innerWidth) * 2 - 1;
//     const normalizedY = (clientY / innerHeight) * 2 - 1;
    
//     setMousePosition({ x: normalizedX, y: normalizedY });
//   };
  
//   return (
//     <div 
//       className="canvas-container h-screen w-full" 
//       onMouseMove={handleMouseMove}
//       id="home"
//     >
//       <Canvas
//         camera={{ position: [0, 0, 6], fov: 45 }}
//         style={{ 
//           background: 'transparent',
//           transform: `perspective(1000px) rotateX(${mousePosition.y * 5}deg) rotateY(${mousePosition.x * -5}deg)`,
//           transition: 'transform 0.1s ease-out'
//         }}
//       >
//         <Scene />
//       </Canvas>
//       <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10 pointer-events-none">
//         <motion.h1 
//           className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.3 }}
//         >
//           Hi, I'm <span className="bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-500 bg-clip-text text-transparent text-glow">Priya Singh</span>
//         </motion.h1>
        
//         <motion.p 
//           className="text-xl sm:text-2xl md:text-3xl text-slate max-w-2xl mb-10 leading-relaxed"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.6 }}
//         >
//           I create stunning web experiences 
//           <span className="block">with modern technologies</span>
//         </motion.p>
        
//         <motion.div 
//           className="flex flex-wrap gap-4 justify-center pointer-events-auto"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.9 }}
//         >
//           <motion.a
//             href="#projects"
//             className="bg-orange-500 hover:bg-orange-600 text-white border-2 border-orange-500 rounded-full py-3 px-8 transition-all duration-300 font-medium"
//             whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(249, 115, 22, 0.5)' }}
//             whileTap={{ scale: 0.95 }}
//           >
//             View My Work
//           </motion.a>
//         </motion.div>
//       </div>
      
//       <div className="absolute bottom-12 left-0 right-0 flex justify-center">
//         <motion.a
//           href="#projects"
//           className="flex flex-col items-center gap-2 text-slate hover:text-orange-500 transition-colors"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 1.2 }}
//         >
//           <span>Scroll Down</span>
//           <motion.svg 
//             className="w-10 h-10 text-orange-500" 
//             animate={{ y: [0, 10, 0] }}
//             transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
//             viewBox="0 0 24 24" 
//             fill="none" 
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <circle cx="12" cy="12" r="12" fill="currentColor" fillOpacity="0.1"/>
//             <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//           </motion.svg>
//         </motion.a>
//       </div>
//     </div>
//   );
// };

// export default Hero3D;
