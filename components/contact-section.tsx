"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, Send } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { personal } from "@/lib/portfolio-data";

type ContactSectionProps = {
  messageSent: boolean;
  onMessageSent: () => void;
};

export function ContactSection({
  messageSent,
  onMessageSent,
}: ContactSectionProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = encodeURIComponent(
      `Portfolio Inquiry from ${name || "Hiring Team"}`,
    );
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    );

    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
    onMessageSent();
  };

  return (
    <section id="contact" className="section-shell py-20 sm:py-24">
      <SectionHeading
        eyebrow="Contact"
        title="Let’s build resilient systems that ship with confidence."
        description="Feel free to reach out for opportunities."
      />

      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="panel p-7 sm:p-8"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-400">
              Contact Details
            </p>
            <div className="mt-6 space-y-4">
              <a
                href={`mailto:${personal.email}`}
                className="flex items-center gap-4 rounded-xl border border-white/10 bg-slate-900/70 p-4 text-slate-200 transition hover:bg-slate-900"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-200">
                  <Mail size={18} />
                </span>
                <div>
                  <p className="text-sm text-slate-400">Email</p>
                  <p className="text-sm sm:text-base">{personal.email}</p>
                </div>
              </a>
              <a
                href={`tel:${personal.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-4 rounded-xl border border-white/10 bg-slate-900/70 p-4 text-slate-200 transition hover:bg-slate-900"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-200">
                  <Phone size={18} />
                </span>
                <div>
                  <p className="text-sm text-slate-400">Phone</p>
                  <p className="text-sm sm:text-base">{personal.phone}</p>
                </div>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 }}
            viewport={{ once: true, amount: 0.2 }}
            className="panel p-7 sm:p-8"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-400">
              Social Links
            </p>
            <div className="mt-6 flex flex-col gap-4">
              <a
                href={personal.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 rounded-xl border border-white/10 bg-slate-900/70 p-4 text-slate-200 transition hover:bg-slate-900"
              >
                <Github size={18} className="text-cyan-200" />
                GitHub
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 rounded-xl border border-white/10 bg-slate-900/70 p-4 text-slate-200 transition hover:bg-slate-900"
              >
                <Linkedin size={18} className="text-cyan-200" />
                LinkedIn
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true, amount: 0.2 }}
          className="panel p-7 sm:p-8"
        >
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-sm text-slate-300">Name</span>
                <input
                  required
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  className="w-full rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400/40"
                  placeholder="Your name"
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm text-slate-300">Email</span>
                <input
                  required
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className="w-full rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400/40"
                  placeholder="you@example.com"
                />
              </label>
            </div>
            <label className="block">
              <span className="mb-2 block text-sm text-slate-300">Message</span>
              <textarea
                required
                rows={7}
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                className="w-full resize-none rounded-xl border border-white/10 bg-slate-900/80 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400/40"
                placeholder="Tell me about the role, project, or collaboration."
              />
            </label>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                Send Message
                <Send size={16} />
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
