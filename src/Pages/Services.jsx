import React from "react";
import { FaHeartbeat, FaShieldAlt, FaNotesMedical } from "react-icons/fa";
import { MdHealthAndSafety } from "react-icons/md";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const services = [
  {
    id: 1,
    title: "Medicare Plans",
    description:
      "We help you compare and enroll in the best Medicare Advantage, Supplement, and Prescription Drug Plans so you never have to navigate the system alone.",
    icon: <FaNotesMedical className="text-blue-600 text-5xl" />,
    link: "/contact",
  },
  {
    id: 2,
    title: "ACA Health Plans",
    description:
      "Affordable Care Act health plans tailored to your needs and budget. Get guidance and confidence when enrolling in marketplace plans.",
    icon: <MdHealthAndSafety className="text-green-600 text-5xl" />,
    link: "/contact",
  },
  {
    id: 3,
    title: "Life Insurance",
    description:
      "Protect what matters most. Life & Final Expense insurance to safeguard your family’s future and provide lasting peace of mind.",
    icon: <FaShieldAlt className="text-purple-600 text-5xl" />,
    link: "/contact",
  },
  {
    id: 4,
    title: "Health Savings Assistance",
    description:
      "Get access to guidance and savings programs to reduce your medical expenses and prescriptions.",
    icon: <FaHeartbeat className="text-red-600 text-5xl" />,
    link: "/contact",
  },
];

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Insurance Services | Insure American</title>
        <meta
          name="description"
          content="Explore Insure American’s range of insurance services — including Medicare, ACA Health, Life Insurance, and Health Savings Assistance — designed to protect you and your family."
        />
        <meta
          name="keywords"
          content="insurance services, Medicare plans, ACA health plans, life insurance, health savings, Insure American"
        />
        <meta name="robots" content="index, follow" />
        {/* Replace 'clientdomain.com' with the live website domain after deployment */}
        <meta property="og:url" content="https://clientdomain.com/services" />
        <meta
          property="og:title"
          content="Insurance Services | Insure American"
        />
        <meta
          property="og:description"
          content="Comprehensive insurance solutions from Insure American — Medicare, ACA Health, Life, and Health Savings plans to secure your future."
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Insure American" />
        <meta
          property="og:image"
          content="https://clientdomain.com/images/services-banner.jpg"
        />
      </Helmet>
      <section className="bg-gray-50 min-h-screen pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-3">
              Our Insurance Services
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              At{" "}
              <span className="font-semibold text-blue-600">
                InsureAmerican
              </span>
              , we offer comprehensive insurance solutions that bring peace of
              mind and protection to every stage of life.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-2 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition duration-300 hover:-translate-y-2 "
              >
                <div className="flex items-center mb-4">{service.icon}</div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-5">{service.description}</p>
                <Link
                  to={service.link}
                  className="inline-block  px-6 py-2 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition duration-200"
                >
                  Learn More
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Protect your health, secure your future.
            </h2>
            <Link
              to="/quote"
              className="px-6 py-3 bg-linear-to-r from-blue-600 to-blue-500 text-white rounded-full font-medium hover:from-blue-700 hover:to-blue-600 transition duration-300"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
