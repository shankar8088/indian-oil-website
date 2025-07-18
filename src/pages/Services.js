// src/pages/Services.js
import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Free Air Check",
    description: "Check your tyre pressure and fill air for free anytime.",
    image: "/images/services-banner.jpg",
  },
  {
      title: "Free Parking on Full Tank",
  description: "Enjoy free parking at our premises when you fill your vehicle with a full tank of fuel. Hassle-free and safe.",
  image: "/images/IMG-20250716-WA0017.jpg",
  },
  {
    title: "Emission Check",
    description: "Certified emission test for all types of vehicles.",
    image: "/images/IMG-20250716-WA0021.jpg",
  },
  {
    title: "Washroom Facility",
    description: "Clean and hygienic washrooms available for all customers.",
    image: "/images/washroome.jpg",
  },
  {
    title: "Propane Exchange",
    description: "Convenient and safe propane cylinder exchange service available on-site.",
    image: "/images/1631581494.jpg",
  },
  {
  title: "Car Wash",
  description: "Get your vehicle sparkling clean with our professional car washing services.",
  image: "/images/car-wash.jpg",
},
];

const Services = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6">
      <h1 className="text-4xl font-bold text-center mb-10 text-orange-600">
        Our Services
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition duration-300 overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-black-600 mb-2 text-center">
                {service.title}
              </h2>
              <p className="text-gray-600 text-sm text-center">
                {service.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
