import { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
//@ts-ignore
import Slider from "react-slick";

import { TGigType, TUserType } from "@/types";

interface IProps {
  userData: TUserType;
  gigData: TGigType;
}

const MainContent = ({ userData, gigData }: IProps) => {
  const [sliderRef, setSliderRef] = useState(null);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <main className="flex flex-col gap-4">
      <h1 className="text-3xl font-bold text-primaryTitle">{gigData.title}</h1>
      <section className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-gray-200">
          {userData?.image ? (
            <figure className="w-full h-full border rounded-full">
              <img
                src={userData?.image}
                className="w-full h-full rounded-full object-cover"
                alt={userData?.username}
              />
            </figure>
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gray-300 rounded-full">
              <AiOutlineUser className="text-primaryTitle" />
            </div>
          )}
        </div>
        <h6 className="text-primaryTitle font-bold">{userData?.username}</h6>
      </section>
      <div className="w-full h-[410px] bg-gray-300 relative">
        {/* {gigData.images.length > 0 && (
          <Slider {...settings} ref={setSliderRef}>
            {gigData.images.map((image) => (
              <figure className="w-full h-[410px]" key={image}>
                <img
                  src={image}
                  className="w-full h-full object-cover"
                  alt={gigData.shortDesc}
                />
              </figure>
            ))}
          </Slider>
        )} */}
        {/* {gigData && gigData (
          <Slider {...settings} ref={setSliderRef}>
            {gigData.images.map((image) => (
              <figure className="w-full h-[410px]" key={image}>
                <img
                  src={image}
                  className="w-full h-full object-cover"
                  alt={gigData.shortDesc}
                />
              </figure>
            ))}
          </Slider>
        )} */}
        {gigData && gigData.images && (
          <Slider {...settings} ref={setSliderRef}>
            {gigData.images.map((image) => (
              <figure className="w-full h-[410px]" key={image}>
                <img
                  src={image}
                  className="w-full h-full object-cover"
                  alt={gigData.shortDesc}
                />
              </figure>
            ))}
          </Slider>
        )}
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
    </main>
  );
};

export default MainContent;
