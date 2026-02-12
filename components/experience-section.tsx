"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const experiences = [
  {
    title: "Security Intern",
    company: "Association For Cybersecurity by Albus Security",
    period: "September 2024 – February 2025",
    location: "Remote",
    achievements: [
      "Performed comprehensive vulnerability testing on production-level web applications",
      "Identified and documented security flaws (XSS, CSRF, SQL injection)",
      "Collaborated with 6-member cybersecurity team for vulnerability remediation",
      "Created detailed security reports and remediation recommendations",
    ],
  },
];

const certifications = [
  {
    title: "AWS Certified Developer Associate",
    code: "DVA-C02",
    issuer: "Amazon Web Services",
    status: "Active",
    verificationUrl:
      "https://www.credly.com/users/anand-raj-pandey/badges#credly",
  },
];

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 relative z-10"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl w-full"
      >
        {/* Experience */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-12">
            Professional Experience
          </h2>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                className="border-l-2 border-yellow-400 pl-8 relative"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="absolute -left-3 -top-3 w-4 h-4 bg-yellow-400 rounded-full"></div>

                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-3">
                  <div>
                    <h3 className="text-2xl font-semibold text-white">
                      {exp.title}
                    </h3>
                    <p className="text-yellow-400 font-medium">{exp.company}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-400 text-sm">{exp.period}</p>
                    <p className="text-gray-500 text-sm">{exp.location}</p>
                  </div>
                </div>

                <ul className="space-y-3">
                  {exp.achievements.map((achievement) => (
                    <motion.li
                      key={achievement}
                      className="text-gray-300 flex gap-3"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <span className="text-yellow-400 flex-shrink-0">▸</span>
                      <span>{achievement}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-12">
            Certifications
          </h2>

          <div className="space-y-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.code}
                className="bg-gradient-to-r from-yellow-400/10 to-transparent border border-yellow-400/30 rounded-lg p-8 hover:border-yellow-400/60 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ x: 5 }}
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {cert.title}
                    </h3>
                    <p className="text-gray-400">
                      <span className="text-yellow-400 font-medium">
                        {cert.code}
                      </span>{" "}
                      • {cert.issuer}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="inline-block px-4 py-2 bg-green-400/10 text-green-400 border border-green-400/30 rounded-lg text-sm font-semibold">
                      {cert.status}
                    </span>
                    <a
                      href={cert.verificationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group px-4 py-2 bg-yellow-400/10 text-yellow-400 border border-yellow-400/30 rounded-lg hover:bg-yellow-400/20 hover:border-yellow-400/60 transition-all duration-300 flex items-center gap-2 text-sm font-semibold"
                    >
                      Verify
                      <ExternalLink
                        size={16}
                        className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
                      />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
