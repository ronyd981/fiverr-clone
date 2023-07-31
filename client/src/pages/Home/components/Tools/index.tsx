import { DATA } from "./data";

const Tools = () => {
  return (
    <div
      className="
      w-[90%] mx-auto py-24
      lg:w-[95%]
      2xl:w-[1400px]
      "
    >
      <h4 className="text-3xl text-primaryTitle font-bold mb-10">
        You need it, we've got it
      </h4>
      <div
        className="
        w-full grid grid-cols-2 gap-14
        md:grid-cols-3
        lg:grid-cols-5
      "
      >
        {DATA.map((info) => (
          <div
            className="w-full flex items-center justify-center flex-col gap-1"
            key={info.id}
          >
            <figure className="w-10 h-10">
              <img
                src={info.image}
                className="w-full h-full"
                alt={info.title}
                loading="lazy"
              />
            </figure>
            <span className="w-4 h-0.5 bg-primaryGreen"></span>
            <p className="text-[#222325] text-center">{info.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tools;
