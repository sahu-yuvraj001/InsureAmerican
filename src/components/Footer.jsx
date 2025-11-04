import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
function Footer() {
  return (
   <>
    <Helmet>
        {/* Basic Metadata */}
        <title>InsureAmerican | Trusted Health, Life & Medicare Insurance</title>
        <meta
          name="description"
          content="InsureAmerican provides reliable and affordable Medicare, ACA, and Life Insurance solutions — protecting your health, future, and peace of mind."
        />
        <meta
          name="keywords"
          content="InsureAmerican, health insurance, life insurance, Medicare, ACA, affordable insurance plans"
        />
        <meta property="og:title" content="InsureAmerican | Your Trusted Insurance Partner" />
        <meta
          property="og:description"
          content="Protect your health, your future, and your peace of mind with InsureAmerican. Explore Medicare, ACA, and Life Insurance options today."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourwebsite.com" />
        <meta property="og:site_name" content="InsureAmerican" />
        <meta property="og:locale" content="en_US" />

        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "InsureAmerican",
            "url": "https://yourwebsite.com",
            "logo": "https://yourwebsite.com/logo.png",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+1-888-510-7488",
              "contactType": "Customer Support",
              "areaServed": "US",
              "availableLanguage": "English"
            },
            "sameAs": [
              "https://www.facebook.com/insureamerican",
              "https://www.linkedin.com/company/insureamerican",
              "https://www.instagram.com/insureamerican"
            ]
          })}
        </script>
      </Helmet>
    <footer className="bg-blue-900 text-white py-10 mt-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Column 1: Brand Info */}
        <div>
          <h2 className="text-2xl font-bold mb-2">
            Insure<span className="text-blue-300">American</span>
          </h2>
          <p className="text-sm text-blue-200 leading-relaxed">
            Protecting your health, your future, and your peace of mind.  
            We make finding the right insurance simple and stress-free.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-2 text-blue-100">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/terms">Terms & Conditions</Link></li>
            <li><Link to="/privacy">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
          <p className="text-blue-200">📞 (888) 510-7488</p>
          <p className="text-blue-200">✉️ support@insureamerican.com</p>
          <p className="text-blue-200 mt-3">
            123 Main Street, New York, NY 10001
          </p>

          {/* Social links */}
          <div className="flex space-x-4 mt-3">
            <a href="#" aria-label="Facebook" className="hover:text-blue-300">Facebook</a>
            <a href="#" aria-label="LinkedIn" className="hover:text-blue-300">LinkedIn</a>
            <a href="#" aria-label="Instagram" className="hover:text-blue-300">Instagram</a>
          </div>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="text-center mt-10 border-t border-blue-800 pt-4 text-sm text-blue-200">
        © {new Date().getFullYear()} InsureAmerican. All rights reserved.
      </div>
    </footer>
   </>
  );
}

export default Footer;
