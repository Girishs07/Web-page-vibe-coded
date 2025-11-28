import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Factory, Store, Truck, Phone, Mail, Clock } from 'lucide-react';

const Locations = () => {
  const locations = [
    {
      type: "Manufacturing Hub",
      icon: Factory,
      city: "Rajkot",
      state: "Gujarat",
      address: "Industrial Area, Rajkot - 360001",
      description: "Main manufacturing and processing facility with modern equipment and quality control systems.",
      color: "blue",
      phone: "+91 98765 43210",
      email: "rajkot@mdandsalt.com",
      hours: "24/7 Operations"
    },
    {
      type: "Distribution Center",
      icon: Truck,
      city: "Mumbai",
      state: "Maharashtra", 
      address: "Warehouse Complex, Mumbai - 400001",
      description: "Central distribution center serving Western India with extensive logistics network.",
      color: "teal",
      phone: "+91 98765 43211",
      email: "mumbai@mdandsalt.com",
      hours: "Mon-Sat: 6AM-10PM"
    },
    {
      type: "Regional Office",
      icon: Store,
      city: "Delhi",
      state: "Delhi",
      address: "Commercial District, New Delhi - 110001",
      description: "Regional sales office and retail distribution center for North India operations.",
      color: "blue",
      phone: "+91 98765 43212",
      email: "delhi@mdandsalt.com",
      hours: "Mon-Sat: 9AM-6PM"
    },
    {
      type: "Processing Unit",
      icon: Factory,
      city: "Chennai",
      state: "Tamil Nadu",
      address: "Industrial Estate, Chennai - 600001", 
      description: "Secondary processing facility serving South India with specialized packaging capabilities.",
      color: "teal",
      phone: "+91 98765 43213",
      email: "chennai@mdandsalt.com",
      hours: "Mon-Sat: 8AM-8PM"
    }
  ];

  const coverageStats = [
    { number: "15+", label: "States Covered", color: "blue" },
    { number: "50+", label: "Cities Served", color: "teal" },
    { number: "4", label: "Facilities", color: "blue" },
    { number: "24/7", label: "Support", color: "teal" }
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
              Our <span className="text-blue-600">Locations</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              With strategic locations across India, we ensure efficient manufacturing, 
              distribution, and customer service nationwide.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coverageStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 text-center shadow-lg"
              >
                <h3 className={`text-4xl font-bold text-${stat.color}-600 mb-2`}>{stat.number}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {locations.map((location, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start space-x-6">
                  <div className={`bg-${location.color}-600 p-4 rounded-full flex-shrink-0`}>
                    <location.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-3">
                      <h3 className="text-2xl font-bold text-gray-900">{location.type}</h3>
                      <span className={`text-sm bg-${location.color}-100 text-${location.color}-800 px-3 py-1 rounded-full font-medium`}>
                        {location.state}
                      </span>
                    </div>
                    <h4 className="text-xl font-bold text-gray-800 mb-2">{location.city}</h4>
                    <div className="flex items-start space-x-2 mb-4">
                      <MapPin className="w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{location.address}</span>
                    </div>
                    <p className="text-gray-600 mb-6">{location.description}</p>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center space-x-3">
                        <Phone className="w-4 h-4 text-gray-500" />
                        <span className="text-gray-700">{location.phone}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Mail className="w-4 h-4 text-gray-500" />
                        <span className="text-gray-700">{location.email}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Clock className="w-4 h-4 text-gray-500" />
                        <span className="text-gray-700">{location.hours}</span>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`bg-${location.color}-600 text-white px-6 py-2 rounded-full hover:bg-${location.color}-700 transition-colors font-medium text-center`}
                      >
                        View on Map
                      </motion.button>
                      <Link to="/contact">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className={`border-2 border-${location.color}-600 text-${location.color}-600 px-6 py-2 rounded-full hover:bg-${location.color}-600 hover:text-white transition-colors font-medium`}
                        >
                          Contact
                        </motion.button>
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Map */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl p-12 text-center"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Pan-India Coverage</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Our strategic network ensures reliable supply chain management and timely delivery 
              across all major Indian markets.
            </p>
            
            {/* Map placeholder */}
            <div className="bg-white rounded-xl h-96 flex items-center justify-center mb-8 shadow-lg">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Interactive Coverage Map</h3>
                <p className="text-gray-600">Serving customers across 15+ states in India</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h4 className="text-2xl font-bold text-blue-600 mb-2">North India</h4>
                <p className="text-gray-600">Delhi, Punjab, Haryana, UP, Rajasthan</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h4 className="text-2xl font-bold text-teal-600 mb-2">West India</h4>
                <p className="text-gray-600">Gujarat, Maharashtra, Goa, MP</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h4 className="text-2xl font-bold text-blue-600 mb-2">South India</h4>
                <p className="text-gray-600">Tamil Nadu, Karnataka, Kerala, AP</p>
              </div>
            </div>

            <Link to="/contact">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors font-medium inline-block"
              >
                Find Nearest Location
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Service Capabilities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each location is equipped with specialized capabilities to serve different market segments effectively.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-blue-50 rounded-xl"
            >
              <Factory className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Manufacturing</h3>
              <p className="text-gray-600">State-of-the-art production facilities with quality control</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-teal-50 rounded-xl"
            >
              <Truck className="w-12 h-12 text-teal-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Distribution</h3>
              <p className="text-gray-600">Efficient logistics and warehousing solutions</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-blue-50 rounded-xl"
            >
              <Store className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Retail Support</h3>
              <p className="text-gray-600">Dedicated retail and wholesale distribution</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-teal-50 rounded-xl"
            >
              <Phone className="w-12 h-12 text-teal-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Customer Service</h3>
              <p className="text-gray-600">Local support teams for personalized service</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Locations;