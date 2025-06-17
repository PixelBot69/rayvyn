import { Metadata } from "next";
import Image from 'next/image';
import Link from 'next/link';
import { getAllProjects } from '@/data/projects';
import { HeroParallax } from "@/components/ui/hero-parallax";
export const metadata: Metadata = {
  title: "Our Work | Nexus Intelligent AI Solutions",
  description: "Explore our portfolio of innovative AI and digital projects.",
};

export const products = [
  {
    title: "",
    link: "#",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/moonbeam.png",
  },
  {
    title: "",
    link: "#",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/cursor.png",
  },
  {
    title: "",
    link: "#",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/rogue.png",
  },
 
  {
    title: "",
    link: "#",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/editorially.png",
  },
  {
    title: "",
    link: "#",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/editrix.png",
  },
  {
    title: "",
    link: "#",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/pixelperfect.png",
  },
 
  {
    title: "",
    link: "#",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/algochurn.png",
  },
  {
    title: "",
    link: "#",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/aceternityui.png",
  },
  {
    title: "",
    link: "#",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/tailwindmasterkit.png",
  },
  {
    title: "",
    link: "#",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/smartbridge.png",
  },
  {
    title: "",
    link: "#",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/renderwork.png",
  },
 
  {
    title: "",
    link: "#",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/cremedigital.png",
  },
  {
    title: "",
    link: "#",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/goldenbellsacademy.png",
  },
  {
    title: "",
    link: "#",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/invoker.png",
  },
  {
    title: "",
    link: "#",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/efreeinvoice.png",
  },
];

export default function WorkPage() {
  const projects = getAllProjects();
  
  return (
    <main className="min-h-screen bg-black text-white">
      <HeroParallax products={products} />;
      {/* Hero Section with Gradient Overlay */}


      {/* Projects Section */}
     
             
      
      {/* Contact CTA */}
      <div className="container mx-auto px-4 py-20">
        <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-gray-800 rounded-2xl p-10 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to create something amazing?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's collaborate on your next project and bring your vision to life with cutting-edge technology.
          </p>
          <Link href="/contact" className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-300">
            Get in touch
          </Link>
        </div>
      </div>
    </main>
  );
}