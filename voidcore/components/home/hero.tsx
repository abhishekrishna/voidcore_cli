"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative z-10 flex flex-col items-center justify-center text-center pt-46 pb-42 px-6 bg-gradient-to-b from-[#0F172A] to-[#02000]">
 {/* <motion.div
        className="mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <svg width="240" height="240" viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="240" height="240" rx="24" fill="#0F172A" />
          <rect x="40" y="50" width="160" height="100" rx="12" fill="#1E293B" />
          <rect x="52" y="64" width="48" height="12" rx="3" fill="#60A5FA" />
          <rect x="52" y="82" width="96" height="10" rx="2" fill="#64748B" />
          <rect x="52" y="98" width="80" height="10" rx="2" fill="#64748B" />
          <circle cx="180" cy="150" r="30" fill="#334155" />
          <rect x="160" y="170" width="40" height="12" rx="6" fill="#475569" />
          <path d="M165 145 C167 137, 183 137, 185 145" stroke="#CBD5E1" stroke-width="2" stroke-linecap="round"/>
          <circle cx="172" cy="140" r="2" fill="white" />
          <circle cx="188" cy="140" r="2" fill="white" />
      </svg>
      </motion.div> */}

      <motion.h1
        className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-l from-sky-400 to-blue-600"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
       
      </motion.h1>
      <motion.p
        className="mt-4 max-w-xl text-lg text-white/80 font-li"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        We build custom AI-powered software for mobile, web, infrastructure, and analytics.
      </motion.p>
      <motion.div
        className="mt-6"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
       <div className="flex items-center gap-2 bg-white/9 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 max-w-md">
        <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 bg-transparent border-none outline-none text-white placeholder-white/60 text-sm"
        />
        <button className="text-sm font-semibold text-white hover:underline">Get Started</button>
       </div>
      </motion.div>
    </section>
  )
}