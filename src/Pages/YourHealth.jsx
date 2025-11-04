import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const YourHealth = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
  <>
  <Helmet>
        <title>Your Health | Catch Health</title>
        <meta
          name="description"
          content="Your health, your life, your peace of mind. Catch Health helps you find the perfect insurance plan with expert guidance and trusted advisors."
        />
        <meta
          name="keywords"
          content="Catch Health, health insurance, insurance advisors, affordable health plans, health coverage, peace of mind"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Your Health | Catch Health" />
        <meta
          property="og:description"
          content="Let Catch Health connect you with the right insurance plan today. Expert advisors ready to help you find peace of mind."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourwebsite.com/your-health" />
        <meta property="og:site_name" content="Catch Health" />
      </Helmet>
   <section className="bg-linear-to-b from-emerald-50 to-emerald-100 rounded-3xl text-center py-20 px-6 my-10">
      <h2 className="text-4xl font-bold text-gray-900 mb-4">
        Your health. Your life. Your peace of mind.
      </h2>
      <p className="text-gray-700 mb-8 max-w-2xl mx-auto text-lg">
        Let Catch Health connect you with the right plan today.
      </p>
      <button
        onClick={() => setIsModalOpen(true)}
        className="inline-block bg-black text-white font-semibold py-3 px-8 rounded-full hover:bg-gray-800 transition duration-300"
      >
        Speak to a Catch Advisor Today
      </button>
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-xl p-10 text-center max-w-md w-full mx-4 relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl"
            >
              ✖
            </button>

            <div className="flex flex-col items-center space-y-4">
              <div className="bg-blue-100 text-blue-700 p-4 rounded-full text-2xl">
                📞
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-blue-900">
                Give Us A Call
              </h2>
              <p className="text-xl sm:text-2xl font-semibold text-blue-800">
                (888) 510-7488
              </p>
              <p className="text-gray-700 text-sm sm:text-base">
                We're Here To Assist You With All Your Health Insurance Needs!
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
    </>
  );
};

export default YourHealth;
