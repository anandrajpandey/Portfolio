"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "API Health Monitoring System",
    description:
      "Designed and deployed a cloud-native API Health Monitoring System on AWS using EventBridge, Lambda, SQS, ECS Fargate, DynamoDB, and SNS. Implemented event-driven architecture with Terraform (IaC) to perform scalable, fault-tolerant health checks and state persistence. Enabled automated alerting on API state transitions, improving reliability and observability of external services.",
    tech: ["AWS Services", "Python", "Terraform", "Docker", "Debugging"],
    highlights: [
      "Event-driven cloud-native architecture",
      "Scalable ECS Fargate worker processing",
      "State transition-based intelligent alerting",
    ],
  },
  {
    title: "Ethereum Bounty Management System",
    description:
      "Decentralized application on the Ethereum blockchain enabling secure bug bounty submission, tracking, and reward allocation in a trustless environment.",
    tech: ["Solidity", "Smart Contracts", "Ethereum", "Web3", "Blockchain"],
    highlights: ["Smart contracts", "Trust-less system", "Transparent rewards"],
  },
  {
    title: "Traceroute-Based Anomaly Detection System",
    description:
      "FastAPI-based system using machine learning (Isolation Forest) to identify suspicious IP addresses and latency spikes. Integrated comprehensive network mapping capabilities.",
    tech: ["FastAPI", "Python", "Scikit-learn", "NumPy", "Network Security"],
    highlights: [
      "ML-powered threat detection",
      "CORS-secured API",
      "Real-time analysis",
    ],
  },
  {
    title: "Serverless File Management System",
    description:
      "Secure file upload and download system using Amazon S3 presigned URLs and AWS Lambda functions, handling high transaction volumes while reducing infrastructure costs.",
    tech: [
      "AWS Lambda",
      "S3",
      "Node.js",
      "Serverless",
      "Infrastructure as Code",
    ],
    highlights: ["Presigned URLs", "Cost-optimized", "High throughput"],
  },
];

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 relative z-10"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl w-full"
      >
        <motion.h2
          className="text-4xl lg:text-5xl font-bold text-white mb-16 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Academic Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="group bg-gradient-to-br from-gray-900/60 to-gray-800/40 border border-gray-700/50 rounded-xl p-8 hover:border-yellow-400/50 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-semibold text-white pr-4">
                  {project.title}
                </h3>
                <div className="flex gap-2 flex-shrink-0">
                  <button className="p-2 hover:bg-yellow-400/10 rounded-lg text-gray-400 hover:text-yellow-400 transition-all duration-300">
                    <Github size={20} />
                  </button>
                  <button className="p-2 hover:bg-yellow-400/10 rounded-lg text-gray-400 hover:text-yellow-400 transition-all duration-300">
                    <ExternalLink size={20} />
                  </button>
                </div>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed text-balance">
                {project.description}
              </p>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-400 mb-3">
                  Highlights
                </h4>
                <ul className="space-y-2">
                  {project.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="text-sm text-gray-300 flex items-center gap-2"
                    >
                      <span className="text-yellow-400">✓</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-3 py-1 bg-yellow-400/10 text-yellow-300 rounded-full border border-yellow-400/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
