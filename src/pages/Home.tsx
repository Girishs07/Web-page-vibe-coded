import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, Award, Truck, Users, Factory, Utensils, ShoppingCart } from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: Award,
      title: "25+ Years Experience",
      description: "Trusted salt distributor since 1995"
    },
    {
      icon: Truck,
      title: "Nationwide Delivery",
      description: "Serving 15+ states across India"
    },
    {
      icon: Users,
      title: "1000+ Happy Customers",
      description: "Industrial and retail clients"
    }
  ];

  const products = [
    {
      icon: Factory,
      title: "Industrial Salt",
      description: "High-purity salt for manufacturing and chemical processing",
      color: "blue"
    },
    {
      icon: Utensils,
      title: "Edible Salt",
      description: "Premium quality table salt meeting food safety standards",
      color: "teal"
    },
    {
      icon: ShoppingCart,
      title: "Retail Packaged",
      description: "Consumer-ready packaged salt for retail distribution",
      color: "blue"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-teal-50 to-blue-100">
          <div className="absolute inset-0 opacity-10">
            {/* Floating salt crystals animation */}
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute bg-white rounded-full opacity-60"
                style={{
                  width: Math.random() * 10 + 5,
                  height: Math.random() * 10 + 5,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  x: [0, 10, 0],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: Math.random() * 5 + 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>
        </div>

        <div className="container relative z-10 mx-auto px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Hero content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-5 text-center lg:space-y-6 lg:text-left"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="inline-block rounded-full bg-blue-100 px-3 py-2 text-xs font-medium text-blue-800 sm:px-4 sm:text-sm"
              >
                Premium Salt Distributors Since 1995
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl md:text-6xl"
              >
                Pure Salt,
                <span className="text-blue-600"> Premium Quality</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mx-auto max-w-xl text-base leading-7 text-gray-600 sm:text-lg lg:mx-0 lg:text-xl"
              >
                India's trusted salt distributor providing industrial, edible, and retail salt products to customers nationwide with uncompromising quality and service.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-col justify-center gap-3 sm:flex-row lg:justify-start"
              >
                <Link to="/products">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="block rounded-full bg-blue-600 px-7 py-3 text-center font-medium text-white transition-colors hover:bg-blue-700 sm:px-8"
                  >
                    Explore Products
                  </motion.div>
                </Link>
                <Link to="/book-order">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="block rounded-full border-2 border-blue-600 px-7 py-3 text-center font-medium text-blue-600 transition-colors hover:bg-blue-600 hover:text-white sm:px-8"
                  >
                    Book Order
                  </motion.div>
                </Link>
              </motion.div>
            </motion.div>

            {/* Hero image/visual */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative mx-auto w-full max-w-lg"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl bg-gradient-to-br from-blue-100 to-teal-100 shadow-2xl sm:aspect-[16/10] lg:aspect-[4/3]">
                <div className="absolute inset-0 bg-gradient-to-t from-white via-gray-50 to-transparent opacity-90"></div>
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div className="flex h-32 w-32 items-center justify-center rounded-full bg-white text-5xl font-bold text-blue-600 shadow-lg sm:h-44 sm:w-44 sm:text-6xl">
                    🧂
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-12 grid grid-cols-1 gap-4 sm:mt-16 sm:grid-cols-3 sm:gap-6 lg:gap-8"
          >
            {features.map((feature, index) => (
              <div key={index} className="rounded-xl bg-white p-5 text-center shadow-lg sm:p-6">
                <feature.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="py-20 bg-white">
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

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {products.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300"
              >
                <div className={`bg-${product.color}-600 p-4 rounded-full w-fit mx-auto mb-6`}>
                  <product.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{product.title}</h3>
                <p className="text-gray-600 mb-6">{product.description}</p>
                <Link to="/products">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className={`text-${product.color}-600 font-medium flex items-center justify-center space-x-2`}
                  >
                    <span>Learn More</span>
                    <ChevronRight className="w-4 h-4" />
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/products">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors font-medium inline-block"
              >
                View All Products
              </motion.div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-teal-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Place Your Order?</h2>
            <p className="text-xl mb-8 opacity-90">
              Get premium quality salt products delivered to your location with competitive pricing and reliable service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/book-order">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-blue-600 px-8 py-3 rounded-full hover:bg-gray-100 transition-colors font-medium"
                >
                  Book Order Now
                </motion.div>
              </Link>
              <Link to="/contact">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-blue-600 transition-colors font-medium"
                >
                  Contact Us
                </motion.div>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;