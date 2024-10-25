import { FaBell } from "react-icons/fa";
import image from "../../assets/images/profile-builder.png";
import Heading from "../../utilities/Heading";

const ProfileBuilder = () => {
  return (
    <div className="container mx-auto px-36 my-32">
      <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg p-5 items-center">
        {/* Left Side */}
        <div className="flex-1 md:mr-5">
          <Heading
            subHeading="How to get your job"
            mainHeading="Build Your Personal Account Profile"
            textAlign="left"
          />
          <p className="text-gray-700 my-10">
            Create an account for job information that you wanted, get
            notification everyday and you can easily apply directly to the
            company you want create and account now for free.
          </p>

          <div className="flex justify-start items-center gap-10">
            <button className="primary-btn">Edit Profile</button>
            <div className=" bg-blue-500 text-white px-3 py-3 rounded-full">
              <FaBell size={30} />
            </div>
            <div className="bg-secondary-color ">
              <h3 className="font-bold">New Interview</h3>
              <p className="text-sm">You have a new interview today</p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex-1 mt-5 md:mt-0">
          <img
            src={image}
            alt="Profile Illustration"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileBuilder;
