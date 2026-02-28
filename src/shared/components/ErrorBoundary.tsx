import { Component, type ErrorInfo, type ReactNode } from "react";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

/**
 * ErrorBoundary — catches rendering errors anywhere in the child tree
 * and shows a friendly fallback UI instead of a blank page.
 */
export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: ErrorInfo): void {
    // You can log to an error reporting service here
    console.error("[ErrorBoundary]", error, info.componentStack);
  }

  private handleReset = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) return this.props.fallback;

      return (
        <div className="flex min-h-screen flex-col items-center justify-center gap-4 px-4 text-center">
          <div className="bg-error/10 flex h-16 w-16 items-center justify-center rounded-full">
            <svg
              className="text-error h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h2 className="text-text text-xl font-bold">Something went wrong</h2>
          <p className="text-text-muted max-w-md text-sm">
            An unexpected error occurred. Please try refreshing the page or
            click the button below.
          </p>
          {import.meta.env.DEV && this.state.error && (
            <pre className="bg-surface-alt text-error mt-2 max-w-xl overflow-auto rounded-lg p-4 text-left text-xs">
              {this.state.error.message}
            </pre>
          )}
          <div className="mt-2 flex gap-3">
            <button
              onClick={this.handleReset}
              className="bg-primary hover:bg-primary-hover rounded-lg px-5 py-2.5 text-sm font-medium text-white transition-colors"
            >
              Try Again
            </button>
            <button
              onClick={() => (window.location.href = "/")}
              className="border-border text-text hover:bg-surface-alt rounded-lg border px-5 py-2.5 text-sm font-medium transition-colors"
            >
              Go Home
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
