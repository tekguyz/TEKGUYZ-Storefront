"use client";

import { motion, useMotionValue, useSpring, useReducedMotion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { PRODUCT } from "@/lib/constants";

const IMAGES = [
  "/downey-voicewriting-student-14.jpg",
  "/p14s-g6-front.png",
  "/p14s-g6-left-angle-front.png",
  "/p14s-g6-right-angle-front.png",
  "/p14s-g6-top-view.png",
  "/p14s-g6-flat.png",
  "/p14s-g6-back-view-angled-2.png",
  "/p14s-g6-back-view-angled.png",
  "/p14s-g6-right-side-semi-close.png",
  "/p14s-g6-closed-top-view-back.png",
  "/p14s-g6-bottom-view-closed.png",
];

export function ProductImage() {
  const prefersReducedMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { resolvedTheme } = useTheme();

  // Core motion values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring interpolations
  const rotateX = useSpring(mouseY, { stiffness: 60, damping: 25 });
  const rotateY = useSpring(mouseX, { stiffness: 60, damping: 25 });

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === "dark";

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReducedMotion || !mounted) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    // Normalize to: rotateX (driven by Y offset) is -8 to +8 deg, rotateY (driven by X offset) is -6 to +6 deg
    const degreesX = -(y / (rect.height / 2)) * 8;
    const degreesY = (x / (rect.width / 2)) * 6;

    mouseX.set(degreesY);
    mouseY.set(degreesX);
  };

  const handleMouseLeave = () => {
    if (prefersReducedMotion || !mounted) return;
    mouseX.set(0);
    mouseY.set(0);
  };

  const nextImage = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % IMAGES.length);
  };

  const prevImage = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + IMAGES.length) % IMAGES.length);
  };

  return (
    <div className="w-full flex flex-col items-center gap-6">
      <div 
        className="relative w-full flex justify-center items-center group touch-pan-y"
        style={{ perspective: "1200px" }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <button 
          onClick={prevImage}
          className="absolute left-0 md:left-4 z-20 p-2 md:p-3 bg-[var(--color-base)]/80 hover:bg-[var(--color-base)] text-[var(--color-text)] rounded-full backdrop-blur-sm border border-[var(--color-border-subtle)] shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.9, ease: [0.16, 1, 0.3, 1], delay: prefersReducedMotion ? 0 : 0.3 }}
          style={{
            rotateX: prefersReducedMotion ? 0 : rotateX,
            rotateY: prefersReducedMotion ? 0 : rotateY,
            transformStyle: "preserve-3d"
          }}
          className="w-full flex justify-center aspect-square max-h-[200px] xs:max-h-[240px] sm:max-h-[300px] md:max-h-[340px] relative rounded-2xl transition-all duration-300 p-2 overflow-visible bg-transparent border-none shadow-none"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 flex justify-center items-center p-2"
            >
              <Image
                src={IMAGES[currentIndex]}
                alt={`${PRODUCT.name} view ${currentIndex + 1}`}
                width={620}
                height={520}
                priority={currentIndex === 0}
                className={cn(
                  "object-contain w-full h-full max-w-[280px] sm:max-w-[340px] md:max-w-none mx-auto drop-shadow-[0_12px_24px_rgba(0,0,0,0.08)] transition-all duration-300 pointer-events-none",
                  currentIndex === 0 && "mix-blend-multiply"
                )}
              />
            </motion.div>
          </AnimatePresence>
        </motion.div>

        <button 
          onClick={nextImage}
          className="absolute right-0 md:right-4 z-20 p-2 md:p-3 bg-white/80 hover:bg-white text-zinc-900 rounded-full backdrop-blur-sm border border-zinc-200 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          aria-label="Next image"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Thumbnails */}
      <div className="flex gap-2 overflow-x-auto max-w-full pb-2 px-2 scrollbar-hide snap-x">
        {IMAGES.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={cn(
              "relative flex-shrink-0 w-16 h-12 md:w-20 md:h-14 rounded-md overflow-hidden border-2 transition-all duration-200 snap-center p-0.5",
              isDark ? "bg-zinc-900 hover:bg-zinc-800" : "bg-white hover:bg-zinc-50",
              currentIndex === idx 
                ? "border-[var(--color-accent)] opacity-100 scale-105" 
                : isDark
                  ? "border-zinc-800/80 opacity-70 hover:opacity-100"
                  : "border-zinc-200/60 opacity-60 hover:opacity-100 hover:border-zinc-300"
            )}
          >
            <Image
              src={img}
              alt={`Thumbnail ${idx + 1}`}
              fill
              className={cn(
                "object-contain p-1",
                idx === 0 && "mix-blend-multiply"
              )}
            />
          </button>
        ))}
      </div>
    </div>
  );
}

