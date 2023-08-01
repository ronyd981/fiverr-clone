import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

import { Data } from "./data";

const Footer = () => {
  const [selected, setSelected] = useState<number | null>(null);

  const onListSelectet = (id: number) => {
    if (screen.width > 640) return setSelected(null);
    if (id === selected) return setSelected(null);

    setSelected(id);
  };

  return (
    <footer
      className="
      w-full py-16 relative border-t
    "
    >
      <div
        className="
        w-[90%] grid gap-6 mx-auto
        sm:grid-cols-3
        md:grid-cols-5
        lg:w-[95%]
        2xl:w-[1400px]
      "
      >
        {Data.map((data) => (
          <div className="w-full" key={data.id}>
            <ul
              className={`
              grid grid-rows-[0fr] gap-2.5 p-4 transition-[grid-template-rows_200ms] relative
              ${selected === data.id && "grid-rows-[1fr]"}
            `}
            >
              <li
                className="
                w-full h-8 flex items-center justify-between absolute cursor-pointer px-4
                sm:cursor-auto
                "
                onClick={() => onListSelectet(data.id)}
              >
                <h6 className="text-primaryTitle font-bold">{data.title}</h6>
                <IoIosArrowDown
                  className={`
                    text-xl text-gray-500
                    sm:hidden
                  `}
                />
              </li>
              <div
                className={`
                flex flex-col gap-2.5 overflow-hidden
                sm:overflow-visible sm:mt-6
                ${selected === data.id && "mt-6"}
              `}
              >
                {data.list.map((value, index) => (
                  <li className="text-primaryText" key={index}>
                    {value}
                  </li>
                ))}
              </div>
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
