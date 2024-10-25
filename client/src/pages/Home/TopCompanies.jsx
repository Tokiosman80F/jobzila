import Heading from "../../utilities/Heading";
import TopCompaniesSlider from "./TopCompaniesSlider";
// import CompanySlider from "./CompanySlider"; // Assuming you will create this slider component

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
      <div className="bg-white text-black py-10 px-5 rounded-lg container mx-auto shadow-lg">
        
        {/* Company Slider */}
        <TopCompaniesSlider/>
        {/* Divider */}
        <hr className="my-8" />

        {/* Statistics Section */}
        <div className="flex flex-col md:flex-row justify-around items-center text-center gap-5">
          <div>
            <h2 className="text-blue-500 text-3xl font-bold">5M+</h2>
            <p className="text-gray-700 text-lg">Million daily active users</p>
          </div>
          <div>
            <h2 className="text-blue-500 text-3xl font-bold">9K+</h2>
            <p className="text-gray-700 text-lg">Open job positions</p>
          </div>
          <div>
            <h2 className="text-blue-500 text-3xl font-bold">2M+</h2>
            <p className="text-gray-700 text-lg">Million stories shared</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopCompanies;
