"use client"

import { Button } from "@/components/ui/button"
import { signIn, useSession } from "next-auth/react"
import { motion } from "framer-motion"
import { ArrowRight, Github } from "lucide-react"
import Link from "next/link"

export function LandingHero() {
  const { data: session } = useSession()

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-2"
          >
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Analyze Your GitHub Repositories
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Get insights and recommendations to improve your code quality, security, and performance.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-x-4"
          >
            {session ? (
              <Button asChild size="lg">
                <Link href="/dashboard">
                  Go to Dashboard <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            ) : (
              <Button onClick={() => signIn("github")} size="lg">
                <Github className="mr-2 h-4 w-4" /> Sign in with GitHub
              </Button>
            )}
          </motion.div>
        </div>
      </div>
      <div className="container px-4 md:px-6 mt-16">
        <motion.div
          className="mx-auto w-full max-w-4xl overflow-hidden rounded-lg border bg-card shadow-xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <div className="p-8">
            <div className="h-[300px] w-full rounded-md bg-gradient-to-br from-purple-500/20 via-blue-500/20 to-emerald-500/20 flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="text-4xl font-bold">Repository Analysis</div>
                <div className="text-muted-foreground">Select a repository and get detailed insights</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
