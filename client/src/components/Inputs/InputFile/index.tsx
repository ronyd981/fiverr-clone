import { Dispatch, SetStateAction } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { CiImageOn } from "react-icons/ci";

interface IProps {
  inputError: null | string;
  handleChange: (e: Event) => void;
  file: null | File;
  setState: Dispatch<SetStateAction<null | File | FileList>>;
  placeholder: string;
  title: string;
  labelId: string;
  multiple?: boolean;
}

const InputFile = ({
  inputError,
  handleChange,
  file,
  setState,
  placeholder,
  title,
  labelId,
  multiple,
}: IProps) => {
  return (
    <div className="w-full flex flex-col gap-1 relative">
      <input
        type="file"
        className="hidden"
        id={labelId}
        //@ts-ignore
        onChange={handleChange}
        multiple={multiple && true}
      />
      <label htmlFor={labelId} className="text-primaryTitle">
        {title}
      </label>
      <label htmlFor={labelId} className="w-full h-12">
        <div
          className={`
          w-full h-full flex items-center gap-2 px-2 rounded-sm border cursor-pointer hover:bg-gray-100
          ${inputError && "border-red-500"}
        `}
        >
          <CiImageOn className="text-lg" />
          <span className="w-[calc(100%-26px)] text-sm text-primaryText truncate">
            {file ? file.name : placeholder}
          </span>
        </div>
      </label>
      <span
        className={`
        text-xs self-end
        ${inputError ? "text-red-500" : "text-blue-500"}
      `}
      >
        Files accepted ("jpeg", "jpg", "png", "webp")
      </span>
      {file && (
        <div
          className="w-6 h-6 flex items-center justify-center absolute top-4 -right-3 bg-red-500 rounded-full cursor-pointer"
          onClick={() => setState(null)}
        >
          <AiOutlineClose className="text-sm text-white" />
        </div>
      )}
    </div>
  );
};

export default InputFile;
