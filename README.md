# RepoScan - GitHub Repository Analyzer

A modern web application that analyzes GitHub repositories using AI to provide insights about code quality, security, and structure.

![RepoScan Interface](.github/preview.png)

## Features

- 🔍 **Repository Analysis**

  - Code quality assessment
  - Security vulnerability scanning
  - Repository structure evaluation
  - Best practices recommendations

- 🎨 **Modern UI/UX**

  - Responsive design
  - Dark mode support
  - Smooth animations
  - Interactive visualizations

- 🔒 **Secure Authentication**
  - GitHub OAuth integration
  - Protected routes
  - Secure session management

## Tech Stack

- **Frontend**

  - Next.js 14
  - React
  - TypeScript
  - Tailwind CSS
  - Framer Motion
  - Radix UI Components

- **Authentication**

  - NextAuth.js
  - GitHub OAuth

- **APIs**
  - GitHub REST API
  - OpenAI API

## Getting Started

### Prerequisites

- Node.js 18 or later
- npm or yarn
- GitHub account
- OpenAI API key

### Environment Setup

Create a `.env.local` file in the root directory:

```bash
GITHUB_CLIENT_ID="your_github_client_id"
GITHUB_CLIENT_SECRET="your_github_client_secret"
NEXTAUTH_SECRET="your_nextauth_secret"
OPENAI_API_KEY="your_openai_api_key"
```

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/github-analyzer.git
cd github-analyzer
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage

1. Sign in with your GitHub account
2. Select a repository from your list
3. Click "Analyze Repository"
4. View detailed analysis results including:
   - Overall repository score
   - Code quality metrics
   - Security issues
   - Structural recommendations

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Icons by [Lucide](https://lucide.dev/)
- AI powered by [OpenAI](https://openai.com/)

## Author

Atharva - [@atharva_xoxo](https://github.com/atharva_xoxo)

---

⭐ Star this repo if you find it helpful!
