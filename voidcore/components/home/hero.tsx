"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative z-10 flex flex-col items-center justify-center text-center pt-46 pb-42 px-6 bg-gradient-to-b from-[#0F172A] to-[#0201]">
      <motion.h1
        className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-blue-600"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
       
      </motion.h1>
      <motion.p
        className="mt-4 max-w-xl text-lg text-white/80"
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
       <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 max-w-md">
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