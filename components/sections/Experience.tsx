"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Briefcase, CheckCircle2, Zap } from "lucide-react";
import { EXPERIENCE } from "@/lib/data";

const typeColors: Record<string, string> = {
  "Full-time": "text-cyan-DEFAULT border-cyan-DEFAULT/30 bg-cyan-DEFAULT/10",
  Internship: "text-violet-DEFAULT border-violet-DEFAULT/30 bg-violet-DEFAULT/10",
  Freelance: "text-amber-400 border-amber-400/30 bg-amber-400/10",
};

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" ref={ref} className="relative py-32 px-6 bg-[#070710] overflow-hidden">
      {/* Dividers */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#22d3ee]/40 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#818cf8]/40 to-transparent" />
      {/* Rich gradient atmosphere */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_100%_0%,rgba(34,211,238,0.11),transparent)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_0%_100%,rgba(129,140,248,0.13),transparent)] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-br from-[#22d3ee]/[0.03] via-transparent to-[#818cf8]/[0.05] pointer-events-none" />

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.55 }}
          className="mb-16"
        >
          <p className="text-cyan-DEFAULT text-sm font-semibold tracking-widest uppercase mb-3 font-display">
            My Journey
          </p>
          <h2 className="font-display font-black text-4xl sm:text-5xl text-white section-heading">
            Experience
          </h2>
        </motion.div>

        <div className="relative pl-14">
          <div className="timeline-line" />

          <div className="space-y-12">
            {EXPERIENCE.map((exp, i) => (
              <motion.div
                key={exp.company + exp.role}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ delay: i * 0.15, duration: 0.55, ease: "easeOut" }}
                className="relative"
              >
                {/* Timeline dot */}
                <div className={`timeline-dot absolute -left-14 top-0 ${exp.current ? "border-cyan-DEFAULT shadow-[0_0_20px_rgba(34,211,238,0.4)]" : ""}`}>
                  <Briefcase size={16} className={exp.current ? "text-cyan-DEFAULT" : "text-slate-500"} />
                </div>

                <div className="glow-card card-accent-left rounded-2xl p-7 pl-9 space-y-4">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="font-display font-bold text-lg text-white">{exp.role}</h3>
                        {exp.current && (
                          <span className="inline-flex items-center gap-1.5 text-xs font-bold text-green-400 border border-green-400/30 bg-green-400/10 rounded-full px-2.5 py-0.5 font-display">
                            <Zap size={10} />
                            Current
                          </span>
                        )}
                      </div>
                      <p className="text-slate-400 font-medium">{exp.company}</p>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <span
                        className={`inline-flex items-center gap-1.5 text-xs font-semibold border rounded-full px-3 py-1 font-display ${typeColors[exp.type] ?? "text-slate-400 border-slate-600 bg-slate-800/40"}`}
                      >
                        {exp.type}
                      </span>
                      <span className="text-xs text-slate-500 font-mono">{exp.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {exp.bullets.map((b, j) => (
                      <li key={j} className="flex gap-3 text-slate-400 text-sm leading-relaxed">
                        <CheckCircle2 size={15} className="text-cyan-DEFAULT mt-0.5 flex-shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
