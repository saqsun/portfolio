interface Props {
  title: string;
  subtitle: string;
  href: string;
}

// Custom decorative laurels, not official award artwork.
function Laurel({ mirrored = false }: { mirrored?: boolean }) {
  return (
    <svg
      viewBox="0 0 24 56"
      className={`h-10 w-4 shrink-0 ${mirrored ? "-scale-x-100" : ""}`}
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        d="M21 53C5 43 4 22 17 4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      />
      <path d="M14 10C11 5 15 1 19 0C20 5 18 8 14 10Z M10 18C4 16 4 10 5 7C10 10 12 14 10 18Z M7 28C1 25 0 20 1 16C6 18 9 23 7 28Z M9 38C2 37 0 32 0 28C6 29 10 33 9 38Z M14 47C7 49 3 45 2 41C8 40 12 42 14 47Z M11 18C11 12 16 10 21 11C19 16 16 19 11 18Z M8 28C9 22 14 20 19 22C17 27 13 29 8 28Z M10 38C10 32 15 29 20 30C19 35 15 38 10 38Z M15 47C13 41 17 37 22 37C23 42 20 46 15 47Z" />
    </svg>
  );
}

export function AchievementBadge({ title, subtitle, href }: Props) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={`${title}, ${subtitle} — read the article`}
      className="absolute bottom-3 right-3 flex h-12 w-24 items-center justify-center rounded-sm text-center text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)] transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
    >
      <Laurel />
      <span className="min-w-0 flex-1">
        <span className="flex h-7.5 items-center justify-center whitespace-pre-line text-[9px] font-semibold leading-[10px]">
          {title}
        </span>
        <span className="mt-0.5 block text-[8px] leading-tight">
          {subtitle}
        </span>
      </span>
      <Laurel mirrored />
    </a>
  );
}
