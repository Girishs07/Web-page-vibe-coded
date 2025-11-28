import React from 'react';
import { motion } from 'framer-motion';
import { Factory, Utensils, ShoppingCart, CheckCircle } from 'lucide-react';

const Products = () => {
  const products = [
    {
      icon: Factory,
      title: "Industrial Salt",
      description: "High-purity salt for manufacturing, chemical processing, and industrial applications.",
      features: [
        "99.5% Purity",
        "Bulk quantities available",
        "Custom packaging options",
        "Nationwide delivery"
      ],
      image: "https://images.pexels.com/photos/1766838/pexels-photo-1766838.jpeg",
      color: "blue"
    },
    {
      icon: Utensils,
      title: "Edible Salt",
      description: "Premium quality table salt for culinary use, meeting all food safety standards.",
      features: [
        "Food grade quality",
        "Iodized options",
        "Crystal and powdered forms",
        "Hygienically processed"
      ],
      image: "https://images.pexels.com/photos/1022385/pexels-photo-1022385.jpeg",
      color: "teal"
    },
    {
      icon: ShoppingCart,
      title: "Retail Packaged Salt",
      description: "Consumer-ready packaged salt products for retail distribution and households.",
      features: [
        "Multiple pack sizes",
        "Attractive packaging",
        "Extended shelf life",
        "Retail-ready display"
      ],
      image: "https://images.pexels.com/photos/1435735/pexels-photo-1435735.jpeg",
      color: "blue"
    }
  ];

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-blue-600">Salt Products</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer a comprehensive range of salt products to meet diverse industrial, 
            commercial, and consumer needs with guaranteed quality and purity.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-t from-${product.color}-900/70 to-transparent`}></div>
                <div className="absolute top-4 left-4">
                  <div className={`bg-${product.color}-600 p-3 rounded-full`}>
                    <product.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{product.title}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                
                <div className="space-y-2 mb-6">
                  {product.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full bg-${product.color}-600 text-white py-3 rounded-full hover:bg-${product.color}-700 transition-colors font-medium`}
                >
                  Request Quote
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-blue-600 text-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-3xl font-bold mb-4">Need Custom Salt Solutions?</h3>
            <p className="text-xl mb-6 opacity-90">
              We provide tailored salt products for specific industrial requirements and bulk orders.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="#booking"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-8 py-3 rounded-full hover:bg-gray-100 transition-colors font-medium"
              >
                Book Consultation
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-blue-600 transition-colors font-medium"
              >
                Contact Us
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Products;