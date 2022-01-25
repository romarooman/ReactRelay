import React from "react";

/**
 * A reusable component for handling errors in a React (sub)tree.
 */
interface BoundaryError {
  source: unknown;
  message: string;
}

interface ErrorBoundaryState {
  error?: BoundaryError | null;
}

export default class ErrorBoundary extends React.Component {
  state: ErrorBoundaryState;

  constructor(props: {}) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return {
      error,
    };
  }

  render() {
    if (this.state.error != null) {
      return (
        <div>
          <div>Error: {this.state.error.message}</div>
          <div>
            <pre>{JSON.stringify(this.state.error.source, null, 2)}</pre>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
