import React from "react";
import aboutImg from "../assets/aboutus.avif"; // <-- replace with your actual image
import { Helmet } from "react-helmet-async";
const About = () => {
  return (
   <>
   <Helmet>
        <title>About Us | Insure American</title>
        <meta
          name="description"
          content="Learn more about Insure American — a trusted name in life and health insurance. Our mission is to protect families with affordable, reliable coverage."
        />
        <meta
          name="keywords"
          content="about insure american, life insurance company, insurance agency, health coverage, family protection"
        />
        <meta name="robots" content="index, follow" />
      </Helmet>
    <section className="bg-white text-gray-800">
      {/* Top Hero Section */}
      <div className="relative bg-linear-to-r from-blue-900 to-blue-600 text-white py-20">
        <div className="max-w-6xl mx-auto text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About Insure American 
          </h1>
          <p className="max-w-3xl mx-auto text-lg opacity-90">
            Building trust, protecting futures, and making insurance simple for
            everyone across America.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-400/40" />
      </div>

      {/* Company Story */}
      <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-5">
          <h2 className="text-3xl font-bold text-blue-900">
            Who We Are
          </h2>
          <p className="text-gray-700 leading-relaxed">
            At <span className="font-semibold text-blue-700">InsureAmerican</span>, 
            we believe everyone deserves access to affordable, reliable insurance coverage. 
            Our mission is to guide individuals and families toward the best Medicare, 
            ACA, and Life Insurance options tailored to their needs.
          </p>
          <p className="text-gray-700 leading-relaxed">
            With years of experience and a customer-first approach, 
            we’ve built our reputation on honesty, transparency, 
            and exceptional service — because protecting what matters most 
            is more than just a policy, it’s a promise.
          </p>
        </div>

        <div className="flex justify-center">
          <img
            src={aboutImg}
            alt="About InsureAmerican"
            className="rounded-2xl shadow-lg w-full max-w-md hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>

      {/* Mission Section */}
      <div className="bg-blue-50 py-16 px-6">
        <div className="max-w-6xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">
            Our Mission
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed mb-10">
            Our goal is simple — to simplify the insurance process and help
            every American make informed decisions. Whether it’s Medicare,
            Affordable Care Act (ACA) plans, or Life Insurance, we’re here
            to support you every step of the way.
          </p>

         <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {[
                {
                  title: "Trust",
                  desc: "We prioritize honesty and transparency in every policy we offer.",
                },
                {
                  title: "Service",
                  desc: "Our dedicated agents ensure a smooth and stress-free experience.",
                },
                {
                  title: "Commitment",
                  desc: "We’re committed to helping you protect what truly matters.",
                },
              ].map((card, i) => (
                <div
                  key={i}
                  className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300"
                >
                  <h3 className="font-semibold text-blue-700 text-xl mb-2">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{card.desc}</p>
                </div>
              ))}
            </div>

        </div>
      </div>
     
    </section>
    </>
  );
};

export default About;
