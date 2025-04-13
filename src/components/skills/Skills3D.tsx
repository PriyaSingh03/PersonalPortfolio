
import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { MeshWobbleMaterial, Float } from "@react-three/drei";
import * as THREE from "three";
import { skills } from "./skillsData";

const Skill3D = ({ 
  position, 
  color, 
  rotation 
}: { 
  position: [number, number, number]; 
  color: string; 
  rotation: [number, number, number] 
}) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.005;
      meshRef.current.rotation.y += 0.005;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={meshRef} position={position} rotation={rotation}>
        <dodecahedronGeometry args={[0.8, 0]} />
        <MeshWobbleMaterial color={color} factor={0.3} speed={2} />
      </mesh>
    </Float>
  );
};

const Skills3D = () => {
  const positions: [number, number, number][] = [
    [-4, 2, 0],
    [-2, -2, 2],
    [0, 3, -2],
    [2, -1, 0],
    [4, 1, -3],
  ];

  const colors = ["#61DAFB", "#F7DF1E", "#3178C6", "#06B6D4", "#339933"];
  const rotations: [number, number, number][] = [
    [0, 0, 0],
    [0.5, 0.5, 0],
    [0, 0.8, 0.3],
    [0.3, 0, 0.4],
    [0.5, 0.3, 0],
  ];

  const skillsToShow = skills.slice(0, 5);

  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      {skillsToShow.map((skill, i) => (
        <Skill3D
          key={i}
          position={positions[i]}
          color={colors[i]}
          rotation={rotations[i]}
        />
      ))}
    </>
  );
};

const Skills3DCanvas = () => {
  return (
    <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
      <Skills3D />
    </Canvas>
  );
};

export default Skills3DCanvas;
