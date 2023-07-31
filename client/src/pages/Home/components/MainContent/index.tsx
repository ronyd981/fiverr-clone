import { AiOutlineSearch } from "react-icons/ai";

// Components
import Carousel from "./Carousel";

const MainContent = () => {
  return (
    <div
      className="
      w-full h-[415px]
      md:h-[680px]
    "
    >
      <Carousel />
      <div
        className="
        w-full h-full relative bg-[#1A1B1D]
        md:bottom-[100%] md:bg-inherit
      "
      >
        <div
          className="
          w-[90%] h-full flex justify-center flex-col gap-4 mx-auto
          sm:w-[75%]
          md:w-[90%]
          lg:w-[95%]
          2xl:w-[1400px]
        "
        >
          <div
            className="
            w-full
            md:w-[500px]
          "
          >
            <h1 className="text-4xl leading-tight text-white font-bold">
              Find the right{" "}
              <span className="italic font-normal">freelance service,</span>{" "}
              right away
            </h1>
          </div>
          <div
            className="
              w-full h-10 flex
              md:w-[520px]
            "
          >
            <input
              type="text"
              className="
              w-[calc(100%-48px)] h-full outline-none rounded-md border text-sm px-2.5
              rounded-r-none border-r-none
            "
              placeholder="Search for any device..."
            />
            <div
              className="
              w-12 h-full flex items-center justify-center rounded-r-md bg-primaryGreen
            "
            >
              <AiOutlineSearch className="text-xl text-white" />
            </div>
          </div>
          <div
            className="
            hidden text-white
            md:flex items-center gap-2
          "
          >
            <p className="text-xs">Popular:</p>
            {["Website Design", "Wordpress", "Logo Design", "AI Services"].map(
              (value, index) => (
                <span
                  className="
                  text-xs border border-white rounded-full px-1.5 py-0.5 transition duration-200 hover:text-primaryText hover:bg-white cursor-pointer
                "
                  key={index}
                >
                  {value}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
