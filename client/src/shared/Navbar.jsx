import { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "All Jobs", path: "/all-jobs" },
    { name: "My Posted Jobs", path: "/myposted-jobs" },
    { name: "Bid Requests", path: "/bid-requests" },
    { name: "My Bids", path: "/my-bids" },
    { name: "About Us", path: "/about-us" },
  ];

  // Handle scroll to change navbar background
  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 50; // Change this value as needed
      setIsScrolled(window.scrollY > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Helper function to handle active/inactive class assignment
  const getNavLinkClass = (isActive) =>
    isActive
      ? "text-blue-500 font-semibold"
      : "text-gray-800 hover:text-blue-500";

  return (
    <div className="w-full">
      <nav
        className={`fixed top-0 left-0 w-full z-10 transition-all duration-300 ease-in-out ${
          isScrolled ? "bg-white shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="w-full lg:px-36 md:px-0">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="text-2xl font-bold text-gray-800">
              <NavLink to="/">
                <img
                  src={logo}
                  alt="Logo"
                  className="w-32 h-12 sm:w-40 sm:h-14 md:w-48 md:h-16 lg:w-48 lg:h-16"
                />
              </NavLink>
            </div>

            {/* Navigation links in the middle - hidden on medium devices and below */}
            <div className="hidden lg:flex space-x-6">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    `${getNavLinkClass(isActive)} text-sm md:text-base lg:text-lg`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>

            {/* Sign In / Sign Up buttons */}
            <div className="hidden lg:flex space-x-4">
              <NavLink
                to="/signin"
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-md text-sm md:text-base lg:text-lg"
              >
                Sign In
              </NavLink>
              <NavLink
                to="/signup"
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm md:text-base lg:text-lg"
              >
                Sign Up
              </NavLink>
            </div>

            {/* Hamburger icon for mobile */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="focus:outline-none text-gray-800"
              >
                {isOpen ? <RxCross1 size={24} /> : <GiHamburgerMenu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Sidebar */}
          <div
            className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform ${
              isOpen ? "translate-x-0" : "-translate-x-full"
            } transition-transform duration-300 ease-in-out`}
          >
            <div className="flex flex-col items-start p-6 space-y-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)} // Close sidebar when link is clicked
                  className={({ isActive }) =>
                    `${getNavLinkClass(isActive)} text-sm md:text-base`
                  }
                >
                  {item.name}
                </NavLink>
              ))}

              {/* Sign In / Sign Up buttons */}
              <NavLink
                to="/signin"
                onClick={() => setIsOpen(false)}
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-md w-full text-left text-sm md:text-base"
              >
                Sign In
              </NavLink>
              <NavLink
                to="/signup"
                onClick={() => setIsOpen(false)}
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md w-full text-left text-sm md:text-base"
              >
                Sign Up
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
