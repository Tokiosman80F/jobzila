import { Link } from "react-router-dom";
import Heading from "../../utilities/Heading";
import RecommandedJobsSlider from "./RecommandedJobsSlider";
import "./RecommandedJobsSlider.css"
const RecommandedJobs = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col justify-between items-start md:flex-row md:items-center ">
        <Heading
          subHeading="Jobs at a glance"
          mainHeading="Recommended Jobs"
          textAlign="left"
        />
        <Link
          to="/"
          className="bg-blue-500 hover:bg-blue-600 text-white p-4  rounded-md  text-left text-sm md:text-base"
        >
          View All Jobs
        </Link>
      </div>
      <RecommandedJobsSlider/>
    </div>
  );
};
export default RecommandedJobs;
