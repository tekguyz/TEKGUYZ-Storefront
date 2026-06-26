"use client";

import { motion } from "motion/react";
import { BUNDLE_ITEMS } from "@/lib/constants";
import { BundleCard } from "./bundle-card";
import { cn } from "@/lib/utils";

export default function BundleSection() {
  return (
    <section className="py-[var(--section-padding-y)] bg-[var(--color-base)]">
      <div className="container">
        <div className="text-center mb-[clamp(2.5rem,5vw,4rem)]">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center"
          >
            <h2 className="text-[clamp(2rem,4vw,3rem)] font-extrabold text-[var(--color-text)] leading-tight tracking-tight">
              Everything You Need
            </h2>
            <h3 className="text-[clamp(2rem,4vw,3rem)] font-light text-[var(--color-text-muted)] leading-tight tracking-tight">
              Included in the Bundle
            </h3>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BUNDLE_ITEMS.map((bundle, index) => {
            let gridSpan = "col-span-1";
            if (bundle.id === "computer") {
              gridSpan = "md:col-span-2 lg:col-span-2 lg:row-span-2";
            } else if (bundle.id === "support") {
              gridSpan = "md:col-span-2 lg:col-span-3";
            }

            return (
              <motion.div
                key={bundle.id}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
                className={cn("flex flex-col", gridSpan)}
              >
                <BundleCard id={bundle.id} category={bundle.category} icon={bundle.icon} items={bundle.items} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
