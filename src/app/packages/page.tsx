import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Our Services | Rayvyn AI",
  description: "Explore Rayvyn AI's comprehensive suite of AI and automation services - from web development to AI chatbots, data analysis, and more.",
};

interface ServiceCardProps {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: string;
  index: number;
}

// Enhanced Service Card Component
const ServiceCard: React.FC<ServiceCardProps> = ({ id, title, description, features, icon, index }) => {
  return (
    <div className="group relative flex flex-col rounded-2xl bg-gradient-to-br from-gray-800/60 to-gray-900/60 p-8 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-500/10 border border-gray-700/50 hover:border-blue-400/30 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Card number */}
      <div className="absolute top-4 right-6 w-8 h-8 rounded-full bg-gray-800/50 flex items-center justify-center text-gray-500 text-sm font-mono group-hover:bg-blue-500/20 group-hover:text-blue-400 transition-all duration-300">
        {String(index + 1).padStart(2, '0')}
      </div>
      
      <div className="relative z-10">
        {/* Icon with enhanced styling */}
        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600/20 to-purple-600/20 text-4xl border border-blue-500/20 group-hover:scale-110 group-hover:border-blue-400/40 transition-all duration-300">
          {icon}
        </div>
        
        <h3 className="mb-4 text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">{title}</h3>
        
        <p className="mb-6 text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">{description}</p>
        
        {/* Enhanced features list */}
        <ul className="mt-auto space-y-3">
          {features.map((feature, featureIndex) => (
            <li key={featureIndex} className="flex items-start text-sm text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
              <span className="mr-3 mt-0.5 h-1.5 w-1.5 rounded-full bg-blue-400 group-hover:bg-blue-300 transition-colors duration-300"></span>
              {feature}
            </li>
          ))}
        </ul>
        
        {/* Enhanced CTA */}
        <Link 
          href={`/services/${id}`} 
          className="mt-8 inline-flex items-center text-sm font-semibold text-blue-400 hover:text-blue-300 transition-all duration-300 group-hover:translate-x-1"
        >
          Explore Service
          <svg className="ml-2 h-4 w-4 group-hover:translate-x-0.5 transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

// Enhanced Process Step Component
const ProcessStep = ({
  number,
  title,
  description,
  isLast = false
}: {
  number: string;
  title: string;
  description: string;
  isLast?: boolean;
}) => {
  return (
    <div className="relative group">
      {/* Step number with glow effect */}
      <div className="absolute -left-4 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-sm font-bold text-white shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform duration-300">
        {number}
      </div>
      
      {/* Connecting line */}
      {!isLast && (
        <div className="absolute left-0 top-8 h-full w-px bg-gradient-to-b from-gray-600 to-gray-800"></div>
      )}
      
      {/* Content */}
      <div className="ml-12 pb-12">
        <h3 className="mb-3 text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">{title}</h3>
        <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">{description}</p>
      </div>
    </div>
  );
};

// Enhanced Technology Badge Component
const TechBadge = ({ name, index }: { name: string; index: number }) => {
  return (
    <div 
      className="flex items-center justify-center rounded-full bg-gray-800/60 px-5 py-2.5 backdrop-blur-sm transition-all duration-300 hover:bg-gray-700/60 hover:scale-105 border border-gray-700/50 hover:border-blue-500/30 group"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      <span className="text-sm font-medium text-gray-300 group-hover:text-blue-400 transition-colors duration-300">{name}</span>
    </div>
  );
};

const ServicesPage = () => {
  const services = [
  {
    id: "smart-start",
    title: "Smart Start",
    price: "₹20,000 (One-Time)",
    description: "Perfect for startups and individuals who want a fast, AI-powered web presence with essential automation.",
    features: [
      "AI-Powered Landing Page (Framer/Webflow)",
      "Mobile-Responsive Web App (PWA)",
      "Basic GPT Chatbot (FAQs)",
      "Lead Form with Email Notification",
      "1 Automation (e.g., auto-email follow-up)"
    ],
    icon: "🚀"
  },
  {
    id: "lead-magnet-pro",
    title: "Lead Magnet Pro",
    price: "₹35,000 (One-Time)",
    description: "Ideal for service providers who need advanced lead capture and automation setup.",
    features: [
      "AI Website (3–5 Pages + Blog/Booking)",
      "Mobile Web App (PWA) + Form Integrations",
      "GPT Chatbot with Lead Qualifier",
      "WhatsApp + Email Automation",
      "Lead Capture & CRM Setup (Notion or Hubspot)",
      "LinkedIn/Email Outreach Setup (PhantomBuster + GPT)"
    ],
    icon: "🎯"
  },
  {
    id: "automation-engine",
    title: "Automation Engine",
    price: "₹55,000 (One-Time)",
    description: "Designed for businesses looking to scale their outreach and automate deeply.",
    features: [
      "All Lead Magnet Pro features",
      "AI-Powered Blog & Copywriting Setup (GPT)",
      "Mobile Web App (React Native or PWA)",
      "Advanced CRM Workflows (auto-tagging, nurturing)",
      "Smart Funnel Integration (booking, email drip)",
      "Monthly Leads Dashboard (Google Sheets + GPT)",
      "2 Channels of Lead Generation (LinkedIn + Email)"
    ],
    icon: "⚙️"
  },
  {
    id: "custom-suite",
    title: "Custom AI Suite",
    price: "Starts at ₹80,000+",
    description: "Best for established businesses who want a fully customized AI-first digital setup.",
    features: [
      "Custom Web + Mobile App (React/Flutter)",
      "Tailored GPT Chatbot (multi-intent, bookings, custom data)",
      "Internal CRM & Dashboard Setup",
      "Custom AI Lead Outreach Engine",
      "Business Workflow Automation (Slack, Gmail, Notion, etc.)",
      "Dedicated Support + Optimization"
    ],
    icon: "🧠"
  }
];


  const processes = [
    {
      number: "1",
      title: "Discovery",
      description: "We start by understanding your business needs, challenges, and objectives through in-depth consultation."
    },
    {
      number: "2",
      title: "Strategy",
      description: "Our team develops a customized solution strategy aligned with your goals and technical requirements."
    },
    {
      number: "3", 
      title: "Implementation",
      description: "We build and deploy your solution using agile methodologies, ensuring quality and efficiency."
    },
    {
      number: "4",
      title: "Optimization",
      description: "We continuously monitor, maintain, and optimize your solution to ensure ongoing performance."
    }
  ];

const technologies = [
  "AI Chatbots (GPT, TensorFlow, Dialogflow)", 
  "Web & App Development (React, Next.js, Flutter)",
  "CRM & Workflow Automation (Zapier, Notion, HubSpot)",
  "Cloud Infrastructure (AWS, Google Cloud, Docker, Kubernetes)",
  "Backend Automation (Node.js, Python, Django)",
  "Custom API Integration (GraphQL, REST)",
  "Database Management (PostgreSQL, MongoDB)",
  "Data Analytics & Dashboards (Python, Looker, Power BI)",
  "TypeScript-Based Scalable Apps",
];


  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white">
      {/* Enhanced Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-16 lg:pt-32 lg:pb-24">
        {/* Optimized background gradients */}
        <div className="absolute inset-0 overflow-hidden opacity-60">
          <div className="absolute -left-1/4 top-0 h-full w-1/2 blur-3xl">
            <div className="h-full w-full bg-gradient-to-r from-blue-600/20 to-transparent"></div>
          </div>
          <div className="absolute -right-1/4 top-0 h-full w-1/2 blur-3xl">
            <div className="h-full w-full bg-gradient-to-l from-purple-600/20 to-transparent"></div>
          </div>
        </div>
        
        {/* Hero content */}
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 px-4 py-2 text-sm font-medium text-blue-400 border border-blue-500/20">
              <span className="w-2 h-2 rounded-full bg-blue-400"></span>
              OUR SERVICES
            </div>
            <h1 className="mb-8 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl lg:text-7xl">
              Transform Your Business
              <span className="block">With AI & Automation</span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-gray-400 leading-relaxed">
              Comprehensive AI and automation solutions designed to transform your business operations,
              enhance customer experiences, and drive sustainable growth.
            </p>
          </div>
        </div>
      </section>

      {/* Enhanced Services Section */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <div className="mb-16 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600/20 to-blue-600/20 px-4 py-2 text-sm font-medium text-purple-400 border border-purple-500/20">
              <span className="w-2 h-2 rounded-full bg-purple-400"></span>
              WHAT WE OFFER
            </div>
            <h2 className="mb-6 bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-4xl lg:text-5xl">
              Our Complete Service Suite
            </h2>
            <p className="mx-auto max-w-2xl text-gray-400 text-lg">
              From concept to deployment, we provide end-to-end solutions that scale with your business.
            </p>
          </div>

<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
  {services.map((service, index) => (
    <div
      key={service.id}
      className="group relative bg-gradient-to-br from-gray-900 to-black text-white rounded-3xl border border-gray-800/50 p-8 flex flex-col justify-between hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
      
      {/* Glow effect */}
      <div className="absolute -inset-px bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm -z-10" />
      
      <div className="relative z-10">
        {/* Header with icon space */}
        <div className="flex items-start justify-between mb-6">
          <div>
            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
              {service.title}
            </h3>
            <p className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              {service.price}
            </p>
          </div>
          {/* Optional: Add an icon or badge here */}
          <div className="w-3 h-3 bg-blue-500 rounded-full opacity-60 group-hover:opacity-100 group-hover:scale-150 transition-all duration-300" />
        </div>
        
        <p className="text-gray-300 mb-6 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
          {service.description}
        </p>
        
        {/* Features with modern styling */}
        <div className="space-y-3 mb-8">
          {service.features.map((feature, i) => (
            <div key={i} className="flex items-center space-x-3 text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>
      
      {/* CTA Button */}
      <a
        href={`https://wa.me/918840948923?text=Hi! I'm interested in the ${service.title} package.`}
        target="_blank"
        rel="noopener noreferrer"
        className="relative z-10 group/btn inline-block text-center bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-semibold py-3 px-6 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
      >
        <span className="relative z-10">Book Now</span>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-2xl opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
      </a>
    </div>
  ))}
</div>

        </div>
      </section>

      {/* Enhanced Process Section */}
      <section className="py-24 bg-gradient-to-b from-gray-900/50 to-black/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-20 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-green-600/20 to-blue-600/20 px-4 py-2 text-sm font-medium text-green-400 border border-green-500/20">
              <span className="w-2 h-2 rounded-full bg-green-400"></span>
              HOW WE WORK
            </div>
            <h2 className="mb-6 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-4xl lg:text-5xl">
              Our Proven Process
            </h2>
            <p className="mx-auto max-w-2xl text-gray-400 text-lg">
              We follow a structured approach to ensure each project delivers maximum value and exceeds expectations.
            </p>
          </div>
          
          <div className="relative mx-auto max-w-4xl">
            {processes.map((process, index) => (
              <ProcessStep
                key={index}
                number={process.number}
                title={process.title}
                description={process.description}
                isLast={index === processes.length - 1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Technologies Section */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-600/20 to-red-600/20 px-4 py-2 text-sm font-medium text-orange-400 border border-orange-500/20">
              <span className="w-2 h-2 rounded-full bg-orange-400"></span>
              TECH STACK
            </div>
            <h2 className="mb-6 bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-4xl lg:text-5xl">
              Cutting-Edge Technologies
            </h2>
            <p className="mx-auto max-w-2xl text-gray-400 text-lg">
              We leverage the latest technologies to build robust, scalable, and future-proof solutions.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <TechBadge key={index} name={tech} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Background gradients */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-900/40 via-transparent to-purple-900/40"></div>
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl rounded-3xl bg-gradient-to-br from-gray-800/60 to-gray-900/60 p-12 text-center backdrop-blur-sm border border-gray-700/50 shadow-2xl shadow-blue-500/10">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 px-4 py-2 text-sm font-medium text-blue-400 border border-blue-500/20">
              <span className="w-2 h-2 rounded-full bg-blue-400"></span>
              GET STARTED TODAY
            </div>
            <h2 className="mb-6 text-3xl font-bold sm:text-4xl lg:text-5xl bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Ready to Transform Your Business?
            </h2>
            <p className="mx-auto mb-10 max-w-xl text-gray-400 text-lg leading-relaxed">
              Contact us today to discuss your project and discover how our services can help you achieve your business goals and drive growth.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:from-blue-700 hover:to-purple-700 hover:shadow-lg hover:shadow-blue-500/25 hover:scale-105"
            >
              Schedule a Consultation
              <svg className="ml-2 h-5 w-5 group-hover:translate-x-0.5 transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;