// src/components/ProductCard.js
import React from "react";
import { motion } from "framer-motion";

const ProductCard = ({ name, price, description, image }) => {
  return (
    <motion.div
      className="flex items-start bg-white rounded-xl shadow-lg transition duration-300 p-4 w-full cursor-pointer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{
        scale: 1.03,
        rotate: 0.5,
        boxShadow: "0 8px 30px rgba(0, 0, 0, 0.15)",
      }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Image */}
      <img
        src={image}
        alt={name}
        className="w-40 h-40 object-cover rounded-md mr-6"
      />

      {/* Text */}
      <div className="flex flex-col">
        <h3 className="text-xl font-semibold text-orange-600 mb-2">{name}</h3>
        <p className="text-sm text-black-700 mb-2">{description}</p>
        <p className="text-lg font-bold text-gray-800">{price}</p>
      </div>
    </motion.div>
  );
};

export default ProductCard;
