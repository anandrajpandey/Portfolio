"use client";

import { motion } from "framer-motion";

export function AboutSection() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 relative z-10 mt-16"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl w-full"
      >
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Profile Picture Placeholder */}
          <motion.div
            className="lg:w-1/3 flex flex-col items-center gap-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Circular PFP Space */}
            <motion.div
              className="relative w-64 h-64 lg:w-80 lg:h-80"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 rounded-full blur-2xl"></div>
              <div className="relative w-full h-full rounded-full border-2 border-yellow-400/50 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                <div className="w-56 h-56 lg:w-72 lg:h-72 rounded-full overflow-hidden border border-yellow-400/30">
                  <img
                    src="/imgs/profile.jpg"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>

            {/* Education */}
            <motion.div
              className="w-full space-y-2 text-gray-400 bg-gray-800/30 rounded-lg p-6 border border-gray-700/30"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p className="text-sm tracking-widest text-yellow-400 font-semibold">
                EDUCATION
              </p>
              <p className="text-lg text-gray-300 font-semibold">
                B.E Information Science
              </p>
              <p className="text-sm text-gray-400">
                Dayananda Sagar Academy of Technology
              </p>
              <p className="text-sm text-gray-500">
                Graduating June 2026 • 8.5 CGPA
              </p>
            </motion.div>
          </motion.div>

          {/* About Content */}
          <motion.div
            className="lg:w-2/3 space-y-8"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div>
              <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
              <p className="text-gray-300 leading-relaxed text-balance text-lg">
                I'm a cloud-focused developer passionate about building
                scalable, serverless, and secure solutions. With hands-on
                experience across AWS services, backend API design, and
                infrastructure automation, I'm committed to crafting
                cloud-native architectures that drive business impact.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-white mb-4">
                What I Do
              </h3>
              <div className="grid gap-3">
                <motion.div
                  className="flex items-start gap-3 p-4 rounded-lg bg-gray-800/20 border border-gray-700/30 hover:border-yellow-400/30 transition-all"
                  whileHover={{ x: 5 }}
                >
                  <span className="text-yellow-400 text-xl mt-0.5">→</span>
                  <span className="text-gray-300">
                    Design and implement cloud-native architectures using AWS
                    services
                  </span>
                </motion.div>
                <motion.div
                  className="flex items-start gap-3 p-4 rounded-lg bg-gray-800/20 border border-gray-700/30 hover:border-yellow-400/30 transition-all"
                  whileHover={{ x: 5 }}
                >
                  <span className="text-yellow-400 text-xl mt-0.5">→</span>
                  <span className="text-gray-300">
                    Develop secure backend APIs and serverless solutions
                  </span>
                </motion.div>
                <motion.div
                  className="flex items-start gap-3 p-4 rounded-lg bg-gray-800/20 border border-gray-700/30 hover:border-yellow-400/30 transition-all"
                  whileHover={{ x: 5 }}
                >
                  <span className="text-yellow-400 text-xl mt-0.5">→</span>
                  <span className="text-gray-300">
                    Automate infrastructure with Terraform and Ansible
                  </span>
                </motion.div>
                <motion.div
                  className="flex items-start gap-3 p-4 rounded-lg bg-gray-800/20 border border-gray-700/30 hover:border-yellow-400/30 transition-all"
                  whileHover={{ x: 5 }}
                >
                  <span className="text-yellow-400 text-xl mt-0.5">→</span>
                  <span className="text-gray-300">
                    Implement containerized applications with Docker &
                    Kubernetes
                  </span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
