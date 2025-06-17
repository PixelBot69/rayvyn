export interface Project {
    id: string;
    slug: string;
    title: string;
    client: string;
    category: string;
    thumbnail: string;
    featuredImage: string;
    description: string;
    technologies: string[];
    year: number;
    services: string[];
    team?: {
      role: string;
      name: string;
    }[];
    gallery?: {
      image: string;
      caption?: string;
    }[];
  }