import { redirect } from "next/navigation"
import { getServerSession } from "next-auth/next"
import { DashboardHeader } from "@/components/dashboard-header"
import { RepositorySelector } from "@/components/repository-selector"
import { RecentAnalyses } from "@/components/recent-analyses"

export default async function DashboardPage() {
  const session = await getServerSession()

  if (!session) {
    redirect("/")
  }

  return (
    <div className="flex min-h-screen flex-col">
      <DashboardHeader />
      <main className="flex-1 container py-6">
        <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
        <div className="grid gap-6 md:grid-cols-2">
          <RepositorySelector />
          <RecentAnalyses />
        </div>
      </main>
    </div>
  )
}
