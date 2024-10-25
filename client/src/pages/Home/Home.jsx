import HeroBanner from "./HeroBanner";
import JobOfTheDay from "./JobOfTheDay";
import RecommandedJobs from "./RecommandedJobs";

const Home = () => {
  return (
    <>
      <HeroBanner></HeroBanner>
      <RecommandedJobs/>
      <JobOfTheDay/>
    </>
  );
};
export default Home;
