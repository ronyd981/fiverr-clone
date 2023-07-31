import { IoIosArrowDown } from "react-icons/io";

interface IProps {
  title: string;
  placeholder?: string;
  handleChange: (category: ICat) => void;
  cat: ICat | null;
  catError: boolean;
}

interface ICat {
  name: string;
  cat: string;
}

const Options = ({
  title,
  placeholder,
  handleChange,
  cat,
  catError,
}: IProps) => {
  const CATEGORIES: Array<ICat> = [
    { name: "Design", cat: "design" },
    { name: "Programming Tec", cat: "programming_tec" },
    { name: "Music", cat: "music" },
    { name: "Video", cat: "video" },
    { name: "Ilustration", cat: "ilustration" },
    { name: "Data", cat: "data_entry" },
  ];

  return (
    <div className="w-full flex flex-col gap-1 group relative" tabIndex={3}>
      <label htmlFor="" className="text-primaryTitle">
        {title}
      </label>
      <div
        className={`
        w-full h-10 flex items-center justify-between rounded-sm px-2 outline-none border hover:bg-gray-100 cursor-pointer
        ${catError && "border-red-500"}
      `}
      >
        <span className="text-sm text-primaryText truncate">
          {cat ? cat.name : placeholder}
        </span>
        <IoIosArrowDown className="text-lg text-primaryText" />
      </div>
      <div
        className="hidden group-focus-within:block absolute z-30 rounded-sm top-7 right-0 w-full h-10 cursor-pointer"
        onClick={(e) => {
          //@ts-ignore
          document.activeElement?.blur();
        }}
      ></div>
      <div className="w-full h-32 flex-col gap-0.5 overflow-y-auto no-scrollbar hidden group-focus-within:flex absolute top-[70px] z-10 rounded-sm border bg-white">
        {CATEGORIES.map((info) => (
          <span
            className="text-sm text-primaryText p-3 cursor-pointer hover:bg-gray-100"
            key={info.cat}
            onClick={() => {
              handleChange(info);
              //@ts-ignore
              document.activeElement?.blur();
            }}
          >
            {info.name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Options;
