import { motion } from "framer-motion";
import { Building, DollarSign, Heart } from "lucide-react";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-gray-800">
            About EHP
          </motion.h2>
          <motion.div variants={itemVariants} className="w-16 h-1 bg-primary mx-auto mt-4 mb-6"></motion.div>
          <motion.p variants={itemVariants} className="text-lg text-gray-600 max-w-2xl mx-auto">
            EHP empowers employers to deliver top-tier healthcare while cutting payroll tax costs.
          </motion.p>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-wrap justify-center -mx-4"
        >
          <motion.div variants={itemVariants} className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
            <div className="h-full bg-gray-50 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6">
                <Building className="text-primary text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Trusted by Employers</h3>
              <p className="text-gray-600">
                Over 2,000 employers enrolled with a 4.8 Trustpilot rating.
              </p>
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants} className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
            <div className="h-full bg-gray-50 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6">
                <DollarSign className="text-primary text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-4">$0 Out-of-Pocket</h3>
              <p className="text-gray-600">
                No cost to your employees while reducing your FICA tax liability.
              </p>
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants} className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
            <div className="h-full bg-gray-50 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6">
                <Heart className="text-primary text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Comprehensive Care</h3>
              <p className="text-gray-600">
                Preventive Care Dashboard™, Virtual Primary Care, Mental Health Support, and Rx Coverage.
              </p>
            </div>
          </motion.div>
        </motion.div>
        
        <motion.div 
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-primary font-semibold text-lg mb-4">Powered by Revive Health</p>
          <div className="inline-flex items-center justify-center px-6 py-4 bg-blue-50 rounded-full">
            <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span>Trusted healthcare partner for companies nationwide</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
