import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
//@ts-ignore
import Slider from "react-slick";

import { CARDS_DATA } from "./data";

const Opinions = () => {
  const [sliderRef, setSliderRef] = useState(null);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div
      className="
      w-[85%] mx-auto relative py-16 bg-green-330
      lg:w-[95%]
      2xl:w-[1400px]
      "
    >
      <Slider {...settings} ref={setSliderRef}>
        {CARDS_DATA.map((info) => (
          <div className="w-full flex" key={info.id}>
            <div
              className="
              w-full h-full flex flex-col gap-6
              md:flex-row
              "
            >
              <div
                className="
                w-full flex
                md:w-[40%]
              "
              >
                <figure
                  className="
                  w-full h-full
                "
                >
                  <img
                    src={info.image}
                    className="w-full h-full object-cover"
                    alt={info.alt}
                    loading="lazy"
                  />
                </figure>
              </div>
              <div
                className="
                w-full flex flex-col gap-4
                md:w-[60%] md:px-6
              "
              >
                <h5 className="text-xl text-[#74767e]">{info.role}</h5>
                <blockquote>
                  <span
                    className="
                  text-darkGreen text-2xl italic font-medium tracking-wide leading-normal
                    xl:text-[30px]
                  "
                  >
                    {info.desc}
                  </span>
                </blockquote>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <div
        className="
        w-full h-0 flex items-center justify-between absolute top-[35%]
        md:top-[50%]
      "
      >
        <div className="w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-md cursor-pointer relative right-4">
          <IoIosArrowBack
            className="
            text-xl fill-current text-primaryText
          "
            //@ts-ignore
            onClick={sliderRef?.slickPrev}
          />
        </div>
        <div className="w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-md cursor-pointer relative left-4">
          <IoIosArrowForward
            className="
            text-xl fill-current text-primaryText
          "
            //@ts-ignore
            onClick={sliderRef?.slickNext}
          />
        </div>
      </div>
    </div>
  );
};

export default Opinions;
