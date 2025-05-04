import { motion } from "framer-motion";

export default function HowItWorks() {
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
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-gray-800">
            How It Works
          </motion.h2>
          <motion.div variants={itemVariants} className="w-16 h-1 bg-primary mx-auto mt-4 mb-6"></motion.div>
          <motion.p variants={itemVariants} className="text-lg text-gray-600 max-w-2xl mx-auto">
            Three simple steps to reduce your payroll taxes and enhance employee benefits.
          </motion.p>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-wrap -mx-4"
        >
          {/* Step 1 */}
          <motion.div variants={itemVariants} className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
            <div className="relative">
              <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold mb-6 mx-auto">
                1
              </div>
              <div className="h-px w-full bg-blue-200 absolute top-8 left-0 z-0 hidden md:block"></div>
              <div className="text-center relative z-10">
                <h3 className="text-xl font-semibold mb-4">Submit a Payroll Report</h3>
                <p className="text-gray-600">
                  Share your payroll information securely to assess eligibility and potential savings.
                </p>
                <div className="mt-6 flex justify-center">
                  <img 
                    src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" 
                    alt="Payroll report document" 
                    className="rounded-lg h-48 w-64 object-cover shadow-md"
                  />
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Step 2 */}
          <motion.div variants={itemVariants} className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
            <div className="relative">
              <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold mb-6 mx-auto">
                2
              </div>
              <div className="h-px w-full bg-blue-200 absolute top-8 left-0 z-0 hidden md:block"></div>
              <div className="text-center relative z-10">
                <h3 className="text-xl font-semibold mb-4">Get Eligibility & Tax Savings Report</h3>
                <p className="text-gray-600">
                  Receive a comprehensive analysis showing your exact savings per employee.
                </p>
                <div className="mt-6 flex justify-center">
                  <img 
                    src="https://images.unsplash.com/photo-1554224155-8d04cb21eb6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" 
                    alt="Tax savings report" 
                    className="rounded-lg h-48 w-64 object-cover shadow-md"
                  />
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Step 3 */}
          <motion.div variants={itemVariants} className="w-full md:w-1/3 px-4">
            <div className="relative">
              <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold mb-6 mx-auto">
                3
              </div>
              <div className="text-center relative z-10">
                <h3 className="text-xl font-semibold mb-4">Seamless Integration</h3>
                <p className="text-gray-600">
                  We integrate with your existing payroll and benefits systems with minimal disruption.
                </p>
                <div className="mt-6 flex justify-center">
                  <img 
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" 
                    alt="System integration" 
                    className="rounded-lg h-48 w-64 object-cover shadow-md"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 text-center"
        >
          <a 
            href="#book" 
            className="bg-primary hover:bg-primary/90 text-white font-semibold py-4 px-8 rounded-md transition-colors text-center text-lg shadow-md hover:shadow-lg inline-block"
          >
            Get Your Free Analysis
          </a>
        </motion.div>
      </div>
    </section>
  );
}
