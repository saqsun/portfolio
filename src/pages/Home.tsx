import HeroSection from "../components/home/HeroSection";
import AboutSection from "../components/home/AboutSection";
import ExperienceSection from "../components/home/ExperienceSection";
import EducationSection from "../components/home/EducationSection";
import SkillsSection from "../components/home/SkillsSection";
import ProjectsSection from "../components/home/ProjectsSection";
import SelectedGamesSection from "../components/home/SelectedGamesSection";
import TestimonialsSection from "../components/home/TestimonialsSection";
import ContactSection from "../components/home/ContactSection";

export default function Home() {
  return (
    <div className="template-home">
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <EducationSection />
      <SkillsSection />
      <ProjectsSection />
      <SelectedGamesSection />
      <TestimonialsSection />
      <ContactSection />
    </div>
  );
}
