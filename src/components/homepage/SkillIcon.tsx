import { Network, Gauge, Users, Workflow } from "lucide-react";

const skillImages: Record<string, string> = {
  TypeScript: "typescript",
  JavaScript: "javascript",
  React: "react",
  PixiJS: "pixijs",
  "Three.js": "threejs",
  WebGL: "webgl",
  Spine: "spine",
  "Node.js": "nodejs",
  Webpack: "webpack",
  Vite: "vite",
  Git: "git",
  Claude: "claude",
  Codex: "codex",
};
export default function SkillIcon({ name }: { name: string }) {
  const image = skillImages[name];
  if (image)
    return (
      <span
        className="flex size-5 shrink-0 items-center justify-center"
        aria-hidden="true"
      >
        <img
          src={`/img/skills/${image}.webp`}
          alt=""
          width="16"
          height="16"
          className={`block size-5 shrink-0 object-contain ${name === "Three.js" ? "dark:invert" : name === "WebGL" ? "dark:brightness-[2.5]" : ""}`}
          loading="lazy"
        />
      </span>
    );
  const icons = {
    "CI/CD": { icon: Workflow, color: "text-green-500" },
    "Software Architecture": {
      icon: Network,
      color: "text-violet-500 dark:text-violet-400",
    },
    "Performance Tuning": { icon: Gauge, color: "text-amber-500" },
    "Technical Leadership": {
      icon: Users,
      color: "text-blue-500 dark:text-blue-400",
    },
  };
  const entry = icons[name as keyof typeof icons];
  if (!entry) return null;
  const Icon = entry.icon;
  return (
    <span
      className="flex size-5 shrink-0 items-center justify-center"
      aria-hidden="true"
    >
      <Icon size={16} className={`block shrink-0 ${entry.color}`} />
    </span>
  );
}
