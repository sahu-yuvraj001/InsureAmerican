import { useState } from "react";
import { Helmet } from "react-helmet-async";

export default function GetQuote() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Helmet>
        <title>Get a Free Insurance Quote | Insure American</title>
        <meta
          name="description"
          content="Get your free insurance quote from Insure American. Compare affordable life, health, dental, and vision insurance plans that protect what matters most."
        />
        <meta
          name="keywords"
          content="insurance quote, free quote, life insurance, health insurance, dental insurance, Insure American"
        />
        <meta name="robots" content="index, follow" />
        {/* Replace 'clientdomain.com' with the live website domain after deployment */}
        <meta property="og:url" content="https://clientdomain.com/get-quote" />
        <meta
          property="og:title"
          content="Get a Free Insurance Quote | Insure American"
        />
        <meta
          property="og:description"
          content="Fill out a quick form to get your personalized insurance quote from Insure American. Affordable and reliable coverage for you and your family."
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Insure American" />
        <meta
          property="og:image"
          content="https://clientdomain.com/images/get-quote-banner.jpg"
        />
      </Helmet>
      <section className="min-h-screen flex items-center justify-center bg-linear-to-br from-blue-50 via-white to-blue-100 py-12 sm:py-16 px-4 sm:px-6 lg:px-12">
        <div className="w-full max-w-lg md:max-w-3xl bg-white/80 backdrop-blur-xl shadow-2xl rounded-3xl p-6 sm:p-10 border border-blue-100 transition-all duration-700 ease-in-out transform hover:scale-[1.01] hover:shadow-blue-200">
          {!submitted ? (
            <div
              className={`transition-opacity duration-700 ${
                !submitted ? "opacity-100" : "opacity-0 hidden"
              }`}
            >
              <>
                <h2 className="text-3xl font-bold text-blue-700 text-center mb-4">
                  Get a Free Quote
                </h2>
                <p className="text-gray-600 text-center mb-10">
                  Fill out this quick form and our agent will reach you soon.
                  You’ll also receive our direct phone line after submission.
                </p>

                <form
                  onSubmit={handleSubmit}
                  className="space-y-5 sm:space-y-6"
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        required
                        className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="you@example.com"
                        required
                        className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        placeholder="+1 (555) 123-4567"
                        required
                        className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        Insurance Type
                      </label>
                      <select
                        required
                        className="w-full px-4 py-3 border rounded-lg text-gray-600 focus:ring-2 focus:ring-blue-500 outline-none transition"
                      >
                        <option value="">Select...</option>
                        <option value="medicare">Medicare</option>
                        <option value="aca">ACA Health</option>
                        <option value="life">Life Insurance</option>
                        <option value="dental">Dental / Vision</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      ZIP Code
                    </label>
                    <input
                      type="text"
                      placeholder="Enter ZIP Code"
                      required
                      className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 mt-2 bg-linear-to-r from-blue-600 to-blue-800 text-white font-semibold rounded-lg shadow-md hover:shadow-blue-300 transition duration-300"
                  >
                    📩 Submit Request
                  </button>
                </form>
              </>
            </div>
          ) : (
            <div
              className={`transition-opacity duration-700 ${
                submitted ? "opacity-100" : "opacity-0 hidden"
              }`}
            >
              <div className="text-center space-y-6 py-10 bg-blue-50/40 rounded-2xl shadow-inner">
                <h3 className="text-3xl font-semibold text-blue-700">
                  Thank You for Your Request! 🎉
                </h3>
                <p className="text-gray-700 text-lg">
                  Our licensed insurance experts will contact you soon.
                  Meanwhile, you can reach us directly at:
                </p>
                <p className="text-2xl font-bold text-blue-800">
                  ☎️ (800) 555-1234
                </p>
                <p className="text-gray-600">
                  Available Monday–Friday, 9AM–6PM EST
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-blue-600 font-medium underline hover:text-blue-800 transition"
                >
                  🔁 Submit Another Request
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
