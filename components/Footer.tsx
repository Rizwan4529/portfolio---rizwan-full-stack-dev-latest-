import { Github, Linkedin, Mail } from "lucide-react";
import { SOCIAL } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-[#030307] py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <span className="font-display font-bold text-lg">
            <span className="gradient-text">Riz</span>
            <span className="text-white/50">wan</span>
          </span>
          <span className="text-slate-600 text-sm">
            &nbsp;— Built with Next.js &amp; ☕
          </span>
        </div>

        <p className="text-slate-600 text-sm order-last md:order-none">
          © {year} Muhammad Rizwan. All rights reserved.
        </p>

        <div className="flex items-center gap-4">
          <a
            href={SOCIAL.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-slate-500 hover:text-white transition-colors"
          >
            <Github size={18} />
          </a>
          <a
            href={SOCIAL.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-slate-500 hover:text-[#818cf8] transition-colors"
          >
            <Linkedin size={18} />
          </a>
          <a
            href={`mailto:${SOCIAL.email}`}
            aria-label="Email"
            className="text-slate-500 hover:text-[#22d3ee] transition-colors"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
