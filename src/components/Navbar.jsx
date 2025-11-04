import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
    { name: "Get a Quote", path: "/quote" },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3 md:py-4">
        {/* Logo */}
        <h1 className="text-xl sm:text-2xl font-bold text-blue-600 tracking-wide">
          Insure<span className="text-gray-900">American</span>
        </h1>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-6 lg:space-x-10 text-gray-700 font-medium items-center ">
          {navLinks.map((link) => (
            <li key={link.name} className="group relative">
              <a
                href={link.path}
                className="relative hover:text-blue-600 transition duration-300"
              >
                {link.name}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <div className="flex justify-center pb-6">
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-linear-to-r from-blue-600 to-blue-800 text-white font-semibold px-6 py-3 rounded-4xl transition-all duration-500 ease-in-out hover:from-blue-700 hover:to-blue-900 hover:scale-105 hover:shadow-lg hover:shadow-blue-400/40"
          >
            CALL US TODAY!
          </button>
        </div>
        {/* Mobile Menu Icon */}
        <div
          className="md:hidden text-2xl text-gray-700 cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          {open ? <FiX /> : <FiMenu />}
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white shadow-md border-t border-gray-200 animate-slideDown">
          <ul className="flex flex-col text-left ml-4 space-y-4 py-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.path}
                  onClick={() => setOpen(false)}
                  className="block text-gray-700 hover:text-blue-600 transition"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-xl p-10 text-center max-w-md w-full mx-4 relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl"
            >
              ✖
            </button>

            <div className="flex flex-col items-center space-y-4">
              <div className="bg-blue-100 text-blue-700 p-4 rounded-full">
                📞
              </div>
              <h2 className="text-3xl font-bold text-blue-900">
                Give Us A Call
              </h2>
              <p className="text-2xl font-semibold text-blue-800">
                (888) 510-7488
              </p>
              <p className="text-gray-700">
                We're Here To Assist You With All Your Health Insurance Needs!
              </p>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
