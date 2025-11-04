import React from "react";
import { Helmet } from "react-helmet-async";

export default function PrivacyPolicy() {
  return (
   <>
   <Helmet>
  <title>Privacy Policy | Insure American</title>
  <meta
    name="description"
    content="Read the Privacy Policy of Insure American to understand how we collect, use, and protect your personal information. Your privacy and security are our top priorities."
  />
  <meta
    name="keywords"
    content="privacy policy, data protection, personal information, insurance privacy, Insure American"
  />
  <meta name="robots" content="index, follow" />
  <meta property="og:title" content="Privacy Policy | Insure American" />
  <meta
    property="og:description"
    content="Learn how Insure American safeguards your personal and financial data through transparent privacy practices."
  />
  <meta property="og:type" content="website" />
<meta property="og:url" content="https://clientdomain.com/privacy-policy" />
  <meta property="og:site_name" content="Insure American" />
  <meta property="og:image" content="https://clientdomain.com/images/privacy-banner.jpg" />
</Helmet>
   <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen text-gray-800 py-12 px-6">
      <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-3xl p-10 border border-gray-200">
        <h1 className="text-4xl font-bold text-blue-700 mb-4 text-center">
          Privacy Policy
        </h1>
        <p className="text-gray-500 text-center mb-10">
          Last Updated: <strong>October 29, 2024</strong>
        </p>

        <p className="mb-8 text-lg leading-relaxed">
          <strong>American Health Reform Solutions</strong> d/b/a{" "}
          <em>American Health Marketplace</em> (“we,” “us,” or “our”) values your
          privacy. This Privacy Policy explains how we collect, use, share, and
          protect your personal information when you visit or interact with our
          websites, mobile apps, and services.
        </p>

        {/* 1. Collecting Information */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">
            1. Collecting Your Information
          </h2>
          <p className="leading-relaxed">
            We collect information in several ways — directly from you, through
            your use of our Site, and from third-party sources. This includes
            your name, contact details, browsing data, device information, and
            other details voluntarily provided by you or obtained through
            analytics and tracking technologies.
          </p>
        </section>

        {/* 2. Using Information */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">
            2. Using Your Information
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Provide and improve our services</li>
            <li>Process transactions and manage accounts</li>
            <li>Send updates, offers, and marketing communications</li>
            <li>Comply with legal obligations</li>
            <li>Enhance website security and prevent fraud</li>
          </ul>
        </section>

        {/* 3. Sharing Information */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">
            3. Sharing Your Information
          </h2>
          <p className="leading-relaxed mb-3">
            We may share your data with trusted partners, including:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Business partners for providing requested services</li>
            <li>Marketing and analytics service providers</li>
            <li>Payment processors and fraud prevention vendors</li>
            <li>Government authorities as required by law</li>
          </ul>
          <p className="mt-3">
            You may opt out of data sharing by contacting us at{" "}
            <a
              href="mailto:compliance@americanhealthmarketplace.com"
              className="text-blue-600 underline"
            >
              compliance@americanhealthmarketplace.com
            </a>
            .
          </p>
        </section>

        {/* 4. Cookies */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">
            4. Cookies & Tracking Technologies
          </h2>
          <p className="leading-relaxed">
            Our website uses cookies and similar technologies for analytics,
            marketing, and improving user experience. You can manage your cookie
            preferences in your browser settings. Disabling cookies may affect
            site functionality.
          </p>
        </section>

        {/* 5. Policy for Children */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">
            5. Policy for Children
          </h2>
          <p className="leading-relaxed">
            We do not knowingly collect data from individuals under 18 years of
            age. If you believe a child has provided us information, please
            contact us immediately to remove such data.
          </p>
        </section>

        {/* 6. Data Security */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">
            6. Data Security
          </h2>
          <p className="leading-relaxed">
            We implement administrative, technical, and physical safeguards to
            protect your information from unauthorized access, alteration, or
            destruction. However, no online transmission is 100% secure, and we
            cannot guarantee absolute security.
          </p>
        </section>

        {/* 7. Submitting Info Outside US */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">
            7. Submitting Information from Outside the United States
          </h2>
          <p className="leading-relaxed">
            We control and operate our online and mobile resources from within
            the United States (“U.S.”). Information collected through the Site
            may be stored and processed in the U.S. or any other country in
            which our vendors or we maintain facilities. The English version of
            this Privacy Policy is the controlling version regardless of any
            translation.
          </p>
        </section>

        {/* 8. Links to Other Websites */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">
            8. Links to Other Websites and Third-Party Practices
          </h2>
          <p className="leading-relaxed">
            This Site may contain links to third-party websites. While we aim to
            provide links only to trusted sites, we have no control over their
            privacy or content. Any information collected by third-party sites
            is not covered by this Privacy Policy. We recommend reviewing their
            privacy policies before sharing personal data.
          </p>
        </section>

        {/* 9. Your Privacy Rights */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">
            9. Your Privacy Rights
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>
              <strong>The Right to Know:</strong> Request details on what we
              collect, use, and share.
            </li>
            <li>
              <strong>The Right to Delete:</strong> Ask us to delete your data,
              subject to legal exceptions.
            </li>
            <li>
              <strong>The Right to Correct:</strong> Request correction of
              inaccurate data.
            </li>
            <li>
              <strong>The Right to Opt-Out:</strong> Opt out of selling or
              sharing your data by contacting{" "}
              <a
                href="mailto:compliance@americanhealthmarketplace.com"
                className="text-blue-600 underline"
              >
                compliance@americanhealthmarketplace.com
              </a>
              .
            </li>
            <li>
              <strong>Right to Limit Disclosure:</strong> Limit how we use or
              share sensitive information.
            </li>
            <li>
              <strong>Right to Appeal:</strong> If your request is denied, you
              may email us with “Data Access Request Appeal.”
            </li>
          </ul>
        </section>

        {/* 10. How to Exercise Rights */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">
            10. How to Exercise Your Privacy Rights
          </h2>
          <p className="leading-relaxed">
            To exercise any rights, email us at{" "}
            <a
              href="mailto:compliance@americanhealthmarketplace.com"
              className="text-blue-600 underline"
            >
              compliance@americanhealthmarketplace.com
            </a>
            . We may verify your identity or require additional details before
            processing requests. Authorized agents must provide proof of
            permission. You can also opt-out via our “Do Not Sell or Share My
            Personal Information” or “Limit Use of Sensitive Information” pages.
          </p>
        </section>

        {/* 11. Retention Period */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">
            11. Retention Period
          </h2>
          <p className="leading-relaxed">
            We retain information only as long as necessary to fulfill the
            purpose for which it was collected or to comply with applicable
            laws. The retention period depends on our relationship with you and
            our legal obligations.
          </p>
        </section>

        {/* 12. Contact Us */}
        <section>
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">
            12. Contact Us
          </h2>
          <p className="leading-relaxed">
            If you have questions about this Privacy Policy, contact us at:
          </p>
          <p className="mt-4">
            <strong>American Health Reform Solutions</strong>
            <br />
            3215 NW 10 Terrace, Suite 211<br />
            Oakland Park, FL 33309<br />
            United States<br />
            Email:{" "}
            <a
              href="mailto:compliance@americanhealthmarketplace.com"
              className="text-blue-600 underline"
            >
              compliance@americanhealthmarketplace.com
            </a>
          </p>
        </section>
      </div>
    </div>
    </>
  );
}
