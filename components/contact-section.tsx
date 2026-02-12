"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github, ArrowRight } from "lucide-react";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 relative z-10"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl w-full text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Let's Work Together
          </h2>
          <p className="text-xl text-gray-300 mb-12 text-balance">
            I'm always interested in hearing about new projects and
            opportunities. Feel free to reach out!
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8 mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Email */}
          <motion.a
            href="mailto:anandrajpandey75@gmail.com"
            className="group p-8 bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700/50 rounded-xl hover:border-yellow-400/50 transition-all duration-300"
            whileHover={{ y: -5 }}
          >
            <Mail className="w-12 h-12 text-yellow-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
            <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
            <p className="text-gray-400 break-all text-sm">
              anandrajpandey75@gmail.com
            </p>
          </motion.a>

          {/* Phone */}
          <motion.a
            href="tel:+18660862307"
            className="group p-8 bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700/50 rounded-xl hover:border-yellow-400/50 transition-all duration-300"
            whileHover={{ y: -5 }}
          >
            <Phone className="w-12 h-12 text-yellow-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
            <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
            <p className="text-gray-400 text-sm">+91 866-086-2307</p>
          </motion.a>

          {/* LinkedIn */}
          <motion.a
            href="https://linkedin.com/in/anand-raj-pandey-4231a827a"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-8 bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700/50 rounded-xl hover:border-yellow-400/50 transition-all duration-300"
            whileHover={{ y: -5 }}
          >
            <Linkedin className="w-12 h-12 text-yellow-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
            <h3 className="text-lg font-semibold text-white mb-2">LinkedIn</h3>
            <p className="text-gray-400 text-sm">Connect with me</p>
          </motion.a>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <button
            onClick={() =>
              (window.location.href =
                "https://mail.google.com/mail/u/0/#inbox?compose=new&to=anandrajpandey75@gmail.com&subject=Let%27s%20Connect&body=Hi%20Anand,%0A%0AI%20would%20like%20to%20connect%20with%20you%20regarding%20a%20project%20opportunity.")
            }
            className="group px-8 py-3 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-yellow-400/50 flex items-center gap-2"
          >
            Get in Touch
            <ArrowRight
              size={20}
              className="group-hover:translate-x-1 transition-transform duration-300"
            />
          </button>
          <a
            href="https://github.com/anandrajpandey"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400/10 font-semibold rounded-lg transition-all duration-300 flex items-center gap-2"
          >
            <Github size={20} />
            GitHub
          </a>
        </motion.div>

        <motion.p
          className="mt-16 text-gray-500 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          © 2026 Anand Raj Pandey. AWS Certified Developer. Cloud & Security
          Focused.
        </motion.p>
      </motion.div>
    </section>
  );
}
