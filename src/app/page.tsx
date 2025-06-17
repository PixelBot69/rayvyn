import Hero from "@/components/home/Hero";
import FeaturedServices from "@/components/home/FeaturedServices";
import Testimonials from "@/components/home/Testimonials";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import CTA from "@/components/home/CTA";
import { Metadata } from "next";
import WorkShowcase from "@/components/home/WorkShowcase";
import { getFeaturedProjects } from "@/data/projects";
import HeroSectionOne from "@/components/hero-section-demo-1";

export const metadata: Metadata = {
  title: "Nexus | Intelligent AI Solutions for Modern Business",
  description: "Empowering businesses with smart automation and AI technologies.",
};

export default function Home() {
  const featuredProjects = getFeaturedProjects();
  return (
    <main className="min-h-screen bg-black text-white">
      <HeroSectionOne />
      <FeaturedServices />
      <WorkShowcase featuredProjects={featuredProjects} />
      <WhyChooseUs />
      <Testimonials />
      <CTA />
    </main>
  );
}