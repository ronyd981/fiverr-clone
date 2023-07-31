import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ModalViewsContext, UserContext } from "@/context";
import { AiFillStar, AiOutlineUser } from "react-icons/ai";
import moment from "moment";

import { TUserType } from "@/types";
import { newRequest } from "@/utils";

interface IProps {
  userData: TUserType;
}

const AboutTheSeller = ({ userData }: IProps) => {
  const { user, token } = useContext(UserContext);
  const { changeModal } = useContext(ModalViewsContext);

  const navigate = useNavigate();

  const handleContact = async (sellerId: string) => {
    if (!token) return changeModal("login");

    const conversationId = sellerId + user?._id;

    try {
      const res = await newRequest.get(
        `/conversations/single/${conversationId}`
      );
      navigate(`/messages/${res.data[0].id}`);
    } catch (error) {
      //@ts-ignore
      if (error.response.status === 404) {
        const res = await newRequest.post(`/conversations`, {
          to: sellerId,
        });
        navigate(`/messages/${res.data.id}`);
      }
    }
  };

  return (
    <div className="w-full flex flex-col gap-4">
      <h5 className="text-xl text-primaryTitle font-bold">About the seller</h5>
      <div
        className="
        w-full flex flex-col items-center gap-4
        sm:flex-row
      "
      >
        <div className="w-28 h-28 rounded-full bg-gray-200">
          {userData?.image ? (
            <figure className="w-full h-full border rounded-full">
              <img
                src={userData?.image}
                className="w-full h-full rounded-full object-cover"
                alt={userData?.username}
              />
            </figure>
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gray-300 rounded-full">
              <AiOutlineUser className="text-primaryTitle text-4xl" />
            </div>
          )}
        </div>
        <div className="flex flex-col gap-1.5">
          <p className="font-bold text-primaryTitle">{userData.username}</p>
          <span className="text-primaryText">{userData.desc}</span>
          <div className="flex items-center gap-2">
            <AiFillStar className="text-xl text-yellow-400" />
            <AiFillStar className="text-xl text-yellow-400" />
            <AiFillStar className="text-xl text-yellow-400" />
            <AiFillStar className="text-xl text-yellow-400" />
            <AiFillStar className="text-xl text-yellow-400" />
          </div>
          {userData._id !== user?._id && (
            <button
              className="max-w-max mt-2 px-6 py-2 border border-[#afadad] text-primaryText rounded-md hover:bg-primaryText hover:text-white"
              onClick={() => handleContact(userData._id)}
            >
              Contact me
            </button>
          )}
        </div>
      </div>
      <div className="w-full flex flex-col gap-4 py-5 px-7 border">
        <div
          className="
          w-full flex flex-col gap-4 border-b pb-4
          sm:flex-row
        "
        >
          <div
            className="
            w-full flex flex-col gap-4
            sm:w-6/12
          "
          >
            <div className="flex flex-col gap-1">
              <p className="text-primaryText">From</p>
              <span className="text-primaryTitle font-bold">
                {userData.country}
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-primaryText">Avg. response time</p>
              <span className="text-primaryTitle font-bold">1 hours</span>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-primaryText">Languages</p>
              <span className="text-primaryTitle font-bold">English</span>
            </div>
          </div>
          <div
            className="
            w-full flex flex-col gap-4
            sm:w-6/12
          "
          >
            <div className="flex flex-col gap-1">
              <p className="text-primaryText">Member since</p>
              <span className="text-primaryTitle font-bold">
                {moment(userData?.createdAt).format("ll")}
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-primaryText">Last delivery</p>
              <span className="text-primaryTitle font-bold">
                about 21 hours
              </span>
            </div>
          </div>
        </div>
        <p className="text-primaryText">{userData.desc}</p>
      </div>
    </div>
  );
};

export default AboutTheSeller;
