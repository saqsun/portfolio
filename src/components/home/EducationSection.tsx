import BlurFade from "../effects/BlurFade";
import { ArrowUpRight } from "lucide-react";
import { profile } from "../../data/home/profile";

export default function EducationSection() {
  return (
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
                    src="/img/education/npua-logo.webp"
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
  );
}
