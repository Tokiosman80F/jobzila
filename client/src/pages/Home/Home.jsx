import HeroBanner from "./HeroBanner";
import JobOfTheDay from "./JobOfTheDay";
import ProfileBuilder from "./ProfileBuilder";
import RecommandedJobs from "./RecommandedJobs";
import TopCompanies from "./TopCompanies";

const Home = () => {
  return (
    <>
      <HeroBanner></HeroBanner>
      <RecommandedJobs />
      <JobOfTheDay />
      <TopCompanies />
      <ProfileBuilder />
    </>
  );
};
export default Home;
