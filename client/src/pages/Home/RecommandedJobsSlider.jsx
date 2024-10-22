import "swiper/css";
import "swiper/css/pagination";
import { FaCode } from "react-icons/fa";
import { ImAndroid } from "react-icons/im";
import { FaBookOpenReader, FaReact } from "react-icons/fa6";
import { FaDatabase } from "react-icons/fa";
import { FaWordpress } from "react-icons/fa";
import { FaWix } from "react-icons/fa";
import { FaNetworkWired } from "react-icons/fa6";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
{
  /* 
<FaBookOpenReadernReader /> 
<FaCode /> // fullstack
<ImAndroid /> //android
import { FaReact } from "react-icons/fa6"; // frontend
<FaDatabase/>
<FaWordpress/>
<FaxWix/>
<FaNetworkWired/>
*/
}
const RecommandedJobsSlider = () => {
  const jobData = [
    {
      id: 1,
      title: "Fullstack Development",
      icon: <FaCode size={32} />,
      jobsAvailable: 15,
    },
    {
      id: 2,
      title: "Android Development",
      icon: <ImAndroid size={32} />,
      jobsAvailable: 12,
    },
    {
      id: 3,
      title: "Frontend Development",
      icon: <FaReact size={32} />,
      jobsAvailable: 18,
    },
    {
      id: 4,
      title: "Database Management",
      icon: <FaDatabase size={32} />,
      jobsAvailable: 10,
    },
    {
      id: 5,
      title: "WordPress Development",
      icon: <FaWordpress size={32} />,
      jobsAvailable: 8,
    },
    {
      id: 6,
      title: "Wix Development",
      icon: <FaWix size={32} />,
      jobsAvailable: 7,
    },
    {
      id: 7,
      title: "Network Engineering",
      icon: <FaNetworkWired size={32} />,
      jobsAvailable: 9,
    },
    {
      id: 8,
      title: "Reader Services",
      icon: <FaBookOpenReader size={32} />,
      jobsAvailable: 5,
    },
  ];
  return (
    <div>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {jobData.map(job => (
          <SwiperSlide key={job.id}>
            <div className="flex flex-col px-20 py-15 border-2 justify-start">
                <div>{job.icon}</div>
                <div>{job.title}</div>
                <div>{job.jobsAvailable} jobs</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default RecommandedJobsSlider;
