import { BrandIcons } from "../components/brand-icons";
import {
  ArrowUpRight,
  Network,
  Gauge,
  Users,
  Workflow,
  Mail,
  Send,
} from "lucide-react";
import { Link } from "react-router";
import { FlickeringGrid } from "../components/magicui/flickering-grid";
import BlurFade from "../components/magicui/blur-fade";
import { Avatar, AvatarImage, AvatarFallback } from "../components/ui/avatar";
import WorkSection from "../components/work-section";
import { ProjectCard } from "../components/project-card";
import { profile } from "../data/Profile";
import { featuredSkills } from "../data/Skills";
import { testimonials } from "../data/Testimonials";
import { gameCovers } from "../data/GameMedia";
import games from "../data/GamesData";
import { featuredGameDescriptions } from "../data/FeaturedGames";
import { gameTags } from "../data/GameTags";
const contactLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/saqsun/",
    icon: BrandIcons.linkedin,
  },
  { label: "Email", href: "mailto:sargissargsyan@icloud.com", icon: Mail },
  { label: "Telegram", href: "https://t.me/saqsun", icon: Send },
  {
    label: "WhatsApp",
    href: "https://wa.me/37493443261",
    icon: BrandIcons.whatsapp,
  },
];

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
function SkillIcon({ name }: { name: string }) {
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
const selectedGames = games.filter((game) =>
  [
    "solitaire-klondike-chronicles",
    "flipper-dunk-3d",
    "break-&-crush-icon",
    "bricks-versus",
  ].includes(game.id),
);

export default function About() {
  return (
    <div className="template-home">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="flex flex-col justify-between gap-2 gap-y-6 md:flex-row">
            <div className="order-2 flex min-w-0 flex-col gap-2 md:order-1">
              <BlurFade delay={0.04} yOffset={8} blur="8px">
                <h1 className="text-3xl font-semibold tracking-tighter sm:text-4xl lg:text-5xl">
                  Hi, I’m Sargis
                </h1>
              </BlurFade>
              <BlurFade delay={0.04} yOffset={8} blur="8px">
                <p className="max-w-[600px] text-muted-foreground md:text-lg lg:text-xl">
                  {profile.description}
                </p>
              </BlurFade>
            </div>
            <BlurFade delay={0.04} className="order-1 shrink-0 md:order-2">
              <Avatar className="size-24 rounded-full border shadow-lg ring-4 ring-muted md:size-32">
                <AvatarImage src="/img/avatar.webp" alt={profile.name} />
                <AvatarFallback>SS</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>
      <section id="about">
        <div className="flex min-h-0 flex-col gap-y-4">
          <BlurFade delay={0.12}>
            <h2 className="text-xl font-bold">About</h2>
          </BlurFade>
          <BlurFade delay={0.16}>
            <p className="max-w-full font-sans text-base leading-relaxed text-pretty text-muted-foreground [&_a]:rounded-sm [&_a]:font-medium [&_a]:text-foreground [&_a]:underline [&_a]:decoration-border [&_a]:underline-offset-4 [&_a:hover]:decoration-foreground [&_a:focus-visible]:outline-2 [&_a:focus-visible]:outline-offset-2 [&_a:focus-visible]:outline-ring">
              I’m a hands-on engineer and technical leader with 15+ years across
              HTML5 games, frontend platforms, and developer tooling. My
              experience includes{" "}
              <a href="https://playrix.com/" target="_blank" rel="noreferrer">
                Playrix
              </a>
              ,{" "}
              <a href="https://rubyplay.com/" target="_blank" rel="noreferrer">
                RubyPlay
              </a>
              ,{" "}
              <a href="https://www.voodoo.io/" target="_blank" rel="noreferrer">
                Voodoo
              </a>
              , and{" "}
              <a
                href="https://www.ixilix.com/"
                target="_blank"
                rel="noreferrer"
              >
                Ixilix
              </a>
              , alongside co-founding Armath. I’ve shipped{" "}
              <a href="#games">browser games</a> and build open-source tools
              like{" "}
              <a
                href="https://reparticlejs.github.io/reparticle/"
                target="_blank"
                rel="noreferrer"
              >
                reparticle
              </a>{" "}
              and{" "}
              <a
                href="https://replayablejs.github.io/replayable/"
                target="_blank"
                rel="noreferrer"
              >
                Replayable
              </a>
              . I care about reusable architecture, browser performance, and
              helping engineering teams do their best work.
            </p>
          </BlurFade>
        </div>
      </section>
      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={0.2}>
            <h2 className="text-xl font-bold">Work Experience</h2>
          </BlurFade>
          <BlurFade delay={0.24}>
            <WorkSection />
          </BlurFade>
        </div>
      </section>
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={0.28}>
            <h2 className="text-xl font-bold">Education</h2>
          </BlurFade>
          <div className="flex flex-col gap-8">
            {profile.education.map((education, index) => (
              <BlurFade key={education.year} delay={0.32 + index * 0.05}>
                <a
                  href="https://polytech.am/en/home/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group grid grid-cols-[minmax(0,1fr)] items-center gap-x-3 gap-y-1 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 sm:grid-cols-[minmax(0,1fr)_auto]"
                >
                  <div className="flex min-w-0 flex-1 items-center gap-x-3">
                    <img
                      src="/img/npua-logo.webp"
                      alt=""
                      width="40"
                      height="40"
                      loading="lazy"
                      className="size-8 flex-none overflow-hidden rounded-full border bg-white object-contain p-1 shadow ring-2 ring-border md:size-10"
                    />
                    <div className="flex min-w-0 flex-1 flex-col gap-0.5">
                      <h3 className="flex items-center gap-2 font-semibold leading-snug">
                        National Polytechnic University of Armenia
                        <ArrowUpRight
                          className="size-3.5 shrink-0 -translate-x-2 text-muted-foreground opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100"
                          aria-hidden="true"
                        />
                      </h3>
                      <p className="font-sans text-sm text-muted-foreground">
                        {education.degree} in Mathematics and Computer Science
                      </p>
                    </div>
                  </div>
                  <time
                    className="pl-11 text-left text-xs tabular-nums text-muted-foreground sm:pl-0 sm:text-right"
                    dateTime={education.year}
                  >
                    {education.year}
                  </time>
                </a>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-4">
          <BlurFade delay={0.36}>
            <h2 className="text-xl font-bold">Skills</h2>
          </BlurFade>
          <BlurFade delay={0.4}>
            <ul className="flex list-none flex-wrap gap-2 p-0">
              {featuredSkills.map((skill) => (
                <li
                  key={skill}
                  className="flex min-h-8 max-w-full items-center gap-2 rounded-xl border border-border bg-background px-3 py-1 ring-2 ring-border/20 [&>svg]:shrink-0 [&>img]:shrink-0"
                >
                  <SkillIcon name={skill} />
                  <span className="text-sm font-medium text-foreground">
                    {skill}
                  </span>
                </li>
              ))}
            </ul>
          </BlurFade>
        </div>
      </section>
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
                  I build browser games and open-source tools for game
                  developers. Here are a few of my favorites.
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
                  <ProjectCard {...project} templateStyle landscape />
                </BlurFade>
              ))}
            </div>
          </div>
        </BlurFade>
      </section>
      <section id="games">
        <BlurFade delay={0.52}>
          <div className="flex min-h-0 flex-col gap-y-8">
            <div className="flex flex-col items-center justify-center gap-y-4">
              <div className="flex w-full items-center">
                <div className="h-px flex-1 bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent" />
                <div className="z-10 rounded-xl border bg-primary px-4 py-1">
                  <span className="text-sm font-medium text-background">
                    Selected Games
                  </span>
                </div>
                <div className="h-px flex-1 bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
              </div>
              <div className="flex flex-col items-center justify-center gap-y-3">
                <h2 className="text-center text-3xl! font-bold tracking-tighter sm:text-4xl!">
                  Built to be played
                </h2>
                <p className="text-center text-balance text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
                  Released titles I made or heavily contributed to.
                </p>
              </div>
            </div>
            <div className="mx-auto grid w-full max-w-[800px] sm:auto-rows-fr grid-cols-1 gap-3 sm:grid-cols-2">
              {selectedGames.map((game, index) => (
                <BlurFade
                  key={game.id}
                  delay={0.56 + index * 0.05}
                  className="h-full"
                >
                  <ProjectCard
                    templateStyle
                    websiteLabel={null}
                    title={game.name}
                    href={game.targetUrl}
                    image={gameCovers[game.id]}
                    landscape
                    video={gameCovers[game.id]
                      ?.replace("/img/projects/", "/videos/games/")
                      .replace("-cover.webp", ".mp4")}
                    tags={gameTags[game.id]}
                    description={featuredGameDescriptions[game.id].description}
                  />
                </BlurFade>
              ))}
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                to="/games/"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border bg-card px-4 text-sm font-medium text-card-foreground transition-colors hover:bg-muted"
              >
                All games <ArrowUpRight size={14} aria-hidden="true" />
              </Link>
              <Link
                to="/ads/"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border bg-card px-4 text-sm font-medium text-card-foreground transition-colors hover:bg-muted"
              >
                Playable ads <ArrowUpRight size={14} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </BlurFade>
      </section>
      <section id="testimonials" aria-labelledby="testimonials-title">
        <BlurFade delay={0.62}>
          <div className="space-y-8">
            <div className="flex flex-col items-center justify-center gap-y-4">
              <div className="flex w-full items-center">
                <div className="h-px flex-1 bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent" />
                <div className="z-10 rounded-xl border bg-primary px-4 py-1">
                  <span className="text-sm font-medium text-background">
                    Recommendations
                  </span>
                </div>
                <div className="h-px flex-1 bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
              </div>
              <div className="flex flex-col items-center justify-center gap-y-3">
                <h2
                  id="testimonials-title"
                  className="text-center text-3xl! font-bold tracking-tighter sm:text-4xl!"
                >
                  What people say
                </h2>
                <p className="text-center text-balance text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
                  From the people I’ve built with and teams I’ve led.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {testimonials.map((testimonial) => (
                <figure
                  key={testimonial.name}
                  className="flex h-full flex-col gap-6 rounded-xl border border-border bg-card text-card-foreground p-6 transition-all duration-200 hover:ring-2 hover:ring-muted"
                >
                  <blockquote className="flex-1 text-sm leading-relaxed text-muted-foreground">
                    “{testimonial.quote}”
                  </blockquote>
                  <figcaption className="space-y-3">
                    <a
                      href={testimonial.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center gap-3 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      aria-label={`${testimonial.name} on LinkedIn`}
                    >
                      <span className="relative block size-10 shrink-0 overflow-hidden rounded-full">
                        <img
                          src={testimonial.photo}
                          alt={testimonial.name}
                          width="48"
                          height="48"
                          loading="lazy"
                          className="block size-full object-cover"
                        />
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-semibold group-hover:underline">
                          {testimonial.name}
                        </p>
                        <p
                          className="truncate text-xs leading-relaxed text-muted-foreground"
                          title={testimonial.role}
                        >
                          {testimonial.role}
                        </p>
                      </div>
                      <ArrowUpRight
                        size={14}
                        className="shrink-0 text-muted-foreground"
                        aria-hidden="true"
                      />
                    </a>
                    <div className="border-t pt-3 text-[11px] leading-relaxed text-muted-foreground">
                      <p>Worked together at {testimonial.workedTogetherAt}</p>
                    </div>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </BlurFade>
      </section>
      <section id="contact">
        <BlurFade delay={0.64}>
          <div className="relative rounded-xl border bg-card text-card-foreground px-5 py-10 sm:px-10">
            <div className="absolute -top-4 left-1/2 z-10 -translate-x-1/2 rounded-xl border bg-primary px-4 py-1">
              <span className="text-sm font-medium text-background">
                Contact
              </span>
            </div>
            <div
              className="contact-grid pointer-events-none absolute inset-x-0 top-0 h-1/2 overflow-hidden rounded-xl"
              aria-hidden="true"
            >
              <FlickeringGrid squareSize={2} gridGap={2} />
            </div>
            <div className="relative flex flex-col items-center gap-4 text-center">
              <h2 className="text-3xl! font-bold tracking-tighter sm:text-5xl!">
                Let’s Build Together
              </h2>
              <p className="mx-auto max-w-lg text-balance text-muted-foreground">
                Have an idea worth bringing to life? Let’s build something great
                together.
              </p>
              <div className="mt-2 grid w-full max-w-xs grid-cols-2 gap-2 sm:flex sm:max-w-none sm:flex-wrap sm:justify-center">
                {contactLinks.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("https:") ? "_blank" : undefined}
                    rel={href.startsWith("https:") ? "noreferrer" : undefined}
                    className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border bg-background px-4 text-sm font-medium text-foreground transition-colors hover:bg-muted"
                  >
                    <Icon className="size-4 shrink-0" aria-hidden="true" />
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </BlurFade>
      </section>
    </div>
  );
}
