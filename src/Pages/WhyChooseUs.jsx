import React from "react";
import { CheckCircle2 } from "lucide-react"; // Using lucide-react icons
import { Helmet } from "react-helmet-async";

export default function WhyChooseUs() {
  const features = [
    {
      title: "Personalized guidance",
      desc: "Tailored support for Medicare, ACA, and Life Insurance so you make confident decisions.",
    },
    {
      title: "Top-rated carriers",
      desc: "We partner only with trusted insurance carriers to ensure you always get the best coverage.",
    },
    {
      title: "Affordable plans",
      desc: "We help match you with plans that fit your budget — without compromising on benefits.",
    },
    {
      title: "Ongoing support",
      desc: "We’re with you beyond enrollment — providing help whenever you need it.",
    },
  ];

  return (
  <>
  <Helmet>
        <title>Why Choose Us | Insure American</title>
        <meta
          name="description"
          content="Discover why Insure American is trusted for Medicare, ACA, and Life Insurance. Get personalized guidance, top-rated carriers, and ongoing support for your peace of mind."
        />
        <meta
          name="keywords"
          content="Insure American, insurance guidance, best insurance carriers, affordable plans, life insurance, Medicare, ACA"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Why Choose Us | Insure American" />
        <meta
          property="og:description"
          content="Learn what makes Insure American the right choice — expert guidance, trusted carriers, and affordable coverage options."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourwebsite.com/why-choose-us" />
        <meta property="og:site_name" content="Insure American" />
      </Helmet>
    <section className="bg-linear-to-b from-white to-gray-50 py-20 px-6 sm:px-10 md:px-16 text-gray-900">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-4">
            Why Choose <span className="text-blue-600">Us?</span>
          </h2>
        <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
          Insurance can be confusing, but it doesn’t have to be. We make the process simple,
          transparent, and stress-free — with real guidance you can trust.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-left flex items-start gap-4"
            >
              <div className="shrink-0">
                <CheckCircle2 className="w-8 h-8 text-emerald-500" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
}
