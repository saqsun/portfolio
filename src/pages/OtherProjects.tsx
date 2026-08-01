import ProjectGrid from "../components/ProjectGrid";
import otherProjects from "../data/OtherProjectsData";

export default function OtherProjects() {
  return (
    <div className="mx-auto max-w-225">
      <h1>Playable Ads</h1>
      <div className="mb-7.5">
        And here are some playable ads I&apos;ve made or heavily contributed to.
      </div>
      <ProjectGrid projects={otherProjects} />
    </div>
  );
}
