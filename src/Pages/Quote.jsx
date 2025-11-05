import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function GetQuote() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    insuranceType: "",
    zipCode: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    console.log("Form submitted:", formData);

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) throw new Error("Network response was not ok");

      const data = await response.json();
      console.log("Success:", data);

      toast.success("Form submitted successfully! 🎉", {
        position: "top-center",
      });

      setSubmitted(true);
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        insuranceType: "",
        zipCode: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Something went wrong. Please try again!", {
        position: "top-center",
      });
    } finally {
      setLoading(false);
    }
  };


  return (
    <>
       <ToastContainer position="top-center" autoClose={3000} />
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
                        name="fullName"
                        placeholder="John Doe"
                        value={formData.fullName}
                        onChange={handleChange}
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
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
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
                        name="phone"
                        placeholder="+1 (555) 123-4567"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        Insurance Type
                      </label>
                      <select
                        required
                        name="insuranceType"
                        value={formData.insuranceType}
                        onChange={handleChange}
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
                      name="zipCode"
                      placeholder="Enter ZIP Code"
                      required
                      value={formData.zipCode}
                      onChange={handleChange}
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
