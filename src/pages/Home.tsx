import HeroSection from "#components/home/HeroSection";
import AboutSection from "#components/home/AboutSection";
import ExperienceSection from "#components/home/ExperienceSection";
import EducationSection from "#components/home/EducationSection";
import SkillsSection from "#components/home/SkillsSection";
import ProjectsSection from "#components/home/ProjectsSection";
import GamesSection from "#components/home/GamesSection";
import PlayableAdsSection from "#components/home/PlayableAdsSection";
import TestimonialsSection from "#components/home/TestimonialsSection";
import ContactSection from "#components/home/ContactSection";

export default function Home() {
  return (
    <div className="home-page">
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <EducationSection />
      <SkillsSection />
      <ProjectsSection />
      <GamesSection />
      <PlayableAdsSection />
      <TestimonialsSection />
      <ContactSection />
    </div>
  );
}
