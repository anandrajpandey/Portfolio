"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { certifications } from "@/lib/portfolio-data";

export function CertificationSection() {
  const certification = certifications[0];

  return (
    <section id="certification" className="section-shell py-12 sm:py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        className="grid items-center gap-8 border-y border-white/10 py-8 lg:grid-cols-[180px_1fr_auto]"
      >
        <div className="flex justify-center lg:justify-start">
          <Image
            src="/aws-certified-developer-associate%20(1).png"
            alt="AWS Certified Developer Associate badge"
            width={148}
            height={148}
            className="h-auto w-32 sm:w-36"
          />
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200">
            Certification
          </p>
          <h2 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">
            {certification.title}
          </h2>
          <p className="mt-2 text-sm text-slate-300 sm:text-base">
            {certification.code} · {certification.issuer}
          </p>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300 sm:text-base">
            {certification.detail}
          </p>
        </div>

        <div className="flex lg:justify-end">
          <a
            href={certification.verificationUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 border border-cyan-400/20 px-5 py-3 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-400/10"
          >
            Verify Credential
            <ArrowUpRight size={16} />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
