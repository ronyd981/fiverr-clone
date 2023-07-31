import { Link } from "react-router-dom";
import { BsHouse } from "react-icons/bs";
import { AiFillPlayCircle } from "react-icons/ai";

const TitleAndInfo = () => {
  return (
    <div
      className="
      w-[85%] flex flex-col gap-4 mx-auto mt-10 relative
      lg:w-[95%]
      2xl:w-[1400px]
    "
    >
      <div className="w-full flex gap-4">
        <Link to="/">
          <div className="p-1 rounded-full hover:bg-gray-200">
            <BsHouse className="text-sm" />
          </div>
        </Link>
        <span className="text-primaryText text-sm">/</span>
        <h6 className="text-sm text-primaryTitle hover:border-b hover:border-black cursor-pointer">
          Graphic & Design
        </h6>
        <span className="text-primaryText text-sm">/</span>
        <h6 className="text-sm text-primaryTitle hover:border-b hover:border-black cursor-pointer">
          Book Design
        </h6>
      </div>
      <h1 className="text-3xl text-primaryTitle font-bold">
        Book Cover Design
      </h1>
      <div className="flex gap-4 flex-wrap">
        <p className="text-primaryText">
          Capture your readers' attention with a stunning book cover design
        </p>
        <span className="text-sm text-primaryText">|</span>
        <div className="flex items-center gap-1">
          <AiFillPlayCircle />
          <span>How Fiverr Works</span>
        </div>
      </div>
    </div>
  );
};

export default TitleAndInfo;
