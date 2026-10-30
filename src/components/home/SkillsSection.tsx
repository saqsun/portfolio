import BlurFade from "../effects/BlurFade";
import { featuredSkills } from "../../data/home/skills";
import SkillIcon from "./SkillIcon";

export default function SkillsSection() {
  return (
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
  );
}
