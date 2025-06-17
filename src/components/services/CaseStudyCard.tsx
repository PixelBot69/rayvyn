import type { FC } from "react";
import type { CaseStudy } from "@/data/service";

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
}

const CaseStudyCard: FC<CaseStudyCardProps> = ({ caseStudy }) => {
  return (
    <div className="overflow-hidden rounded-xl bg-white p-8 shadow-sm">
      <h3 className="mb-2 text-2xl font-semibold text-gray-900">{caseStudy.title}</h3>
      <p className="mb-4 text-sm font-medium text-blue-600">Client: {caseStudy.client}</p>
      
      <div className="mb-4">
        <h4 className="mb-2 text-lg font-medium text-gray-800">Challenge</h4>
        <p className="text-gray-600">{caseStudy.challenge}</p>
      </div>
      
      <div className="mb-4">
        <h4 className="mb-2 text-lg font-medium text-gray-800">Solution</h4>
        <p className="text-gray-600">{caseStudy.solution}</p>
      </div>
      
      <div>
        <h4 className="mb-2 text-lg font-medium text-gray-800">Results</h4>
        <ul className="space-y-2">
          {caseStudy.results.map((result, index) => (
            <li key={index} className="flex items-center">
              <div className="mr-2 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
                <svg width="8" height="8" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="text-sm text-gray-700">{result}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CaseStudyCard;