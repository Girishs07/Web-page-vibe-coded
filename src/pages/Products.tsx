import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Factory, Utensils, ShoppingCart, CheckCircle, Award, Shield, Truck } from 'lucide-react';

const Products = () => {
  const products = [
    {
      icon: Factory,
      title: "Industrial Salt",
      description: "High-purity salt for manufacturing, chemical processing, and industrial applications.",
      features: [
        "99.5% Purity guaranteed",
        "Bulk quantities available",
        "Custom packaging options",
        "Nationwide delivery network",
        "Technical grade specifications",
        "Consistent quality control"
      ],
      image: "https://images.pexels.com/photos/1766838/pexels-photo-1766838.jpeg",
      color: "blue",
      applications: ["Chemical Processing", "Water Treatment", "De-icing", "Textile Industry"]
    },
    {
      icon: Utensils,
      title: "Edible Salt",
      description: "Premium quality table salt for culinary use, meeting all food safety standards.",
      features: [
        "Food grade quality certified",
        "Iodized and non-iodized options",
        "Crystal and powdered forms",
        "Hygienically processed",
        "FSSAI approved",
        "Extended shelf life"
      ],
      image: "https://images.pexels.com/photos/1022385/pexels-photo-1022385.jpeg",
      color: "teal",
      applications: ["Food Processing", "Restaurants", "Bakeries", "Home Cooking"]
    },
    {
      icon: ShoppingCart,
      title: "Retail Packaged Salt",
      description: "Consumer-ready packaged salt products for retail distribution and households.",
      features: [
        "Multiple pack sizes available",
        "Attractive retail packaging",
        "Extended shelf life",
        "Retail-ready display options",
        "Brand customization available",
        "Competitive wholesale pricing"
      ],
      image: "https://images.pexels.com/photos/1435735/pexels-photo-1435735.jpeg",
      color: "blue",
      applications: ["Supermarkets", "Grocery Stores", "Wholesale Distribution", "E-commerce"]
    }
  ];

  const qualityFeatures = [
    {
      icon: Award,
      title: "Premium Quality",
      description: "All our salt products meet international quality standards"
    },
    {
      icon: Shield,
      title: "Safety Certified",
      description: "FSSAI approved and regularly tested for purity"
    },
    {
      icon: Truck,
      title: "Reliable Delivery",
      description: "Timely delivery across India with proper packaging"
    }
  ];

  return (
    <div className="pt-8">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-teal-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Our <span className="text-blue-600">Salt Products</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer a comprehensive range of salt products to meet diverse industrial, 
              commercial, and consumer needs with guaranteed quality and purity.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {qualityFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-xl p-6 text-center shadow-lg"
              >
                <feature.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {products.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="relative">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-80 object-cover rounded-2xl shadow-xl"
                    />
                    <div className={`absolute top-6 left-6 bg-${product.color}-600 p-4 rounded-full`}>
                      <product.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>

                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-4xl font-bold text-gray-900 mb-4">{product.title}</h2>
                      <p className="text-xl text-gray-600">{product.description}</p>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Features</h3>
                      <div className="grid md:grid-cols-2 gap-3">
                        {product.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-3">
                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">Applications</h3>
                      <div className="flex flex-wrap gap-2">
                        {product.applications.map((app, appIndex) => (
                          <span
                            key={appIndex}
                            className={`bg-${product.color}-100 text-${product.color}-800 px-3 py-1 rounded-full text-sm font-medium`}
                          >
                            {app}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Link to="/book-order">
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className={`bg-${product.color}-600 text-white px-8 py-3 rounded-full hover:bg-${product.color}-700 transition-colors font-medium text-center`}
                        >
                          Request Quote
                        </motion.div>
                      </Link>
                      <Link to="/contact">
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className={`border-2 border-${product.color}-600 text-${product.color}-600 px-8 py-3 rounded-full hover:bg-${product.color}-600 hover:text-white transition-colors font-medium text-center`}
                        >
                          Learn More
                        </motion.div>
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Solutions */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-blue-600 text-white rounded-2xl p-12 shadow-xl">
              <h2 className="text-4xl font-bold mb-6">Need Custom Salt Solutions?</h2>
              <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
                We provide tailored salt products for specific industrial requirements, custom packaging, 
                and bulk orders. Our technical team works with you to develop solutions that meet your exact specifications.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white/10 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-2">Custom Purity Levels</h3>
                  <p className="opacity-90">Tailored to your specific requirements</p>
                </div>
                <div className="bg-white/10 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-2">Flexible Packaging</h3>
                  <p className="opacity-90">From small bags to bulk containers</p>
                </div>
                <div className="bg-white/10 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-2">Technical Support</h3>
                  <p className="opacity-90">Expert guidance for your applications</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/book-order">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-blue-600 px-8 py-3 rounded-full hover:bg-gray-100 transition-colors font-medium"
                  >
                    Book Consultation
                  </motion.div>
                </Link>
                <Link to="/contact">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-blue-600 transition-colors font-medium"
                  >
                    Contact Technical Team
                  </motion.div>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Products;