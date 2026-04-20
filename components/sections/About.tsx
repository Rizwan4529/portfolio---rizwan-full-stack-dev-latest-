"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Code2, Smartphone, Brain, Layers } from "lucide-react";
import { SKILLS } from "@/lib/data";

const pillars = [
  {
    icon: <Code2 size={22} />,
    title: "Full Stack Web",
    desc: "End-to-end web applications from pixel-perfect UI to scalable APIs — Next.js, React, Node, MongoDB, PostgreSQL.",
  },
  {
    icon: <Smartphone size={22} />,
    title: "Mobile Apps",
    desc: "13+ cross-platform apps on the Play Store & App Store built with React Native for iOS and Android.",
  },
  {
    icon: <Brain size={22} />,
    title: "AI Integration",
    desc: "5 live AI-powered platforms — from computer vision to generative AI — integrated into production SaaS products.",
  },
  {
    icon: <Layers size={22} />,
    title: "SaaS & Platforms",
    desc: "Production-grade multi-role dashboards, Stripe subscriptions, OCR pipelines, and role-based access systems.",
  },
];

const fadeUp = (i: number) => ({
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.55, ease: "easeOut" },
  },
});

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" ref={ref} className="relative py-32 px-6 overflow-hidden">
      {/* Subtle mid-page glow */}
      <div className="blob blob-violet w-[400px] h-[400px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20" />

      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          variants={fadeUp(0)}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="mb-16"
        >
          <p className="text-cyan-DEFAULT text-sm font-semibold tracking-widest uppercase mb-3 font-display">
            Who I Am
          </p>
          <h2 className="font-display font-black text-4xl sm:text-5xl text-white section-heading">
            About Me
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Bio */}
          <motion.div
            variants={fadeUp(1)}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="space-y-5"
          >
            <p className="text-slate-300 text-lg leading-relaxed">
              I&apos;m a <span className="text-white font-semibold">Full Stack Developer</span> from
              Rawalpindi, Pakistan with a{" "}
              <span className="text-cyan-DEFAULT font-semibold">Bachelor&apos;s degree in Artificial Intelligence</span>.
              I specialize in engineering complete digital products — not just writing code, but
              delivering polished, scalable solutions that actually move businesses forward.
            </p>
            <p className="text-slate-400 leading-relaxed">
              Over the last 3+ years, I&apos;ve shipped 13 mobile apps to the App Store and Play Store,
              built 5 live AI-powered platforms, and delivered production SaaS dashboards with complex
              workflows like OCR processing, Stripe billing, and real-time data pipelines.
            </p>
            <p className="text-slate-400 leading-relaxed">
              I&apos;m equally comfortable designing a React component system and architecting a Node.js
              API — and I care deeply about the details that separate good software from great software.
            </p>

            {/* Certifications */}
            <div className="pt-4 space-y-2">
              <p className="text-xs text-slate-500 uppercase tracking-widest font-display">Certifications</p>
              <div className="flex flex-wrap gap-2">
                {["Full Stack Dev", "Node.js", "React.js", "Git"].map((cert) => (
                  <span key={cert} className="tag-pill">
                    LinkedIn Learning · {cert}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Skills grid */}
          <motion.div
            variants={fadeUp(2)}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="space-y-5"
          >
            <p className="text-xs text-slate-500 uppercase tracking-widest font-display">Tech Stack</p>
            <div className="flex flex-wrap gap-2.5">
              {SKILLS.map((skill, i) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.85 }}
                  transition={{ delay: 0.3 + i * 0.05, duration: 0.35 }}
                  className="skill-pill"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Pillars grid */}
        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-5 mt-20">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              variants={fadeUp(i + 3)}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              className="glow-card rounded-2xl p-6 space-y-4"
            >
              <div className="w-11 h-11 rounded-xl bg-cyan-dim flex items-center justify-center text-cyan-DEFAULT">
                {p.icon}
              </div>
              <h3 className="font-display font-bold text-base text-white">{p.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
