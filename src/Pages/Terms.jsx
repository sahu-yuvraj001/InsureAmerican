import React from "react";
import { Helmet } from "react-helmet-async";

const Terms = () => {
  return (
    <>
      <Helmet>
        <title>Terms & Conditions | Insure American</title>
        <meta
          name="description"
          content="Review Insure American’s Terms & Conditions outlining the use of our website, services, and user responsibilities. Stay informed before using our insurance services."
        />
        <meta
          name="keywords"
          content="Insure American terms, website policies, insurance terms, legal agreement, conditions of use"
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Terms & Conditions | Insure American"
        />
        <meta
          property="og:description"
          content="Understand your rights and obligations when using Insure American’s website and insurance services."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourwebsite.com/terms" />
        <meta property="og:site_name" content="Insure American" />
      </Helmet>
      <div className="bg-gray-50 min-h-screen py-16 px-6">
        <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-2xl p-10 leading-relaxed">
          <h1 className="text-4xl font-bold text-blue-700 mb-6 text-center">
            Website Terms & Conditions
          </h1>
          <p className="text-gray-600 mb-8 text-center">
            Last Updated: <span className="font-medium">November 2025</span>
          </p>

          <div className="space-y-10 text-gray-700">
            {/* LIMITATION OF LIABILITY */}
            <section>
              <h2 className="text-2xl font-semibold text-blue-600 mb-3">
                LIMITATIONS OF LIABILITY
              </h2>
              <p>
                IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE
                LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT,
                CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE
                DAMAGES, INCLUDING LOST PROFIT, LOST REVENUE, LOSS OF DATA, OR
                OTHER DAMAGES ARISING FROM YOUR USE OF THE SERVICES, EVEN IF WE
                HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
              </p>
              <p className="mt-3">
                NOTWITHSTANDING ANYTHING TO THE CONTRARY CONTAINED HEREIN, OUR
                LIABILITY TO YOU FOR ANY CAUSE WHATSOEVER AND REGARDLESS OF THE
                FORM OF THE ACTION, WILL AT ALL TIMES BE LIMITED TO THE LESSER
                OF THE AMOUNT PAID, IF ANY, BY YOU TO US OR $1,000.00 USD.
                CERTAIN US STATE LAWS AND INTERNATIONAL LAWS DO NOT ALLOW
                LIMITATIONS ON IMPLIED WARRANTIES OR THE EXCLUSION OR LIMITATION
                OF CERTAIN DAMAGES. IF THESE LAWS APPLY TO YOU, SOME OR ALL OF
                THE ABOVE DISCLAIMERS OR LIMITATIONS MAY NOT APPLY TO YOU, AND
                YOU MAY HAVE ADDITIONAL RIGHTS.
              </p>
            </section>

            {/* INDEMNIFICATION */}
            <section>
              <h2 className="text-2xl font-semibold text-blue-600 mb-3">
                INDEMNIFICATION
              </h2>
              <p>
                You agree to defend, indemnify, and hold us harmless, including
                our subsidiaries, affiliates, and all of our respective
                officers, agents, partners, and employees, from and against any
                loss, damage, liability, claim, or demand, including reasonable
                attorneys’ fees and expenses, made by any third party due to or
                arising out of:
              </p>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>Use of the Services</li>
                <li>Breach of these Legal Terms</li>
                <li>Violation of any third-party rights or laws</li>
                <li>
                  Any overt harmful act toward another user connected via the
                  Services
                </li>
              </ul>
              <p className="mt-3">
                We reserve the right, at your expense, to assume the exclusive
                defense and control of any matter for which you are required to
                indemnify us, and you agree to cooperate, at your expense, with
                our defense of such claims.
              </p>
            </section>

            {/* USER DATA */}
            <section>
              <h2 className="text-2xl font-semibold text-blue-600 mb-3">
                USER DATA
              </h2>
              <p>
                We maintain certain data that you transmit to the Services for
                the purpose of managing performance and usage. Although we
                perform regular backups, you are solely responsible for all data
                you transmit or that relates to your use. We shall not be liable
                for any loss or corruption of data, and you hereby waive any
                right of action against us arising from such loss or corruption.
              </p>
            </section>

            {/* ELECTRONIC COMMUNICATIONS */}
            <section>
              <h2 className="text-2xl font-semibold text-blue-600 mb-3">
                ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES
              </h2>
              <p>
                Visiting the Services, sending us emails, and completing online
                forms constitute electronic communications. You consent to
                receive electronic communications, and agree that all
                agreements, notices, disclosures, and other communications
                provided electronically satisfy any legal requirement that such
                communication be in writing.
              </p>
              <p className="mt-3">
                YOU HEREBY AGREE TO THE USE OF ELECTRONIC SIGNATURES, CONTRACTS,
                ORDERS, AND OTHER RECORDS, AND TO ELECTRONIC DELIVERY OF
                NOTICES, POLICIES, AND RECORDS OF TRANSACTIONS INITIATED OR
                COMPLETED BY US OR VIA THE SERVICES.
              </p>
            </section>

            {/* SMS TEXT MESSAGING */}
            <section>
              <h2 className="text-2xl font-semibold text-blue-600 mb-3">
                SMS TEXT MESSAGING
              </h2>
              <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-1">
                Program Description
              </h3>
              <p>
                After providing verbal consent to receive SMS messaging from
                American Health Marketplace, users will be prompted to reply
                “YES” to confirm consent. Text alerts may include important
                notices regarding health insurance policies, coverage changes,
                renewals, and payment updates.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-1">
                Opting Out
              </h3>
              <p>
                To stop receiving messages, reply “STOP” or text “STOP” to
                333777. You may also modify your preferences via the app or call
                (888)-835-8730.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-1">
                Support
              </h3>
              <p>
                For assistance, text “HELP” to 333777, email{" "}
                <a
                  href="mailto:memberservices@americanhealthmarketplace.com"
                  className="text-blue-600 hover:underline"
                >
                  memberservices@americanhealthmarketplace.com
                </a>
                , or call (888)-835-8730.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-1">
                Message Frequency & Rates
              </h3>
              <p>
                Message frequency may vary. Message and data rates may apply.
                Carriers are not liable for delayed or undelivered messages.
              </p>
            </section>

            {/* CALIFORNIA USERS */}
            <section>
              <h2 className="text-2xl font-semibold text-blue-600 mb-3">
                CALIFORNIA USERS AND RESIDENTS
              </h2>
              <p>
                If any complaint with us is not satisfactorily resolved, you may
                contact the Complaint Assistance Unit of the Division of
                Consumer Services of the California Department of Consumer
                Affairs:
              </p>
              <p className="mt-2">
                1625 North Market Blvd., Suite N 112, Sacramento, CA 95834
                <br />
                Phone: (800) 952-5210 or (916) 445-1254
              </p>
            </section>

            {/* MISCELLANEOUS */}
            <section>
              <h2 className="text-2xl font-semibold text-blue-600 mb-3">
                MISCELLANEOUS
              </h2>
              <p>
                These Legal Terms constitute the entire agreement between you
                and us. Our failure to enforce any provision does not waive any
                right. These Terms operate to the fullest extent permissible by
                law.
              </p>
              <p className="mt-3">
                If any part is deemed unlawful or unenforceable, that portion is
                severable and does not affect remaining provisions.
              </p>
            </section>

            {/* CONTACT US */}
            <section>
              <h2 className="text-2xl font-semibold text-blue-600 mb-3">
                CONTACT US
              </h2>
              <p>For any questions or to resolve a complaint, contact us at:</p>
              <p className="mt-3 font-medium text-gray-800">
                American Health Reform Solutions
                <br />
                3215 NW 10th Terrace Suite 211
                <br />
                Fort Lauderdale, FL 33309, United States
                <br />
                Phone: (+1) 888-835-8730
                <br />
                Email:{" "}
                <a
                  href="mailto:compliance@americanhealthmarketplace.com"
                  className="text-blue-600 hover:underline"
                >
                  compliance@americanhealthmarketplace.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Terms;
