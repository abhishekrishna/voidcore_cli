"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

interface FeatureCardProps {
  title: string
  desc: string
  delay: number
}

export function FeatureCard({ title, desc, delay }: FeatureCardProps) {
  return (
    <motion.div
      className="backdrop-blur-md bg-cardGlass p-6 rounded-2xl shadow-xl border border-white/10"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
    >
    <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
    <p className="text-white/70 text-sm">{desc}</p>
    </motion.div>
  )
}