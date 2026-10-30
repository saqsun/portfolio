import HeroSection from "../components/homepage/HeroSection";
import AboutSection from "../components/homepage/AboutSection";
import ExperienceSection from "../components/homepage/ExperienceSection";
import EducationSection from "../components/homepage/EducationSection";
import SkillsSection from "../components/homepage/SkillsSection";
import ProjectsSection from "../components/homepage/ProjectsSection";
import SelectedGamesSection from "../components/homepage/SelectedGamesSection";
import TestimonialsSection from "../components/homepage/TestimonialsSection";
import ContactSection from "../components/homepage/ContactSection";

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
