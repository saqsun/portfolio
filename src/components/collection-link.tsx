import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router";

interface Props {
  title: string;
  description: string;
  href: string;
  label: string;
}

export function CollectionLink({ title, description, href, label }: Props) {
  return (
    <div className="flex flex-col items-start justify-between gap-4 rounded-xl border p-6 sm:flex-row sm:items-center">
      <div>
        <h2 className="text-base font-semibold">{title}</h2>
        <p className="mt-1 text-sm text-muted-foreground">{description}</p>
      </div>
      <Link
        to={href}
        className="inline-flex min-h-11 shrink-0 items-center gap-2 rounded-xl bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-80"
      >
        {label} <ArrowUpRight size={14} />
      </Link>
    </div>
  );
}
