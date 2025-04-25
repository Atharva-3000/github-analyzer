"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AlertCircle, Code, FileCode, GitBranch, ShieldCheck } from "lucide-react"

interface AnalysisResultsProps {
  results: {
    overallScore: number
    codeQuality: {
      score: number
      issues: Array<{
        title: string
        description: string
        severity: "low" | "medium" | "high"
      }>
    }
    security: {
      score: number
      issues: Array<{
        title: string
        description: string
        severity: "low" | "medium" | "high"
      }>
    }
    structure: {
      score: number
      issues: Array<{
        title: string
        description: string
        severity: "low" | "medium" | "high"
      }>
    }
    recommendations: Array<{
      title: string
      description: string
      category: "code" | "security" | "structure"
    }>
  }
}

export function AnalysisResults({ results }: AnalysisResultsProps) {
  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "low":
        return "text-yellow-500"
      case "medium":
        return "text-orange-500"
      case "high":
        return "text-red-500"
      default:
        return "text-muted-foreground"
    }
  }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "code":
        return <Code className="h-4 w-4" />
      case "security":
        return <ShieldCheck className="h-4 w-4" />
      case "structure":
        return <GitBranch className="h-4 w-4" />
      default:
        return <FileCode className="h-4 w-4" />
    }
  }

  return (
    <div className="space-y-6">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Card>
          <CardHeader>
            <CardTitle>Overall Score</CardTitle>
            <CardDescription>The overall health and quality of your repository</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center justify-center space-y-4">
              <div className="relative h-40 w-40">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-4xl font-bold">{results.overallScore}</span>
                </div>
                <svg className="h-full w-full" viewBox="0 0 100 100">
                  <circle
                    className="stroke-muted-foreground/20"
                    cx="50"
                    cy="50"
                    r="45"
                    fill="transparent"
                    strokeWidth="10"
                  />
                  <circle
                    className="stroke-primary"
                    cx="50"
                    cy="50"
                    r="45"
                    fill="transparent"
                    strokeWidth="10"
                    strokeDasharray={`${results.overallScore * 2.83} 283`}
                    strokeDashoffset="0"
                    transform="rotate(-90 50 50)"
                  />
                </svg>
              </div>
              <div className="text-center">
                <p className="text-lg font-medium">
                  {results.overallScore >= 80
                    ? "Excellent"
                    : results.overallScore >= 60
                      ? "Good"
                      : results.overallScore >= 40
                        ? "Fair"
                        : "Needs Improvement"}
                </p>
                <p className="text-sm text-muted-foreground">Based on code quality, security, and structure</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Tabs defaultValue="issues">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="issues">Issues</TabsTrigger>
            <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
          </TabsList>
          <TabsContent value="issues" className="space-y-4 mt-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Code className="mr-2 h-5 w-5" />
                  Code Quality
                </CardTitle>
                <CardDescription>Analysis of code style, complexity, and maintainability</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span>Score: {results.codeQuality.score}/100</span>
                  </div>
                  <Progress value={results.codeQuality.score} className="h-2" />
                </div>
                <div className="space-y-4">
                  {results.codeQuality.issues.map((issue, index) => (
                    <div key={index} className="border-l-4 border-primary pl-4 py-2">
                      <div className="flex items-center">
                        <AlertCircle className={`mr-2 h-4 w-4 ${getSeverityColor(issue.severity)}`} />
                        <h4 className="font-medium">{issue.title}</h4>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">{issue.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <ShieldCheck className="mr-2 h-5 w-5" />
                  Security
                </CardTitle>
                <CardDescription>Analysis of potential security vulnerabilities</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span>Score: {results.security.score}/100</span>
                  </div>
                  <Progress value={results.security.score} className="h-2" />
                </div>
                <div className="space-y-4">
                  {results.security.issues.map((issue, index) => (
                    <div key={index} className="border-l-4 border-primary pl-4 py-2">
                      <div className="flex items-center">
                        <AlertCircle className={`mr-2 h-4 w-4 ${getSeverityColor(issue.severity)}`} />
                        <h4 className="font-medium">{issue.title}</h4>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">{issue.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <GitBranch className="mr-2 h-5 w-5" />
                  Repository Structure
                </CardTitle>
                <CardDescription>Analysis of repository organization and architecture</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span>Score: {results.structure.score}/100</span>
                  </div>
                  <Progress value={results.structure.score} className="h-2" />
                </div>
                <div className="space-y-4">
                  {results.structure.issues.map((issue, index) => (
                    <div key={index} className="border-l-4 border-primary pl-4 py-2">
                      <div className="flex items-center">
                        <AlertCircle className={`mr-2 h-4 w-4 ${getSeverityColor(issue.severity)}`} />
                        <h4 className="font-medium">{issue.title}</h4>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">{issue.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="recommendations" className="space-y-4 mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Recommendations</CardTitle>
                <CardDescription>Actionable suggestions to improve your repository</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {results.recommendations.map((recommendation, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-start space-x-4 p-4 rounded-lg border bg-card/50"
                    >
                      <div className="mt-0.5 bg-primary/10 p-2 rounded-full">
                        {getCategoryIcon(recommendation.category)}
                      </div>
                      <div>
                        <h4 className="font-medium">{recommendation.title}</h4>
                        <p className="text-sm text-muted-foreground mt-1">{recommendation.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  )
}
