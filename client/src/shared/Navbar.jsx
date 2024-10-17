import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "All Jobs", path: "/all-jobs" },
    { name: "My Posted Jobs", path: "/myposted-jobs" },
    { name: "Bid Requests", path: "/bid-requests" },
    { name: "My Bids", path: "/my-bids" },
    { name: "About Us", path: "/about-us" },
  ];

  return (
    <div className=" container px-36 mx-auto">
      <nav className="bg-white shadow-lg ">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="text-2xl font-bold text-gray-800">
              <NavLink to="/">
                <img src={logo} alt="" className="w-48 h-16" />
              </NavLink>
            </div>

            {/* Navigation links in the middle */}
            <div className="hidden md:flex space-x-6">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-500 font-semibold"
                      : "text-gray-800 hover:text-blue-500"
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>

            {/* Sign In / Sign Up buttons */}
            <div className="hidden md:flex space-x-4">
              <NavLink
                to="/signin"
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-md"
              >
                Sign In
              </NavLink>
              <NavLink
                to="/signup"
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
              >
                Sign Up
              </NavLink>
            </div>

            {/* Hamburger icon for mobile */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="focus:outline-none text-gray-800"
              >
                {isOpen ? (
                  <RxCross1 size={24} />
                ) : (
                  <GiHamburgerMenu size={24} />
                )}
              </button>
            </div>
          </div>

          {/* Mobile sidebar (from the left) */}
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
                    isActive
                      ? "text-blue-500 font-semibold w-full text-left py-2"
                      : "text-gray-800 hover:text-blue-500 w-full text-left py-2"
                  }
                >
                  {item.name}
                </NavLink>
              ))}

              {/* Sign In / Sign Up buttons */}
              <NavLink
                to="/signin"
                onClick={() => setIsOpen(false)}
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-md w-full text-left"
              >
                Sign In
              </NavLink>
              <NavLink
                to="/signup"
                onClick={() => setIsOpen(false)}
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md w-full text-left"
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
