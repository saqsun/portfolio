import type { Project } from "../data/Project";

interface ProjectGridProps {
  projects: readonly Project[];
}

export default function ProjectGrid({ projects }: ProjectGridProps) {
  return (
    <div className="grid max-w-225 grid-cols-1 gap-y-5 desktop:grid-cols-3 desktop:auto-rows-[minmax(250px,auto)] desktop:gap-5">
      {projects.map((project) => (
        <a
          aria-label={project.name}
          className={`project-card relative h-75 w-full cursor-pointer overflow-hidden hover:brightness-120 desktop:h-full ${
            project.isWide ? "desktop:col-span-2" : ""
          } ${project.isHigh ? "desktop:row-span-2" : ""}`}
          href={project.targetUrl}
          key={project.id}
          rel="noopener noreferrer"
          target="_blank"
        >
          <img
            className="absolute inset-0 size-full object-cover object-center transition-all duration-200 hover:scale-110"
            src={project.iconUrl}
            alt=""
          />
          <div
            className={`absolute bottom-0 w-full ${
              project.accentColor === "#383838"
                ? "bg-project-title-dark"
                : "bg-project-title"
            }`}
          >
            <div className="p-2.5">{project.name}</div>
          </div>
        </a>
      ))}
    </div>
  );
}
