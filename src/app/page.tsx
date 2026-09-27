import Hero from '../components/Hero';
import FeaturedProjects from '../components/FeaturedProjects';
import HomeConnect from '../components/HomeConnect';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#0c0c0e] text-white overflow-hidden relative">
      <Hero />
      <FeaturedProjects />
      <HomeConnect />
    </main>
  );
}