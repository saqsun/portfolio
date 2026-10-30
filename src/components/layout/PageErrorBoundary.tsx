import { Component, type ReactNode } from "react";

const reloadPage = () => window.location.reload();

export default class PageErrorBoundary extends Component<
  { children: ReactNode },
  { error: Error | null }
> {
  state: { error: Error | null } = { error: null };

  static getDerivedStateFromError(error: Error) {
    return { error };
  }

  render() {
    if (!this.state.error) return this.props.children;

    return (
      <section className="space-y-4 rounded-xl border bg-card p-6 text-card-foreground">
        <h1 className="text-xl font-semibold">This page couldn’t load</h1>
        <p className="text-sm text-muted-foreground">
          Reload the page to try again.
        </p>
        <button
          type="button"
          onClick={reloadPage}
          className="rounded-lg bg-primary px-4 py-2 text-sm text-primary-foreground"
        >
          Reload page
        </button>
        <details className="text-xs text-muted-foreground">
          <summary>Error details</summary>
          <p className="mt-2 break-words">{String(this.state.error)}</p>
        </details>
      </section>
    );
  }
}
