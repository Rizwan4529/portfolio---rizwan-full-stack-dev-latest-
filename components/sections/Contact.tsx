"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Github, Linkedin, ArrowUpRight, Sparkles } from "lucide-react";
import { SOCIAL } from "@/lib/data";

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" ref={ref} className="relative py-32 px-6 overflow-hidden">
      {/* Background blobs */}
      <div className="blob blob-cyan w-[600px] h-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10" />
      <div className="blob blob-violet w-[400px] h-[400px] top-1/2 left-1/4 -translate-y-1/2 opacity-10" />

      {/* Grid bg */}
      <div className="absolute inset-0 bg-grid bg-[length:60px_60px] opacity-40" />

      <div className="max-w-4xl mx-auto relative text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
          className="space-y-8"
        >
          {/* Label */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-DEFAULT/25 bg-cyan-DEFAULT/8 text-cyan-DEFAULT text-sm font-semibold font-display">
            <Sparkles size={14} />
            Available for Work
          </div>

          {/* Heading */}
          <div className="space-y-4">
            <h2 className="font-display font-black text-5xl sm:text-6xl xl:text-7xl text-white leading-none">
              Let&apos;s Build
              <br />
              <span className="gradient-text">Something</span>
              <br />
              <span className="text-white">Extraordinary</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-xl mx-auto leading-relaxed">
              Have a project in mind? Whether it&apos;s a web platform, mobile app, or AI integration — I&apos;m ready
              to turn your idea into a polished digital product.
            </p>
          </div>

          {/* Email display */}
          <motion.a
            href={`mailto:${SOCIAL.email}`}
            whileHover={{ scale: 1.03 }}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl border border-white/8 bg-white/[0.03] backdrop-blur-sm text-slate-300 hover:text-white hover:border-cyan-DEFAULT/30 transition-all duration-200 text-lg font-medium group"
          >
            <Mail size={22} className="text-cyan-DEFAULT" />
            {SOCIAL.email}
            <ArrowUpRight size={18} className="text-slate-600 group-hover:text-cyan-DEFAULT transition-colors" />
          </motion.a>

          {/* CTA buttons */}
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <a href={`mailto:${SOCIAL.email}`} className="btn-primary text-base py-3.5 px-8">
              Send Me an Email <ArrowUpRight size={18} />
            </a>
            <a
              href={SOCIAL.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-base py-3.5 px-8"
            >
              <Linkedin size={18} /> Connect on LinkedIn
            </a>
          </div>

          {/* Social row */}
          <div className="flex justify-center gap-6 pt-6">
            <a
              href={SOCIAL.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-2 text-slate-600 hover:text-white transition-colors"
            >
              <div className="w-12 h-12 rounded-xl border border-white/8 bg-white/[0.03] flex items-center justify-center group-hover:border-white/20 group-hover:bg-white/[0.07] transition-all">
                <Github size={20} />
              </div>
              <span className="text-xs">GitHub</span>
            </a>
            <a
              href={SOCIAL.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-2 text-slate-600 hover:text-violet-DEFAULT transition-colors"
            >
              <div className="w-12 h-12 rounded-xl border border-white/8 bg-white/[0.03] flex items-center justify-center group-hover:border-violet-DEFAULT/30 group-hover:bg-violet-DEFAULT/10 transition-all">
                <Linkedin size={20} />
              </div>
              <span className="text-xs">LinkedIn</span>
            </a>
            <a
              href={`mailto:${SOCIAL.email}`}
              className="group flex flex-col items-center gap-2 text-slate-600 hover:text-cyan-DEFAULT transition-colors"
            >
              <div className="w-12 h-12 rounded-xl border border-white/8 bg-white/[0.03] flex items-center justify-center group-hover:border-cyan-DEFAULT/30 group-hover:bg-cyan-DEFAULT/10 transition-all">
                <Mail size={20} />
              </div>
              <span className="text-xs">Email</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
