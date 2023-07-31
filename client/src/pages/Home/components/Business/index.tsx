import { AiOutlineCheckCircle } from "react-icons/ai";

// Assets
import VideoConferenceImage from "@/assets/home/Conversation.webp";

const Business = () => {
  return (
    <div
      className="
      w-full bg-[#0D084D] py-24
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
          w-full flex flex-col gap-8 text-white
          md:pr-16 md:pl-2
          lg:w-1/2
        "
        >
          <div className="w-full flex items-start gap-2">
            <span className="text-2xl">
              <span className="font-bold">fiverr</span> business.
            </span>
            <span className="bg-[#5647f7] py-1 px-2 rounded-full text-xs uppercase">
              new
            </span>
          </div>
          <h3
            className="
            text-[28px] font-bold
            md:text-3xl
          "
          >
            A solution built for{" "}
            <span className="italic font-normal">business</span>
          </h3>
          <div
            className="
            w-full
            lg:w-[450px]
          "
          >
            <p className="text-lg">
              Upgrade to a curated experience to access vetted talent and
              exclusive tools
            </p>
          </div>
          <div className="w-full flex flex-col gap-2">
            {[
              "Talent matching",
              "Dedicated account management",
              "Team collaboration tools",
              "Business payment solutions",
            ].map((value, index) => (
              <div className="flex items-center gap-2" key={index}>
                <AiOutlineCheckCircle className="text-2xl text-primaryText font-bold" />
                <p className="text-lg leading-tight">{value}</p>
              </div>
            ))}
          </div>
          <button className="max-w-max bg-primaryGreen font-bold py-1.5 px-6 rounded-md hover:brightness-95 mt-6">
            Explore Fiverr Business
          </button>
        </div>
        <div
          className="
          w-full flex p-4
          lg:w-1/2
        "
        >
          <figure className="w-full h-auto">
            <img
              src={VideoConferenceImage}
              className="w-full h-full object-contain aspect-video"
              alt="Videoconference"
              loading="lazy"
            />
          </figure>
        </div>
      </section>
    </div>
  );
};

export default Business;
