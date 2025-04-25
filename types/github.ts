export interface GitHubRepository {
    id: number
    full_name: string
    name: string
    description: string | null
    private: boolean
    html_url: string
    language: string | null
    stargazers_count: number
}

export interface AnalysisResult {
    overallScore: number
    codeQuality: AnalysisSection
    security: AnalysisSection
    structure: AnalysisSection
    recommendations: Recommendation[]
}

export interface AnalysisSection {
    score: number
    issues: Issue[]
}

export interface Issue {
    title: string
    description: string
    severity: 'low' | 'medium' | 'high'
}

export interface Recommendation {
    title: string
    description: string
    category: 'code' | 'security' | 'structure'
}