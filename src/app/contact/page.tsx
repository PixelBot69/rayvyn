// src/app/contact/page.tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Contact | Rayvyn AI',
  description: 'Get in touch with our team for inquiries or collaboration opportunities.',
};

export default function ContactPage() {
  return (
    <main className="bg-black text-gray-200 min-h-screen">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16">
            <h1 className="text-3xl font-light tracking-wider text-gray-100 mb-6">CONTACT</h1>
            <div className="w-16 h-px bg-gray-700 mb-8"></div>
            <p className="text-gray-400 text-lg max-w-2xl font-light">
              Please feel free to reach out to us with any inquiries. We appreciate your interest and will respond promptly.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <div className="space-y-10">
              <div>
  <h2 className="text-sm uppercase tracking-widest text-gray-400 mb-4 font-medium">Our Location</h2>
  <address className="text-lg font-light text-gray-300 not-italic mb-4">
    1/342B, Vinamra Khand,<br />
    Gomti Nagar, Lucknow, Uttar Pradesh 226010
  </address>
 
</div>

                
                <div>
                  <h2 className="text-sm uppercase tracking-widest text-gray-400 mb-4 font-medium">Contact Details</h2>
                  <div className="space-y-2">
                    <p className="text-lg font-light">
                      <Link href="tel:+17576025173" className="text-gray-300 hover:text-white transition-colors">
                        +91 • 884 • 094 • 8923
                      </Link>
                    </p>
                    <p className="text-lg font-light">
                      <Link href="mailto:contact@yourcompany.com" className="text-gray-300 hover:text-white transition-colors">
                        rayvyn.ai@gmail.com
                      </Link>
                    </p>
                  </div>
                </div>
                
                <div>
                  <h2 className="text-sm uppercase tracking-widest text-gray-400 mb-4 font-medium">Hours</h2>
                  <div className="text-lg font-light text-gray-300">
                    <p>Monday – Friday: 9:00 AM – 6:00 PM</p>
                    <p>Saturday – Sunday: By appointment</p>
                  </div>
                </div>
                
                <div>
                  <h2 className="text-sm uppercase tracking-widest text-gray-400 mb-4 font-medium">Connect</h2>
                  <div className="flex space-x-6">
                    <a href="https://www.instagram.com/rayvyn.ai/" className="text-gray-500 hover:text-gray-300 transition-colors">
                      <span className="sr-only">Instagram</span>
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a href="https://x.com/RayvynAi" className="text-gray-500 hover:text-gray-300 transition-colors">
                      <span className="sr-only">Twitter</span>
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                    <a href="https://www.linkedin.com/company/rayvyn-ai/" className="text-gray-500 hover:text-gray-300 transition-colors">
                      <span className="sr-only">LinkedIn</span>
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="relative">
                <div className="aspect-[4/3] w-full relative overflow-hidden">
                <div className="w-full h-[450px]">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.2422057703784!2d81.02582508223534!3d26.864044858413713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be2f4b2587d9d%3A0x775b0b492289475a!2s1%2F342B%2C%20Chhota%20bharwara%2C%20Vinamra%20Khand%2C%20Gomti%20Nagar%2C%20Lucknow%2C%20Uttar%20Pradesh%20226010!5e0!3m2!1sen!2sin!4v1746813482679!5m2!1sen!2sin"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 to-transparent opacity-70"></div>
                <div className="absolute bottom-0 left-0 p-8">
                  <div className="flex flex-col space-y-4">
                    <div className="w-16 h-px bg-gray-700"></div>
                    <h3 className="text-xl font-light tracking-wider text-white">Meet us in person</h3>
                    <p className="text-gray-300 font-light">
                      Schedule an appointment to visit our office and discuss your needs in person.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <div className="border-t border-gray-800 pt-8">
                  <h2 className="text-sm uppercase tracking-widest text-gray-400 mb-6 font-medium">Our Locations</h2>
                  <div className="grid grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-lg font-light text-white mb-2">Lucknow</h3>
                      <p className="text-gray-400 font-light">
                        1/342b,<br />
                        vinamra khand ,
                        Gomti Nagar, Lucknow, Uttar Pradesh 226010,
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-light text-white mb-2">Manipal University Jaipur</h3>
                      <p className="text-gray-400 font-light">
                        ghs <br />
                       bagru jaipur
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-20 border-t border-gray-800 pt-8">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
              
                <p className="text-sm text-gray-500">Rayvyn AI</p>
              </div>
              <p className="text-sm text-gray-500">© {new Date().getFullYear()} All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}