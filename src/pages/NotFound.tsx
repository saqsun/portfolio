import { ArrowLeft, SearchX } from "lucide-react";
import { Link } from "react-router";

export default function NotFound() {
  return (
    <section className="flex flex-col items-center gap-5 py-12 text-center">
      <SearchX className="size-12 text-muted-foreground" aria-hidden="true" />
      <p className="text-sm font-medium text-muted-foreground">404</p>
      <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
        Page not found
      </h1>
      <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
        This page may have moved, or the link is no longer available.
      </p>
      <Link
        to="/"
        className="inline-flex min-h-11 items-center gap-2 rounded-xl border bg-card px-4 text-sm font-medium text-card-foreground transition-colors hover:bg-muted"
      >
        <ArrowLeft size={14} aria-hidden="true" /> Back to home
      </Link>
    </section>
  );
}
