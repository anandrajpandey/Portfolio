"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/section-heading";
import { badges, techStack } from "@/lib/portfolio-data";

export function SkillsSection() {
  return (
    <section id="skills" className="section-shell py-20 sm:py-24">
      <SectionHeading
        eyebrow="Tech Stack"
        title="Core technologies across cloud infrastructure, backend systems, and DevOps delivery."
        description=""
      />

      <div className="border border-white/8 bg-white/[0.02] px-2 py-2 sm:px-4 sm:py-4">
        <div className="grid gap-x-6 gap-y-5 sm:grid-cols-2 xl:grid-cols-4">
          {techStack.map((tech, index) => {
            const Icon = tech.icon;

            return (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.03 }}
                viewport={{ once: true, amount: 0.2 }}
                className="flex items-center gap-3 px-3 py-3"
              >
                <span
                  className={`inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-white/10 bg-gradient-to-br ${tech.tone} text-slate-100 shadow-[0_10px_30px_rgba(2,8,23,0.2)]`}
                >
                  <Icon size={18} />
                </span>
                <span className="text-base font-medium text-slate-100">
                  {tech.name}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="mt-8 border border-white/10 bg-white/[0.03] p-5 sm:p-6">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-slate-400">
          Technologies In Rotation
        </p>
        <div className="flex flex-wrap gap-3">
          {badges.map((badge) => (
            <span
              key={badge}
              className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-100"
            >
              {badge}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
