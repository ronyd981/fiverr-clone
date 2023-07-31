import { MutableRefObject } from "react";
import { IoIosArrowDown } from "react-icons/io";

interface IProps {
  minRef: MutableRefObject<HTMLInputElement | null>;
  maxRef: MutableRefObject<HTMLInputElement | null>;
  onSubmitMinAndMax: () => void;
  sort: string;
  reSort: (type: string) => void;
}

const Filters = ({
  minRef,
  maxRef,
  onSubmitMinAndMax,
  sort,
  reSort,
}: IProps) => {
  return (
    <div
      className="
      w-[85%] flex items-start flex-col gap-4 mx-auto mt-5 mb-8 relative
      lg:w-[95%] lg:flex-row lg:justify-between
      2xl:w-[1400px]
    "
    >
      <div className="flex items-center gap-4 flex-wrap">
        <span className="text-sm text-primaryText">Budget</span>
        <input
          type="number"
          className="w-24 h-6 pl-2 rounded-sm outline-none border focus:border-blue-500"
          name=""
          placeholder="Min"
          ref={minRef}
        />
        <input
          type="number"
          className="w-24 h-6 pl-2 rounded-sm outline-none border focus:border-blue-500"
          name=""
          placeholder="Max"
          ref={maxRef}
        />
        <button
          className="px-2 h-6 rounded-md bg-primaryGreen text-white text-sm"
          onClick={onSubmitMinAndMax}
        >
          Apply
        </button>
      </div>
      <div
        className="w-28 h-6 flex items-center gap-4 relative group"
        tabIndex={1}
      >
        <div className="w-full h-full flex justify-between items-center gap-2 cursor-pointer">
          <span className="text-primaryTitle text-sm">
            {sort === "sales" ? "Best Selling" : "Newest"}
          </span>
          <IoIosArrowDown className="text-primaryTitle" />
        </div>
        <div
          className="hidden group-focus-within:block absolute z-30 top-0 right-0 w-full h-full cursor-pointer"
          onClick={(e) => {
            //@ts-ignore
            document.activeElement?.blur();
          }}
        ></div>
        <div className="hidden group-focus-within:flex flex-col gap-2 p-4 absolute z-20 right-0 top-8 bg-white w-32 rounded-md border border-[#00000020]">
          <span
            className="text-sm text-primaryTitle cursor-pointer"
            onClick={(e) => {
              reSort("createdAt");
              //@ts-ignore
              document.activeElement?.blur();
            }}
          >
            Newest
          </span>
          <span
            className="text-sm text-primaryTitle cursor-pointer"
            onClick={() => {
              reSort("sales");
              //@ts-ignore
              document.activeElement?.blur();
            }}
          >
            Best Selling
          </span>
          {/* <span
            className="text-sm text-primaryTitle cursor-pointer"
            onClick={() => reSort("sales")}
          >
            Popular
          </span> */}
        </div>
      </div>
    </div>
  );
};

export default Filters;
