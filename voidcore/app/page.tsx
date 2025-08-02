import { BackgroundCode } from "@/components/home/background_code";
import { FeaturesSection } from "@/components/home/feature_section";
import Header from "@/components/home/header";
import { Hero } from "@/components/home/hero";
import { ProjectsSection } from "@/components/home/projects_section";

export default function Home() {
  return (
    <main className="bg-neutral-950 text-white">
      <Header />
      <BackgroundCode />
      <Hero />
      <FeaturesSection />
      <ProjectsSection />
    </main>
  )
}