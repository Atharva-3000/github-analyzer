import { Code2 } from "lucide-react"

export function LandingFooter() {
  return (
    <footer className="w-full border-t border-border/40 py-6 md:py-8">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
        <div className="flex items-center gap-2 text-lg font-semibold">
          <Code2 className="h-5 w-5" />
          <span>RepoScan</span>
        </div>
        <p className="text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} RepoScan. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
