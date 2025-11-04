import { FaShieldHeart, FaBriefcase } from "react-icons/fa6";
import { FaUserMd } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";
import familypic from "../assets/family.jpg";
import businesspic from "../assets/business.jpg";
import healthpic from "../assets/health.jpg";

const services = [
  {
    id: 1,
    title: "Life Insurance",
    desc: "Secure your family’s future with affordable life coverage that gives lasting peace of mind.",
    icon: <FaShieldHeart className="text-4xl text-blue-600 mb-4" />,
    img: familypic,
  },
  {
    id: 2,
    title: "Business Insurance",
    desc: "Protect your business from unexpected risks and ensure stability in every circumstance.",
    icon: <FaBriefcase className="text-4xl text-blue-600 mb-4" />,
    img: businesspic,
  },
  {
    id: 3,
    title: "Health Insurance",
    desc: "Comprehensive health plans designed to keep you and your loved ones healthy and stress-free.",
    icon: <FaUserMd className="text-4xl text-blue-600 mb-4" />,
    img: healthpic,
  },
];

export default function InsuranceSection() {
  return (
    <section className="py-20 bg-linear-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-blue-900 mb-14">
          Take Better{" "}
          <span className="text-blue-600">Insurance Opportunity</span>
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {services.map((service) => (
            <div
              key={service.id}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.02]"
            >
              {/* Image Section */}
              <div className="relative overflow-hidden">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-56 sm:h-60 md:h-64 lg:h-72 object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Card Content */}
              <div className="p-6 sm:p-7 md:p-8 relative">
                {service.icon}
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed text-sm sm:text-base">
                  {service.desc}
                </p>

                {/* Arrow Button */}
                <div className="absolute right-6 bottom-6">
                  <button
                    aria-label={`Learn more about ${service.title}`}
                    className="bg-blue-600 text-white p-3 rounded-xl transition-all duration-500 hover:bg-blue-700 hover:scale-110 hover:shadow-lg"
                  >
                    <HiArrowRight className="text-xl" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
