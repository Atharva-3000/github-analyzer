"use client"

import { Component, ErrorInfo, ReactNode } from "react"
import { Button } from "./ui/button"

interface Props {
    children?: ReactNode
}

interface State {
    hasError: boolean
    error?: Error
}

export class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false
    }

    public static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error }
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error("Uncaught error:", error, errorInfo)
    }

    public render() {
        if (this.state.hasError) {
            return (
                <div className="flex flex-col items-center justify-center min-h-[400px] p-4">
                    <h2 className="text-2xl font-bold mb-4">Something went wrong</h2>
                    <Button onClick={() => this.setState({ hasError: false })}>
                        Try again
                    </Button>
                </div>
            )
        }

        return this.props.children
    }
}