import { AiOutlineCheckCircle } from "react-icons/ai";

// Assets
import VideoImage from "@/assets/home/Video.webp";

import { TIPS_DATA } from "./data";

const Tips = () => {
  return (
    <div
      className="
      w-full bg-[#f1fdf7] py-16
      "
    >
      <section
        className="
        w-[90%] flex flex-col gap-12 mx-auto
        lg:w-[95%] lg:flex-row
        2xl:w-[1400px]
      "
      >
        <div
          className="
          w-full flex flex-col gap-8
          md:pr-16 md:pl-2
          lg:w-1/2
        "
        >
          <h3
            className="
            text-[28px] text-primaryTitle font-bold
            md:text-3xl
          "
          >
            The best part? Everything.
          </h3>
          <div
            className="
            w-full flex flex-col gap-5
          "
          >
            {TIPS_DATA.map((info) => (
              <div className="flex flex-col gap-2" key={info.id}>
                <div className="flex items-center gap-2">
                  <AiOutlineCheckCircle className="text-2xl text-primaryText font-bold" />
                  <p className="text-lg text-primaryTitle font-bold leading-tight">
                    {info.title}
                  </p>
                </div>
                <p className="text-primaryText text-lg">{info.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div
          className="
          w-full flex justify-center items-center p-4
          lg:w-1/2
        "
        >
          <figure className="w-full h-auto">
            <img
              src={VideoImage}
              className="w-full h-full object-cover aspect-video"
              alt="Video"
              loading="lazy"
            />
          </figure>
        </div>
      </section>
    </div>
  );
};

export default Tips;
