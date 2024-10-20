import React from "react";
import bannerImage from '../../assets/images/banner-bg.jpg';
import rightImage from "../../assets/images/banner.png";

const HeroBanner = () => {
  return (
    <div
      className="h-screen bg-cover bg-center flex items-center"
      style={{
        backgroundImage: `url(${bannerImage})`,
      }}
    >
      {/* Container for the banner content */}
      <div className="   mx-auto px-4 lg:px-36 min-w-full flex justify-between items-stretch flex-col lg:flex-row gap-5">
        
        {/* Left Part: Text and Form */}
        <div className=" lg:w-2/3 w-full   p-4  flex flex-col justify-center bg-opacity-75 min-h-full">
          {/* Primary text */}
          <h1 className="text-4xl md:text-5xl  lg:text-6xl font-medium mb-4">
            <span>Got Talent</span> <br />
            <span>Meet Opportunity</span>
          </h1>
          {/* Secondary text */}
          <p className="text-lg md:text-xl lg:text-4xl my-6">
            Over <span className="text-[#bc84ca]">100+</span> jobs are waiting for you
          </p>

          {/* Form */}
          <form className="flex flex-col md:flex-row gap-4 justify-between items-stretch bg-white p-4 rounded-md shadow-lg">
            {/* What Input */}
            <div className="flex flex-col">
              <label htmlFor="what" className="text-[#999999] font-semibold uppercase">
                What
              </label>
              <select name="what">
              <option value="">Job Title</option>
              <option value="Web Development">Web Development</option>
              <option value="Graphic Design">Graphic Design</option>
              <option value="Digital Marketing">Digital Marketing</option>
                </select>
            </div>

            {/* Type Input */}
            <div className="flex flex-col">
              <label htmlFor="type" className="text-[#999999] font-semibold uppercase">
                Type
              </label>
              <select name="type">
              <option value="">All Category</option>
              <option value="Web Development">Web Development</option>
              <option value="Graphic Design">Graphic Design</option>
              <option value="Digital Marketing">Digital Marketing</option>
                </select>
            </div>

            {/* Location Input */}
            <div className="flex flex-col">
              <label htmlFor="location" className="text-[#999999] font-semibold uppercase">
                Location
              </label>
              <select name="location">
              <option value="">Location</option>
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
                </select>
            </div>

            {/* Find Button */}
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-md mt-4 md:mt-0 md:ml-4 hover:bg-blue-700 transition-colors"
            >
              Find Job
            </button>
          </form>
        </div>

        {/* Right Part: Image */}
        <div className=" lg:w-1/2 w-full flex justify-center lg:justify-end items-center lg:items-stretch">
          <img
            src={rightImage}
            alt="Right banner image"
            className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl object-cover animation-updown"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
