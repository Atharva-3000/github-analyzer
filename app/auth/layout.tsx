import type React from "react"
import { LandingHeader } from "@/components/landing-header"

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <LandingHeader />
      <main className="flex-1 flex items-center justify-center">{children}</main>
    </div>
  )
}
