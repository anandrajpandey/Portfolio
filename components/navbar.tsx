"use client";

import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { sections } from "@/lib/portfolio-data";
import { useActiveSection } from "@/hooks/use-active-section";

type NavbarProps = {
  sectionIds: string[];
};

export function Navbar({ sectionIds }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const activeSection = useActiveSection(sectionIds);
  const navSections = useMemo(() => sections, []);

  return (
    <motion.header
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45 }}
      className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl"
    >
      <div className="section-shell">
        <div className="flex h-16 items-center justify-between gap-4">
          <a
            href="#home"
            className="text-sm font-semibold uppercase tracking-[0.32em] text-cyan-200"
          >
            ARP
          </a>

          <nav className="hidden items-center gap-1 lg:flex">
            {navSections.map((section) => {
              const isActive = activeSection === section.id;

              return (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className={`rounded-full px-4 py-2 text-xs font-medium uppercase tracking-[0.22em] transition ${
                    isActive
                      ? "bg-cyan-400/12 text-cyan-200"
                      : "text-slate-300 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {section.label}
                </a>
              );
            })}
          </nav>

          <button
            type="button"
            aria-label="Toggle navigation"
            onClick={() => setOpen((value) => !value)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-100 lg:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {open ? (
          <div className="border-t border-white/10 py-3 lg:hidden">
            <div className="flex flex-col gap-2">
              {navSections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className={`rounded-xl px-4 py-3 text-sm transition ${
                    activeSection === section.id
                      ? "bg-cyan-400/10 text-cyan-100"
                      : "text-slate-200 hover:bg-white/5"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {section.label}
                </a>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </motion.header>
  );
}
