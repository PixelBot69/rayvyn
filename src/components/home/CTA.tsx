import Link from "next/link";
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-blue-900/30 to-purple-900/30 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-blue-500/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-purple-500/20 to-transparent"></div>
      </div>
      
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-64 h-64 bg-purple-500/30 rounded-full blur-3xl"></div>
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-64 h-64 bg-blue-500/30 rounded-full blur-3xl"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="rounded-2xl bg-gray-900/60 backdrop-blur-lg p-12 border border-gray-800">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Transform</span> Your Business?
          </h2>
          
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-10">
            Join the growing list of businesses leveraging our AI solutions to 
            increase efficiency, reduce costs, and drive innovation.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
              <Link href="https://wa.me/918840948923" target="_blank" rel="noopener noreferrer">Get Started Today</Link>
            </Button>
            
            <Button variant="outline" className="text-black border-gray-700 hover:bg-gray-800">
              <Link href="/about">Learn About Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;