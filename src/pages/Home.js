// src/pages/Home.js
import React, { useRef } from 'react';
import Slider from '../components/Slider';
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  const nextSectionRef = useRef(null);

  return (
    <div>
      {/* Typing Hero Section without Background */}
      <div className="flex items-center justify-center min-h-screen bg-white">
        <div>
          <TypeAnimation
  sequence={[
    "Welcome to Indian Oil",
    1000,
    () => {
      nextSectionRef.current?.scrollIntoView({ behavior: 'auto' });
    },
  ]}
  speed={60}
  wrapper="h1"
  repeat={0}
  className="text-4xl font-bold text-orange-600 text-center type-animation-cursor"
/>

        </div>
      </div
      >
      

      {/* Scroll Target Section */}
      <div ref={nextSectionRef}>
        <Slider />
        <section className="p-6 max-w-7xl mx-auto text-center" data-aos="fade-up">
          <h1 className="text-3xl font-bold text-blue-900 mb-4">Sapthagiri Enterprises Ltd.</h1>
          <p className="text-black-1000">
            Energy of India – Delivering high-quality petroleum services.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Home;
