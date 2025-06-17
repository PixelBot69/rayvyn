"use client";

import * as React from "react";
import { useState } from "react";
import Link from "next/link";

const ServicesAccordion = () => {
  const [activeService, setActiveService] = useState(null);

  const services = [
    {
      id: "web-app-dev",
      title: "Web & App Development",
      description: "Crafting scalable, high-performance websites and mobile apps tailored to your business goals.",
      content:
        "From responsive websites to feature-rich mobile apps, we develop robust, user-focused digital platforms using modern frameworks that enhance performance, security, and experience.",
      href: "/services/web-development",
    },
    {
      id: "seo-social-automation",
      title: "SEO & Social Media Automation",
      description: "Boost your online visibility with AI-driven SEO and automated content strategies.",
      content:
        "We help you rank higher and engage smarter by combining SEO best practices with automated social media publishing, analysis, and optimization tools across all platforms.",
      href: "/services/seo-social",
    },
    {
      id: "crm-workflow",
      title: "CRM & Workflow Automation",
      description: "Automate client journeys and internal operations to scale faster with fewer bottlenecks.",
      content:
        "We integrate and automate your CRM, task management, and notifications, allowing your team to focus on conversions and service delivery instead of repetitive work.",
      href: "/services/automation",
    },
    {
      id: "chatbots",
      title: "AI Chatbots",
      description: "24/7 customer interaction with AI-powered chatbots that understand and convert.",
      content:
        "Our smart chatbots help with lead qualification, support, booking, and more—trained on your business data and ready to scale across web, WhatsApp, Instagram, and Messenger.",
      href: "/services/ai-chatbots",
    },
    {
      id: "data-insights",
      title: "Data Analytics & Insights",
      description: "Turn raw data into actionable strategies with intelligent visual dashboards.",
      content:
        "We help you monitor KPIs, user behavior, and campaign performance using intuitive dashboards powered by real-time analytics to enable better decisions.",
      href: "/services/data-analysis",
    },
    {
      id: "lead-gen",
      title: "Lead Generation",
      description: "Get qualified leads consistently with automation, targeting, and smart filtering.",
      content:
        "From scraping potential prospects to outreach via email and LinkedIn, we automate and optimize your lead pipeline with tools built to convert.",
      href: "/services/data-analysis",
    },
  ];

  const toggleAccordion = (serviceId: any) => {
    setActiveService((prev) => (prev === serviceId ? null : serviceId));
  };

  return (
    <div className="bg-black text-white min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-5xl font-bold mb-2">
            <span className="text-white">AI-Powered </span>
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Solutions
            </span>
          </h2>
          <h2 className="text-5xl font-bold text-white">We Offer at Rayvyn</h2>

          <div className="mt-4 max-w-2xl">
            <p className="text-gray-300">
              We offer services that can help businesses improve their visibility and
              business reputation online, expand market reach, and increase
              turnover through effective digital strategies. Following are the services
              we provide
            </p>
          </div>
        </div>

        <div className="flex flex-col">
          {services.map((service) => (
            <div
              key={service.id}
              className="border-t border-gray-700 transition-all duration-300"
            >
              <div
                className="flex items-center justify-between py-6 cursor-pointer"
                onClick={() => toggleAccordion(service.id)}
              >
                <h3
                  className={`text-4xl font-light transition-all duration-300 ${
                    activeService === service.id ? "text-white font-normal" : "text-gray-500"
                  }`}
                >
                  {service.title}
                </h3>
                <button
                  className="rounded-full bg-gray-800 p-2"
                  aria-label={`Toggle ${service.title} details`}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`transition-transform duration-300 ${
                      activeService === service.id ? "rotate-90" : ""
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

              {activeService === service.id && (
                <div className="transition-all duration-300 overflow-hidden pb-8">
                  <div className="flex flex-col">
                    <p className="text-gray-400 mb-4">{service.description}</p>
                    <p className="text-gray-300 mb-6">{service.content}</p>

                    <div className="flex flex-wrap gap-4">
                      <Link
                        href={service.href}
                        className="inline-flex items-center text-emerald-400 hover:text-emerald-300 transition-colors"
                      >
                        Learn more
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

                      <Link
                       href="https://wa.me/918840948923" target="_blank" rel="noopener noreferrer"
                        className="px-6 py-2 text-white font-semibold bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-md"
                      >
                        Book Now
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesAccordion;
