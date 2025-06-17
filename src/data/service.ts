export interface Service {
    id: string;
    title: string;
    description: string;
    features: string[];
    benefits: string[];
    image: string;
    icon: string;
    longDescription: string;
    caseStudies: CaseStudy[];
  }
  
  export interface CaseStudy {
    title: string;
    client: string;
    challenge: string;
    solution: string;
    results: string[];
  }
  
  export const services: Service[] = [
    {
      id: "web-development",
      title: "App & Web Development",
      description: "Custom web and mobile solutions tailored to your business needs with a focus on performance, security, and modern design.",
      longDescription: "Our expert team builds high-performance, scalable web and mobile applications using cutting-edge technologies. We focus on creating intuitive user experiences that drive engagement while ensuring robust backend systems that can grow with your business. From concept to deployment, we handle every aspect of the development process to deliver solutions that exceed expectations.",
      features: [
        "Responsive web applications",
        "Cross-platform mobile apps",
        "E-commerce solutions",
        "Progressive Web Apps (PWAs)",
        "UI/UX design and development"
      ],
      benefits: [
        "Increased customer engagement through seamless user experiences",
        "Improved conversion rates with optimized user journeys",
        "Enhanced brand perception with professional, modern interfaces",
        "Reduced maintenance costs with clean, scalable code",
        "Faster time-to-market with agile development processes"
      ],
      image: "/app.jpg",
      icon: "💻",
      caseStudies: [
        {
          title: "E-commerce Platform Redesign",
          client: "RetailPlus",
          challenge: "Outdated platform with poor mobile experience and declining conversion rates.",
          solution: "Complete rebuild using Next.js and headless CMS with mobile-first approach and streamlined checkout process.",
          results: [
            "43% increase in mobile conversions",
            "27% reduction in cart abandonment",
            "52% improvement in page load times"
          ]
        },
        {
          title: "Enterprise Dashboard Application",
          client: "DataFlow Analytics",
          challenge: "Complex data visualization needs with performance issues in legacy system.",
          solution: "React-based SPA with optimized data handling and custom visualization components.",
          results: [
            "90% reduction in data processing time",
            "Seamless handling of datasets 10x larger than before",
            "Enabled real-time collaborative features for team analysis"
          ]
        }
      ]
    },
    {
      id: "seo-social",
      title: "SEO & Social Media",
      description: "Comprehensive digital marketing strategies to increase your online visibility, engage with your audience, and drive conversions.",
      longDescription: "We help businesses increase their online visibility through strategic SEO and social media management. Our data-driven approach focuses on creating meaningful engagement with your target audience across all digital channels. We develop customized strategies that align with your business goals and consistently deliver measurable results.",
      features: [
        "Technical SEO audits and optimization",
        "Content strategy and creation",
        "Social media management and advertising",
        "Competitive analysis and benchmarking",
        "Analytics and performance reporting"
      ],
      benefits: [
        "Improved search engine rankings and organic traffic",
        "Increased brand awareness and social media following",
        "Higher engagement rates and audience growth",
        "Better ROI on digital marketing investments",
        "Data-driven insights for continuous improvement"
      ],
      image: "/social.webp",
      icon: "📱",
      caseStudies: [
        {
          title: "Local Business SEO Campaign",
          client: "Urban Wellness Center",
          challenge: "Low visibility in local search results despite strong physical presence.",
          solution: "Comprehensive local SEO strategy with Google Business optimization and location-based content.",
          results: [
            "200% increase in local search visibility",
            "175% increase in website traffic from local searches",
            "38% increase in appointment bookings"
          ]
        },
        {
          title: "B2B Social Media Rebranding",
          client: "TechNova Solutions",
          challenge: "Low engagement and unclear brand positioning on social platforms.",
          solution: "Content strategy redesign with thought leadership focus and targeted LinkedIn campaign.",
          results: [
            "320% increase in LinkedIn engagement",
            "47% growth in qualified leads from social channels",
            "Established company executives as industry thought leaders"
          ]
        }
      ]
    },
    {
      id: "automation",
      title: "CRM & Workflow Automation",
      description: "Streamline your business processes with custom automation solutions that save time, reduce errors, and improve efficiency.",
      longDescription: "Our automation solutions transform manual, time-consuming processes into streamlined workflows that increase productivity and reduce operational costs. We integrate with your existing systems or build custom solutions that eliminate repetitive tasks, minimize errors, and free your team to focus on strategic initiatives that drive business growth.",
      features: [
        "Business process automation",
        "CRM integration and customization",
        "Document automation",
        "Task and workflow management",
        "Automated reporting and analytics"
      ],
      benefits: [
        "Reduced operational costs through efficient processes",
        "Minimized human error in repetitive tasks",
        "Improved customer satisfaction with faster response times",
        "Enhanced data accuracy across systems",
        "Increased team productivity and focus on high-value tasks"
      ],
      image: "/crm.jpg",
      icon: "⚙️",
      caseStudies: [
        {
          title: "Sales Process Automation",
          client: "Global Manufacturing Corp",
          challenge: "Complex, manual sales processes causing delays and lost opportunities.",
          solution: "End-to-end CRM automation with custom workflows and integration with ERP system.",
          results: [
            "65% reduction in sales cycle length",
            "89% decrease in data entry errors",
            "42% increase in sales team productivity"
          ]
        },
        {
          title: "Customer Service Workflow Redesign",
          client: "ServiceFirst Inc",
          challenge: "Inconsistent customer service quality and slow resolution times.",
          solution: "Automated ticket routing, response templates, and escalation procedures.",
          results: [
            "78% improvement in first-response time",
            "54% faster issue resolution",
            "31% increase in customer satisfaction scores"
          ]
        }
      ]
    },
    {
      id: "ai-chatbots",
      title: "AI Chatbots",
      description: "Intelligent conversational agents that enhance customer experience, provide 24/7 support, and streamline interactions.",
      longDescription: "Our AI chatbots leverage advanced natural language processing to provide intelligent, conversational experiences for your customers. Available 24/7, these virtual assistants can handle inquiries, provide information, and even process transactions—all while learning and improving over time. We design chatbots that seamlessly integrate with your existing systems and reflect your brand voice.",
      features: [
        "Custom AI chatbot development",
        "Natural language processing",
        "Multi-channel integration",
        "Analytics and continuous improvement",
        "Seamless handoff to human agents"
      ],
      benefits: [
        "24/7 customer support without increased staffing costs",
        "Consistent customer experience across all interactions",
        "Reduced wait times and improved response rates",
        "Valuable data collection on customer needs and pain points",
        "Scalable support that grows with your business"
      ],
      image: "/chat.webp",
      icon: "🤖",
      caseStudies: [
        {
          title: "Customer Support Chatbot",
          client: "TechSupport Pro",
          challenge: "High volume of repetitive support requests overwhelming human agents.",
          solution: "AI-powered chatbot with natural language processing and integration with knowledge base.",
          results: [
            "87% of common queries resolved without human intervention",
            "Average response time reduced from 15 minutes to 10 seconds",
            "Support team refocused on complex, high-value issues"
          ]
        },
        {
          title: "E-commerce Sales Assistant",
          client: "FashionForward",
          challenge: "High cart abandonment rates and limited personalized shopping assistance.",
          solution: "Conversational AI with product recommendation engine and personalized styling advice.",
          results: [
            "29% increase in average order value",
            "36% reduction in cart abandonment",
            "44% of users reported more satisfying shopping experience"
          ]
        }
      ]
    },
    {
      id: "data-analysis",
      title: "Data Analysis & Insights",
      description: "Transform your raw data into actionable insights that drive informed decision-making and strategic planning.",
      longDescription: "Our data analysis services help you unlock the hidden value in your business data. We use advanced analytics tools and techniques to identify patterns, trends, and opportunities that might otherwise go unnoticed. Our experts translate complex data into clear visualizations and actionable recommendations that enable confident, informed decision-making across your organization.",
      features: [
        "Data collection and cleansing",
        "Advanced analytics and visualization",
        "Predictive modeling",
        "Business intelligence dashboards",
        "Custom reporting solutions"
      ],
      benefits: [
        "Data-driven decision making across your organization",
        "Identification of new business opportunities and trends",
        "Early detection of potential problems or inefficiencies",
        "Improved resource allocation based on performance data",
        "Competitive advantage through deeper market insights"
      ],
      image: "dara.jpeg",
      icon: "📊",
      caseStudies: [
        {
          title: "Retail Performance Analysis",
          client: "MultiStore Retail",
          challenge: "Inconsistent performance across 50+ locations with no clear understanding of factors.",
          solution: "Comprehensive data analysis combining sales, inventory, staffing, and customer behavior data.",
          results: [
            "Identified key performance patterns across store types",
            "22% improvement in inventory management",
            "18% increase in overall sales after implementing recommendations"
          ]
        },
        {
          title: "Predictive Maintenance System",
          client: "Industrial Equipment Corp",
          challenge: "Costly equipment failures and maintenance inefficiencies.",
          solution: "IoT sensor integration with predictive analytics model to forecast maintenance needs.",
          results: [
            "73% reduction in unexpected downtime",
            "42% decrease in maintenance costs",
            "Extended equipment lifecycle by an average of 3 years"
          ]
        }
      ]
    },
    {
      id: "lead-generation",
      title: "Lead Generation",
      description: "Targeted strategies to attract high-quality leads, nurture relationships, and convert prospects into loyal customers.",
      longDescription: "Our lead generation services help you attract and convert qualified prospects into loyal customers. We develop comprehensive strategies that capture interest at every stage of the buyer's journey, using targeted content, optimized landing pages, and personalized nurturing campaigns. Our data-driven approach ensures you're investing in the channels and tactics that deliver the highest quality leads for your business.",
      features: [
        "Lead capture and qualification",
        "Email marketing campaigns",
        "Landing page optimization",
        "Lead nurturing workflows",
        "Conversion rate optimization"
      ],
      benefits: [
        "Increased volume of qualified leads",
        "Improved lead-to-customer conversion rates",
        "Reduced customer acquisition costs",
        "Better understanding of your ideal customer profile",
        "More efficient allocation of marketing resources"
      ],
      image: "lead.jpg",
      icon: "🎯",
      caseStudies: [
        {
          title: "B2B Lead Generation Campaign",
          client: "Enterprise Solutions Inc",
          challenge: "High customer acquisition costs and low quality leads from existing channels.",
          solution: "Multi-channel campaign with account-based marketing approach and personalized content strategy.",
          results: [
            "210% increase in qualified leads",
            "48% reduction in cost per acquisition",
            "63% higher conversion rate from MQL to SQL"
          ]
        },
        {
          title: "SaaS Trial Optimization",
          client: "CloudTools",
          challenge: "Low trial-to-paid conversion rate despite high trial signup numbers.",
          solution: "Automated nurturing sequence with behavior-triggered messaging and personalized onboarding.",
          results: [
            "67% increase in trial-to-paid conversion",
            "41% improvement in feature adoption during trial",
            "28% decrease in customer acquisition cost"
          ]
        }
      ]
    }
  ];