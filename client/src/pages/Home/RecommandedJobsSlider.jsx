import "swiper/css";
import "swiper/css/pagination";
import { FaCode } from "react-icons/fa";
import { ImAndroid } from "react-icons/im";
import { FaBookOpenReader, FaReact } from "react-icons/fa6";
import { FaDatabase } from "react-icons/fa";
import { FaWordpress } from "react-icons/fa";
import { FaWix } from "react-icons/fa";
import { FaNetworkWired } from "react-icons/fa6";
// import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from 'swiper/modules';
const RecommandedJobsSlider = () => {
  const jobData = [
    {
      id: 1,
      title: "Fullstack",
      icon: <FaCode size={32}  />,
      jobsAvailable: 15,
    },
    {
      id: 2,
      title: "Android ",
      icon: <ImAndroid size={32} />,
      jobsAvailable: 12,
    },
    {
      id: 3,
      title: "Frontend ",
      icon: <FaReact size={32} />,
      jobsAvailable: 18,
    },
    {
      id: 4,
      title: "Database",
      icon: <FaDatabase size={32} />,
      jobsAvailable: 10,
    },
    {
      id: 5,
      title: "WordPress ",
      icon: <FaWordpress size={32} />,
      jobsAvailable: 8,
    },
    {
      id: 6,
      title: "Wix",
      icon: <FaWix size={32} />,
      jobsAvailable: 7,
    },
    {
      id: 7,
      title: "Network ",
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
    <div className="my-8">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        autoplay={{
          delay: 3000, // 3 seconds delay
          disableOnInteraction: false, // Keep autoplay running even after interaction
        }}
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
        modules={[Pagination,Autoplay]}
        className="mySwiper"
      >
        {jobData.map(job => (
          <SwiperSlide key={job.id}>
            <div className="bg-secondary-color  pt-5 pr-5 pb-4 pl-5 rounded ">
                <div className="flex flex-col gap-4 items-start justify-center">
                <div className="bg-primary-color text-white p-2 border rounded">{job.icon}</div>
                <div className="font-semibold">{job.title}</div>
                <div className="text-primary-color font-medium">{job.jobsAvailable} jobs</div>
                </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default RecommandedJobsSlider;
