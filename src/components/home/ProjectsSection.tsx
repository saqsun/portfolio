import BlurFade from "../effects/BlurFade";
import { profile } from "../../data/home/profile";
import { ProjectCard } from "../collections/ProjectCard";

export default function ProjectsSection() {
  return (
    <section id="projects">
      <BlurFade delay={0.44}>
        <div className="flex min-h-0 flex-col gap-y-8">
          <div className="flex flex-col items-center justify-center gap-y-4">
            <div className="flex w-full items-center">
              <div className="h-px flex-1 bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent" />
              <div className="z-10 rounded-xl border bg-primary px-4 py-1">
                <span className="text-sm font-medium text-background">
                  My Projects
                </span>
              </div>
              <div className="h-px flex-1 bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
            </div>
            <div className="flex flex-col items-center justify-center gap-y-3">
              <h2 className="text-center text-3xl! font-bold tracking-tighter sm:text-4xl!">
                Check out my latest work
              </h2>
              <p className="text-center text-balance text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
                I build browser games and open-source tools for game developers.
                Here are a few of my favorites.
              </p>
            </div>
          </div>
          <div className="mx-auto grid w-full max-w-[800px] sm:auto-rows-fr grid-cols-1 gap-3 sm:grid-cols-2">
            {profile.projects.map((project, index) => (
              <BlurFade
                key={project.title}
                delay={0.48 + index * 0.05}
                className="h-full"
              >
                <ProjectCard {...project} landscape />
              </BlurFade>
            ))}
          </div>
        </div>
      </BlurFade>
    </section>
  );
}
