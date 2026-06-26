"use client";

import { motion, useMotionValue, useSpring, useReducedMotion, useTransform } from "motion/react";
import { useEffect } from "react";

export function GradientMesh() {
  const prefersReducedMotion = useReducedMotion();
  const mouseX = useMotionValue(50);
  const mouseY = useMotionValue(50);
  
  const smoothX = useSpring(mouseX, { stiffness: 30, damping: 25 });
  const smoothY = useSpring(mouseY, { stiffness: 30, damping: 25 });

  const x1 = useTransform(smoothX, [0, 100], ["-10%", "10%"]);
  const x2 = useTransform(smoothX, [0, 100], ["5%", "-5%"]);
  const y3 = useTransform(smoothY, [0, 100], ["-8%", "8%"]);

  useEffect(() => {
    if (prefersReducedMotion) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set((e.clientX / window.innerWidth) * 100);
      mouseY.set((e.clientY / window.innerHeight) * 100);
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY, prefersReducedMotion]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <motion.div
        className="absolute -top-[10%] -left-[10%] w-[600px] h-[600px] blur-[80px] will-change-transform"
        style={{
          background: "radial-gradient(circle, var(--gradient-mesh-1) 0%, transparent 70%)",
          x: x1
        }}
      />
      <motion.div
        className="absolute -top-[5%] -right-[5%] w-[500px] h-[500px] blur-[80px] will-change-transform"
        style={{
          background: "radial-gradient(circle, var(--gradient-mesh-2) 0%, transparent 70%)",
          x: x2
        }}
      />
      <motion.div
        className="absolute -bottom-[10%] left-1/2 -translate-x-1/2 w-[400px] h-[400px] blur-[80px] will-change-transform"
        style={{
          background: "radial-gradient(circle, var(--gradient-mesh-3) 0%, transparent 70%)",
          y: y3
        }}
      />
    </div>
  );
}
