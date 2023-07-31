// Assets
import BannerImage from "@/assets/home/Banner.webp";

const Banner = () => {
  return (
    <div
      className="
      w-full mb-28
      "
    >
      <div
        className="
        w-[90%] relative mx-auto bg-[#45091b] rounded-sm px-8 py-16
        lg:w-[95%] lg:h-[380px] lg:p-0
        2xl:w-[1400px]
      "
      >
        <div
          className="
          w-full h-full hidden
          lg:block lg:absolute
        "
        >
          <figure className="w-full h-full">
            <img
              src={BannerImage}
              className="w-full h-full object-cover"
              alt="The talent you need"
              loading="lazy"
            />
          </figure>
        </div>
        <div
          className="
          w-full h-full flex flex-col gap-4 px-8 relative z-10 text-white
          lg:pl-16 lg:justify-center
        "
        >
          <h2
            className="
            text-[32px] font-bold
            md:text-[40px]
          "
          >
            <span>
              Suddenly it's all so <i className="font-normal">doable.</i>
            </span>
          </h2>
          <button className="max-w-max bg-primaryGreen font-bold py-1.5 px-6 rounded-sm hover:brightness-95 mt-6">
            Join Fiverr
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
