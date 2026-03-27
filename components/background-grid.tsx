"use client";

import { motion } from "framer-motion";

const clouds = [
  {
    className: "left-[3%] top-[7%] hidden md:block",
    width: 320,
    height: 180,
    duration: 15,
    delay: 0.2,
  },
  {
    className: "right-[4%] top-[12%] block",
    width: 280,
    height: 158,
    duration: 17,
    delay: 0.6,
  },
  {
    className: "left-[8%] top-[56%] hidden lg:block",
    width: 340,
    height: 192,
    duration: 18,
    delay: 1,
  },
  {
    className: "right-[8%] top-[66%] hidden md:block",
    width: 260,
    height: 146,
    duration: 16,
    delay: 1.4,
  },
];

export function BackgroundGrid() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.07)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(circle_at_center,black,transparent_85%)]" />
      <div className="absolute left-1/2 top-0 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-[26rem] w-[26rem] rounded-full bg-blue-500/10 blur-3xl" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(2,8,23,0.05),rgba(2,8,23,0.2)_55%,rgba(2,8,23,0.58))]" />
      {clouds.map((cloud) => (
        <motion.div
          key={cloud.className}
          className={`cloud-deco ${cloud.className}`}
          style={{ width: cloud.width, height: cloud.height }}
          animate={{ x: [0, 18, 0], y: [0, -12, 0], opacity: [0.18, 0.3, 0.18] }}
          transition={{
            duration: cloud.duration,
            delay: cloud.delay,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
