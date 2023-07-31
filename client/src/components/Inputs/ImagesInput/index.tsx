import { Dispatch, SetStateAction } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { CiImageOn } from "react-icons/ci";

interface IProps {
  inputError: null | string;
  handleChange: (e: Event) => void;
  files: null | FileList;
  setState: Dispatch<SetStateAction<null | FileList>>;
  placeholder: string;
  title: string;
  labelId: string;
}

const ImagesInput = ({
  inputError,
  handleChange,
  files,
  setState,
  placeholder,
  title,
  labelId,
}: IProps) => {
  return (
    <div className="w-full flex flex-col gap-1 relative">
      <input
        type="file"
        className="hidden"
        id={labelId}
        //@ts-ignore
        onChange={handleChange}
        multiple
        accept="image/jpeg, image/jpg, image/png, image/webp"
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
            {files && files.length > 0 ? (
              Array.from(files).map((file: File, index) => (
                <span className="text-sm text-primaryText" key={index}>
                  {files.length > 1 ? file.name + ", " : file.name}
                </span>
              ))
            ) : (
              <span className="text-sm text-primaryText">{placeholder}</span>
            )}
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
      {files && (
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

export default ImagesInput;
