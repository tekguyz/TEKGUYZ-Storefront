"use client";

import { motion } from "motion/react";
import { 
  Laptop, 
  Cpu, 
  Mic, 
  GraduationCap, 
  HardDrive, 
  ShieldCheck, 
  Monitor, 
  CheckCircle2, 
  Zap, 
  Layers,
  Award
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function BundleSection() {
  return (
    <section id="bundle-details" className="py-[var(--section-padding-y)] bg-[var(--color-base)] border-t border-[var(--color-border-subtle)]">
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
            <p className="text-sm sm:text-base text-[var(--color-text-muted)] max-w-xl mt-4 leading-relaxed">
              No guesswork. Every component is hand-picked, pre-configured, and guaranteed to work seamlessly with your school&apos;s curriculum.
            </p>
          </motion.div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Column 1 & 2: Core Computer Console (Flagship Item) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-2 bg-[var(--color-surface)] border border-accent/20 rounded-[var(--radius-card)] p-6 sm:p-8 md:p-10 shadow-[var(--shadow-card)] flex flex-col justify-between relative overflow-hidden bg-gradient-to-br from-[var(--color-surface)] via-[var(--color-surface)] to-[var(--color-accent-dim)]"
          >
            {/* Top Badge & Header */}
            <div>
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[var(--color-accent-dim)] flex items-center justify-center shrink-0 border border-accent/10">
                    <Laptop className="w-6 h-6 text-[var(--color-accent)]" />
                  </div>
                  <div>
                    <span className="text-[10px] text-[var(--color-accent)] font-semibold tracking-wider uppercase bg-[var(--color-accent-dim)] px-2 py-0.5 rounded-full inline-block mb-1 border border-accent/10">
                      Featured Core System
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-[var(--color-text)] tracking-tight">
                      Computer System
                    </h3>
                  </div>
                </div>
                <div className="text-xs font-mono bg-zinc-800/10 dark:bg-zinc-100/10 text-[var(--color-text-muted)] px-3 py-1 rounded-md border border-[var(--color-border-subtle)]">
                  CHASSIS: 14&quot; Business-Class
                </div>
              </div>

              <p className="text-[0.9375rem] text-[var(--color-text-muted)] mb-8 leading-relaxed">
                A enterprise-grade laptop designed to support demanding real-time voice writing workloads with ultra-low latency and absolute stability.
              </p>

              {/* Technical Specifications Spec-Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {/* Spec 1 */}
                <div className="p-4 rounded-xl bg-[var(--color-base)] border border-[var(--color-border-subtle)] flex flex-col justify-between hover:border-accent/30 transition-all duration-200">
                  <div className="flex items-center gap-2 text-[var(--color-accent)] mb-2">
                    <Cpu className="w-4 h-4" />
                    <span className="text-[10px] font-mono tracking-wider uppercase">Processor</span>
                  </div>
                  <span className="text-sm font-semibold text-[var(--color-text)]">AMD Ryzen AI PRO</span>
                  <span className="text-[11px] text-[var(--color-text-muted)] mt-1 font-mono">Series PRO 350 NPU</span>
                </div>

                {/* Spec 2 */}
                <div className="p-4 rounded-xl bg-[var(--color-base)] border border-[var(--color-border-subtle)] flex flex-col justify-between hover:border-accent/30 transition-all duration-200">
                  <div className="flex items-center gap-2 text-[var(--color-accent)] mb-2">
                    <Layers className="w-4 h-4" />
                    <span className="text-[10px] font-mono tracking-wider uppercase">Memory</span>
                  </div>
                  <span className="text-sm font-semibold text-[var(--color-text)]">32GB Dual-Channel</span>
                  <span className="text-[11px] text-[var(--color-text-muted)] mt-1 font-mono">DDR5 High-Frequency</span>
                </div>

                {/* Spec 3 */}
                <div className="p-4 rounded-xl bg-[var(--color-base)] border border-[var(--color-border-subtle)] flex flex-col justify-between hover:border-accent/30 transition-all duration-200">
                  <div className="flex items-center gap-2 text-[var(--color-accent)] mb-2">
                    <HardDrive className="w-4 h-4" />
                    <span className="text-[10px] font-mono tracking-wider uppercase">Storage</span>
                  </div>
                  <span className="text-sm font-semibold text-[var(--color-text)]">1TB SSD NVMe</span>
                  <span className="text-[11px] text-[var(--color-text-muted)] mt-1 font-mono">PCIe Lightning Speed</span>
                </div>

                {/* Spec 4 */}
                <div className="p-4 rounded-xl bg-[var(--color-base)] border border-[var(--color-border-subtle)] flex flex-col justify-between hover:border-accent/30 transition-all duration-200">
                  <div className="flex items-center gap-2 text-[var(--color-accent)] mb-2">
                    <Monitor className="w-4 h-4" />
                    <span className="text-[10px] font-mono tracking-wider uppercase">Form Factor</span>
                  </div>
                  <span className="text-sm font-semibold text-[var(--color-text)]">14&quot; Business Panel</span>
                  <span className="text-[11px] text-[var(--color-text-muted)] mt-1 font-mono">Anti-Glare, Eye-Safe</span>
                </div>

                {/* Spec 5 */}
                <div className="p-4 rounded-xl bg-[var(--color-base)] border border-[var(--color-border-subtle)] flex flex-col justify-between hover:border-accent/30 transition-all duration-200">
                  <div className="flex items-center gap-2 text-[var(--color-accent)] mb-2">
                    <CheckCircle2 className="w-4 h-4" />
                    <span className="text-[10px] font-mono tracking-wider uppercase">Optimization</span>
                  </div>
                  <span className="text-sm font-semibold text-[var(--color-text)]">Eclipse Ready</span>
                  <span className="text-[11px] text-[var(--color-text-muted)] mt-1 font-mono">Speechmatics Certified</span>
                </div>

                {/* Spec 6 */}
                <div className="p-4 rounded-xl bg-[var(--color-base)] border border-[var(--color-border-subtle)] flex flex-col justify-between hover:border-accent/30 transition-all duration-200">
                  <div className="flex items-center gap-2 text-[var(--color-accent)] mb-2">
                    <ShieldCheck className="w-4 h-4" />
                    <span className="text-[10px] font-mono tracking-wider uppercase">Warranty</span>
                  </div>
                  <span className="text-sm font-semibold text-[var(--color-text)]">3-Yr Premier Support</span>
                  <span className="text-[11px] text(--color-text-muted) mt-1 font-mono">Next-Business-Day Assistance</span>
                </div>
              </div>
            </div>

            {/* Included Accessories Tray */}
            <div className="mt-8 pt-6 border-t border-[var(--color-border-subtle)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-[var(--color-accent)] shrink-0 animate-pulse" />
                <span className="text-xs font-semibold text-[var(--color-text)] uppercase tracking-wider font-mono">Included Workspace Extras</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-[var(--color-base)] text-[var(--color-text-muted)] border border-[var(--color-border-subtle)] px-3 py-1 rounded-md">
                  4-Port Premium USB Hub
                </span>
                <span className="text-xs bg-[var(--color-base)] text-[var(--color-text-muted)] border border-[var(--color-border-subtle)] px-3 py-1 rounded-md">
                  Tailored Protective Laptop Case
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Audio Gear & Software Stack */}
          <div className="flex flex-col gap-6">
            
            {/* Voice Writing Equipment Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-[var(--radius-card)] p-6 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] hover:border-accent/40 transition-all duration-300 flex flex-col justify-between flex-1"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[var(--color-accent-dim)] flex items-center justify-center shrink-0">
                    <Mic className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold tracking-[0.04em] uppercase text-[var(--color-text-muted)]">
                      Voice Writing Gear
                    </h3>
                  </div>
                </div>
                <div className="h-px w-full bg-[var(--color-border-subtle)] my-3" />
                
                <ul className="space-y-3.5 mt-4">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] mt-[9px] shrink-0" />
                    <div>
                      <span className="text-[0.9375rem] font-medium text-[var(--color-text)] block">Ultimate Double Dragon 2 Stenomask</span>
                      <span className="text-[11px] text-[var(--color-text-muted)]">Accurate voice capturing in noisy or classroom environments.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] mt-[9px] shrink-0" />
                    <div>
                      <span className="text-[0.9375rem] font-medium text-[var(--color-text)] block">MuffleMitt-AM Sound Cover</span>
                      <span className="text-[11px] text-[var(--color-text-muted)]">Specially lined to absorb sound and suppress voice feedback.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] mt-[9px] shrink-0" />
                    <div>
                      <span className="text-[0.9375rem] font-medium text-[var(--color-text)] block">High-Fidelity Headphones</span>
                      <span className="text-[11px] text-[var(--color-text-muted)]">Crystal clear stereo reproduction for precise auditing.</span>
                    </div>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Software Suite Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-[var(--radius-card)] p-6 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] hover:border-accent/40 transition-all duration-300 flex flex-col justify-between flex-1"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[var(--color-accent-dim)] flex items-center justify-center shrink-0">
                    <Cpu className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold tracking-[0.04em] uppercase text-[var(--color-text-muted)]">
                      Eclipse Software Suite
                    </h3>
                  </div>
                </div>
                <div className="h-px w-full bg-[var(--color-border-subtle)] my-3" />
                
                <ul className="space-y-3.5 mt-4">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] mt-[9px] shrink-0" />
                    <div>
                      <span className="text-[0.9375rem] font-medium text-[var(--color-text)] block">Eclipse Student Edition License</span>
                      <span className="text-[11px] text-[var(--color-text-muted)]">Industry standard CAT software preloaded and activated.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] mt-[9px] shrink-0" />
                    <div>
                      <span className="text-[0.9375rem] font-medium text-[var(--color-text)] block">500 Speech Recognition Hours</span>
                      <span className="text-[11px] text-[var(--color-text-muted)]">Invaluable built-in cloud-based translation allowance.</span>
                    </div>
                  </li>
                </ul>
              </div>
            </motion.div>

          </div>

          {/* Bottom Full-Width Training & Support Block */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="lg:col-span-3 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-[var(--radius-card)] p-6 sm:p-8 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-all duration-300"
          >
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-[var(--color-accent-dim)] flex items-center justify-center shrink-0">
                <GraduationCap className="w-6 h-6 text-[var(--color-accent)]" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[var(--color-text)]">
                  Elite Student Support &amp; Webinars
                </h3>
                <p className="text-xs text-[var(--color-text-muted)] mt-0.5">
                  We don&apos;t just deliver hardware — we stand beside you through graduation.
                </p>
              </div>
            </div>

            <div className="h-px w-full bg-[var(--color-border-subtle)] mb-6" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Support detail */}
              <div className="p-5 rounded-xl bg-[var(--color-base)] border border-[var(--color-border-subtle)] hover:border-accent/20 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--color-accent-dim)] text-xs font-semibold text-[var(--color-accent)]">1</span>
                  <span className="font-semibold text-sm text-[var(--color-text)]">Anytime Support™ Direct Helpline</span>
                </div>
                <p className="text-xs sm:text-sm text-[var(--color-text-muted)] leading-relaxed pl-9">
                  Instant, priority remote assistance for court reporting students. Call our live technicians anytime to resolve setup or driver challenges.
                </p>
              </div>

              {/* Webinar credit detail */}
              <div className="p-5 rounded-xl bg-[var(--color-base)] border border-[var(--color-border-subtle)] hover:border-accent/20 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--color-accent-dim)] text-xs font-semibold text-[var(--color-accent)]">2</span>
                  <span className="font-semibold text-sm text-[var(--color-text)]">$400 Webinar Credit Allowance</span>
                </div>
                <p className="text-xs sm:text-sm text-[var(--color-text-muted)] leading-relaxed pl-9">
                  Receive a complementary $400 training credit to attend specialized voice writing webinars, added directly alongside your school discount.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
