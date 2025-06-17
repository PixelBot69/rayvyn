import type { FC } from "react";

interface FeatureListProps {
  features: string[];
  color?: "blue" | "green";
}

const FeatureList: FC<FeatureListProps> = ({ features, color = "blue" }) => {
  const bgColor = color === "blue" ? "bg-blue-100" : "bg-green-100";
  const textColor = color === "blue" ? "text-blue-600" : "text-green-600";

  return (
    <ul className="space-y-4">
      {features.map((feature, index) => (
        <li key={index} className="flex items-start">
          <div className={`mr-3 mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full ${bgColor} ${textColor}`}>
            <svg width="10" height="10" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className="text-gray-700">{feature}</span>
        </li>
      ))}
    </ul>
  );
};

export default FeatureList;