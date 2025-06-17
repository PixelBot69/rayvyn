import Image from "next/image";
import { CheckCircle, Zap, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { AnimatedTooltip } from "../ui/animated-tooltip";

const reasons = [
  {
    icon: <CheckCircle className="h-6 w-6 text-blue-400" />,
    title: "Cutting-edge Technology",
    description: "We stay at the forefront of AI advancements to bring you the most powerful solutions.",
    bgColor: "bg-blue-500/20",
    textColor: "text-blue-400"
  },
  {
    icon: <Zap className="h-6 w-6 text-purple-400" />,
    title: "Rapid Implementation",
    description: "Our streamlined processes ensure quick deployment without sacrificing quality.",
    bgColor: "bg-purple-500/20",
    textColor: "text-purple-400"
  },
  {
    icon: <Users className="h-6 w-6 text-blue-400" />,
    title: "Expert Team",
    description: "Our specialists combine technical expertise with business acumen for optimal results.",
    bgColor: "bg-blue-500/20",
    textColor: "text-blue-400"
  }
];

const stats = [
  { value: "95%", label: "Client Satisfaction" },
  { value: "150+", label: "Projects Completed" },
  { value: "24/7", label: "Support" }
];

const people = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 2,
    name: "Robert Johnson",
    designation: "Product Manager",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Data Scientist",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "UX Designer",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    id: 5,
    name: "Tyler Durden",
    designation: "Soap Developer",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    id: 6,
    name: "Dora",
    designation: "The Explorer",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-950 to-black relative overflow-hidden">
      {/* Background blur */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-l from-blue-500 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-r from-purple-500 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side */}
          <div>
            <Badge variant="outline" className="px-4 py-1 border-blue-500/50 bg-blue-500/10 text-blue-400 mb-4">
              Why Choose Us
            </Badge>

            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Rayvyn AI</span>
            </h2>

            <p className="text-gray-300 mb-8">
              We combine cutting-edge AI technology with deep industry expertise to deliver 
              solutions that drive real business results. Our approach is collaborative, 
              transparent, and focused on your long-term success.
            </p>

            <div className="space-y-6">
              {reasons.map((reason, index) => (
                <div key={index} className="flex items-start">
                  <div className={`flex-shrink-0 h-10 w-10 rounded-full ${reason.bgColor} flex items-center justify-center ${reason.textColor}`}>
                    {reason.icon}
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium mb-1">{reason.title}</h4>
                    <p className="text-gray-400">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side */}
          <div className="space-y-6">
            {/* Image */}
            <div className="relative h-[300px] rounded-xl overflow-hidden shadow-lg">
              <Image
                 src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Tech team working"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            </div>

            {/* Tooltip under image */}
      <div className="flex flex-row flex-wrap justify-center items-center gap-4">
  <AnimatedTooltip items={people} />
</div>


            {/* Stats under tooltip */}
            <div className="flex flex-wrap gap-4 px-2">
              {stats.map((stat, index) => (
                <div key={index} className="bg-black/60 backdrop-blur-md p-4 rounded-lg flex-1 min-w-[120px]">
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
