import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
//@ts-ignore
import Slider from "react-slick";
import { Link } from "react-router-dom";

import { CARDS_DATA } from "./data";

const ServicesCard = () => {
  const [sliderRef, setSliderRef] = useState(null);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 1240,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
        },
      },
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
      w-[85%] flex flex-col gap-6 mx-auto py-16 relative
      lg:w-[95%]
      2xl:w-[1400px]
      "
    >
      <h2
        className="
        text-3xl text-primaryTitle font-bold
      "
      >
        Popular services
      </h2>
      <Slider {...settings} ref={setSliderRef}>
        {CARDS_DATA.map((info) => (
          <Link to={info.path} key={info.id}>
            <div
              className={`
              w-full h-80 flex shrink-0
              `}
              key={info.id}
            >
              <div
                className="
                w-full h-80 overflow-hidden rounded-md bg-gray-200
              "
                key={info.id}
              >
                <figure className="w-full h-full rounded-md">
                  <img
                    src={info.image}
                    className="w-full h-full object-cover"
                    alt={info.description}
                    loading="lazy"
                  />
                </figure>
                <div className="w-full h-full flex flex-col ga-2 relative bottom-[100%] p-4 text-white cursor-pointer hover:bg-[#ffffff20] rounded-md transition duration-200">
                  <span className="text-sm">{info.description}</span>
                  <p className="text-2xl">{info.title}</p>
                </div>
              </div>
            </div>
          </Link>
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
  );
};

export default ServicesCard;
