import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, MessageCircle, Download, FileText, Award } from 'lucide-react';

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

  const quickActions = [
    {
      icon: Phone,
      title: "Call Now",
      subtitle: "+91 98765 43210",
      href: "tel:+919876543210",
      color: "blue"
    },
    {
      icon: Mail,
      title: "Email Us",
      subtitle: "info@mdandsalt.com",
      href: "mailto:info@mdandsalt.com",
      color: "teal"
    },
    {
      icon: MessageCircle,
      title: "Book Order",
      subtitle: "Submit order request",
      href: "/book-order",
      color: "blue"
    }
  ];

  const supportServices = [
    { icon: "🟢", label: "24/7 Emergency Support" },
    { icon: "🔵", label: "Technical Consultation" },
    { icon: "🟡", label: "Order Tracking" },
    { icon: "🟣", label: "Quality Assurance" }
  ];

  const downloadResources = [
    {
      icon: FileText,
      title: "Company Brochure",
      description: "Complete overview of our services",
      href: "/company-brochure.pdf"
    },
    {
      icon: Download,
      title: "Product Catalog",
      description: "Detailed product specifications",
      href: "/product-catalog.pdf"
    },
    {
      icon: Award,
      title: "Quality Certifications",
      description: "Our quality standards and certifications",
      href: "/quality-certifications.pdf"
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
              Contact <span className="text-blue-600">MD & CO</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get in touch with our team for inquiries, orders, or support. 
              We're here to help you with all your salt requirements.
            </p>
          </motion.div>

          {/* Quick Actions */}
          <div className="grid md:grid-cols-3 gap-8">
            {quickActions.map((action, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {action.href.startsWith('/') ? (
                  <Link to={action.href}>
                    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                      <div className={`bg-${action.color}-600 p-4 rounded-full w-fit mb-4`}>
                        <action.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{action.title}</h3>
                      <p className="text-gray-600">{action.subtitle}</p>
                    </div>
                  </Link>
                ) : (
                  <a href={action.href}>
                    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                      <div className={`bg-${action.color}-600 p-4 rounded-full w-fit mb-4`}>
                        <action.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{action.title}</h3>
                      <p className="text-gray-600">{action.subtitle}</p>
                    </div>
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Details */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Get in Touch</h2>
                <p className="text-xl text-gray-600">
                  We're here to help with all your salt distribution needs. 
                  Contact us through any of the following channels.
                </p>
              </div>

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
                  <p className="text-gray-500 text-lg font-medium">Interactive Map</p>
                  <p className="text-sm text-gray-400">Head Office: Rajkot, Gujarat</p>
                </div>
              </div>
            </motion.div>

            {/* Support & Resources */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Customer Support */}
              <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Customer Support</h3>
                <div className="space-y-4">
                  {supportServices.map((service, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <span className="text-lg">{service.icon}</span>
                      <span className="text-gray-700">{service.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Download Resources */}
              <div className="bg-blue-600 text-white rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6">Download Resources</h3>
                <div className="space-y-4">
                  {downloadResources.map((resource, index) => (
                    <motion.a
                      key={index}
                      href={resource.href}
                      download
                      whileHover={{ scale: 1.02 }}
                      className="block bg-white/10 hover:bg-white/20 p-4 rounded-lg transition-colors"
                    >
                      <div className="flex items-start space-x-4">
                        <resource.icon className="w-6 h-6 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold mb-1">{resource.title}</h4>
                          <p className="text-sm opacity-90">{resource.description}</p>
                        </div>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Office Hours */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Office Locations</h4>
                <div className="space-y-3">
                  <div>
                    <h5 className="font-bold text-gray-800">Rajkot (Head Office)</h5>
                    <p className="text-gray-600 text-sm">24/7 Operations</p>
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-800">Mumbai Distribution</h5>
                    <p className="text-gray-600 text-sm">Mon-Sat: 6AM-10PM</p>
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-800">Delhi Regional</h5>
                    <p className="text-gray-600 text-sm">Mon-Sat: 9AM-6PM</p>
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-800">Chennai Processing</h5>
                    <p className="text-gray-600 text-sm">Mon-Sat: 8AM-8PM</p>
                  </div>
                </div>
              </div>
            </motion.div>
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
            <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              Whether you need bulk industrial salt, premium edible salt, or custom packaging solutions, 
              our team is ready to help you find the perfect salt products for your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/book-order">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-blue-600 px-8 py-3 rounded-full hover:bg-gray-100 transition-colors font-medium"
                >
                  Book Your Order
                </motion.div>
              </Link>
              <Link to="/products">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-blue-600 transition-colors font-medium"
                >
                  View Products
                </motion.div>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;