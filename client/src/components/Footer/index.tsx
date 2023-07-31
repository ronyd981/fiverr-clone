import { AiOutlineTwitter, AiFillLinkedin } from "react-icons/ai";
import { BsFacebook, BsPinterest, BsInstagram } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";

import "./styles.css";

import { Categories, Data } from "./data";

const Footer = () => {
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
            <ul className="flex flex-col gap-2.5">
              <li className="mb-1">
                {/* <input type="checkbox" id={`check${data.id}`} /> */}
                <label
                  className={`
                  w-full flex items-center justify-between gap-2 cursor-pointer
                  sm:cursor-auto
                `}
                  htmlFor={`check${data.id}`}
                >
                  <h6 className="text-primaryTitle font-bold">{data.title}</h6>
                  <IoIosArrowDown
                    className={`
                    text-xl text-gray-500
                    sm:hidden
                  `}
                  />
                </label>
              </li>
              {data.list.map((value, index) => (
                <li className="text-primaryText" key={index}>
                  {value}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
    // <div
    //   className="
    //   w-[90%] flex flex-col gap-6 mx-auto py-16 relative border-t
    //   sm:grid-cols-3
    //   md:grid-cols-5
    //   lg:w-[95%]
    //   2xl:w-[1400px]
    //   "
    // >
    //   <div className="flex flex-col gap-2.5">
    //     <label
    //       className={`
    //         w-full flex items-center justify-between gap-2 cursor-pointer test
    //       `}
    //       htmlFor="check"
    //     >
    //       <h6 className="text-primaryTitle font-bold">Titulo</h6>
    //       <IoIosArrowDown
    //         className={`
    //           text-xl text-gray-500 arrow
    //         `}
    //       />
    //     </label>
    //     <input type="checkbox" className="hidden" id="check" />
    //     <div className="wrapper">
    //       <ul className="expandable">
    //         Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
    //         distinctio cupiditate ab nobis, nesciunt maiores. Saepe beatae illum
    //         nam perspiciatis explicabo, quos earum eligendi, hic tenetur maiores
    //         exercitationem doloribus. Accusantium. Lorem ipsum dolor sit amet
    //         consectetur adipisicing elit. Iure distinctio cupiditate ab nobis,
    //         nesciunt maiores. Saepe beatae illum nam perspiciatis explicabo,
    //         quos earum eligendi, hic tenetur maiores exercitationem doloribus.
    //         Accusantium. Lorem ipsum dolor sit amet consectetur adipisicing
    //         elit. Iure distinctio cupiditate ab nobis, nesciunt maiores. Saepe
    //         beatae illum nam perspiciatis explicabo, quos earum eligendi, hic
    //         tenetur maiores exercitationem doloribus. Accusantium.
    //         <li className="text-primaryText">lorem 1</li>
    //         <li className="text-primaryText">lorem 1</li>
    //         <li className="text-primaryText">lorem 1</li>
    //         <li className="text-primaryText">lorem 1</li>
    //       </ul>
    //     </div>
    //   </div>
    //   <p>Ahora otra cosa</p>
    // </div>
  );
};

export default Footer;
