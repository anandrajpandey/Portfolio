"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { BackgroundGrid } from "@/components/background-grid";
import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { CertificationSection } from "@/components/certification-section";
import { SkillsSection } from "@/components/skills-section";
import { ProjectsSection } from "@/components/projects-section";
import { ExperienceSection } from "@/components/experience-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { sections } from "@/lib/portfolio-data";

export function PortfolioApp() {
  const [messageSent, setMessageSent] = useState(false);
  const sectionIds = useMemo(() => sections.map((section) => section.id), []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-100">
      <BackgroundGrid />
      <Navbar sectionIds={sectionIds} />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10"
      >
        <HeroSection />
        <CertificationSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection
          messageSent={messageSent}
          onMessageSent={() => setMessageSent(true)}
        />
        <Footer />
      </motion.main>
    </div>
  );
}
