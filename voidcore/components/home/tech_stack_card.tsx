"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

interface TechStackCardProps {
  name: string
  description: string
  delay?: number
}

export function TechStackCard({ name, description, delay = 0 }: TechStackCardProps) {
  return (
    <motion.div
      className="rounded-2xl p-5 text-white shadow-lg border border-white/10"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
    >
    <h4 className="text-lg font-semibold mb-2 text-white">{name}</h4>
    <p className="text-white/80 text-sm">{description}</p>
    </motion.div>
  )
}
