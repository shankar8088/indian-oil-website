// src/pages/Products.js
import React from "react";
import ProductCard from "../components/ProductCard";

function Products() {
  const products = [
    {
      name: "Petrol - Premium",
      price: "₹102.09/L",
      description:
        "High-performance fuel that ensures smooth engine operation and improved mileage for long drives.",
      image: "/images/fuel.jpeg",
    },
    {
      name: "Diesel - Regular",
      price: "₹90.18/L",
      description:
        "Reliable and efficient diesel, ideal for commercial and personal vehicles with powerful engines.",
      image: "/images/desel.jpg",
    },
    {
      name: "XP95 Petrol",
      price: "₹108.45/L",
      description: "High-octane premium petrol designed for enhanced acceleration, engine performance, and fuel efficiency.",
      image: "/images/xp95.jpg",
},
    {
      name: "Engine Oil",
      price: "₹450",
      description:
        "Protect your engine with long-lasting, high-quality oil for better performance and durability.",
      image: "/images/Engin oil.jpg",
    },
 {
      name: "Coolant",
      price: "₹250",
      description:
        "Premium coolant to prevent engine overheating and corrosion, especially in long trips or hot climates.",
      image: "/images/coolant.jpg",
    },
    {
      name: "AdBlue",
      price: "₹55/L",
      description:
        "AdBlue is a high-purity urea solution used in diesel vehicles to reduce harmful nitrogen oxide emissions. It improves engine performance, meets BS-VI standards, and is available in 10L, 20L cans and bulk dispensers.",
      image: "/images/IMG-20250716-WA0016.jpg", // Make sure to add this image to your public/images folder
    },
  ];

  return (
    <div className="bg-black-100 min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-orange-600 mb-12">
          Our Products
        </h2>
        <div className="flex flex-col gap-10">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;

