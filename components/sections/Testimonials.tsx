"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/data";

function StarRow() {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#22d3ee">
          <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ))}
    </div>
  );
}

function TestimonialCard({ t }: { t: (typeof TESTIMONIALS)[0] }) {
  return (
    <div className="glow-card rounded-2xl p-7 flex flex-col gap-5 w-[340px] flex-shrink-0">
      <Quote size={28} className="text-cyan-DEFAULT/40" />
      <p className="text-slate-300 text-sm leading-relaxed flex-1 italic">&ldquo;{t.quote}&rdquo;</p>
      <div className="flex items-center justify-between pt-2 border-t border-white/5">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-cyan-DEFAULT/30 to-violet-DEFAULT/30 flex items-center justify-center text-white font-bold text-sm font-display">
            {t.name.charAt(0)}
          </div>
          <div>
            <p className="text-white font-semibold text-sm font-display">{t.name}</p>
            <p className="text-slate-500 text-xs">{t.role}</p>
          </div>
        </div>
        <StarRow />
      </div>
    </div>
  );
}

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const doubled = [...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section id="testimonials" ref={ref} className="relative py-32 overflow-hidden bg-[#070710]">
      {/* Dividers */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-DEFAULT/20 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-violet-DEFAULT/20 to-transparent" />

      <div className="px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55 }}
            className="mb-16 text-center"
          >
            <p className="text-cyan-DEFAULT text-sm font-semibold tracking-widest uppercase mb-3 font-display">
              Client Feedback
            </p>
            <h2 className="font-display font-black text-4xl sm:text-5xl text-white">
              What Clients Say
            </h2>
            <p className="text-slate-400 mt-4 max-w-xl mx-auto">
              Real words from real clients — people who trusted me to build their products.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Marquee — edge fade masks */}
      <div className="relative mt-4">
        <div className="absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-[#070710] to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-[#070710] to-transparent pointer-events-none" />

        <div className="overflow-hidden">
          <div className="marquee-track">
            {doubled.map((t, i) => (
              <TestimonialCard key={i} t={t} />
            ))}
          </div>
        </div>
      </div>

      {/* Stats row */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.3, duration: 0.55 }}
        className="max-w-2xl mx-auto mt-20 px-6 grid grid-cols-3 gap-6 text-center"
      >
        {[
          { value: "100%", label: "Client Satisfaction" },
          { value: "28+", label: "Projects Delivered" },
          { value: "3+", label: "Years Experience" },
        ].map((stat) => (
          <div key={stat.label} className="space-y-1">
            <p className="font-display font-black text-3xl gradient-text">{stat.value}</p>
            <p className="text-slate-500 text-sm">{stat.label}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
