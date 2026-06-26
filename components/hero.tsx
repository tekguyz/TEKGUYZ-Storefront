"use client";

import { motion, useScroll, useReducedMotion } from "motion/react";
import { GradientMesh } from "./gradient-mesh";
import { ProductImage } from "./product-image";
import { PriceCounter } from "./price-counter";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

const STAGGER_DELAY = 0.08;

function AnimatedHeadline({ text }: { text: string }) {
  const prefersReducedMotion = useReducedMotion();
  const words = text.split(" ");
  
  return (
    <span className="inline-block">
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.25em]">
          <motion.span
            className="inline-block"
            initial={{ y: "110%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{
              duration: prefersReducedMotion ? 0 : 0.8,
              ease: [0.16, 1, 0.3, 1],
              delay: prefersReducedMotion ? 0 : 0.1 + i * STAGGER_DELAY
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

export default function Hero() {
  const { scrollYProgress } = useScroll();
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative min-h-[100svh] pt-20 pb-8 md:py-[var(--section-padding-y)] overflow-hidden flex flex-col justify-center">
      <motion.div
        style={{ scaleX: scrollYProgress, transformOrigin: "left" }}
        className="fixed top-0 left-0 right-0 h-[2px] bg-[var(--color-accent)] z-[100]"
      />
      <GradientMesh />
      
      <div className="container relative z-10 w-full">
        <div className="grid grid-cols-1 md:grid-cols-[55%_45%] gap-6 md:gap-12 items-center">
          
          <div className="flex flex-col items-start order-2 md:order-1">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.4 }}
            >
              <Badge variant="outline" className="mb-2 md:mb-6 border-[var(--color-accent)] text-[var(--color-accent)] bg-[var(--color-accent-dim)] text-xs tracking-[0.06em] uppercase">
                Complete Student Bundle
              </Badge>
            </motion.div>
            
            <h1 className="font-display text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-[var(--color-text)] leading-[1.1] mb-3 md:mb-6 flex flex-col">
              <AnimatedHeadline text="Downey Voice Writing" />
              <AnimatedHeadline text="Student Bundle" />
            </h1>
            
            <motion.p 
              className="text-sm sm:text-base md:text-lg text-[var(--color-text-muted)] max-w-[520px] mb-4 md:mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: prefersReducedMotion ? 0 : 0.5, duration: prefersReducedMotion ? 0 : 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              A complete, ready-to-use package featuring a business-class 14-inch laptop optimized for voice writers, Eclipse Student Software, professional voice writing equipment, training resources, and support.
            </motion.p>
            
            <div className="flex flex-col gap-1.5 mb-4 md:mb-8">
              <PriceCounter />
              <motion.span 
                className="text-xs sm:text-sm text-[var(--color-text-muted)] font-medium"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: prefersReducedMotion ? 0 : 0.7, duration: prefersReducedMotion ? 0 : 0.4 }}
              >
                or pay over time with PayPal
              </motion.span>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: prefersReducedMotion ? 0 : 0.8, duration: prefersReducedMotion ? 0 : 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="w-full md:w-auto"
            >
              <Button 
                size="lg" 
                className="w-full md:w-auto bg-[var(--color-accent)] hover:brightness-110 text-white rounded-[var(--radius-button)] px-10 py-7 font-semibold text-base shadow-[var(--shadow-cta)] hover:scale-[1.02] hover:-translate-y-[1px] hover:shadow-[0_8px_32px_var(--color-accent-glow)] active:scale-[0.98] transition-all duration-300 cursor-pointer"
                onClick={() => {
                  const el = document.getElementById("paypal-button-container");
                  if (el) {
                    el.scrollIntoView({ behavior: "smooth", block: "center" });
                  }
                }}
              >
                Buy with PayPal &nbsp; &rarr;
              </Button>
            </motion.div>
            
          </div>

          <div className="order-1 md:order-2 w-full flex justify-center items-center mb-4 md:mb-0">
            <ProductImage />
          </div>

        </div>
      </div>
    </section>
  );
}
