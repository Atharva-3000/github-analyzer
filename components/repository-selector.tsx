"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useSession } from "next-auth/react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { GitFork, Loader2 } from "lucide-react"
import { motion } from "framer-motion"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "@/components/ui/use-toast"
import { GitHubRepository } from "@/types/github"

export function RepositorySelector() {
  const { data: session } = useSession()
  const router = useRouter()
  const [repositories, setRepositories] = useState<GitHubRepository[]>([])
  const [selectedRepo, setSelectedRepo] = useState<string>("")
  const [loading, setLoading] = useState<boolean>(false)
  const [fetchingRepos, setFetchingRepos] = useState<boolean>(false)

  const fetchRepositories = async () => {
    if (!session?.accessToken) {
      toast({
        title: "Authentication Error",
        description: "Please sign in to access your repositories",
        variant: "destructive",
      })
      return
    }

    try {
      setFetchingRepos(true)
      const response = await fetch("https://api.github.com/user/repos?sort=updated&per_page=100", {
        headers: {
          Authorization: `Bearer ${session.accessToken}`,
          Accept: "application/vnd.github.v3+json",
        },
      })

      if (!response.ok) {
        throw new Error(`GitHub API error: ${response.statusText}`)
      }

      const data = await response.json()
      setRepositories(data)
    } catch (error) {
      console.error("Error fetching repositories:", error)
      toast({
        title: "Error",
        description: "Failed to fetch repositories. Please try again.",
        variant: "destructive",
      })
    } finally {
      setFetchingRepos(false)
    }
  }

  const analyzeRepository = async () => {
    if (!selectedRepo) return

    setLoading(true)

    try {
      // In a real app, we would make an API call to start the analysis
      // For now, we'll just redirect to the analysis page
      router.push(`/analysis/${selectedRepo}`)
    } catch (error) {
      console.error("Error analyzing repository:", error)
      setLoading(false)
    }
  }

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <Card>
        <CardHeader>
          <CardTitle>Analyze Repository</CardTitle>
          <CardDescription>Select a GitHub repository to analyze with our AI tool</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {repositories.length === 0 ? (
            <Button onClick={fetchRepositories} className="w-full" disabled={fetchingRepos}>
              {fetchingRepos ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Fetching repositories...
                </>
              ) : (
                <>
                  <GitFork className="mr-2 h-4 w-4" />
                  Fetch your repositories
                </>
              )}
            </Button>
          ) : (
            <Select value={selectedRepo} onValueChange={setSelectedRepo}>
              <SelectTrigger>
                <SelectValue placeholder="Select a repository" />
              </SelectTrigger>
              <SelectContent>
                {repositories.map((repo) => (
                  <SelectItem key={repo.id} value={repo.full_name}>
                    {repo.full_name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        </CardContent>
        <CardFooter>
          <Button onClick={analyzeRepository} disabled={!selectedRepo || loading} className="w-full">
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Analyzing...
              </>
            ) : (
              "Analyze Repository"
            )}
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
