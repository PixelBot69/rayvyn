import Image from "next/image";
import Link from "next/link";

interface ServiceCardProps {
  id: string;
  title: string;
  description: string;
  features: string[];
  image: string;
  icon: string;
}

const ServiceCard = ({ id, title, description, features, image, icon }: ServiceCardProps) => {
  return (
    <div id={id} className="scroll-mt-24 bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-blue-500 transition-all duration-300">
      <div className="relative h-64">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent flex items-start justify-start p-6">
          <div className="w-12 h-12 rounded-full bg-blue-500/80 backdrop-blur-sm flex items-center justify-center text-white">
            {icon}
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-2xl font-semibold mb-3">{title}</h3>
        <p className="text-gray-300 mb-6">{description}</p>
        
        <h4 className="text-lg font-medium mb-3">Key Features:</h4>
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <svg className="h-5 w-5 text-blue-400 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-300">{feature}</span>
            </li>
          ))}
        </ul>
        
        <Link 
          href="/contact" 
          className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium"
        >
          Request a consultation
          <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;