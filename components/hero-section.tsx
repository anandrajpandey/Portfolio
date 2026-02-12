"use client";

import { ArrowDown, Mail, Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";

export function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-32 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-4xl"
      >
        <div className="mb-6">
          <motion.h1
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-4 text-balance"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Anand Raj Pandey
          </motion.h1>
          <motion.p
            className="text-xl sm:text-2xl text-gray-300 mb-6 text-balance"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Cloud-Focused Developer & AWS Specialist
          </motion.p>
        </div>

        <motion.p
          className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed mb-8 text-balance"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Building scalable, serverless, and cloud-native solutions with AWS,
          backend API design, and cutting-edge security practices. AWS Certified
          Developer Associate.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <button
            onClick={() =>
              (window.location.href =
                "https://mail.google.com/mail/u/0/#inbox?compose=new&to=anandrajpandey75@gmail.com&subject=Let%27s%20Connect&body=Hi%20Anand,%0A%0AI%20would%20like%20to%20connect%20with%20you%20regarding%20a%20project%20opportunity.")
            }
            className="px-8 py-3 border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400/10 font-semibold rounded-lg transition-all duration-300"
          >
            Get in Touch
          </button>

          <a
            href="/Resume_4thFeb.pdf"
            download
            className="group px-8 py-3 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-yellow-400/50 flex items-center gap-2"
          >
            Download Resume
          </a>

          <a
            href="#projects"
            className="px-8 py-3 border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400/10 font-semibold rounded-lg transition-all duration-300"
          >
            View My Work
          </a>
        </motion.div>

        <motion.div
          className="flex gap-6 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <a
            href="https://github.com/anandrajpandey"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-yellow-400 transition-colors duration-300"
          >
            <Github size={24} />
          </a>
          <a
            href="https://linkedin.com/in/anand-raj-pandey-4231a827a"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-yellow-400 transition-colors duration-300"
          >
            <Linkedin size={24} />
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown className="text-yellow-400" size={32} />
      </motion.div>
    </section>
  );
}
