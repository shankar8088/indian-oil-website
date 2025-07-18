import React from "react";
import { FaPhoneAlt, FaWhatsapp, FaInstagram, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="pt-4">
      {/* Page Banner */}
      <div
        className="w-full h-[300px] bg-cover bg-center"
        style={{ backgroundImage: "url('/images/istockphoto-1365543480-640x640.jpg')" }}
      >
        <div className="bg-black/40 h-full flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold">Contact Us</h1>
        </div>
      </div>

      {/* Contact Info + Form */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
        {/* Contact Info with Icons */}
        <div className="bg-white shadow-md rounded-lg p-6 space-y-4" data-aos="fade-right">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">Get in Touch</h2>
          <p className="text-gray-700 mb-4">
            Have a question or want to get in touch? We'd love to hear from you.
          </p>

          <div className="flex items-center gap-3 text-gray-700">
            <FaMapMarkerAlt className="text-orange-500" />
            <p>Ground floor, Kadri Hills, Kadri, Mangaluru, Karnataka 575004</p>
          </div>

          <div className="flex items-center gap-3 text-gray-700">
            <FaPhoneAlt className="text-green-600" />
            <p>+07022103369</p>
          </div>

          <div className="flex items-center gap-3 text-gray-700">
            <FaWhatsapp className="text-green-500" />
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Chat on WhatsApp
            </a>
          </div>

          <div className="flex items-center gap-3 text-gray-700">
            <FaEnvelope className="text-blue-500" />
            <a href="mailto:contact@iocl.com" className="hover:underline">
              sapthagirienterprises@gmail.com
            </a>
          </div>

          <div className="flex items-center gap-3 text-gray-700">
            <FaInstagram className="text-pink-600" />
            <a
              href="https://instagram.com/indianoilcorp"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              @indianoilcorp
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white shadow-md rounded-lg p-6" data-aos="fade-left">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">Send a Message</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                rows="4"
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <button
              type="submit"
              className="bg-blue-800 hover:bg-blue-900 text-white font-semibold py-2 px-4 rounded"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* 📍 Location Map */}
      <div className="max-w-7xl mx-auto p-6 pt-0">
        <h2 className="text-2xl font-semibold text-blue-800 mb-4">Our Location</h2>
        <div className="rounded-lg overflow-hidden shadow-md">
          <iframe
            title="Indian Oil Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.846408672965!2d74.85560707577898!3d12.872693587442454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba35bdab76f8537%3A0xbba20e8b124681d3!2sIndianOil%20Sapthagiri%20Enterprises!5e0!3m2!1sen!2sin!4v1721286554001!5m2!1sen!2sin"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
