import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Zap, Shield } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To provide the purest, highest quality salt products while maintaining sustainable practices and customer satisfaction."
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Our experienced professionals ensure quality control and timely delivery across all our distribution channels."
    },
    {
      icon: Zap,
      title: "Fast Delivery",
      description: "Efficient logistics network ensures prompt delivery of salt products to customers across India."
    },
    {
      icon: Shield,
      title: "Quality Assured",
      description: "Rigorous testing and quality control measures guarantee the purity and safety of our salt products."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About <span className="text-blue-600">MD & CO</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Established in 1995, MD & CO has been India's trusted salt distributor, 
            providing premium quality salt products to industries, retailers, and consumers nationwide.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-gray-900">
              Leading Salt Distribution Across India
            </h3>
            <p className="text-gray-600 text-lg">
              With over 25 years of experience in the salt industry, we have built a reputation 
              for excellence, reliability, and quality. Our comprehensive distribution network 
              spans across multiple states, ensuring fresh, pure salt reaches every corner of India.
            </p>
            <p className="text-gray-600">
              From industrial-grade salt for manufacturing to premium edible salt for households, 
              we cater to diverse needs with unwavering commitment to quality and customer satisfaction.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href="#products"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors font-medium text-center"
              >
                View Products
              </motion.a>
              <motion.a
                href="/company-brochure.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-full hover:bg-blue-600 hover:text-white transition-colors font-medium text-center"
              >
                Download Brochure
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-3xl p-8 shadow-xl">
              <img
                src="https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg"
                alt="Salt production facility"
                className="w-full h-64 object-cover rounded-xl shadow-lg"
              />
              <div className="mt-6 grid grid-cols-2 gap-4 text-center">
                <div>
                  <h4 className="text-2xl font-bold text-blue-600">25+</h4>
                  <p className="text-gray-600">Years Experience</p>
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-teal-600">15+</h4>
                  <p className="text-gray-600">States Covered</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow"
            >
              <feature.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h4 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h4>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;