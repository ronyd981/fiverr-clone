import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { AiOutlineUser } from "react-icons/ai";
//@ts-ignore
import Slider from "react-slick";

import { DATA } from "./data";

const InspiringWork = () => {
  const [sliderRef, setSliderRef] = useState(null);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1060,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div
      className="
      w-full bg-[#F5F5F5]
      "
    >
      <div
        className="
        w-[85%] flex flex-col gap-6 mx-auto py-24 relative
        lg:w-[95%]
        2xl:w-[1400px]
        "
      >
        <h2
          className="
          text-3xl text-primaryTitle font-bold
        "
        >
          Inspiring work made on Fiverr
        </h2>
        <Slider {...settings} ref={setSliderRef}>
          {DATA.map((info) => (
            <div
              className="w-full h-80 bg-white rounded-md shadow-sm border"
              key={info.id}
            >
              <figure className="w-full h-64">
                <img
                  src={info.image}
                  className="w-full h-full object-cover cursor-pointer hover:opacity-90 transition duration-200"
                  alt={info.title}
                  loading="lazy"
                />
              </figure>
              <div className="w-full h-16 flex items-center gap-2 px-4">
                <div className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-200">
                  <AiOutlineUser className="text-lg text-primaryText" />
                </div>
                <div className="h-9 flex justify-between flex-col">
                  <h4 className="text-primaryTitle text-sm font-medium">
                    {info.title}
                  </h4>
                  <span className="text-[#95979d] text-sm">by {info.by}</span>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <div className="w-full h-0 flex items-center justify-between absolute top-[55%]">
          <div
            className="w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-md cursor-pointer relative right-4"
            //@ts-ignore
            onClick={sliderRef?.slickPrev}
          >
            <IoIosArrowBack
              className="
            text-xl fill-current text-primaryText
          "
            />
          </div>
          <div
            className="w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-md cursor-pointer relative left-4"
            //@ts-ignore
            onClick={sliderRef?.slickNext}
          >
            <IoIosArrowForward
              className="
            text-xl fill-current text-primaryText
          "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InspiringWork;
