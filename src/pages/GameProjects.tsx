import { Link } from "react-router";
import ProjectGrid from "../components/ProjectGrid";
import gameProjects from "../data/GameProjectsData";

export default function GameProjects() {
  return (
    <div className="mx-auto max-w-225">
      <h1>Games</h1>
      <div className="mb-7.5">
        The following are some games I&apos;ve made or heavily contributed to.
      </div>
      <ProjectGrid projects={gameProjects} />
      <div className="mt-5">
        There is more to see <Link to="/ads">here</Link>
      </div>
    </div>
  );
}
