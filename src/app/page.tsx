import Hero from '../components/Hero';
import AboutHome from '../components/AboutHome';
import FeaturedProjects from '../components/FeaturedProjects';
import ExperienceSlider from '../components/ExperienceSlider';
import SkillsBox from '../components/SkillsBox';
import EducationHome from '../components/EducationHome';
import HomeConnect from '../components/HomeConnect';

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-x-clip">
      <Hero />
      <AboutHome />
      <FeaturedProjects />
      <ExperienceSlider />
      <SkillsBox />
      <EducationHome />
      <HomeConnect />
    </main>
  );
}
