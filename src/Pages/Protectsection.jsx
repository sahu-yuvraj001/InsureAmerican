import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const ProtectSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <Helmet>
        <title>Protect What Matters Most | Insure American</title>
        <meta
          name="description"
          content="Safeguard your family's future with Insure American's life and final expense insurance plans. Get affordable coverage and lasting peace of mind today."
        />
        <meta
          name="keywords"
          content="life insurance, final expense insurance, family protection, affordable coverage, Insure American"
        />
        <meta name="robots" content="index, follow" />
        {/* Replace 'clientdomain.com' with the live website domain after deployment */}
        <meta property="og:url" content="https://clientdomain.com/protect" />
        <meta
          property="og:title"
          content="Protect What Matters Most | Insure American"
        />
        <meta
          property="og:description"
          content="Discover life and final expense insurance options that give your loved ones security and peace of mind. Start planning today with Insure American."
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Insure American" />
        <meta
          property="og:image"
          content="https://clientdomain.com/images/protect-banner.jpg"
        />
      </Helmet>
      <section className="bg-linear-to-b from-emerald-50 to-emerald-100 rounded-3xl text-center py-20 px-6 my-10">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Protect what matters most
        </h2>
        <p className="text-gray-700 mb-8 max-w-2xl mx-auto text-lg">
          Life Insurance & Final Expense coverage that safeguards your family’s
          future and provides lasting peace of mind.
        </p>
        <button
          onClick={() => setIsModalOpen(true)}
          className="inline-block bg-linear-to-r from-gray-900 to-black text-white font-semibold py-3 px-7 rounded-full transition-all duration-500 ease-in-out hover:from-black hover:to-gray-800 hover:scale-105 hover:shadow-lg hover:shadow-gray-400/40"
    >
          Start Planning Today
        </button>
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl shadow-2xl p-10 text-center max-w-md w-full mx-4 relative animate-in fade-in duration-200">
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl"
              >
                ✖
              </button>

              <div className="flex flex-col items-center space-y-4">
                <div className="bg-blue-100 text-blue-700 p-4 rounded-full">
                  📞
                </div>
                <h2 className="text-3xl font-bold text-blue-900">
                  Give Us A Call
                </h2>
                <p className="text-2xl font-semibold text-blue-800">
                  (888) 510-7488
                </p>
                <p className="text-gray-700">
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

export default ProtectSection;
