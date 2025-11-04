import insurancefamily from "../assets/insuranceFamily.webp";
import { Helmet } from "react-helmet-async";
const Hero = () => {
  return (
    <>
      <Helmet>
        <title>
          Insure American | Affordable & Reliable Insurance Services
        </title>
        <meta
          name="description"
          content="Protect your family with Insure American — offering Medicare, ACA, and Life Insurance plans tailored to your needs."
        />
        <meta property="og:title" content="Insure American" />
        <meta
          property="og:description"
          content="Affordable and reliable insurance for you and your family — Medicare, ACA, Life, and more."
        />
        <meta property="og:image" content="/insuranceFamily.avif" />
        <meta property="og:url" content="https://yourdomain.com/" />
      </Helmet>
      <section className="bg-linear-to-r from-blue-50 to-blue-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16 md:py-24 flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-16">
          {/* Left Text */}
          <div className="md:w-1/2 space-y-5">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight min-h-14 sm:min-h-16 md:min-h-20">
              Protect What Matters Most with{" "}
              <span className="text-blue-600">InsureAmerican</span>
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed min-h-14">
              Affordable and reliable insurance solutions for you and your
              family — Medicare, ACA, Life, and more.
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 pt-4">
              <a
                href="/quote"
                className="bg-linear-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-full font-medium w-auto self-center sm:self-auto transition-transform duration-500 ease-in-out hover:scale-105 hover:shadow-lg hover:shadow-blue-300 inline-block"
              >
                Get a Quote
              </a>
              <a
                href="/contact"
                className="border border-blue-600 text-blue-600 px-6 py-3 rounded-full font-medium w-auto self-center sm:self-auto transition-transform duration-500 ease-in-out hover:scale-105 hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-600 hover:text-white hover:shadow-lg hover:shadow-blue-300 inline-block"
              >
                Contact Us
              </a>
            </div>
          </div>

          {/* Right Image */}

          <div className="md:w-1/2 flex justify-center">
            <img
              src={insurancefamily}
              alt="Insurance family"
              className="rounded-2xl shadow-lg w-full max-w-md object-cover"
              width="800"
              height="533"
              fetchpriority="high"
              decoding="async"
              loading="eager"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
