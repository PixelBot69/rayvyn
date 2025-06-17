import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Quote } from "lucide-react";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
const testimonials = [
    {
      quote:
      "Rayvyn AI completely changed the way we handle customer engagement. Our custom AI chatbot responds instantly and has helped us scale support like never before.",
    name: "Priya Mehta",
    designation: "Head of Customer Success at RetailStack",
      src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
     quote:
      "From CRM automation to lead generation, Rayvyn AI's solutions helped us close more deals with half the effort. It's the smartest tech investment we’ve made.",
    name: "Arjun Kapoor",
    designation: "Co-founder at GrowthCrafters",
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
 quote:
      "Their AI-driven workflows reduced our manual tasks by 70%. We now focus more on growth than operations. The onboarding was smooth and support was proactive.",
    name: "Neha Bansal",
    designation: "COO at Finverse",
      src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
      "We never imagined converting cold leads this easily. Rayvyn’s automation flows and analytics tools gave us real-time insights that actually convert.",
    name: "Rohan Verma",
    designation: "Marketing Lead at TrakIQ",
      src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
     quote:
      "Rayvyn AI helped us turn around our digital presence. From chatbot integration to SEO automation, we saw results within weeks — truly next-gen tech.",
    name: "Sneha Sharma",
    designation: "Founder of ZenBrands",
      src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

const Testimonials = () => {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/4 -right-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <Badge variant="outline" className="px-4 py-1 border-purple-500/50 bg-purple-500/10 text-purple-400 mb-4">
            Client Success Stories
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Clients Say</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We take pride in our work and our clients' success.
            Here's what some of them have to say about our partnership.
          </p>
        </div>
        
     
         <AnimatedTestimonials testimonials={testimonials} />;

  
        
        <div className="flex justify-center mt-16">
          <Link href="https://wa.me/918840948923" target="_blank" rel="noopener noreferrer">
          <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
            Start Your Project
          </Button></Link>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;