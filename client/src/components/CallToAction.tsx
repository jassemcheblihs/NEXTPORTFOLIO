import { motion } from "framer-motion";
import { Check } from "lucide-react";
import shieldImage from "@assets/shield-n-pills.webp";

export default function CallToAction() {
  const bookingUrl = "https://calendly.com/ksalyer-ehp/30min";

  return (
    <section id="book" className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Schedule Your Free 30-Minute Strategy Call with Kenny</h2>
          <p className="text-xl opacity-90 mb-8">
            Discover how to reduce your payroll taxes while enhancing employee benefits. No obligation, just valuable insights.
          </p>
          
          <div className="bg-white rounded-lg shadow-lg p-8 text-gray-800">
            <div className="flex flex-col lg:flex-row items-center -mx-4">
              <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
                <img 
                  src={shieldImage} 
                  alt="Health benefits and protection" 
                  className="rounded-lg shadow-md max-w-full h-auto"
                />
              </div>
              <div className="w-full lg:w-1/2 px-4">
                <h3 className="text-2xl font-semibold mb-4">What to Expect:</h3>
                <ul className="space-y-4 mb-8">
                  {[
                    "Free tax savings analysis for your business",
                    "Overview of employee benefits available",
                    "Implementation timeline and support details",
                    "Answers to all your questions"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="text-primary h-6 w-6 mt-1 mr-3 flex-shrink-0" strokeWidth={3} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <a 
                  href={bookingUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block bg-primary hover:bg-primary/90 text-white font-semibold py-4 px-6 rounded-md transition-colors text-center text-lg shadow-md hover:shadow-lg"
                >
                  Book Your Free Call Now
                </a>
              </div>
            </div>
          </div>
          
          <p className="mt-8 text-lg opacity-80">
            No pressure, no obligations—just insights to help your business thrive.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
