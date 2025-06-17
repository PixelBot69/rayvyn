// src/app/about/page.tsx
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Shield,
  Users,
  Lightbulb,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Rayvyn AI",
  description:
    "Discover Rayvyn AI’s journey since 2024, founded by Aryan & Shreya Singh to deliver AI automation solutions to growing businesses.",
};

const teamMembers = [
  {
    name: "Aryan Singh",
    role: "Co-Founder",
    bio: "Co-founder of Rayvyn AI, Aryan drives innovation and tech execution with a vision for AI-driven automation.",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop",
  },
  {
    name: "Shreya Singh",
    role: "Co-Founder",
    bio: "Shreya leads the strategic direction and client success at Rayvyn AI with a passion for business growth.",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop",
  },
];

const milestones = [
  {
    year: "2024",
    title: "Company Founded",
    description:
      "Rayvyn AI was launched by Aryan and Shreya Singh with the goal of simplifying automation and AI adoption for SMEs.",
  },
  {
    year: "2025",
    title: "First Product Launch",
    description:
      "Released our AI chatbot and workflow automation platform, quickly gaining traction with early clients.",
  },
];

const values = [
  {
    title: "Innovation",
    description:
      "We push boundaries with creative, AI-powered solutions tailored to real business problems.",
    icon: <Lightbulb className="h-8 w-8" />,
    color: "bg-blue-500/20 text-blue-400",
  },
  {
    title: "Collaboration",
    description:
      "We work closely with our clients to co-build impactful, scalable AI systems.",
    icon: <Users className="h-8 w-8" />,
    color: "bg-purple-500/20 text-purple-400",
  },
  {
    title: "Trust",
    description:
      "We maintain transparency and uphold ethical AI standards in everything we do.",
    icon: <Shield className="h-8 w-8" />,
    color: "bg-blue-500/20 text-blue-400",
  },
];

export default function AboutPage() {
  return (
    <main className="bg-black text-white">
      <section className="relative overflow-hidden py-28 md:py-40">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-gradient-to-r from-blue-500 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 -right-1/4 w-1/2 h-1/2 bg-gradient-to-l from-purple-500 to-transparent rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-[90px] md:text-[150px] font-black leading-none tracking-tighter mb-6 uppercase">
            OUR <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">VISION</span>
          </h1>
          <p className="max-w-3xl mx-auto text-xl md:text-2xl text-gray-300">
            We help small and medium businesses automate processes and grow faster using AI and cutting-edge technologies.
          </p>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[500px] rounded-xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=2070&auto=format&fit=crop"
              alt="Rayvyn AI Founding"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          </div>
          <div>
            <Badge variant="outline" className="mb-4 text-blue-400 border-blue-400 py-1.5 px-4 text-sm uppercase tracking-wider">Our Start</Badge>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
              Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">Story</span>
            </h2>
            <p className="text-lg text-gray-300 mb-4">
              Rayvyn AI was founded in 2024 by Aryan and Shreya Singh with a shared vision to democratize access to AI solutions.
            </p>
            <p className="text-lg text-gray-300 mb-4">
              They noticed that while big companies adopted AI rapidly, small businesses lacked the tech support. So, they built Rayvyn AI to change that.
            </p>
            <p className="text-lg text-gray-300">
              Within the first year, they served their first set of clients and began shaping a powerful, scalable platform for digital growth.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <Badge variant="outline" className="mb-6 text-purple-400 border-purple-400 py-1.5 px-4 text-sm uppercase tracking-wider">Our Values</Badge>
          <h2 className="text-5xl md:text-6xl font-bold mb-8 tracking-tight">
            What <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">Drives Us</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {values.map((value, index) => (
              <Card key={index} className="bg-gray-900/60 backdrop-blur-sm border-gray-800 hover:border-blue-500 transition-all">
                <CardContent className="p-8">
                  <div className={`h-16 w-16 rounded-lg ${value.color} flex items-center justify-center mb-6`}>
                    {value.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{value.title}</h3>
                  <p className="text-gray-400 text-lg">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <Badge variant="outline" className="mb-6 text-blue-400 border-blue-400 py-1.5 px-4 text-sm uppercase tracking-wider">Milestones</Badge>
          <h2 className="text-5xl md:text-6xl font-bold mb-8 tracking-tight">
            Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">Journey</span>
          </h2>
          <div className="mt-16 space-y-12">
            {milestones.map((milestone, index) => (
              <Card key={index} className="bg-gray-900/60 text-white backdrop-blur-sm border-gray-800 max-w-3xl mx-auto">
                <CardContent className="p-8">
                  <Badge variant="secondary" className="bg-blue-500/20 text-blue-400 border-none mb-3 py-1.5 px-4 text-base">{milestone.year}</Badge>
                  <h3 className="text-2xl font-bold mb-2">{milestone.title}</h3>
                  <p className="text-gray-400 text-lg">{milestone.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-black text-center">
        <div className="max-w-4xl mx-auto px-6">
          <Badge variant="outline" className="mb-6 text-blue-400 border-blue-400 py-1.5 px-4 text-sm uppercase tracking-wider">Contact</Badge>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            Let's Build <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">Together</span>
          </h2>
          <p className="text-gray-300 text-xl mb-10">
            Partner with Rayvyn AI and take the first step toward smarter, automated operations.
          </p>
          <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 text-lg">
            <Link href="/contact">
              Contact Us <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
