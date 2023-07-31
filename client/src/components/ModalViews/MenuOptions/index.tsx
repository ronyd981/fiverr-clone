import { Link } from "react-router-dom";

import { removePreventScroll } from "@/utils";

interface IProps {
  changeModal: (modal: string | null) => void;
}

const MenuOptions = ({ changeModal }: IProps) => {
  return (
    <div className="w-[270px] h-screen flex flex-col gap-8 p-7 bg-white">
      <button
        className={`
        max-w-max h-10 px-4 bg-primaryGreen text-white text-center text-lg rounded-sm
        `}
        type="submit"
        onClick={() => changeModal("register")}
      >
        Join Fiverr
      </button>
      <div className="flex flex-col gap-3">
        <span
          className="text-lg text-primaryText"
          onClick={() => changeModal("login")}
        >
          Sign in
        </span>
        <span className="text-lg text-primaryText">Browse categories</span>
        <span className="text-lg text-primaryText">Explore</span>
        <span className="text-lg text-primaryGreen font-bold">
          Fiverr Business
        </span>
      </div>
      <div className="flex flex-col gap-3 mt-4">
        <span className="text-base text-primaryText pb-2 border-b border-gray-300">
          General
        </span>
        <Link
          to={"/"}
          className="text-lg text-primaryText"
          onClick={() => {
            removePreventScroll();
            changeModal(null);
          }}
        >
          Home
        </Link>
        <span className="text-lg text-primaryText">Open in App</span>
      </div>
    </div>
  );
};

export default MenuOptions;
