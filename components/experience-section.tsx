"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/section-heading";
import { education, experience } from "@/lib/portfolio-data";

export function ExperienceSection() {
  return (
    <section id="experience" className="section-shell py-20 sm:py-24">
      <SectionHeading
        eyebrow="Experience"
        title="Experience grounded in security practice and production minded engineering."
        description="I bring a backend and cloud mindset shaped by security work, hands on AWS projects, and a strong bias toward reliable systems."
      />

      <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="panel p-7 sm:p-8">
          <p className="mb-8 text-sm font-semibold uppercase tracking-[0.28em] text-slate-400">
            Career Timeline
          </p>
          <div className="space-y-8">
            {experience.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.company}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 }}
                  viewport={{ once: true, amount: 0.2 }}
                  className="relative pl-12"
                >
                  <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-cyan-300 via-cyan-400/40 to-transparent" />
                  <span className="absolute left-0 top-1 inline-flex h-9 w-9 -translate-x-1/2 items-center justify-center rounded-full border border-cyan-400/30 bg-slate-900 text-cyan-200">
                    <Icon size={16} />
                  </span>
                  <p className="text-sm uppercase tracking-[0.22em] text-cyan-200">
                    {item.period}
                  </p>
                  <h3 className="mt-3 text-xl font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm text-slate-400">
                    {item.company} · {item.location}
                  </p>
                  <div className="mt-4 space-y-3">
                    {item.points.map((point) => (
                      <p
                        key={point}
                        className="text-sm leading-7 text-slate-300"
                      >
                        {point}
                      </p>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="space-y-6">
          <div className="panel p-7 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-400">
              Education
            </p>
            <div className="mt-5 border border-white/10 bg-white/[0.03] p-5">
              <p className="text-lg font-semibold text-white">
                {education.degree}
              </p>
              <p className="mt-2 text-sm text-slate-400">{education.school}</p>
              <p className="mt-3 text-sm text-slate-400">
                {education.period} · {education.score}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
