"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { signIn, useSession } from "next-auth/react"
import { motion } from "framer-motion"
import { Code2 } from "lucide-react"

export function LandingHeader() {
  const { data: session } = useSession()

  return (
    <motion.header
      className="sticky top-0 z-40 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <div className="flex gap-2 items-center text-xl font-bold">
          <Code2 className="h-6 w-6" />
          <span>RepoScan</span>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-2">
            {session ? (
              <Button asChild variant="default">
                <Link href="/dashboard">Dashboard</Link>
              </Button>
            ) : (
              <Button variant="default" onClick={() => signIn("github")}>
                Sign In
              </Button>
            )}
          </nav>
        </div>
      </div>
    </motion.header>
  )
}
