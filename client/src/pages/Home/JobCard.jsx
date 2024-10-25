import { FaClock, FaUser, FaBriefcase } from "react-icons/fa";

const JobCard = () => {
  return (
    <div className="border p-6 rounded-lg shadow-lg shadow-blue-200 bg-white max-w-md">
      {/* 1st Section: Job Rate */}
      <div className="text-sm font-semibold mb-4 text-right">
        <span className="text-blue-500 text-xl">$500</span>/hour
      </div>

      {/* 2nd Section: Company Info */}
      <div className="flex items-center mb-4">
        <img
          src="https://via.placeholder.com/40"
          alt="Company Logo"
          className="w-10 h-10 rounded-full"
        />
        <div className="ml-4">
          <p className="text-sm text-gray-500">New York, US</p>
          <p className="text-blue-500 font-semibold">Company Name</p>
        </div>
      </div>

      {/* 3rd Section: Job Title */}
      <h3 className="text-xl font-semibold mb-4">Software Engineer</h3>

      {/* 4th Section: Job Type & Posted Time */}
      <div className="flex items-center gap-4 mb-4">
        <div className="flex items-center">
          <FaBriefcase className="text-blue-500 mr-2" />
          <span className="text-gray-500">Full-time / Part-time</span>
        </div>
        <div className="flex items-center">
          <FaClock className="text-blue-500 mr-2" />
          <span className="text-gray-500">4 min ago</span>
        </div>
      </div>

      {/* 5th Section: Job Description */}
      <p className="text-gray-700 mb-4">
        We are looking for a skilled software engineer to join our team and help
        us build and improve our platform...
      </p>

      {/* 6th Section: Applicants & Apply Button */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <FaUser className="text-blue-500 mr-2" />
          <span className="text-gray-500">15 people applied</span>
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 transition">
          Apply Now
        </button>
      </div>

      {/* 7th Section: Skills */}
      <div className="flex gap-2 flex-wrap">
        <span className="bg-blue-100 text-blue-500 text-xs px-2 py-1 rounded">
          JavaScript
        </span>
        <span className="bg-blue-100 text-blue-500 text-xs px-2 py-1 rounded">
          React
        </span>
        <span className="bg-blue-100 text-blue-500 text-xs px-2 py-1 rounded">
          Node.js
        </span>
        <span className="bg-blue-100 text-blue-500 text-xs px-2 py-1 rounded">
          MongoDB
        </span>
      </div>
    </div>
  );
};

export default JobCard;
