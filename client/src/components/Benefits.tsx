import { motion } from "framer-motion";
import { Torus, Brain, Pill, Phone, Shield, Dna } from "lucide-react";

export default function Benefits() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const benefits = [
    {
      icon: <Torus />,
      title: "Dental & Accident Coverage",
      description: "Comprehensive dental care and accident coverage to keep your employees protected."
    },
    {
      icon: <Brain />,
      title: "Mental Health Counseling",
      description: "Access to professional mental health services for emotional wellbeing and work-life balance."
    },
    {
      icon: <Pill />,
      title: "Free RX Program",
      description: "Prescription medication coverage to help employees manage healthcare costs effectively."
    },
    {
      icon: <Phone />,
      title: "Unlimited Telehealth Visits",
      description: "24/7 access to virtual healthcare professionals for convenient medical consultations."
    },
    {
      icon: <Shield />,
      title: "Identity Theft Protection",
      description: "Safeguard personal information with comprehensive identity monitoring and protection."
    },
    {
      icon: <Dna />,
      title: "Optional DNA & Biometric Testing",
      description: "Advanced health screening options available at discounted rates for proactive health management."
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-gray-800">
            Employee Benefits Highlights
          </motion.h2>
          <motion.div variants={itemVariants} className="w-16 h-1 bg-primary mx-auto mt-4 mb-6"></motion.div>
          <motion.p variants={itemVariants} className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive healthcare coverage and wellness services at no cost to your employees.
          </motion.p>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="benefit-card bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-all"
            >
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6 benefit-icon text-primary">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
              <p className="text-gray-600">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 max-w-4xl mx-auto bg-blue-50 rounded-xl p-8 shadow-sm"
        >
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/3 mb-6 md:mb-0 flex justify-center">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" 
                alt="Professional businessman" 
                className="rounded-full w-40 h-40 object-cover shadow-md"
              />
            </div>
            <div className="w-full md:w-2/3 md:pl-8">
              <h3 className="text-2xl font-semibold mb-4">Why Work With Kenny?</h3>
              <p className="text-gray-700 text-lg">
                "With EHP, I help companies reduce taxable payroll, saving an average of $639 per employee annually—all with zero disruption to your existing system."
              </p>
              <div className="mt-4 flex items-center">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
                <span className="ml-2 text-gray-600">Trusted by 2,000+ employers</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
