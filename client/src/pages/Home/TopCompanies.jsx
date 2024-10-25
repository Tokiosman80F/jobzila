import Heading from "../../utilities/Heading";
import TopCompaniesSlider from "./TopCompaniesSlider";

const TopCompanies = () => {
  return (
    <div className="bg-[#002760] py-10 text-white">
      {/* Heading Section */}
      <div className="container mx-auto text-center mb-10">
        <Heading
          subHeading="Top Companies"
          mainHeading="Connect with Leading Companies"
          textAlign="center"
        />
      </div>

      {/* White Background Section */}
      <div className="container px-32">
        <div className="bg-white text-black py-10 px-5 md:px-20 rounded-3xl container mx-auto shadow-lg">
          {/* Company Slider */}
          <TopCompaniesSlider />

          {/* Divider */}
          <hr className="my-10 border-gray-500" />

          {/* Statistics Section */}
          <div className="flex flex-col md:flex-row justify-center items-center text-center gap-10">
            <div className="flex flex-col items-center">
              <h2 className="text-blue-500  text-5xl  font-bold">
                5<span className="text-4xl font-semibold">M+</span>
              </h2>
              <p className="text-gray-700 text-lg">
                Million daily active users
              </p>
            </div>
            <div className="flex flex-col items-center">
              <h2 className="text-blue-500 text-5xl  font-bold">
                9<span className="text-4xl font-semibold">k+</span>
              </h2>
              <p className="text-gray-700 text-lg">Open job positions</p>
            </div>
            <div className="flex flex-col items-center">
              <h2 className="text-blue-500 text-5xl font-bold">
                2<span className="text-4xl font-semibold">M+</span>
              </h2>
              <p className="text-gray-700 text-lg">Million stories shared</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopCompanies;
