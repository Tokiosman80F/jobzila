import Heading from "../../utilities/Heading"
import JobCard from "./JobCard"

const JobOfTheDay=()=>{
    return (
        <div className="my-32">
            <div className="container mx-auto flex flex-col gap-10 items-center">
                <Heading  subHeading="Job of the day" mainHeading="Connect with the right candidates faster."  />
                <JobCard/>
                <button className="primary-btn">View All</button>
            </div>
        </div>
    )
}

export default JobOfTheDay