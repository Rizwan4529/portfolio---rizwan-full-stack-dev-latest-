"use client";

import {
  useRef,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
} from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Github,
  Smartphone,
  Globe,
  Layout,
  ChevronLeft,
  ChevronRight,
  Eye,
  X,
} from "lucide-react";
import { PROJECTS, type ProjectCategory } from "@/lib/data";

// ─── Types ────────────────────────────────────────────────────────
type FilterTab = "all" | ProjectCategory;
type Slide = { type: "image"; src: string } | { type: "placeholder"; gradient: string; icon: ReactNode };

// ─── Placeholder slide generator ──────────────────────────────────
const WEB_GRADIENTS = [
  "from-cyan-400/20 via-violet-500/10 to-[#030307]",
  "from-violet-500/20 via-indigo-400/10 to-[#030307]",
  "from-indigo-400/15 via-cyan-400/10 to-[#030307]",
];
const MOBILE_GRADIENTS = [
  "from-green-400/20 via-cyan-400/10 to-[#030307]",
  "from-cyan-400/15 via-teal-400/10 to-[#030307]",
  "from-teal-400/15 via-green-400/10 to-[#030307]",
];

function getSlides(project: (typeof PROJECTS)[0]): Slide[] {
  if (project.images && project.images.length > 0) {
    return project.images.map((src) => ({ type: "image", src }));
  }
  const grads = project.category === "mobile" ? MOBILE_GRADIENTS : WEB_GRADIENTS;
  const icon =
    project.category === "mobile" ? (
      <Smartphone size={36} className="text-white/20" />
    ) : (
      <Globe size={36} className="text-white/20" />
    );
  return grads.map((gradient) => ({ type: "placeholder", gradient, icon }));
}

// ─── Auto-advancing carousel hook ────────────────────────────────
function useCarousel(count: number, paused: boolean) {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    if (paused || count <= 1) return;
    const t = setInterval(() => setIdx((i) => (i + 1) % count), 2800);
    return () => clearInterval(t);
  }, [count, paused]);

  const prev = useCallback(() => setIdx((i) => (i - 1 + count) % count), [count]);
  const next = useCallback(() => setIdx((i) => (i + 1) % count), [count]);
  return { idx, setIdx, prev, next };
}

// ─── Single slide renderer ─────────────────────────────────────────
function SlideView({ slide }: { slide: Slide }) {
  if (slide.type === "image") {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img src={slide.src} alt="" className="w-full h-full object-cover" />
    );
  }
  return (
    <div className={`w-full h-full bg-gradient-to-br ${slide.gradient} flex items-center justify-center`}>
      {slide.icon}
    </div>
  );
}

