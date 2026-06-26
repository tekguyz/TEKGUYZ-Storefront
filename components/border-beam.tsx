"use client";

import { motion, useReducedMotion } from "motion/react";
import React, { useEffect, useState } from "react";

export function BorderBeam({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted || prefersReducedMotion) {
    return (
      <div className="relative p-px rounded-[var(--radius-card)] border border-[var(--color-accent)]">
        <div className="relative z-10 bg-[var(--color-surface)] rounded-[calc(var(--radius-card)-1px)] overflow-hidden">
          {children}
        </div>
      </div>
    );
  }

  return (
    <div className="relative p-[1px] rounded-[var(--radius-card)] overflow-hidden">
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          borderRadius: "inherit",
          background: "conic-gradient(from 0deg, transparent 0%, var(--color-accent) 20%, transparent 40%)",
        }}
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 4, ease: "linear", repeat: Infinity }}
      />
      <div 
        className="absolute inset-[1px] z-10 bg-[var(--color-surface)] rounded-[calc(var(--radius-card)-1px)]"
      />
      <div className="relative z-20">
        {children}
      </div>
    </div>
  );
}
