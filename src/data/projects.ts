import { Project } from '@/types/project';

export const projects: Project[] = [
    {
        id: '1',
        slug: 'noorkriti-digital-transformation',
        title: 'Digital Transformation for Noorkriti',
        client: 'Noorkriti',
        category: 'Digital Strategy',
        thumbnail: '/noorkriti-thumb.jpg',
        featuredImage: '/images/projects/noorkriti-featured.jpg',
        description: 'We helped Noorkriti, a traditional kurti brand, transition into the digital space. Starting with a full-featured eCommerce website built using Odoo, we optimized their online presence through SEO and managed their social media marketing. We also connected them with fashion models to enhance their visual branding and product engagement.',
        technologies: ['Odoo', 'SEO', 'Social Media Marketing', 'Brand Strategy'],
        year: 2025,
        services: ['Web Development', 'SEO', 'Marketing Strategy', 'Brand Partnerships'],
        team: [
          { role: 'Project Lead', name: 'Your Name' },
          { role: 'SEO Specialist', name: 'Your Name' },
          { role: 'Social Media Manager', name: 'Your Name' }
        ],
        gallery: [
          { image: '/noorkriti-thumb.jpg', caption: 'Noorkriti eCommerce website' },
          { image: '/noorkriti-model.jpg', caption: 'Social media campaign with model collaboration' }
        ]
      }
,      
{
    id: '2',
    slug: 'gm-smart-automation-digital-launch',
    title: 'Smart Digital Presence for GM Smart Automation',
    client: 'GM Smart Automation',
    category: 'Web & Automation',
    thumbnail: '/gm-smart-thumb.jpg',
    featuredImage: '/images/projects/gm-smart-featured.jpg',
    description: 'We partnered with GM Smart Automation, a home automation solutions provider, to strengthen their digital footprint. We built a sleek, responsive website, optimized it with strategic SEO, and developed an intelligent chatbot system to actively capture and qualify leads directly through the site.',
    technologies: ['Web Development', 'SEO', 'Chatbot Integration', 'Lead Generation'],
    year: 2025,
    services: ['Website Development', 'SEO', 'Chatbot Development', 'Automation Marketing'],
    team: [
      { role: 'Frontend Developer', name: 'Your Name' },
      { role: 'SEO Strategist', name: 'Your Name' },
      { role: 'Chatbot Developer', name: 'Your Name' }
    ],
    gallery: [
      { image: '/gm-smart-thumb.jpg', caption: 'GM Smart Automation website UI' },
      { image: '/gm-chatbot.jpg', caption: 'AI chatbot integration for lead generation' }
    ]
  }
,  
{
    id: '3',
    slug: 'clover-artistry-nail-salon-digital-branding',
    title: 'Clover Artistry Digital Branding',
    client: 'Clover Artistry',
    category: 'Beauty & Wellness',
    thumbnail: '/clover-thumb.jpg',
    featuredImage: '/images/projects/clover-featured.jpg',
    description: 'Clover Artistry, a modern nail salon, partnered with us to enhance their online visibility. We delivered a beautifully designed, mobile-friendly website that reflects their brand aesthetics, and implemented effective SEO strategies to increase local search rankings and client bookings.',
    technologies: ['Web Development', 'SEO'],
    year: 2025,
    services: ['Website Design & Development', 'Search Engine Optimization'],
    team: [
      { role: 'UI/UX Designer', name: 'Your Name' },
      { role: 'Web Developer', name: 'Your Name' },
      { role: 'SEO Specialist', name: 'Your Name' }
    ],
    gallery: [
      { image: '/clover-thumb.jpg', caption: 'Homepage design of Clover Artistry' },
      { image: '/clover-featured.jpg', caption: 'Mobile responsive booking section' }
    ]
  }
  
];

export const getFeaturedProjects = (): Project[] => {
  return projects.slice(0, 3); // Return first 3 projects for homepage
};

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find(project => project.slug === slug);
};

export const getAllProjects = (): Project[] => {
  return projects;
};