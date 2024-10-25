import HeroBanner from "./HeroBanner";
import JobOfTheDay from "./JobOfTheDay";
import RecommandedJobs from "./RecommandedJobs";
import TopCompanies from "./TopCompanies";

const Home = () => {
  return (
    <>
      <HeroBanner></HeroBanner>
      <RecommandedJobs/>
      <JobOfTheDay/>
      <TopCompanies/>
    </>
  );
};
export default Home;
