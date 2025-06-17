import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-black">
      {/* Background elements */}
      <div 
        className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20"
        style={{ mixBlendMode: "overlay" }}
      />
      
      {/* Abstract background pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-gradient-to-r from-blue-500 to-transparent rounded-full blur-3xl opacity-10"></div>
        <div className="absolute bottom-0 -right-1/4 w-1/2 h-1/2 bg-gradient-to-l from-purple-500 to-transparent rounded-full blur-3xl opacity-10"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="space-y-6">
              <Badge variant="outline" className="px-4 py-1 border-blue-500/50 bg-blue-500/10 text-blue-400 mb-4">
                Innovative AI Solutions
              </Badge>
              
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-none">
                We create 
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                  success
                </span>
              </h1>
              
              <p className="text-gray-300 text-lg max-w-lg mt-8">
                Empowering businesses through innovation. Transform your operations,
                customer experience, and decision making with our cutting-edge AI technologies.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-none px-8 py-6 text-lg">
                  Get Started
                </Button>
                <Button variant="outline" className="border-gray-700 hover:bg-gray-800 text-black rounded-none px-8 py-6 text-lg">
                  Explore Services
                </Button>
              </div>
              
              <div className="pt-10">
                <p className="text-gray-400 text-sm mb-3 uppercase tracking-wide">Trusted by innovative companies</p>
                <div className="flex flex-wrap gap-6 items-center">
                  <div className="text-gray-500 font-medium">ACME Inc.</div>
                  <div className="text-gray-500 font-medium">TechCorp</div>
                  <div className="text-gray-500 font-medium">InnovateLabs</div>
                  <div className="text-gray-500 font-medium">FutureTech</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative h-[400px] md:h-[480px]">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 to-purple-600/30 rounded-xl"></div>
            <div className="absolute inset-0 p-2">
              <div className="w-full h-full relative rounded-lg overflow-hidden">
                <Image
                  src="/api/placeholder/800/600"
                  alt="AI Visualization"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            
            {/* Stats overlay */}
            <div className="absolute bottom-8 left-8 right-8 flex gap-4">
              <div className="bg-black/60 backdrop-blur-md rounded-lg p-4 flex-1">
                <div className="text-2xl font-bold text-white">1,300+</div>
                <div className="text-xs text-gray-300 uppercase tracking-wider">Customer reviews</div>
              </div>
              <div className="bg-black/60 backdrop-blur-md rounded-lg p-4 flex-1">
                <div className="text-2xl font-bold text-white">50K+</div>
                <div className="text-xs text-gray-300 uppercase tracking-wider">Contributions</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;