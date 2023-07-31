import { Dispatch, SetStateAction, useRef } from "react";
import { AiOutlineClose } from "react-icons/ai";

interface IProps {
  features: Array<string>;
  setFeatures: Dispatch<SetStateAction<Array<string>>>;
}

const Features = ({ features, setFeatures }: IProps) => {
  const inputRef = useRef<null | HTMLInputElement>(null);

  const handleFeature = () => {
    if (inputRef.current) {
      if (inputRef.current.value !== "") {
        let inputValue = inputRef.current.value;
        let featureToFind = features.find((value) => value === inputValue);
        if (featureToFind) return;

        setFeatures((prevResults) => [...prevResults, inputValue]);
        //@ts-ignore
        inputRef.current.value = "";
      }
    }
  };

  const removeItem = (feature: string) => {
    let newArr = features.filter((feat) => feat !== feature);

    setFeatures(newArr);
  };

  return (
    <div className="w-full flex flex-col gap-3">
      <label htmlFor="" className="text-primaryTitle">
        Add Features
      </label>
      <div className="w-full h-10 flex items-center gap-1">
        <input
          type="text"
          className="w-full h-10 px-2 rounded-sm outline-none border focus:border-blue-400"
          placeholder="eg: Web design"
          ref={inputRef}
        />
        <button
          className="w-16 h-full rounded-sm text-white text-sm bg-primaryGreen"
          onClick={handleFeature}
          type="button"
        >
          Add
        </button>
      </div>
      <div className="flex gap-3 flex-wrap">
        {features &&
          features.length > 0 &&
          features.map((value, index) => (
            <div
              className="max-w-max h-10 flex items-center p-4 rounded-sm border relative"
              key={index}
            >
              <span className="text-sm text-primaryText">{value}</span>
              <div
                className="w-4 h-4 flex items-center justify-center absolute -top-2 -right-2 bg-red-500 rounded-full cursor-pointer"
                onClick={() => removeItem(value)}
              >
                <AiOutlineClose className="text-xs text-white" />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Features;
