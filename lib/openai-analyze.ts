import OpenAI from "openai"

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export async function analyzeCodeWithAI(code: string, language: string) {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: `You are a code analysis expert. Analyze the provided ${language} code and provide detailed feedback on:
          1. Code quality (style, complexity, maintainability)
          2. Potential security issues
          3. Structure and organization
          4. Best practices
          
          Format your response as JSON with the following structure:
          {
            "codeQuality": {
              "score": number (0-100),
              "issues": [{"title": string, "description": string, "severity": "low"|"medium"|"high"}]
            },
            "security": {
              "score": number (0-100),
              "issues": [{"title": string, "description": string, "severity": "low"|"medium"|"high"}]
            },
            "structure": {
              "score": number (0-100),
              "issues": [{"title": string, "description": string, "severity": "low"|"medium"|"high"}]
            },
            "recommendations": [{"title": string, "description": string, "category": "code"|"security"|"structure"}]
          }`,
        },
        {
          role: "user",
          content: code,
        },
      ],
      response_format: { type: "json_object" },
    })

    const analysisResult = JSON.parse(response.choices[0].message.content || "{}")

    // Calculate overall score
    const scores = [
      analysisResult.codeQuality?.score || 0,
      analysisResult.security?.score || 0,
      analysisResult.structure?.score || 0,
    ]

    const overallScore = Math.round(scores.reduce((a, b) => a + b, 0) / scores.length)

    return {
      overallScore,
      ...analysisResult,
    }
  } catch (error) {
    console.error("Error analyzing code with AI:", error)
    throw error
  }
}
