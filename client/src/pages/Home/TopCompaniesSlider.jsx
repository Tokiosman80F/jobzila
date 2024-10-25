import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// Import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Importing Images with descriptive names
import facebookLogo from "../../assets/images/company-fb-1.png"; 
import microsoftLogo from "../../assets/images/company-mz-2.png"; 
import googleLogo from "../../assets/images/company-ms-3.png"; 
import company4Logo from "../../assets/images/company-ch-4.png"; 
import company5Logo from "../../assets/images/company-py-5.png"; 
import company6Logo from "../../assets/images/company-hy-6.png"; 

const companyLogos = [
  { id: 1, src: facebookLogo, alt: "Facebook Logo" },
  { id: 2, src: microsoftLogo, alt: "Microsoft Logo" },
  { id: 3, src: googleLogo, alt: "Google Logo" },
  { id: 4, src: company4Logo, alt: "Company 4 Logo" },
  { id: 5, src: company5Logo, alt: "Company 5 Logo" },
  { id: 6, src: company6Logo, alt: "Company 6 Logo" },
];

const TopCompaniesSlider = () => {
  return (
    <>
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {companyLogos.map(logo => (
          <SwiperSlide key={logo.id}>
            {/* Use a div as a container for fixed size */}
            <div className="flex justify-center items-center w-full h-32"> {/* Set a height you prefer */}
              <img 
                src={logo.src} 
                alt={logo.alt} 
                className="object-contain w-full h-full" // Ensures the image fits within the defined dimensions
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default TopCompaniesSlider;
