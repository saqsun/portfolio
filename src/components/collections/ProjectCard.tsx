// Adapted from magicuidesign/portfolio; see licenses/magic-ui-portfolio-LICENSE.
import { ArrowUpRight, Globe } from "lucide-react";
import { BrandIcons } from "../icons/BrandIcons";
import { VideoPreview } from "../media/VideoPreview";
import { Badge } from "../ui/Badge";

interface Props {
  title: string;
  image: string;
  description: string;
  tags: readonly string[];
  href: string;
  source?: string;
  websiteLabel?: string | null;
  landscape?: boolean;
  video?: string;
  containImage?: boolean;
}
export function ProjectCard({
  title,
  image,
  description,
  tags,
  href,
  source,
  websiteLabel = "Website",
  landscape = false,
  video,
  containImage = false,
}: Props) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card text-card-foreground transition-all duration-200 hover:ring-2 hover:ring-muted">
      <div className="relative shrink-0">
        {video ? (
          <VideoPreview
            src={video}
            poster={image}
            title={title}
            href={href}
            landscape={landscape}
          />
        ) : (
          <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring"
            aria-label={`Explore ${title}`}
          >
            <img
              src={image}
              alt={`${title} preview`}
              loading="lazy"
              width="640"
              height="384"
              className={`${landscape ? "aspect-12/7" : "h-48"} w-full ${containImage ? "bg-slate-100 dark:bg-slate-300 object-contain p-10" : "object-cover"}`}
            />
          </a>
        )}
        {(websiteLabel || source) && (
          <div className="absolute top-2 right-2 left-2 flex flex-wrap justify-end gap-2">
            {websiteLabel && (
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={`${title} website`}
              >
                <Badge className="gap-1.5 bg-black text-xs text-white hover:bg-black/90">
                  <Globe size={12} aria-hidden="true" />
                  {websiteLabel}
                </Badge>
              </a>
            )}
            {source && (
              <a
                href={source}
                target="_blank"
                rel="noreferrer"
                aria-label={`${title} source code`}
              >
                <Badge className="gap-1.5 bg-black text-xs text-white hover:bg-black/90">
                  <BrandIcons.github className="size-3" aria-hidden="true" />
                  Source
                </Badge>
              </a>
            )}
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5 sm:p-6">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-semibold">{title}</h3>
          <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="-my-3 -mr-3 inline-flex size-11 shrink-0 items-center justify-center rounded-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            aria-label={`Open ${title}`}
          >
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>
        {description && (
          <p className="flex-1 text-xs leading-relaxed text-pretty text-muted-foreground">
            {description}
          </p>
        )}
        <div className="mt-auto flex flex-wrap gap-1">
          {tags.map((tag) => (
            <Badge
              key={tag}
              variant="outline"
              className="h-6 w-fit border-border px-2 text-[11px] font-medium"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </article>
  );
}
