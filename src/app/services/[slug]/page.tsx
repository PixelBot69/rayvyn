// app/services/[slug]/page.tsx
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { services } from "@/data/service";
import { ChevronRight, ArrowRight, Check, Sparkles, Zap, Target } from "lucide-react";

interface ServicePageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const service = services.find((s) => s.id === params.slug);
  
  if (!service) {
    return {
      title: "Service Not Found",
    };
  }
  
  return {
    title: `${service.title} - Rayvyn AI`,
    description: service.description,
  };
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.id,
  }));
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = services.find((s) => s.id === params.slug);
  
  if (!service) {
    notFound();
  }
  
  // Find related services (exclude current service)
  const relatedServices = services
    .filter((s) => s.id !== params.slug)
    .slice(0, 3);

  // Enhanced feature icons for better visual appeal
  const featureIcons = [Sparkles, Zap, Target, Check, ArrowRight, ChevronRight];
  
  return (
    <main className="bg-zinc-950 text-zinc-100">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center border-b border-zinc-800/50">
        {/* Subtle gradient background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-blue-500/5 to-transparent"></div>
          <div className="absolute bottom-0 right-0 w-2/3 h-2/3 bg-gradient-radial from-purple-500/5 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="flex-1 space-y-8">
              <nav className="flex items-center text-sm font-medium text-zinc-400">
                <Link href="/services" className="hover:text-blue-400 transition-colors">
                  Services
                </Link>
                <ChevronRight className="h-4 w-4 mx-2 text-zinc-600" />
                <span className="text-zinc-200">{service.title}</span>
              </nav>
              
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                  {service.title}
                </h1>
                <p className="text-xl text-zinc-300 leading-relaxed max-w-2xl">
                  {service.description}
                </p>
                <div className="pt-4">
                  <Link
                    href="https://wa.me/918840948923" target="_blank" rel="noopener noreferrer"
                    className="group inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-200 shadow-lg shadow-blue-500/20"
                  >
                    Request a Consultation
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="flex-1 w-full aspect-video">
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/10 border border-zinc-800/50">
                <Image 
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-950/60 to-transparent"></div>
                <div className="absolute top-6 left-6 w-12 h-12 rounded-xl bg-blue-600/90 backdrop-blur-md flex items-center justify-center text-white text-2xl shadow-lg shadow-blue-500/20">
                  {service.icon}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Features Section */}
      <section className="py-24 bg-zinc-950 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-4">
              <Sparkles className="h-4 w-4" />
              Key Features
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              Everything You Need in One 
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
                Powerful Solution
              </span>
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed">
              Our {service.title.toLowerCase()} service provides comprehensive solutions with cutting-edge features 
              designed to accelerate your business growth and maximize your investment returns.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.features.map((feature, index) => {
              const IconComponent = featureIcons[index % featureIcons.length];
              return (
                <div 
                  key={index} 
                  className="group relative bg-gradient-to-br from-zinc-900/80 to-zinc-900/40 backdrop-blur-xl rounded-2xl p-8 border border-zinc-800/50 hover:border-blue-500/30 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/10"
                >
                  {/* Animated background glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 rounded-2xl transition-all duration-500 blur-xl"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500"></div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/30 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-blue-500/25">
                        <IconComponent className="h-7 w-7" />
                      </div>
                      <div className="w-8 h-8 rounded-full bg-zinc-800/50 flex items-center justify-center text-zinc-500 text-sm font-mono group-hover:bg-blue-500/20 group-hover:text-blue-400 transition-all duration-300">
                        {String(index + 1).padStart(2, '0')}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-4 group-hover:text-blue-400 transition-colors duration-300">
                      {feature}
                    </h3>
                    <p className="text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors duration-300">
                      Advanced {feature.toLowerCase()} capabilities that leverage cutting-edge technology to deliver 
                      measurable results and drive exceptional business growth.
                    </p>
                    
                    {/* Decorative elements */}
                    <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 blur-2xl"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-zinc-900/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">Process</span>
            </h2>
            <p className="text-zinc-400 text-lg">
              We follow a structured approach to ensure each project delivers maximum value and meets your specific business objectives.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: 1,
                title: "Discovery",
                description: "We start by understanding your business needs, challenges, and objectives through in-depth consultation."
              },
              {
                step: 2,
                title: "Strategy",
                description: "Our team develops a customized solution strategy aligned with your goals and technical requirements."
              },
              {
                step: 3,
                title: "Implementation",
                description: "We build and deploy your solution using agile methodologies, ensuring quality and efficiency."
              },
              {
                step: 4,
                title: "Optimization",
                description: "We continuously monitor, maintain, and optimize your solution to ensure ongoing performance."
              }
            ].map((process) => (
              <div key={process.step} className="group relative">
                <div className="absolute -top-6 left-0 text-7xl font-bold text-blue-500/10 group-hover:text-blue-500/20 transition-colors duration-300">
                  {process.step}
                </div>
                <div className="relative bg-zinc-900/50 backdrop-blur-sm rounded-xl p-8 pt-12 border border-zinc-800/50 h-full z-10">
                  <h3 className="text-xl font-semibold mb-4 group-hover:text-blue-400 transition-colors">
                    {process.title}
                  </h3>
                  <p className="text-zinc-400">
                    {process.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Related Services Section */}
      <section className="py-24 bg-zinc-950 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-radial from-blue-500/5 to-transparent"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-radial from-purple-500/5 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-4">
              <Target className="h-4 w-4" />
              Explore More
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              Complete Your 
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-500 to-cyan-400">
                Digital Ecosystem
              </span>
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed">
              Discover our comprehensive suite of services that work seamlessly together to create 
              powerful, integrated solutions for your business.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedServices.map((relatedService, index) => (
              <Link 
                key={relatedService.id} 
                href={`/services/${relatedService.id}`}
                className="group relative flex flex-col bg-gradient-to-br from-zinc-900/80 to-zinc-900/40 backdrop-blur-xl rounded-2xl overflow-hidden border border-zinc-800/50 hover:border-purple-500/30 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/10 h-full"
              >
                {/* Animated background glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl"></div>
                
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={relatedService.image}
                    alt={relatedService.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/50 to-transparent"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Enhanced icon with glow effect */}
                  <div className="absolute top-6 left-6 w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600/90 to-blue-600/90 backdrop-blur-md flex items-center justify-center text-white shadow-lg shadow-purple-500/30 group-hover:shadow-purple-500/50 group-hover:scale-110 transition-all duration-300">
                    {relatedService.icon}
                  </div>
                  
                  {/* Service number indicator */}
                  <div className="absolute top-6 right-6 w-8 h-8 rounded-full bg-zinc-950/80 backdrop-blur-md flex items-center justify-center text-zinc-400 text-sm font-mono group-hover:bg-purple-500/20 group-hover:text-purple-400 transition-all duration-300">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </div>
                
                <div className="relative p-8 flex-1 flex flex-col z-10">
                  <h3 className="text-xl font-bold mb-4 group-hover:text-purple-400 transition-colors duration-300">
                    {relatedService.title}
                  </h3>
                  <p className="text-zinc-400 mb-8 flex-1 leading-relaxed group-hover:text-zinc-300 transition-colors duration-300">
                    {relatedService.description}
                  </p>
                  
                  <div className="flex items-center justify-between mt-auto">
                    <div className="inline-flex items-center text-purple-400 font-semibold group-hover:text-purple-300 transition-colors duration-300">
                      Explore Service
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform duration-300" />
                    </div>
                    
                    {/* Decorative arrow */}
                    <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center group-hover:bg-purple-500/20 group-hover:scale-110 transition-all duration-300">
                      <ArrowRight className="h-4 w-4 text-purple-400" />
                    </div>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute bottom-4 right-4 w-16 h-16 bg-gradient-to-br from-purple-500/5 to-blue-500/5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 blur-2xl"></div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 to-purple-900/10"></div>
          <div className="absolute -bottom-48 -right-48 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
          <div className="absolute -top-48 -left-48 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Ready to Get Started?
            </h2>
            <p className="text-zinc-400 text-lg">
              Contact us today to discuss your {service.title.toLowerCase()} needs and discover how our services can help you achieve your business goals.
            </p>
            <div className="pt-4">
              <Link
              href="https://wa.me/918840948923" target="_blank" rel="noopener noreferrer"
                className="group inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-all duration-200 shadow-lg shadow-blue-500/20"
              >
                Schedule a Consultation
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}