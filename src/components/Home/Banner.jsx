import React, { useRef } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/skyblue";
import { BannerData } from "../../data/HomeData";

const Banner = () => {
  const mainRef = useRef(null);
  const thumbsRef = useRef(null);  

  return (
    <div className="gallery relative w-full aspect-video">
      {/* Content Section */}

      <div className="absolute z-50 left-6 top-1/2 transform -translate-y-1/2 text-white uppercase tracking-wide md:left-16 bg-transparent">

        <span className="block text-[clamp(1.5rem,1.3rem+0.5vw,2.25rem)] max-sm:text-md font-light mb-2" data-aos="fade-top" data-aos-duration="1500">
          every
        </span>
        <h1 className="text-[clamp(2.5rem,1.7rem+3vw,8rem)] font-normal max-sm:text-md mb-1" data-aos="fade-right" data-aos-duration="1500">
          picture
        </h1>
        {/* <p className="text-[clamp(1rem,1rem+0.5vw,1.7rem)] mt-[-5px] max-sm:text-md" data-aos="fade-bottom">
          tells a story
        </p> */}
        <hr className="block w-12 border-none h-0.5 bg-[#1aad8a] mt-4" />
      </div>

      <div className="w-full h-full bg-black opacity-[.4] absolute top-0 left-0 z-[9]"></div>

      {/* Main Slider */}
      <Splide
        ref={mainRef}
        options={{
          type: "fade",
          perPage: 1,
          pagination: false,
          arrows: false,
          autoplay: true,
          pauseOnHover: false,
          pauseOnFocus: false,
          rewind: true,
        }}
        sync={thumbsRef}  
        
      >
        {BannerData.map((item, index) => (
          <SplideSlide key={index}>
            <img
              src={item}
              alt="Man sitting on a stone on the lake"
              className="w-full h-full object-cover"
            />
          </SplideSlide>
        ))}
      </Splide>

      {/* Thumbnails */}
      <Splide
        className="absolute bottom-[10%] right-0 md:bottom-[40%] md:right-0 w-[120px] md:w-[230px] z-[999] bg-slate-200 md:p-2 p-1 rounded-l-md"
        
        options={{
          fixedWidth: 100,
          fixedHeight: 78,
          isNavigation: false,
          gap: 10,
          focus: "center",
          arrows: false,
          pagination: false,
          cover: true,
          breakpoints: {
            640: {
              fixedWidth: 66,
              fixedHeight: 40,
            },
            768: {
              fixedWidth: 80,
              fixedHeight: 48,
            },
            1024: {
              fixedWidth: 100,
              fixedHeight: 64,
            },
          },
        }}
      >
        {BannerData.map((item, index) => (
          <SplideSlide key={index}>
            <img
              src={item}
              alt="Man sitting on a stone on the lake"
              className="w-full h-full object-cover"
            />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default Banner;
