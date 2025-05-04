import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-24 gradient-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight"
            >
              Reduce Payroll Taxes. <br />
              <span className="text-primary">Deliver Better Benefits.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-lg md:text-xl text-gray-600 max-w-xl"
            >
              Work with Kenny Salyer to enhance your employee benefits package while lowering your FICA liability—at no cost to you.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
            >
              <a 
                href="https://calendly.com/ksalyer-ehp/30min" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-primary hover:bg-primary/90 text-white font-semibold py-4 px-8 rounded-md transition-colors text-center text-lg shadow-md hover:shadow-lg"
              >
                Book a Free Call
              </a>
              <a 
                href="#benefits" 
                className="border border-primary text-primary hover:bg-blue-50 font-semibold py-4 px-8 rounded-md transition-colors text-center text-lg"
              >
                See The Benefits
              </a>
            </motion.div>
          </div>
          
          <div className="w-full lg:w-1/2 flex justify-center">
            <motion.img 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
              alt="Business professionals discussing benefits" 
              className="rounded-lg shadow-xl max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
