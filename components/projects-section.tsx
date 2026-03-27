"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/lib/portfolio-data";

export function ProjectsSection() {
  return (
    <section id="projects" className="section-shell py-20 sm:py-24">
      <SectionHeading
        eyebrow="Projects"
        title="Selected work across monitoring, security, serverless delivery, and decentralized systems."
        description=""
      />

      <div className="grid gap-6 xl:grid-cols-2">
        {projects.map((project, index) => {
          const Icon = project.icon;

          return (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden border border-white/10 bg-white/[0.02] p-7"
            >
              <div className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.14),transparent_35%)]" />
              </div>

              <div className="relative flex h-full flex-col">
                <div className="mb-5 flex items-start justify-between gap-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-200">
                    <Icon size={20} />
                  </span>
                  <div className="flex items-center gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition hover:border-cyan-400/30 hover:text-white"
                      aria-label={`${project.title} GitHub`}
                    >
                      <Github size={16} />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition hover:border-cyan-400/30 hover:text-white"
                      aria-label={`${project.title} live link`}
                    >
                      <ArrowUpRight size={16} />
                    </a>
                  </div>
                </div>

                <h3 className="text-2xl font-semibold text-white">
                  {project.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  {project.description}
                </p>
                {project.hostedAt ? (
                  <p className="mt-3 text-sm text-cyan-200">
                    Hosted at{" "}
                    <a
                      href={project.hostedAt}
                      target="_blank"
                      rel="noreferrer"
                      className="underline decoration-cyan-300/50 underline-offset-4"
                    >
                      {project.hostedAt}
                    </a>
                  </p>
                ) : null}

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
