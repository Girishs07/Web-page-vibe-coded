import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+91 98765 43210", "+91 98765 43211"],
      color: "blue"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@mdandsalt.com", "orders@mdandsalt.com"],
      color: "teal"
    },
    {
      icon: MapPin,
      title: "Head Office",
      details: ["Industrial Area, Rajkot", "Gujarat - 360001, India"],
      color: "blue"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon - Sat: 9:00 AM - 6:00 PM", "Sunday: Closed"],
      color: "teal"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Contact <span className="text-blue-600">MD & CO</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with our team for inquiries, orders, or support. 
            We're here to help you with all your salt requirements.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="grid md:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6">
                  <div className={`bg-${info.color}-600 p-3 rounded-full w-fit mb-4`}>
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{info.title}</h3>
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-gray-600 mb-1">{detail}</p>
                  ))}
                </div>
              ))}
            </div>

            {/* Map placeholder */}
            <div className="bg-gray-100 rounded-xl h-64 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                <p className="text-gray-500">Interactive Map</p>
                <p className="text-sm text-gray-400">Location: Rajkot, Gujarat</p>
              </div>
            </div>
          </motion.div>

          {/* Quick Contact Options */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Contact</h3>
              
              <div className="space-y-4">
                <motion.a
                  href="tel:+919876543210"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center space-x-4 bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="bg-blue-600 p-3 rounded-full">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Call Now</h4>
                    <p className="text-gray-600">+91 98765 43210</p>
                  </div>
                </motion.a>

                <motion.a
                  href="mailto:info@mdandsalt.com"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center space-x-4 bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="bg-teal-600 p-3 rounded-full">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Email Us</h4>
                    <p className="text-gray-600">info@mdandsalt.com</p>
                  </div>
                </motion.a>

                <motion.a
                  href="#booking"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center space-x-4 bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="bg-blue-600 p-3 rounded-full">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Book Order</h4>
                    <p className="text-gray-600">Submit order request</p>
                  </div>
                </motion.a>
              </div>
            </div>

            {/* Support Information */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h4 className="text-xl font-bold text-gray-900 mb-4">Customer Support</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-600">24/7 Emergency Support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-600">Technical Consultation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                  <span className="text-gray-600">Order Tracking</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-600">Quality Assurance</span>
                </div>
              </div>
            </div>

            {/* Download Resources */}
            <div className="bg-blue-600 text-white rounded-xl p-6">
              <h4 className="text-xl font-bold mb-4">Download Resources</h4>
              <div className="space-y-3">
                <motion.a
                  href="/company-brochure.pdf"
                  download
                  whileHover={{ scale: 1.02 }}
                  className="block bg-white/10 hover:bg-white/20 p-3 rounded-lg transition-colors"
                >
                  📄 Company Brochure
                </motion.a>
                <motion.a
                  href="/product-catalog.pdf"
                  download
                  whileHover={{ scale: 1.02 }}
                  className="block bg-white/10 hover:bg-white/20 p-3 rounded-lg transition-colors"
                >
                  📋 Product Catalog
                </motion.a>
                <motion.a
                  href="/quality-certifications.pdf"
                  download
                  whileHover={{ scale: 1.02 }}
                  className="block bg-white/10 hover:bg-white/20 p-3 rounded-lg transition-colors"
                >
                  🏆 Quality Certifications
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;