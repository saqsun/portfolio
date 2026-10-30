import { ArrowLeft } from "lucide-react";
import { Link } from "react-router";
import BlurFade from "./magicui/blur-fade";

interface Props {
  label: string;
  title: string;
  description: string;
}

export function CollectionHeader({ label, title, description }: Props) {
  return (
    <header className="space-y-8">
      <Link
        to="/"
        className="inline-flex min-h-11 items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft size={14} /> Back to home
      </Link>
      <BlurFade delay={0.04}>
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="flex w-full items-center">
            <div className="h-px flex-1 bg-linear-to-r from-transparent via-border to-transparent" />
            <span className="rounded-xl border bg-primary px-4 py-1 text-sm font-medium text-background">
              {label}
            </span>
            <div className="h-px flex-1 bg-linear-to-l from-transparent via-border to-transparent" />
          </div>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            {title}
          </h1>
          <p className="text-balance text-muted-foreground md:text-lg">
            {description}
          </p>
        </div>
      </BlurFade>
    </header>
  );
}
