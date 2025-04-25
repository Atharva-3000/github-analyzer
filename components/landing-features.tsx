"use client"

import { motion } from "framer-motion"
import { CheckCircle, Code, GitBranch, ShieldCheck } from "lucide-react"

export function LandingFeatures() {
  const features = [
    {
      icon: <Code className="h-10 w-10 text-primary" />,
      title: "Code Quality Analysis",
      description: "Get insights on code structure, complexity, and maintainability.",
    },
    {
      icon: <ShieldCheck className="h-10 w-10 text-primary" />,
      title: "Security Scanning",
      description: "Identify potential security vulnerabilities in your codebase.",
    },
    {
      icon: <GitBranch className="h-10 w-10 text-primary" />,
      title: "Repository Structure",
      description: "Analyze your repository structure and get recommendations for improvement.",
    },
    {
      icon: <CheckCircle className="h-10 w-10 text-primary" />,
      title: "Best Practices",
      description: "Learn how to follow industry best practices and coding standards.",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Comprehensive Repository Analysis</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Our AI-powered tool analyzes your GitHub repositories and provides actionable insights.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:gap-12 mt-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center space-y-4 rounded-lg border p-6 bg-card shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="p-2 rounded-full bg-muted">{feature.icon}</div>
              <div className="space-y-2 text-center">
                <h3 className="text-xl font-bold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
