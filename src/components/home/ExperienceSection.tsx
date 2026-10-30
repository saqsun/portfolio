import BlurFade from "#components/effects/BlurFade";
import WorkExperience from "#components/home/WorkExperience";

export default function ExperienceSection() {
  return (
    <section id="work">
      <div className="flex min-h-0 flex-col gap-y-6">
        <BlurFade delay={0.2}>
          <h2 className="text-xl font-bold">Work Experience</h2>
        </BlurFade>
        <BlurFade delay={0.24}>
          <WorkExperience />
        </BlurFade>
      </div>
    </section>
  );
}
