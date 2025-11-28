import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Factory, Store, Truck } from 'lucide-react';

const Locations = () => {
  const locations = [
    {
      type: "Manufacturing",
      icon: Factory,
      city: "Rajkot",
      state: "Gujarat",
      address: "Industrial Area, Rajkot - 360001",
      description: "Main manufacturing and processing facility with modern equipment and quality control systems.",
      color: "blue"
    },
    {
      type: "Distribution Hub",
      icon: Truck,
      city: "Mumbai",
      state: "Maharashtra", 
      address: "Warehouse Complex, Mumbai - 400001",
      description: "Central distribution center serving Western India with extensive logistics network.",
      color: "teal"
    },
    {
      type: "Regional Office",
      icon: Store,
      city: "Delhi",
      state: "Delhi",
      address: "Commercial District, New Delhi - 110001",
      description: "Regional sales office and retail distribution center for North India operations.",
      color: "blue"
    },
    {
      type: "Processing Unit",
      icon: Factory,
      city: "Chennai",
      state: "Tamil Nadu",
      address: "Industrial Estate, Chennai - 600001", 
      description: "Secondary processing facility serving South India with specialized packaging capabilities.",
      color: "teal"
    }
  ];

  return (
    <section id="locations" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-blue-600">Locations</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            With strategic locations across India, we ensure efficient manufacturing, 
            distribution, and customer service nationwide.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {locations.map((location, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className={`bg-${location.color}-600 p-3 rounded-full flex-shrink-0`}>
                  <location.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <h3 className="text-xl font-bold text-gray-900">{location.type}</h3>
                    <span className={`text-sm bg-${location.color}-100 text-${location.color}-800 px-2 py-1 rounded-full`}>
                      {location.state}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 mb-3">
                    <MapPin className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-600">{location.address}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{location.description}</p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`text-${location.color}-600 hover:text-${location.color}-700 font-medium`}
                  >
                    View on Map →
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Coverage Map Visual */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl p-8 text-center"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-6">Pan-India Coverage</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
              <div className="text-gray-600">States Covered</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="text-3xl font-bold text-teal-600 mb-2">50+</div>
              <div className="text-gray-600">Cities Served</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="text-3xl font-bold text-blue-600 mb-2">4</div>
              <div className="text-gray-600">Facilities</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="text-3xl font-bold text-teal-600 mb-2">24/7</div>
              <div className="text-gray-600">Support</div>
            </div>
          </div>
          <p className="text-gray-600 text-lg mb-6">
            Our strategic network ensures reliable supply chain management and timely delivery 
            across all major Indian markets.
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors font-medium inline-block"
          >
            Find Nearest Location
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Locations;