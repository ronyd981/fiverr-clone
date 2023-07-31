import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineCheck, AiOutlineClockCircle } from "react-icons/ai";
import { TfiReload } from "react-icons/tfi";

import { TGigType, TUserType } from "@/types";
import { ModalViewsContext, UserContext } from "@/context";

interface IProps {
  gigData: TGigType;
  userData: TUserType;
}

const GigInfo = ({ gigData, userData }: IProps) => {
  const { token, user } = useContext(UserContext);
  const { changeModal } = useContext(ModalViewsContext);

  const navigate = useNavigate();

  const redirectToPayment = () => {
    if (!token) return changeModal("login");

    navigate(`/payment/${gigData._id}`);
  };

  return (
    <section
      className="
      w-full flex flex-col gap-6 border p-4
      lg:w-[410px]
    "
    >
      <div className="w-full flex justify-between items-center gap-2">
        <h4
          className="text-lg text-primaryTitle font-bold truncate"
          title={gigData.shortTitle}
        >
          {gigData.shortTitle}
        </h4>
        <span className="text-primaryTitle font-bold">${gigData.price}</span>
      </div>
      <p className="text-sm text-primaryText line-clamp-3">
        {gigData.shortDesc}
      </p>
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center gap-2">
          <AiOutlineClockCircle className="text-primaryTitle text-lg" />
          <span className="text-sm text-primaryText">
            {gigData.deliveryTime} Delivery Days
          </span>
        </div>
        <div className="flex items-center gap-2">
          <TfiReload className="text-primaryTitle text-lg" />
          <span className="text-sm text-primaryText">
            {gigData.revisionNumber} Revisions
          </span>
        </div>
      </div>
      <div className="w-full flex flex-col gap-1">
        {gigData &&
          gigData.features &&
          gigData.features.length > 0 &&
          gigData.features.map((info, index) => (
            <div className="flex items-center gap-2" key={index}>
              <AiOutlineCheck className="text-lg text-primaryGreen" />
              <span className="text-primaryTitle text-sm">{info}</span>
            </div>
          ))}
      </div>
      {userData._id !== user?._id && (
        <button
          className="px-6 py-2 bg-primaryGreen text-white text-sm font-bold rounded-sm hover:brightness-95"
          onClick={redirectToPayment}
        >
          Continue
        </button>
      )}
    </section>
  );
};

export default GigInfo;
