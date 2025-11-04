// src/pages/Contact.jsx
import React from "react";
import { Helmet } from "react-helmet-async";
const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us | Insure American</title>
        <meta
          name="description"
          content="Get in touch with Insure American for any insurance-related questions, quotes, or support. Call, email, or fill out our quick contact form today!"
        />
        <meta
          name="keywords"
          content="contact insure american, insurance support, get insurance quote, health insurance help, customer service"
        />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <section className="bg-linear-to-b from-blue-50 to-white py-16 px-4 lg:px-16 sm:px-6 ">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-700 mb-3">
              Get in Touch
            </h2>
            <p className="text-gray-600">
              Have questions about our insurance plans or want to get started?
              We’d love to hear from you.
            </p>
          </div>

          {/* Contact Grid */}
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Contact Form */}
            <form className="relative bg-white/70 backdrop-blur-lg shadow-2xl rounded-2xl p-10 space-y-6 border border-gray-200 hover:shadow-blue-100 transition duration-500  max-w-lg mx-auto w-full">
              <div>
                <label className="block text-gray-800 font-semibold mb-2">
                  Full Name
                </label>
                <div className="flex items-center border rounded-lg px-4 py-3 bg-white focus-within:ring-2 focus-within:ring-blue-500 transition duration-300">
                  <input
                    type="text"
                    placeholder="John Doe"
                    required
                    className="w-full bg-transparent outline-none text-gray-700 placeholder-gray-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-800 font-semibold mb-2">
                  Email Address
                </label>
                <div className="flex items-center border rounded-lg px-4 py-3 bg-white focus-within:ring-2 focus-within:ring-blue-500 transition duration-300">
                  <input
                    type="email"
                    placeholder="you@example.com"
                    required
                    className="w-full bg-transparent outline-none text-gray-700 placeholder-gray-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-800 font-semibold mb-2">
                  Your Message
                </label>
                <div className="relative">
                  <textarea
                    placeholder="Write your message..."
                    rows="4"
                    required
                    className="w-full border rounded-lg px-4 py-3 bg-white focus:ring-2 focus:ring-blue-500 outline-none resize-none text-gray-700 placeholder-gray-400 transition duration-300"
                  ></textarea>
                  <div className="absolute bottom-3 right-3 text-blue-400 text-sm">
                    ✉️
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-lg font-semibold text-white bg-linear-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 active:scale-95 transition duration-300 shadow-md hover:shadow-blue-200"
              >
                🚀 Send Message
              </button>
            </form>

            {/* Contact Info */}
            <div className="space-y-8 max-w-lg mx-auto lg:mx-0">
              <div>
                <h3 className="text-2xl font-semibold text-blue-700 mb-3">
                  Contact Information
                </h3>
                <p className="text-gray-600 mb-2">
                  <span className="font-medium text-gray-800">Phone:</span>{" "}
                  (123) 456-7890
                </p>
                <p className="text-gray-600 mb-2">
                  <span className="font-medium text-gray-800">Email:</span>{" "}
                  info@insureamerican.com
                </p>
                <p className="text-gray-600">
                  <span className="font-medium text-gray-800">Address:</span>{" "}
                  123 Main Street, New York, NY 10001
                </p>
              </div>

              {/* Google Map */}
              <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200">
                <iframe
                  title="Google Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24178.7717875246!2d-74.0060156!3d40.7127281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a316cc7e2e5%3A0x35f4ed0efbf6f1f2!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sin!4v1698612677000!5m2!1sen!2sin"
                  width="100%"
                  height="250"
                  allowFullScreen=""
                  loading="lazy"
                  className="border-none"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
