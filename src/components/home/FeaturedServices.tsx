"use client";

import * as React from "react";
import { useState } from "react";
import Link from "next/link";

const PackagesSection = () => {
  const [activePackage, setActivePackage] = useState(null);

  const packages = [
    {
      id: "smart-start",
      title: "Smart Start",
      price: "₹20,000",
      subtitle: "(One-Time)",
      description: "Perfect for startups and small businesses looking to establish their digital presence with AI.",
      features: [
        "AI-Powered Landing Page (Framer/Webflow)",
        "Mobile-Responsive Web App (PWA)",
        "Basic GPT Chatbot (FAQs)",
        "Lead Form with Email Notification",
        "1 Automation (e.g., auto-email follow-up)"
      ],
      ctaText: "Get Started",
      popular: false,
    },
    {
      id: "lead-magnet-pro",
      title: "Lead Magnet Pro",
      price: "₹35,000",
      subtitle: "(One-Time)",
      description: "Ideal for growing businesses ready to scale their lead generation with intelligent automation.",
      features: [
        "AI Website (3–5 Pages + Blog/Booking)",
        "Mobile Web App (PWA) + Form Integrations",
        "GPT Chatbot with Lead Qualifier",
        "WhatsApp + Email Automation",
        "Lead Capture & CRM Setup (Notion or Hubspot)",
        "LinkedIn/Email Outreach Setup (PhantomBuster + GPT)"
      ],
      ctaText: "Get Started",
      popular: true,
    },
    {
      id: "automation-engine",
      title: "Automation Engine",
      price: "₹55,000",
      subtitle: "(One-Time)",
      description: "Complete automation suite for businesses serious about scaling operations and maximizing conversions.",
      features: [
        "All Lead Magnet Pro features plus:",
        "AI-Powered Blog & Copywriting Setup (GPT)",
        "Mobile Web App (React Native or PWA)",
        "Advanced CRM Workflows (auto-tagging, nurturing)",
        "Smart Funnel Integration (booking, email drip)",
        "Monthly Leads Dashboard (Google Sheets + GPT)",
        "2 Channels of Lead Generation (LinkedIn + Email)"
      ],
      ctaText: "Get Started",
      popular: false,
    },
    {
      id: "custom-ai-suite",
      title: "Custom AI Suite",
      price: "₹80,000+",
      subtitle: "Starts at",
      description: "Enterprise-grade custom solutions tailored to your specific business needs and workflows.",
      features: [
        "Custom Web + Mobile App (React/Flutter)",
        "Tailored GPT Chatbot (multi-intent, bookings, custom data)",
        "Internal CRM & Dashboard Setup",
        "Custom AI Lead Outreach Engine",
        "Business Workflow Automation (Slack, Gmail, Notion, etc.)",
        "Dedicated Support + Optimization"
      ],
      ctaText: "Book Free Consultation",
      popular: false,
    },
  ];

  const toggleAccordion = (packageId: any) => {
    setActivePackage((prev) => (prev === packageId ? null : packageId));
  };

  return (
    <div className="bg-black text-white min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-5xl font-bold mb-2">
            <span className="text-white">AI Automation </span>
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Packages
            </span>
          </h2>
          <h2 className="text-5xl font-bold text-white">Designed for Every Business</h2>

          <div className="mt-4 max-w-2xl">
            <p className="text-gray-300">
              Choose from our carefully crafted AI automation packages designed to transform your business operations, 
              boost lead generation, and scale your digital presence. Each package includes everything you need to get started.
            </p>
          </div>
        </div>

        <div className="flex flex-col">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`border-t border-gray-700 transition-all duration-300 ${
                pkg.popular ? 'relative' : ''
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-6 z-10">
                  <span className="bg-gradient-to-r from-emerald-500 to-blue-500 text-white text-sm font-semibold px-4 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div
                className="flex items-center justify-between py-6 cursor-pointer"
                onClick={() => toggleAccordion(pkg.id)}
              >
                <div className="flex items-center gap-6">
                  <h3
                    className={`text-4xl font-light transition-all duration-300 ${
                      activePackage === pkg.id ? "text-white font-normal" : "text-gray-500"
                    }`}
                  >
                    {pkg.title}
                  </h3>
                  <div className="flex flex-col">
                    <span className="text-2xl font-bold text-emerald-400">{pkg.price}</span>
                    <span className="text-sm text-gray-400">{pkg.subtitle}</span>
                  </div>
                </div>
                <button
                  className="rounded-full bg-gray-800 p-2 hover:bg-gray-700 transition-colors"
                  aria-label={`Toggle ${pkg.title} details`}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`transition-transform duration-300 ${
                      activePackage === pkg.id ? "rotate-90" : ""
                    }`}
                  >
                    <path
                      d="M5 12H19M19 12L12 5M19 12L12 19"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>

              {activePackage === pkg.id && (
                <div className="transition-all duration-300 overflow-hidden pb-8">
                  <div className="flex flex-col max-w-4xl">
                    <p className="text-gray-400 mb-6 text-lg">{pkg.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="text-xl font-semibold text-white mb-4">What's Included:</h4>
                      <ul className="space-y-3">
                        {pkg.features.map((feature, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <svg
                              className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span className={`text-gray-300 ${
                              feature.includes('plus:') ? 'font-semibold text-white' : ''
                            }`}>
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-4">
                      <Link
                        href="https://wa.me/918840948923"
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="px-8 py-3 text-white font-semibold bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                      >
                        {pkg.ctaText}
                      </Link>

                      <Link
                        href="/packages"
                        className="inline-flex items-center px-6 py-3 text-emerald-400 border border-emerald-400 rounded-lg hover:bg-emerald-400 hover:text-black transition-all duration-300"
                      >
                        Learn More
                        <svg
                          className="ml-2 h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-16 text-center bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8">
          <h3 className="text-3xl font-bold text-white mb-4">
            Not sure which package is right for you?
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Book a free 15-minute consultation with our AI automation experts to discuss your specific needs and get personalized recommendations.
          </p>
          <Link
            href="https://wa.me/918840948923"
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 text-lg font-semibold text-black bg-gradient-to-r from-emerald-400 to-blue-400 rounded-lg hover:from-emerald-500 hover:to-blue-500 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Book Free Consultation
            <svg
              className="ml-2 h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-3.582 8-8 8a8.955 8.955 0 01-4.126-.98L3 21l1.98-5.874A8.955 8.955 0 013 12c0-4.418 3.582-8 8-8s8 3.582 8 8z"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PackagesSection;