import React, { useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Line, Stars } from "@react-three/drei";

// Custom animated neural network nodes
function NeuralNet() {
  const group = useRef();
  useFrame(({ clock }) => {
    if (group.current) {
      group.current.rotation.z = Math.sin(clock.getElapsedTime() / 4) * 0.08;
      group.current.position.y = Math.sin(clock.getElapsedTime() / 2) * 0.08;
    }
  });
  // Simple interconnected points
  const nodes = [
    [0, 0, 0],
    [0.8, 0.5, 0.2],
    [-0.8, 0.6, 0.4],
    [-1, -0.4, -0.2],
    [1.2, -0.6, -0.4],
    [0.3, -1, 0.1],
    [-0.4, -1.1, 0],
  ];
  const connections = [
    [0,1], [0,2], [0,3], [0,4], [0,5], [0,6],
    [1,2], [2,3], [3,4], [4,5], [5,6], [6,1],
  ];
  return (
    <group ref={group}>
      {/* Nodes */}
      {nodes.map((pos, i) => (
        <mesh key={i} position={pos}>
          <sphereGeometry args={[0.09, 16, 16]} />
          <meshStandardMaterial color="#5ec6fa" emissive="#7fd5ff" emissiveIntensity={0.25} />
        </mesh>
      ))}
      {/* Connections */}
      {connections.map(([a, b], i) => (
        <Line
          key={i}
          points={[nodes[a], nodes[b]]}
          color="#99cafc"
          lineWidth={1.5}
          dashed={false}
        />
      ))}
    </group>
  );
}

export default function AnimatedBackground() {
  return (
    <div className="relative w-full min-h-[350px] max-h-[400px] h-[350px] md:h-[400px] bg-gradient-to-br from-[#172848] to-[#2962ff] overflow-hidden rounded-2xl shadow-2xl flex items-center justify-center" style={{ minWidth: '100%', minHeight: '350px' }}>
      {/* 3D background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 4], fov: 40 }}>
          <ambientLight intensity={0.6} />
          <pointLight position={[3, 5, 10]} intensity={1.3} color="#6bb3ff" />
          <NeuralNet />
          <Stars radius={7} depth={10} count={1200} factor={0.5} saturation={0.4} fade speed={1} />
          <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
        </Canvas>
      </div>
      {/* Overlay content */}
      <div className="relative z-10 flex flex-col items-center w-full h-full justify-center">
        <h1 className="font-extrabold text-center text-[3.8rem] md:text-[5rem] text-white drop-shadow-xl tracking-tight">
          Stratify <span className="text-[#5ec6fa]">AI Co</span>
        </h1>
        <div className="flex flex-wrap items-center justify-center mt-2 gap-3 md:gap-7 animate-fadein">
          {[
            { label: "Innovation", color: "#41e3f2" },
            { label: "Trust", color: "#b3e2ff" },
            { label: "Global Vision", color: "#5ec6fa" },
            { label: "AI for Business Impact", color: "#2962ff" },
          ].map((item, i) => (
            <span
              key={item.label}
              className="rounded-full px-4 py-1 text-base md:text-lg font-semibold border border-white/20 shadow backdrop-blur bg-white/5 text-white"
              style={{ boxShadow: `0 2px 20px ${item.color}44`, textShadow: `0 1px 2px ${item.color}` }}
            >
              {item.label}
            </span>
          ))}
        </div>
        {/* Subtle 3D lines or flows as SVG overlay for extra depth */}
        <svg className="absolute top-0 left-0 w-full h-full z-5 pointer-events-none" width="100%" height="100%">
          <defs>
            <linearGradient id="flow1" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0%" stopColor="#5ec6fa" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#2962ff" stopOpacity="0.05" />
            </linearGradient>
          </defs>
          <path d="M0,200 Q350,350 1400,100" stroke="url(#flow1)" strokeWidth="5" fill="none" opacity="0.35" />
          <path d="M0,100 Q600,0 1400,200" stroke="url(#flow1)" strokeWidth="3" fill="none" opacity="0.20" />
        </svg>
      </div>
    </div>
  );
} 