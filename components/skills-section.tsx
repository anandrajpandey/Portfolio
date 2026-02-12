'use client'

import { motion } from 'framer-motion'

const skillCategories = [
  {
    title: 'Cloud Technologies',
    skills: ['AWS Services (EC2, S3, Lambda, DynamoDB)', 'Terraform', 'Ansible', 'Docker', 'Kubernetes'],
  },
  {
    title: 'Programming Languages',
    skills: ['Python', 'Java', 'JavaScript/Node.js', 'React', 'C', 'MySQL'],
  },
  {
    title: 'Specializations',
    skills: ['AWS Cloud Computing', 'Backend Development & API Design', 'Blockchain Development', 'Web Security'],
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 relative z-10">
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
          Technical Skills
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700/50 rounded-xl p-8 hover:border-yellow-400/30 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                {category.title}
              </h3>
              <ul className="space-y-3">
                {category.skills.map((skill) => (
                  <motion.li
                    key={skill}
                    className="text-gray-300 flex items-center gap-3"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <span className="text-yellow-400">•</span>
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
