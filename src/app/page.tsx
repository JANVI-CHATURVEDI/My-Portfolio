import Hero from '../components/Hero';
import FeaturedProjects from '../components/FeaturedProjects';
import HomeConnect from '../components/HomeConnect';
import LiquidBg from '../components/LiquidBg';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#0c0c0e] text-white overflow-hidden relative">
      <Hero />
      {/* Everything after the hero (the only image background): liquid backdrop */}
      <div>
        <LiquidBg />
        <FeaturedProjects />
        <HomeConnect />
      </div>
    </main>
  );
}