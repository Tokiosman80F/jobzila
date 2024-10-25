import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import logo from "../assets/images/logo.png"; // Update this path to your logo file

const Footer = () => {
  return (
    <footer className="bg-secondary-color ">
      {/* Newsletter Section */}
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center mb-6">
        <h3 className="text-xl font-semibold">Join Our Newsletter</h3>
        <div className="mt-4 md:mt-0">
          <input
            type="email"
            placeholder="Enter your email"
            className="p-2 border border-gray-400 rounded-l-md focus:outline-none"
          />
          <button className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-r-md">
            Subscribe
          </button>
        </div>
      </div>

      {/* Horizontal line */}
      <hr className="my-6" />

      {/* Main Footer Content */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Column - Logo and Company Info */}
        <div className="space-y-4">
          <img src={logo} alt="Company Logo" className="w-32 h-auto" />
          <p className="text-gray-600">
            123 Business Street <br />
            Dhaka, Bangladesh <br />
            Phone: +880-123456789
          </p>
        </div>

        {/* Right Column - Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <h4 className="text-lg font-semibold mb-4">For Candidates</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/dashboard"
                  className="text-gray-600 hover:text-blue-500"
                >
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  href="/candidate"
                  className="text-gray-600 hover:text-blue-500"
                >
                  Candidate
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">For Employers</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/employer"
                  className="text-gray-600 hover:text-blue-500"
                >
                  Post a Job
                </a>
              </li>
              <li>
                <a href="/jobs" className="text-gray-600 hover:text-blue-500">
                  Manage Jobs
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Helpful Resources</h4>
            <ul className="space-y-2">
              <li>
                <a href="/help" className="text-gray-600 hover:text-blue-500">
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="/support"
                  className="text-gray-600 hover:text-blue-500"
                >
                  Support
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Horizontal line */}
      <hr className="my-6" />

      {/* Bottom Footer Section */}
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-600">
          © 2024 Your Company. All rights reserved.
        </p>
        <div className="flex space-x-4">
          <a
            href="https://facebook.com"
            className="text-gray-600 hover:text-blue-500"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="https://twitter.com"
            className="text-gray-600 hover:text-blue-500"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://linkedin.com"
            className="text-gray-600 hover:text-blue-500"
          >
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
