import { motion } from "framer-motion";
import quote1Avatar from "@assets/Quote1Avatar1.webp";
import quote2Avatar from "@assets/Quote2Avatar2.webp";
import quote3Avatar from "@assets/Quote3Avatar3.webp";

export default function Testimonials() {
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

  const testimonials = [
    {
      quote: "Thanks to the EHP program offered by my company, I have been granted access to local and virtual medical care for myself and family that we did not have prior",
      name: "Anna",
      position: "Employee",
      image: quote1Avatar
    },
    {
      quote: "We love the ability to offer the EHP program to employees at a $0 net cost",
      name: "Jack",
      position: "Employee",
      image: quote2Avatar
    },
    {
      quote: "By offering the EHP program, we have seen a significant uptick in both existing employee retention and new employee recruitment",
      name: "Marine",
      position: "Employee",
      image: quote3Avatar
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-gray-800">
            What Our Clients Say
          </motion.h2>
          <motion.div variants={itemVariants} className="w-16 h-1 bg-primary mx-auto mt-4 mb-6"></motion.div>
          <motion.p variants={itemVariants} className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't take our word for it, see what our clients have to say about their experience with EHP.
          </motion.p>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="testimonial-card bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all transform hover:scale-[1.02] duration-300"
            >
              <div className="flex items-center mb-4">
                <svg className="text-blue-200 w-10 h-10 mr-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <div>
                  <div className="flex text-yellow-400 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 mb-6">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={`${testimonial.name} ${testimonial.position}`} 
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.position}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
