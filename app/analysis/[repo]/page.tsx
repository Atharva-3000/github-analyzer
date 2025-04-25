import { redirect } from "next/navigation"
import { getServerSession } from "next-auth/next"
import { DashboardHeader } from "@/components/dashboard-header"
import { AnalysisResults } from "@/components/analysis-results"
import { analyzeRepository } from "@/lib/analyze-repository"

export default async function AnalysisPage({ params }: { params: { repo: string } }) {
  const session = await getServerSession()

  if (!session) {
    redirect("/")
  }

  const repoName = decodeURIComponent(params.repo)

  // In a real app, we would check if the analysis exists or trigger a new one
  // For now, we'll simulate an analysis result
  const analysisResults = await analyzeRepository(repoName, session)

  return (
    <div className="flex min-h-screen flex-col">
      <DashboardHeader />
      <main className="flex-1 container py-6">
        <h1 className="text-3xl font-bold mb-2">{repoName}</h1>
        <p className="text-muted-foreground mb-6">Repository Analysis Results</p>
        <AnalysisResults results={analysisResults} />
      </main>
    </div>
  )
}
