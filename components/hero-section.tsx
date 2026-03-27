"use client";

import { motion } from "framer-motion";
import { Download, Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import { personal } from "@/lib/portfolio-data";

export function HeroSection() {
  return (
    <section id="home" className="section-shell relative pt-20 sm:pt-24">
      <div className="grid min-h-[calc(100vh-8.5rem)] items-center gap-8 py-6 lg:grid-cols-[1.08fr_0.92fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-200">
              Introduction
            </p>
            <h1 className="text-3xl font-semibold text-white sm:text-4xl">
              Anand Raj Pandey
            </h1>
            <p className="text-lg text-slate-300">{personal.title}</p>
            <p className="max-w-3xl text-sm leading-7 text-slate-300 sm:text-base">
              I&apos;m a cloud engineer and backend developer focused on
              building scalable AWS systems, reliable APIs, and automation-first
              workflows. My work blends cloud infrastructure, backend delivery,
              and security-minded engineering to ship products that are
              practical, observable, and production-ready.
            </p>
            <p className="max-w-3xl text-sm leading-7 text-slate-300 sm:text-base">
              My stack is centered around AWS, Terraform, Docker, Kubernetes,
              Ansible, Node.js, FastAPI, Python, TypeScript, Next.js, and
              Tailwind CSS, with an AWS Certified Developer Associate credential
              backing the cloud-native side of my work.
            </p>
            <p className="max-w-3xl text-sm leading-7 text-slate-300 sm:text-base">
              I enjoy designing cloud-native architectures, developing backend
              systems and APIs, and improving delivery through automation,
              observability, and security-first engineering. I&apos;m based in{" "}
              {personal.location}.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Contact Me
              <Mail size={16} />
            </a>
            <a
              href={personal.resume}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-6 py-3 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-400/15"
            >
              Resume
              <Download size={16} />
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-5">
            <a
              href={personal.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm text-slate-300 transition hover:text-white"
            >
              <Github size={18} />
              GitHub
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm text-slate-300 transition hover:text-white"
            >
              <Linkedin size={18} />
              LinkedIn
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative"
        >
          <div className="relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.2),transparent_40%)]" />
            <div className="relative mx-auto aspect-[4/4.65] max-w-sm overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-900/70">
              <Image
                src="/imgs/profile.jpg"
                alt="Anand Raj Pandey"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
