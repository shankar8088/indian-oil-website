import React from "react";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="pt-4">
      {/* Header Image */}
      <div className="w-full h-[300px] bg-cover bg-center" style={{ backgroundImage:"url('/images/abotlogo.png')", }}>
        <div className="bg-black/40 h-full flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold">About Us</h1>
        </div>
      </div>

      {/* About Text Section */}
      <div className="max-w-7xl mx-auto p-6">
        <h2 className="text-3xl font-bold text-blue-900 mb-4">Sapthagiri Enterprises Ltd.</h2>
        <p className="text-black-700 mb-6">
          Sapthagiri Enterprises Ltd. is India’s largest commercial enterprise, ranked among the world’s largest
          corporates. IndianOil plays a significant role in fueling the growth of the Indian economy through its core
          business of refining, pipeline transportation, and marketing of petroleum products.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  {/* Our Mission */}
  <div className="bg-white shadow-md rounded-lg p-6 text-center" data-aos="zoom-in-up">
    <img
      src="/images/mission.png"
      alt="Mission Icon"
      className="w-16 h-16 mx-auto mb-4"
    />
    <h3 className="text-xl font-bold text-orange-700 mb-2">Our Mission</h3>
    <p className="text-black-600 text-sm">
      To be the Energy of India and to serve the nation by being a responsible energy provider committed to excellence.
    </p>
  </div>

  {/* Our Vision */}
  <div className="bg-white shadow-md rounded-lg p-6 text-center" data-aos="zoom-in-up" data-aos-delay="200">
    <img
      src="/images/download.jpeg"
      alt="Vision Icon"
      className="w-16 h-16 mx-auto mb-4"
    />
    <h3 className="text-xl font-bold text-orange-700 mb-2">Our Vision</h3>
    <p className="text--600 text-sm">
      To become a globally admired company providing energy solutions while maintaining the highest standards of customer service.
    </p>
  </div>
</div>

      </div>
    </div>
  );
};

export default About;
