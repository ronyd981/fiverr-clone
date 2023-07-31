import { DATA } from "./data";

const Guides = () => {
  return (
    <div
      className="
      w-[90%] flex flex-col gap-6 mx-auto my-28
      lg:w-[95%]
      2xl:w-[1400px]
      "
    >
      <h2
        className="
        text-3xl text-primaryTitle font-bold
      "
      >
        Inspiring work made on Fiverr
      </h2>
      <div
        className="
        w-full grid grid-cols-1 gap-6
        sm:grid-cols-2
        lg:grid-cols-3
      "
      >
        {DATA.map((info) => (
          <div className="w-full flex flex-col gap-3" key={info.id}>
            <figure className="w-full h-52 bg-gray-200 rounded-sm">
              <img
                src={info.image}
                className="w-full h-full object-cover rounded-sm hover:opacity-90 transition duration-200"
                alt={info.alt}
                loading="lazy"
              />
            </figure>
            <div className="w-full flex flex-col gap-1.5">
              <h4
                className="
                text-primaryTitle font-bold
                sm:text-lg
              "
              >
                {info.title}
              </h4>
              <p className="text-primaryText">{info.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Guides;
