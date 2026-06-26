"use client";

import { motion, useMotionValue, animate, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { PRODUCT } from "@/lib/constants";

export function PriceCounter() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const count = useMotionValue(0);
  const [displayValue, setDisplayValue] = useState("$0.00");
  
  useEffect(() => {
    const unsubscribe = count.on("change", (latest) => {
      setDisplayValue(`$${Math.round(latest).toLocaleString()}.00`);
    });
    return () => unsubscribe();
  }, [count]);

  useEffect(() => {
    if (isInView) {
      animate(count, PRODUCT.price, {
        duration: 1.6,
        ease: [0.16, 1, 0.3, 1],
      });
    }
  }, [isInView, count]);

  return (
    <div ref={ref} className="flex flex-col">
      <motion.span className="font-display font-extrabold text-[clamp(3rem,8vw,5.5rem)] text-[var(--color-text)] leading-none tracking-tight">
        {displayValue}
      </motion.span>
    </div>
  );
}
