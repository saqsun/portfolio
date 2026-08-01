import ProjectGrid from "../components/ProjectGrid";
import adProjects from "../data/AdProjectsData";

export default function AdProjects() {
  return (
    <div className="mx-auto max-w-225">
      <h1>Playable Ads</h1>
      <div className="mb-7.5">
        And here are some playable ads I&apos;ve made or heavily contributed to.
      </div>
      <ProjectGrid projects={adProjects} />
    </div>
  );
}
