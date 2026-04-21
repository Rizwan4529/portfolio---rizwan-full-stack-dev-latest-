"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowRight, Download } from "lucide-react";
import { SOCIAL, STATS, ROLES, VALUE_PITCH } from "@/lib/data";

function TypewriterText({ texts }: { texts: string[] }) {
  const [idx, setIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = texts[idx];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setIdx((prev) => (prev + 1) % texts.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, idx, texts]);

  return (
    <span className="text-slate-300">
      {displayed}
      <span className="inline-block w-0.5 h-6 bg-cyan-DEFAULT ml-1 animate-pulse" />
    </span>
  );
}

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1800;
    const step = Math.ceil(duration / value);
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= value) clearInterval(timer);
    }, step);
    return () => clearInterval(timer);
  }, [value]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" },
  }),
};

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-grid bg-[length:60px_60px]">
      {/* Gradient atmosphere */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_0%_0%,rgba(34,211,238,0.18),transparent)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_100%_100%,rgba(129,140,248,0.18),transparent)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_30%_at_70%_20%,rgba(129,140,248,0.10),transparent)] pointer-events-none" />
      {/* Diagonal color band */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#22d3ee]/[0.04] via-transparent to-[#818cf8]/[0.06] pointer-events-none" />
      <div className="blob blob-cyan w-[700px] h-[700px] top-[-150px] left-[-200px] opacity-50" />
      <div className="blob blob-violet w-[600px] h-[600px] bottom-[-100px] right-[-150px] opacity-45" />

      <div className="max-w-7xl mx-auto px-6 pt-28 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ── Left content ── */}
          <div className="flex flex-col gap-7 order-2 lg:order-1">

            {/* Available badge */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0}
            >
              <span className="badge-available">
                <span className="badge-dot" />
                Available for Freelance
              </span>
            </motion.div>

            {/* Name + glitch */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={1}
              className="space-y-1"
            >
              <p className="text-slate-500 text-sm font-medium tracking-widest uppercase font-display">
                Hello, I&apos;m
              </p>
              <h1
                className="glitch font-display font-black text-5xl sm:text-6xl xl:text-7xl leading-none text-white"
                data-text="MUHAMMAD"
              >
                MUHAMMAD
              </h1>
              <h1 className="font-display font-black text-5xl sm:text-6xl xl:text-7xl leading-none gradient-text glow-cyan">
                RIZWAN
              </h1>
            </motion.div>

            {/* Typewriter */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={2}
              className="font-display text-xl sm:text-2xl font-semibold min-h-[2rem]"
            >
              {mounted && <TypewriterText texts={ROLES} />}
            </motion.div>

            {/* Value pitch */}
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={3}
              className="text-slate-400 text-base leading-relaxed max-w-xl"
            >
              {VALUE_PITCH}
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={4}
              className="flex flex-wrap gap-3"
            >
              <a href="#projects" className="btn-primary" onClick={(e) => { e.preventDefault(); document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }); }}>
                View My Work <ArrowRight size={16} />
              </a>
              <a href={`mailto:${SOCIAL.email}`} className="btn-secondary">
                Let&apos;s Talk
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={5}
              className="flex items-center gap-5"
            >
              <a
                href={SOCIAL.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-slate-500 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} className="group-hover:scale-110 transition-transform" />
                <span className="text-xs hidden sm:inline">GitHub</span>
              </a>
              <a
                href={SOCIAL.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-slate-500 hover:text-[#818cf8] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} className="group-hover:scale-110 transition-transform" />
                <span className="text-xs hidden sm:inline">LinkedIn</span>
              </a>
              <a
                href={`mailto:${SOCIAL.email}`}
                className="group flex items-center gap-2 text-slate-500 hover:text-[#22d3ee] transition-colors"
                aria-label="Email"
              >
                <Mail size={20} className="group-hover:scale-110 transition-transform" />
                <span className="text-xs hidden sm:inline">{SOCIAL.email}</span>
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={6}
              className="space-y-4 pt-2"
            >
              <div className="gradient-divider" />
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {STATS.map((stat) => (
                  <div key={stat.label} className="space-y-1">
                    <p className="font-display font-black text-2xl gradient-text">
                      {mounted ? (
                        <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                      ) : (
                        `${stat.value}${stat.suffix}`
                      )}
                    </p>
                    <p className="text-xs text-slate-500 leading-snug">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* ── Right — Headshot ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] xl:w-[400px] xl:h-[400px]">
              {/* Outer glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-DEFAULT/20 via-violet-DEFAULT/10 to-transparent blur-2xl animate-glow-pulse" />

              {/* Rings */}
              <div className="photo-ring" />
              <div className="photo-ring-2" />

              {/* Floating tech badges */}
              <motion.div
                animate={{ y: [-6, 6, -6] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 bg-surface border border-cyan-DEFAULT/20 rounded-xl px-3 py-1.5 text-xs font-display font-semibold text-cyan-DEFAULT shadow-lg"
              >
                React Native
              </motion.div>
              <motion.div
                animate={{ y: [6, -6, 6] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-4 bg-surface border border-violet-DEFAULT/20 rounded-xl px-3 py-1.5 text-xs font-display font-semibold text-violet-DEFAULT shadow-lg"
              >
                Next.js
              </motion.div>
              <motion.div
                animate={{ x: [-5, 5, -5] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 -left-12 -translate-y-1/2 bg-surface border border-green-400/20 rounded-xl px-3 py-1.5 text-xs font-display font-semibold text-green-400 shadow-lg hidden sm:block"
              >
                AI Builder
              </motion.div>

              {/* Photo frame */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white/5 shadow-[0_0_60px_rgba(34,211,238,0.15)]">
                <Image
                  src="/images/hero-img.jpeg"
                  alt="Muhammad Rizwan"
                  fill
                  priority
                  className="object-cover object-top"
                  style={{ mixBlendMode: "screen" }}
                />
                {/* Edge fade */}
                <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/10" />
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <p className="text-xs text-slate-600 tracking-widest uppercase">Scroll</p>
        <div className="w-px h-12 bg-gradient-to-b from-cyan-DEFAULT/40 to-transparent" />
      </motion.div>
    </section>
  );
}
