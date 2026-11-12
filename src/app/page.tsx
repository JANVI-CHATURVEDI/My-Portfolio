import Hero from '../components/Hero';
import AboutHome from '../components/AboutHome';
import FeaturedProjects from '../components/FeaturedProjects';
import ExperienceSlider from '../components/ExperienceSlider';
import SkillsBox from '../components/SkillsBox';
import EducationHome from '../components/EducationHome';
import HomeConnect from '../components/HomeConnect';

export default function HomePage() {
  return (
    <main className="section-nude min-h-screen text-white overflow-hidden relative">
      <Hero />
      <div>
        <AboutHome />
        <FeaturedProjects />
        <ExperienceSlider />
        <SkillsBox />
        <EducationHome />
        <HomeConnect />
      </div>
    </main>
  );
}