// ─── Full-screen modal ─────────────────────────────────────────────
function ImageModal({
  slides,
  initial,
  onClose,
}: {
  slides: Slide[];
  initial: number;
  onClose: () => void;
}) {
  const [idx, setIdx] = useState(initial);

  const prev = () => setIdx((i) => (i - 1 + slides.length) % slides.length);
  const next = () => setIdx((i) => (i + 1) % slides.length);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  });

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[9000] flex items-center justify-center bg-black/90 backdrop-blur-xl"
        onClick={onClose}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 flex items-center justify-center text-white transition-colors"
        >
          <X size={18} />
        </button>

        {/* Image container */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.25 }}
          className="relative w-[90vw] max-w-4xl aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.25 }}
              className="absolute inset-0"
            >
              <SlideView slide={slides[idx]} />
            </motion.div>
          </AnimatePresence>

          {/* Nav arrows */}
          {slides.length > 1 && (
            <>
              <button
                onClick={prev}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 border border-white/10 flex items-center justify-center text-white transition-colors"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={next}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 border border-white/10 flex items-center justify-center text-white transition-colors"
              >
                <ChevronRight size={20} />
              </button>
            </>
          )}

          {/* Dots */}
          {slides.length > 1 && (
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIdx(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${i === idx ? "w-5 bg-white" : "w-1.5 bg-white/30"}`}
                />
              ))}
            </div>
          )}

          {/* Slide counter */}
          <div className="absolute top-3 right-3 text-xs text-white/60 bg-black/50 px-2 py-0.5 rounded-full font-mono">
            {idx + 1} / {slides.length}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

// ─── Project Card ──────────────────────────────────────────────────
function ProjectCard({
  project,
  index,
}: {
  project: (typeof PROJECTS)[0];
  index: number;
}) {
  const slides = getSlides(project);
  const [hovered, setHovered] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const { idx, setIdx, prev, next } = useCarousel(slides.length, hovered || modalOpen);

  const isMobile = project.category === "mobile";
  const liveLabel = isMobile ? "View on Store" : "Live Site";

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.06, duration: 0.4 }}
        className="glow-card rounded-2xl overflow-hidden flex flex-col group"
      >
        {/* ── Carousel image area ── */}
        <div
          className="relative h-48 overflow-hidden cursor-pointer"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {/* Slides */}
          <AnimatePresence mode="wait">
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -16 }}
              transition={{ duration: 0.35 }}
              className="absolute inset-0"
            >
              <SlideView slide={slides[idx]} />
            </motion.div>
          </AnimatePresence>

          {/* Hover overlay with controls */}
          <AnimatePresence>
            {hovered && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.18 }}
                className="absolute inset-0 bg-black/55 backdrop-blur-sm flex items-center justify-center gap-3"
              >
                <button
                  onClick={(e) => { e.stopPropagation(); prev(); }}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/25 border border-white/20 flex items-center justify-center text-white transition-all hover:scale-110"
                  aria-label="Previous"
                >
                  <ChevronLeft size={17} />
                </button>
                <button
                  onClick={() => setModalOpen(true)}
                  className="w-10 h-10 rounded-full bg-white/15 hover:bg-white/30 border border-white/25 flex items-center justify-center text-white transition-all hover:scale-110"
                  aria-label="Preview"
                >
                  <Eye size={17} />
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); next(); }}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/25 border border-white/20 flex items-center justify-center text-white transition-all hover:scale-110"
                  aria-label="Next"
                >
                  <ChevronRight size={17} />
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Dot indicators */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                className={`h-1 rounded-full transition-all duration-300 ${i === idx ? "w-4 bg-white" : "w-1 bg-white/30"}`}
              />
            ))}
          </div>
        </div>

        {/* ── Card body ── */}
        <div className="p-5 flex flex-col flex-1 gap-3.5">
          {/* Title */}
          <div>
            <h3 className="font-display font-bold text-base text-white group-hover:text-[#22d3ee] transition-colors leading-snug">
              {project.title}
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed mt-1.5 line-clamp-3">
              {project.description}
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 flex-1">
            {project.tags.slice(0, 4).map((tag) => (
              <span key={tag} className="tag-pill">{tag}</span>
            ))}
            {project.tags.length > 4 && (
              <span className="tag-pill">+{project.tags.length - 4}</span>
            )}
          </div>

          {/* ── CTA row ── */}
          <div className="flex gap-2 pt-1">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 btn-primary text-xs py-2.5 justify-center"
              >
                <ExternalLink size={13} />
                {liveLabel}
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`${project.liveUrl ? "" : "flex-1"} btn-secondary text-xs py-2.5 justify-center gap-1.5`}
              >
                <Github size={13} />
                {!project.liveUrl ? "View on GitHub" : ""}
              </a>
            )}
            {!project.liveUrl && !project.githubUrl && (
              <div className="flex-1 px-4 py-2.5 rounded-lg border border-white/5 text-center text-xs text-slate-600 italic">
                Private project
              </div>
            )}
          </div>
        </div>
      </motion.div>

      {/* Modal */}
      {modalOpen && (
        <ImageModal
          slides={slides}
          initial={idx}
          onClose={() => setModalOpen(false)}
        />
      )}
    </>
  );
}

// ─── Tab definitions ───────────────────────────────────────────────
const TABS: { label: string; value: FilterTab; icon: ReactNode }[] = [
  { label: "All", value: "all", icon: <Layout size={14} /> },
  { label: "Web & AI", value: "web", icon: <Globe size={14} /> },
  { label: "Mobile Apps", value: "mobile", icon: <Smartphone size={14} /> },
];

// ─── Main section ──────────────────────────────────────────────────
export default function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [active, setActive] = useState<FilterTab>("all");

  const filtered =
    active === "all" ? PROJECTS : PROJECTS.filter((p) => p.category === active);

  const countFor = (val: FilterTab) =>
    val === "all" ? PROJECTS.length : PROJECTS.filter((p) => p.category === val).length;

  return (
    <section id="projects" ref={ref} className="relative py-32 px-6">
      <div className="blob blob-cyan w-[500px] h-[500px] bottom-0 right-[-100px] opacity-15" />

      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="mb-10"
        >
          <p className="text-[#22d3ee] text-sm font-semibold tracking-widest uppercase mb-3 font-display">
            My Work
          </p>
          <h2 className="font-display font-black text-4xl sm:text-5xl text-white section-heading">
            Projects
          </h2>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="flex flex-wrap gap-2 mb-12"
        >
          {TABS.map((tab) => {
            const isActive = active === tab.value;
            return (
              <button
                key={tab.value}
                onClick={() => setActive(tab.value)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold font-display border transition-all duration-200 ${
                  isActive
                    ? "bg-gradient-to-r from-[#22d3ee] to-[#818cf8] text-white border-transparent shadow-[0_0_20px_rgba(34,211,238,0.3)]"
                    : "border-white/10 text-slate-400 hover:border-white/20 hover:text-white bg-white/[0.03]"
                }`}
              >
                {tab.icon}
                {tab.label}
                <span
                  className={`text-xs px-1.5 py-0.5 rounded-full font-mono ${
                    isActive ? "bg-black/25 text-white" : "bg-white/5 text-slate-500"
                  }`}
                >
                  {countFor(tab.value)}
                </span>
              </button>
            );
          })}
        </motion.div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6"
          >
            {filtered.map((project, i) => (
              <ProjectCard key={project.title} project={project} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
