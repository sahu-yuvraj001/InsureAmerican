import { Helmet } from "react-helmet-async";
const services = [
  {
    title: "Medicare Plans",
    desc: "Simplify your Medicare choices and find the right coverage for your needs.",
    icon: "❤️",
  },
  {
    title: "ACA Health Insurance",
    desc: "Affordable Care Act plans designed for individuals and families.",
    icon: "🏥",
  },
  {
    title: "Life Insurance",
    desc: "Secure your family’s future with flexible life insurance options.",
    icon: "👨‍👩‍👧‍👦",
  },
];

const ServiceCards = () => {
  return (
    <>
      <Helmet>
        <title>Our Insurance Services | Catch Health</title>
        <meta
          name="description"
          content="Explore Catch Health’s insurance services including Medicare, ACA Health, and Life Insurance plans designed to protect your future and family."
        />
        <meta
          name="keywords"
          content="Catch Health, Medicare plans, ACA insurance, life insurance, health coverage, insurance services"
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Our Insurance Services | Catch Health"
        />
        <meta
          property="og:description"
          content="Catch Health offers Medicare, ACA Health, and Life Insurance options tailored to your needs. Discover affordable, reliable coverage today."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourwebsite.com/services" />
        <meta property="og:site_name" content="Catch Health" />
      </Helmet>
      <section className="max-w-7xl mx-auto px-6 sm:px-10 py-16 bg-linear-to-b from-blue-50 to-white">
        <h2 className="text-center text-3xl sm:text-4xl font-bold text-gray-900 mb-10">
          Our Insurance Services
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-white p-8 rounded-2xl shadow-md hover:-translate-y-3 hover:shadow-xl transition duration-300"
            >
              <div className="text-5xl mb-4">{s.icon}</div>
              <h3 className="text-xl font-semibold text-blue-700 mb-2">
                {s.title}
              </h3>
              <p className="text-gray-600 mb-4">{s.desc}</p>
              <a
                href="/services"
                className="text-blue-600 font-medium hover:underline"
              >
                Learn More →
              </a>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default ServiceCards;
