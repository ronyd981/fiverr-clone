// Assets
import BannerDesktop from "@/assets/home/logo-maker-banner-desktop.webp";
import BannerMobile from "@/assets/home/logo-maker-banner-mobile.webp";
import BannerTablet from "@/assets/home/logo-maker-banner-tablet.webp";

const LogoMaker = () => {
  return (
    <div
      className="
      w-[90%] mx-auto bg-[#446EE7] mt-8 mb-24 relative
      md:w-[95%]
      lg:w-[95%] lg:h-[300px]
      2xl:w-[1400px]
      "
    >
      <div
        className="
        w-full h-full flex py-6 text-white absolute z-10
        lg:w-6/12
      "
      >
        <div
          className="
          w-full h-full flex flex-col gap-4 mx-8
          md:w-[400px]
          lg:ml-16 lg:justify-center
        "
        >
          <p className="font-bold text-3xl">
            fiverr <span className="font-light">logo maker.</span>
          </p>
          <h2 className="text-4xl">
            Make an incredible logo <span className="italic">in minutes</span>
          </h2>
          <p>Pre-designed by top talent. Just add your touch.</p>
          <button className="max-w-max bg-white text-[#446ee7] font-bold py-1.5 px-6 rounded-sm hover:brightness-95 mt-6">
            Try Fiverr Logo Maker
          </button>
        </div>
      </div>
      <div
        className="
        w-full relative pt-56
        sm:pt-12
        lg:w-6/12 lg:h-full lg:ml-auto lg:pt-0
      "
      >
        <picture className="w-full h-full">
          <source srcSet={BannerMobile} media="(max-width: 767px)" />
          <source srcSet={BannerTablet} media="(max-width: 1023px)" />
          <img
            src={BannerDesktop}
            className="w-full h-full object-cover"
            alt="fiverr logo maker"
            loading="lazy"
          />
        </picture>
      </div>
    </div>
  );
};

export default LogoMaker;
